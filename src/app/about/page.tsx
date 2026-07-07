import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Karolis. I build software and AI systems for real businesses. Founder and full-stack engineer, based in Phoenix.",
};

export default function AboutPage() {
  return (
    <section className="w-full bg-[#070612] pb-28 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        {/* Headshot + intro */}
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <Image
            src="/karolis.jpg"
            alt="Karolis Tamosiunas"
            width={112}
            height={112}
            priority
            className="h-28 w-28 shrink-0 rounded-full border border-white/10 object-cover"
          />
          <BlurIn>
            <h1 className="text-3xl font-medium leading-tight text-white md:text-4xl">
              I&apos;m Karolis. I build software and AI systems for{" "}
              <span className="font-serif italic text-accent">
                real businesses.
              </span>
            </h1>
          </BlurIn>
        </div>

        {/* Story */}
        <div className="mt-12 flex flex-col gap-6 text-lg leading-relaxed text-body">
          <BlurIn delay={0.1}>
            <p>
              It started when my own companies needed software that
              didn&apos;t exist, so I built it. That turned into a habit, then a
              SaaS product, and custom systems for other businesses too. I work
              across all kinds of operations, from storage and trucking to
              inventory and the back office.
            </p>
          </BlurIn>
          <BlurIn delay={0.15}>
            <p>
              Before software, I founded and ran logistics and recycling
              companies, so I think about software in terms of what it does for
              the business, not just the code. I care about building things that
              actually work and save real time or money.
            </p>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p>
              These days I&apos;m building, and I&apos;m open to the right role
              or project. If you want to work together, let&apos;s talk.
            </p>
          </BlurIn>
        </div>

        {/* Contact CTA */}
        <BlurIn delay={0.25}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Book a free call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:karolistamas@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              karolistamas@gmail.com
            </a>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
