"use client";

import { LayoutGrid, Users, Link2, Zap } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

const CARDS = [
  {
    icon: LayoutGrid,
    title: "Complete Business Management Platforms",
    description:
      "Full admin dashboards, multi-property management, inventory control, lease management, document generation. The entire operational backbone of your business.",
  },
  {
    icon: Users,
    title: "Customer-Facing Systems",
    description:
      "Public booking pages, self-service portals, payment processing, automated agreements, real-time availability. Custom UX built for your brand.",
  },
  {
    icon: Link2,
    title: "Financial Integration & Automation",
    description:
      "QuickBooks sync, automated invoicing triggers, payment tracking, expense attachment, custom reporting. Built to work with your existing tools.",
  },
  {
    icon: Zap,
    title: "AI Agents & Workflow Automation",
    description:
      "Custom AI agents that handle repetitive tasks: document parsing, data extraction, automated follow-ups, intelligent reminders. Build workflows that run on autopilot.",
  },
];

export function WhatIBuild() {
  return (
    <section className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Custom Systems.{" "}
            <span className="font-serif italic">Built From Scratch.</span>
          </h2>
        </FadeInView>

        {/* Cards grid */}
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

        {/* Subheading */}
        <FadeInView delay={0.2} className="mt-16">
          <p className="text-center text-lg leading-relaxed text-body">
            Every line of code written for your specific business needs.
            <br />
            Build a complete platform or individual modules—whatever your
            business needs.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
