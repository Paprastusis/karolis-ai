import { NextRequest, NextResponse } from "next/server";

// Sends contact-form submissions via the Resend REST API. No SDK dependency is
// needed; the API key never leaves the server.
//
// Karolis: add RESEND_API_KEY in Vercel → Project → Settings → Environment
// Variables. FROM_EMAIL must be on a domain verified in Resend (karolis.ai is
// the natural choice). Until the key is set, the form shows a friendly error
// and the page still offers the email/phone fallbacks.
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TO_EMAIL = "karolistamas@gmail.com";
const FROM_EMAIL = "karolis.ai contact <contact@karolis.ai>";

// Basic in-memory rate limit. It resets on cold start, which is acceptable for
// a simple contact form; the honeypot is the primary spam guard.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Evict IPs whose entries have all expired so the map can't grow unbounded.
  if (recentByIp.size > 500) {
    for (const [key, times] of recentByIp) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        recentByIp.delete(key);
      }
    }
  }
  const recent = (recentByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  recentByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages in a short time. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company_website ?? "").trim();

  // Honeypot tripped: looks like a bot. Pretend success and silently drop it.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; cannot send the contact email.");
    return NextResponse.json(
      { error: "Messaging isn't set up yet." },
      { status: 503 }
    );
  }

  const subject = `New message from ${name} via karolis.ai`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    "",
    message,
  ].join("\n");
  const htmlBody = `
    <h2>New message via karolis.ai</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "(not provided)")}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your message." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend request error:", err);
    return NextResponse.json(
      { error: "Could not send your message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
