"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { BlurIn } from "./animations/blur-in";
import { SplitText } from "./animations/split-text";
import { HlsVideo } from "./hls-video";

const VIDEO_SRC =
  "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-[#070612]">
      {/* Background Video */}
      <HlsVideo
        src={VIDEO_SRC}
        className="absolute inset-0 z-0 h-full w-full object-cover scale-[1.2] origin-left object-[right_center]"
      />

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-[#070612] to-transparent" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-12">
            {/* Heading + Subtitle group */}
            <div className="flex flex-col gap-6">
              {/* Main Heading */}
              <h1 className="max-w-4xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.2]">
                <span className="block">
                  <SplitText delay={0} staggerDelay={0.07} duration={0.6}>
                    I build AI and automation
                  </SplitText>
                </span>
                <span className="block">
                  <SplitText delay={0.18} staggerDelay={0.07} duration={0.6}>
                    systems that run
                  </SplitText>{" "}
                  <span className="font-serif italic">
                    <SplitText
                      delay={0.42}
                      staggerDelay={0.07}
                      duration={0.6}
                      wordClassName="text-[#00E5FF]"
                    >
                      real businesses.
                    </SplitText>
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <BlurIn delay={0.7} duration={0.6}>
                <p className="max-w-xl text-lg font-normal leading-relaxed text-body">
                  Full-stack software, custom AI agents, and the integrations
                  that tie it all together. I&apos;ve built and shipped a
                  multi-tenant SaaS, a platform that runs a real company day to
                  day, and tools that handle work people used to do by hand.
                </p>
              </BlurIn>
            </div>

            {/* CTA Buttons */}
            <BlurIn delay={0.9} duration={0.6}>
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                  >
                    See my work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border-2 border-accent bg-transparent px-8 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]"
                  >
                    Let&apos;s talk
                  </Link>
                </div>
                <p className="flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
                  Founder and full-stack engineer. I build custom software, AI
                  agents, and automation for real businesses, including my own.
                  Based in Phoenix, available remote.
                </p>
              </div>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
