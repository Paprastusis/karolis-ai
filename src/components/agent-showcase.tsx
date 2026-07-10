"use client";

import { FadeInView } from "./animations/fade-in-view";
import { AgentChat } from "./agent-chat";

// Homepage demo of the intake agent. The section only renders when the
// homepage (a server component) confirms the API key exists.
export function AgentShowcase() {
  return (
    <section
      id="try-the-agent"
      className="w-full border-t border-white/[0.06] bg-[#070612] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <FadeInView>
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                Try the kind of assistant I{" "}
                <span className="font-serif italic">build.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
                This is a small intake agent I made for this site. Ask it about
                your business and it will sketch what I&apos;d automate first.
              </p>
              <p className="mt-4 text-sm text-muted">
                No signup. It only talks shop, and what you tell it reaches me
                only if you choose to send it.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.15}>
            <AgentChat />
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
