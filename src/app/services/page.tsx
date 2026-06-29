import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import { WhatIBuild } from "@/components/what-i-build";
import { HowItWorks } from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "Services — Karolis Tamosiunas",
  description:
    "Custom automation and AI for your business. Booking, invoicing, document handling, reporting, customer portals, and AI agents that handle the busywork.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#070612] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <BlurIn>
            <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.15]">
              Custom automation and AI for{" "}
              <span className="font-serif italic text-accent">
                your business.
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
              I build software that takes the manual, repetitive work off your
              team&apos;s plate. Booking, invoicing, document handling,
              reporting, customer portals, and AI agents that handle the
              busywork.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="mt-5 max-w-2xl border-l-2 border-accent/40 pl-4 text-base font-medium text-white/90">
              One person who builds the whole thing. Faster and far cheaper than
              a software firm, with none of the handoffs or overhead.
            </p>
          </BlurIn>
          <BlurIn delay={0.45}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </BlurIn>
        </div>
      </section>

      {/* What I can build */}
      <WhatIBuild />

      {/* Proof line */}
      <section className="w-full bg-[#070612] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <BlurIn>
            <p className="text-xl font-medium leading-relaxed text-white md:text-2xl md:leading-relaxed">
              I&apos;m not pitching theory. I run a real business on the software
              I built, and I turned it into a SaaS product.
            </p>
          </BlurIn>
          <BlurIn delay={0.1}>
            <Link
              href="/work"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
            >
              See my work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </BlurIn>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Final CTA */}
      <section className="w-full bg-[#070612] py-24 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
          <BlurIn>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="mt-5 text-sm text-muted">
              No pitch, just a conversation.
            </p>
          </BlurIn>
        </div>
      </section>
    </>
  );
}
