"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

const DELIVERABLES = [
  "A map of how work actually flows through your business",
  "Automation opportunities ranked with honest ROI math",
  "Build or buy recommendation for each one",
  "A fixed quote for anything worth building",
];

export function BlueprintOffer() {
  return (
    <section id="blueprint" className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl">
            Not sure where to <span className="font-serif italic">start?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-body">
            Skip the open-ended call. Start with a fixed piece of work that
            scopes itself.
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-accent/30 bg-white/[0.03] p-7 text-left">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent">
              Fixed price, fixed scope
            </span>
            <h3 className="mt-4 text-xl font-medium text-white">
              The Automation Blueprint
            </h3>
            <p className="mt-1">
              <span className="text-2xl font-medium text-accent">$999</span>{" "}
              <span className="text-sm text-muted">&middot; delivered in one week</span>
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {DELIVERABLES.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-snug text-body">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm italic text-muted">
              Yours to keep. No obligation to build with me.
            </p>
            <p className="mt-2 text-sm font-medium text-white">
              Hire me for the build and the $999 comes off the price.
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Get the Blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-xs text-muted">No pitch, just a plan.</p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
