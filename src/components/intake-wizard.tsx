"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChartBar,
  CheckCircle2,
  FileText,
  Mail,
  Receipt,
  Sparkles,
} from "lucide-react";

const PAINS = [
  { label: "Bookings and scheduling", icon: Calendar },
  { label: "Invoicing and payments", icon: Receipt },
  { label: "Documents, leases, paperwork", icon: FileText },
  { label: "Customer communication", icon: Mail },
  { label: "Reporting and visibility", icon: ChartBar },
  { label: "Something else entirely", icon: Sparkles },
];

const TOOLS = [
  "Spreadsheets",
  "QuickBooks",
  "Stripe",
  "Paper and whiteboards",
  "GoHighLevel",
  "Software that doesn't talk to each other",
  "Not sure",
];

const SIZES = ["Just me", "2 to 10 people", "11 to 50", "50+"];

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

type Status = "idle" | "submitting" | "success" | "error";

export function IntakeWizard() {
  const [step, setStep] = useState(1);
  const [pains, setPains] = useState<string[]>([]);
  const [tools, setTools] = useState<string[]>([]);
  const [size, setSize] = useState("");
  // Contact fields live in state so Back/Continue can't wipe typed input
  // (the step-4 form unmounts when leaving the step).
  const [fields, setFields] = useState({ name: "", email: "", phone: "", note: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function setField(key: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  }

  const summaryBits = [
    pains.length ? pains.join(" + ").toLowerCase() : null,
    tools.length ? `running on ${tools.join(", ").toLowerCase()}` : null,
    size ? size.toLowerCase() : null,
  ].filter(Boolean);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const note = fields.note.trim();

    const lines = [
      pains.length ? `What's eating time: ${pains.join(", ")}` : null,
      tools.length ? `Running on: ${tools.join(", ")}` : null,
      size ? `Team size: ${size}` : null,
      note ? `Note: ${note}` : null,
    ].filter(Boolean);

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: lines.length ? lines.join("\n") : "(sent from the contact page)",
          source: "wizard",
          company_website: String(data.get("company_website") ?? ""),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center">
        <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden="true" />
        <p className="mt-3 text-lg font-medium text-white">
          Thanks, I&apos;ll get back to you shortly.
        </p>
        <p className="mt-1 text-sm text-body">
          Usually within a day. I read every message myself.
        </p>
        <div className="mt-6 w-full max-w-md rounded-2xl border border-accent/25 bg-accent/[0.05] p-5 text-left">
          <p className="text-sm font-medium text-white">
            While you wait: the Automation Blueprint
          </p>
          <p className="mt-1 text-sm leading-relaxed text-body">
            A fixed-price plan of what I&apos;d automate in your business and
            what it would save. $999, one week, credited toward the build.
          </p>
          <Link
            href="/services#blueprint"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            See the Blueprint
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className={`h-1.5 w-1.5 rounded-full ${n <= step ? "bg-accent" : "bg-white/15"}`}
            />
          ))}
        </div>
        {step < 4 && (
          <button
            type="button"
            onClick={() => setStep(4)}
            className="text-xs text-muted transition-colors duration-300 hover:text-accent"
          >
            Skip the questions
          </button>
        )}
      </div>

      {step === 1 && (
        <fieldset>
          <legend className="text-lg font-medium text-white">
            What&apos;s eating your time?
          </legend>
          <p className="mb-4 mt-1 text-sm text-muted">Pick everything that applies.</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {PAINS.map(({ label, icon: Icon }) => {
              const selected = pains.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggle(pains, setPains, label)}
                  className={`rounded-xl border p-4 text-left text-sm transition-all duration-200 ${
                    selected
                      ? "border-accent/60 bg-accent/[0.08] text-white"
                      : "border-white/10 bg-white/[0.03] text-body hover:border-white/25"
                  }`}
                >
                  <Icon className="mb-2 h-4 w-4 text-accent" aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="text-lg font-medium text-white">
            What do you run on today?
          </legend>
          <p className="mb-4 mt-1 text-sm text-muted">Rough is fine.</p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => {
              const selected = tools.includes(tool);
              return (
                <button
                  key={tool}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggle(tools, setTools, tool)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                    selected
                      ? "border-accent/60 bg-accent/[0.08] text-white"
                      : "border-white/12 bg-white/[0.03] text-body hover:border-white/25"
                  }`}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend className="text-lg font-medium text-white">
            How big is the operation?
          </legend>
          <p className="mb-4 mt-1 text-sm text-muted">People, not revenue.</p>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((option) => {
              const selected = size === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSize(selected ? "" : option)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                    selected
                      ? "border-accent/60 bg-accent/[0.08] text-white"
                      : "border-white/12 bg-white/[0.03] text-body hover:border-white/25"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <p className="text-lg font-medium text-white">Last step.</p>
          <p className="-mt-2 text-sm text-muted">
            {summaryBits.length
              ? `What I heard: ${summaryBits.join(", ")}.`
              : "Tell me a bit about what you need."}
          </p>

          {/* Honeypot: off-screen; bots fill it, the server silently drops those. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="company_website">Company website</label>
            <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <input name="name" required autoComplete="name" placeholder="Your name" className={inputClasses} aria-label="Name" value={fields.name} onChange={(e) => setField("name", e.target.value)} />
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClasses} aria-label="Email" value={fields.email} onChange={(e) => setField("email", e.target.value)} />
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your phone (optional, for a callback)" className={inputClasses} aria-label="Phone" value={fields.phone} onChange={(e) => setField("phone", e.target.value)} />
          <textarea name="note" rows={3} placeholder="Anything else worth knowing?" className={`${inputClasses} resize-y`} aria-label="Note" value={fields.note} onChange={(e) => setField("note", e.target.value)} />

          {status === "error" && (
            <p className="text-sm text-red-400" role="alert">
              {errorMessage} Please email me directly at{" "}
              <a href="mailto:karolistamas@gmail.com" className="font-medium text-accent">
                karolistamas@gmail.com
              </a>
              .
            </p>
          )}

          <div className="mt-1 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send it"}
            </button>
          </div>
        </form>
      )}

      {step < 4 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className={`px-2 py-2 text-sm text-muted transition-colors duration-300 hover:text-white ${step === 1 ? "invisible" : ""}`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
