"use client";

import { FadeInView } from "./animations/fade-in-view";

const STATS = [
  "Proven on $3M outdoor storage operations",
  "250+ customers managed",
  "Multi-entity, multi-property automation",
];

const TECH_STACK = [
  "Next.js",
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "QuickBooks",
  "Stripe",
];

export function SocialProof() {
  return (
    <section className="relative w-full bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <FadeInView>
          <div className="flex flex-col items-center gap-8">
            {/* Stats row */}
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                  <span className="text-sm font-medium tracking-wide text-body">
                    {stat}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Tech logos */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium uppercase tracking-widest text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
