"use client";

import { Mail } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";
import { BookCallLink } from "./book-call-link";

export function ContactCTA() {
  return (
    <section className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto flex min-h-[360px] max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Let&apos;s <span className="font-serif italic">talk.</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-body">
            Tell me what&apos;s eating your team&apos;s time. Book a quick call
            or email me.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
            <BookCallLink placement="home_closing" />
            <a
              href="mailto:karolistamas@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              karolistamas@gmail.com
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
