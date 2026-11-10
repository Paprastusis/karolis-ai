import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendarClock, Mail, Phone } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import { ContactModes } from "@/components/contact-modes";
import { BookCallLink } from "@/components/book-call-link";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Want something built or automated? Answer a few quick questions, or just email, call, or text me. No pitch, just a conversation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  // The agent tab renders only when the key exists (checked at build time on
  // Vercel), so the page never shows a chat that can't answer.
  const agentEnabled = Boolean(process.env.ANTHROPIC_API_KEY);

  return (
    <section className="relative w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <BlurIn>
            <h1 className="text-4xl font-medium text-white md:text-5xl">
              Let&apos;s <span className="font-serif italic">talk.</span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              {agentEnabled
                ? "Tell me what's eating your team's time. Answer a few quick questions, ask my agent, or just email, call, or text me. No pitch, just a conversation."
                : "Tell me what's eating your team's time. Answer a few quick questions, or just email, call, or text me. No pitch, just a conversation."}
            </p>
          </BlurIn>
        </div>

        {/* Fastest route: pick a time. Shown only once a booking URL is set. */}
        {BOOKING_URL && (
          <BlurIn delay={0.12}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-accent/25 bg-accent/[0.05] p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-body">
                <CalendarClock
                  className="mt-0.5 hidden h-5 w-5 shrink-0 text-accent sm:block"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-medium text-white">
                    Fastest: pick a time.
                  </span>
                  A free 20-minute call about what you&apos;d like automated.
                </span>
              </p>
              <BookCallLink placement="contact" className="shrink-0" />
            </div>
          </BlurIn>
        )}

        <BlurIn delay={0.15}>
          <div className="mt-12">
            <Suspense fallback={null}>
              <ContactModes agentEnabled={agentEnabled} />
            </Suspense>
          </div>
        </BlurIn>

        {/* Direct line */}
        <BlurIn delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:gap-8">
            <a
              href="mailto:karolistamas@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              karolistamas@gmail.com
            </a>
            <span className="hidden text-white/15 sm:inline">|</span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted">
              <Phone className="h-4 w-4" />
              <span>
                <a
                  href="tel:+16027673078"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  Call
                </a>{" "}
                or{" "}
                <a
                  href="sms:+16027673078"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  text
                </a>
                : 602-767-3078
              </span>
            </span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
