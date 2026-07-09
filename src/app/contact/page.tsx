import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import { ContactModes } from "@/components/contact-modes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you're hiring or want something built, answer a few quick questions, or just email, call, or text me. No pitch, just a conversation.",
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
                ? "Whether you're hiring or want something built, answer a few quick questions, ask my agent, or just email, call, or text me. No pitch, just a conversation."
                : "Whether you're hiring or want something built, answer a few quick questions, or just email, call, or text me. No pitch, just a conversation."}
            </p>
          </BlurIn>
        </div>

        <BlurIn delay={0.15}>
          <div className="mt-12">
            <ContactModes agentEnabled={agentEnabled} />
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
