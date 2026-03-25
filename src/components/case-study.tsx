"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

const SYSTEMS = [
  "Multi-property management (3 locations)",
  "Custom lease generation & e-signature",
  "Automated recurring invoicing (28-day cycles)",
  "Customer self-service portal",
  "Gate code & lot inventory management",
  "Insurance verification & tracking",
  "AI document parsing (Gemini Vision)",
  "QuickBooks two-way sync",
  "Lead pipeline integration (GoHighLevel)",
  "Automated renewal reminders",
  "Public booking with real-time availability",
  "Custom reporting & analytics",
];

export function CaseStudy() {
  return (
    <section id="case-studies" className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side */}
          <FadeInView>
            <div className="flex flex-col">
              <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                Built for{" "}
                <span className="font-serif italic">Real Operations</span>
              </h2>

              <p className="mt-4 text-lg text-body">
                Paddock Parking — Managing{" "}
                <span className="font-semibold text-accent">$3M</span> in
                Revenue with over{" "}
                <span className="font-semibold text-accent">250</span>{" "}
                customers across{" "}
                <span className="font-semibold text-accent">3</span> locations
              </p>

              <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-widest text-muted">
                Key Systems Built
              </h3>

              <ul className="grid gap-3 sm:grid-cols-2">
                {SYSTEMS.map((system) => (
                  <li key={system} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/50" />
                    <span className="text-sm leading-snug text-body">
                      {system}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm text-muted">
                19 interconnected systems. Built from scratch. Running 24/7
                since 2023.
              </p>
            </div>
          </FadeInView>

          {/* Right side — system diagram */}
          <FadeInView delay={0.2}>
            <div className="flex h-full items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <SystemDiagram />
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  const nodes = [
    { label: "Admin Dashboard", x: "50%", y: "8%", primary: true },
    { label: "Booking Page", x: "15%", y: "28%" },
    { label: "Customer Portal", x: "85%", y: "28%" },
    { label: "Lease Engine", x: "25%", y: "50%" },
    { label: "Invoice System", x: "75%", y: "50%" },
    { label: "QuickBooks", x: "15%", y: "72%" },
    { label: "AI Parser", x: "50%", y: "72%" },
    { label: "GoHighLevel", x: "85%", y: "72%" },
    { label: "Gate & Inventory", x: "50%", y: "92%" },
  ];

  const lineStroke = "rgba(0,229,255,0.15)";

  return (
    <div className="relative aspect-[4/3] w-full">
      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
      >
        <line x1="200" y1="36" x2="60" y2="84" stroke={lineStroke} strokeWidth="1" />
        <line x1="200" y1="36" x2="340" y2="84" stroke={lineStroke} strokeWidth="1" />
        <line x1="60" y1="96" x2="100" y2="150" stroke={lineStroke} strokeWidth="1" />
        <line x1="340" y1="96" x2="300" y2="150" stroke={lineStroke} strokeWidth="1" />
        <line x1="100" y1="162" x2="60" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="100" y1="162" x2="200" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="300" y1="162" x2="340" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="300" y1="162" x2="200" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="200" y1="228" x2="200" y2="270" stroke={lineStroke} strokeWidth="1" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div
            className={`whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium ${
              node.primary
                ? "border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.15)] text-accent"
                : "border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] text-accent/80"
            }`}
          >
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}
