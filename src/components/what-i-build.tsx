"use client";

import { LayoutGrid, Users, Link2, Zap } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

const CARDS = [
  {
    icon: LayoutGrid,
    title: "Business management software",
    description:
      "The operational backbone: dashboards, customer management, leases, inventory, reporting.",
  },
  {
    icon: Users,
    title: "Customer-facing systems",
    description:
      "Booking pages, self-service portals, payments, automated agreements.",
  },
  {
    icon: Link2,
    title: "Financial automation",
    description:
      "QuickBooks sync, automated invoicing, payment tracking, custom reports.",
  },
  {
    icon: Zap,
    title: "AI agents and workflows",
    description:
      "Document parsing, data extraction, automated follow-ups, anything repetitive.",
  },
];

export function WhatIBuild() {
  return (
    <section className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            What I can <span className="font-serif italic">build.</span>
          </h2>
        </FadeInView>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <FadeInView key={card.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[rgba(0,229,255,0.3)] hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                <div className="relative mb-5 w-fit">
                  <card.icon className="relative z-10 h-6 w-6 text-accent" />
                  <div className="absolute inset-0 -m-1 rounded-full bg-accent/20 blur-md" />
                </div>
                <h3 className="mb-3 text-lg font-medium text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-body">
                  {card.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
