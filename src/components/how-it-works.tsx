"use client";

import { FadeInView } from "./animations/fade-in-view";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your business, map workflows, design custom solution",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Full-stack development, integrations, testing, training",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Launch, documentation, handoff, optional ongoing support",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            How It <span className="font-serif italic">Works</span>
          </h2>
        </FadeInView>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeInView key={step.number} delay={i * 0.15}>
              <div className="relative flex flex-col">
                <span className="relative text-5xl font-bold text-accent/20">
                  {step.number}
                  <span className="absolute inset-0 text-5xl font-bold text-accent/10 blur-md">
                    {step.number}
                  </span>
                </span>
                <h3 className="mt-2 text-xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.description}
                </p>

                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-6 hidden h-px w-8 bg-[rgba(0,229,255,0.3)] md:block" />
                )}
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3} className="mt-16">
          <p className="text-center text-lg text-muted italic">
            Every project starts with a conversation.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
