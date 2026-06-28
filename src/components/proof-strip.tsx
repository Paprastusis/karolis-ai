"use client";

import { FadeInView } from "./animations/fade-in-view";

const PROOF = [
  "6 products built and shipped",
  "Software running a real operation since 2023",
  "Pipelines over millions of records",
  "Stripe, QuickBooks, and AI built in",
];

export function ProofStrip() {
  return (
    <section className="relative w-full border-y border-white/[0.06] bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <FadeInView>
          <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROOF.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                <span className="text-sm font-medium tracking-wide text-body">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
