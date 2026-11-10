"use client";

import { FadeInView } from "./animations/fade-in-view";

// Every figure here comes from the case studies in src/content/projects.ts.
// Keep the two in sync when a number changes.
const PROOF = [
  {
    figure: "2023",
    prefix: "Since",
    label: "My software has run a real storage business, every day.",
  },
  {
    figure: "12",
    suffix: "apps",
    label: "Booking, leases, invoicing, payments and books, wired into one system.",
  },
  {
    figure: "4.45M",
    suffix: "records",
    label: "Carriers loaded and scored by a single data pipeline.",
  },
  {
    figure: "1",
    suffix: "builder",
    label: "I design, build and launch it myself. No handoffs.",
  },
];

export function ProofStrip() {
  return (
    <section className="relative w-full border-y border-white/[0.06] bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-0">
          {PROOF.map((item, i) => (
            <FadeInView
              key={item.figure}
              delay={i * 0.08}
              className="border-l border-accent/30 pl-5 lg:pl-7 lg:pr-6"
            >
              {/* Stacked on phones so a long figure can't run into the next
                  column; one baseline row from lg: up. */}
              <dt className="flex flex-col gap-0.5 lg:flex-row lg:items-baseline lg:gap-2">
                {item.prefix && (
                  <span className="text-sm font-medium text-muted">
                    {item.prefix}
                  </span>
                )}
                <span className="text-4xl font-medium tracking-tight text-white lg:text-5xl">
                  {item.figure}
                </span>
                {item.suffix && (
                  <span className="font-serif text-lg italic text-accent lg:text-xl">
                    {item.suffix}
                  </span>
                )}
              </dt>
              <dd className="mt-3 max-w-[16rem] text-sm leading-relaxed text-body">
                {item.label}
              </dd>
            </FadeInView>
          ))}
        </dl>
      </div>
    </section>
  );
}
