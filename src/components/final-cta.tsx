"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

export function FinalCTA() {
  return (
    <section className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto flex min-h-[400px] max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Ready to Automate{" "}
            <span className="font-serif italic">Your Business?</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="mt-6 text-lg text-body">
            Schedule a free discovery call to discuss your needs.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <Link
            href="/book-call"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>

        <FadeInView delay={0.3}>
          <p className="mt-6 text-sm text-muted">
            No obligation. No sales pitch. Just a conversation.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
