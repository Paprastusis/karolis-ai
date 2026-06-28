"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";

export function AboutTeaser() {
  return (
    <section className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <FadeInView>
          <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl md:leading-relaxed">
            I&apos;m Karolis. I taught myself to build because my own businesses
            needed software that didn&apos;t exist. Now I build it for others
            too.
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            More about me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
