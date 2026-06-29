"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.05] px-8 py-14 text-center">
        <p className="text-base font-medium text-white">
          Thanks, I&apos;ll get back to you shortly.
        </p>
        <p className="mt-2 text-sm text-body">I read every message myself.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot: positioned off-screen so humans never see it; bots tend to
          fill every field. If it has a value, the server silently drops it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-body">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-body">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-body">
          Your phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="For a callback"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-body">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build, or hiring for?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage} Please email me directly at{" "}
          <a
            href="mailto:karolistamas@gmail.com"
            className="font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            karolistamas@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
