"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

export function ServicesTeaser() {
  return (
    <section className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <FadeInView>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center lg:p-16">
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              Need this kind of thing built for{" "}
              <span className="font-serif italic">your business?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
              I help companies automate the manual, repetitive parts of their
              operations with custom software and AI. Booking, invoicing,
              document handling, reporting, whatever is eating your team&apos;s
              time.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-7 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]"
            >
              See how I can help
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
