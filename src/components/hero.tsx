"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurIn } from "./animations/blur-in";
import { SplitText } from "./animations/split-text";
import { HlsVideo } from "./hls-video";

const VIDEO_SRC =
  "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070612]">
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
              <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.2]">
                <span className="block">
                  <SplitText delay={0} staggerDelay={0.08} duration={0.6}>
                    Custom Automation
                  </SplitText>
                </span>
                <span className="block">
                  <SplitText
                    delay={0.16}
                    staggerDelay={0.08}
                    duration={0.6}
                    wordClassName="text-[#00E5FF]"
                  >
                    & AI Agents
                  </SplitText>
                </span>
                <span className="block">
                  <SplitText delay={0.32} staggerDelay={0.08} duration={0.6}>
                    Built for Your
                  </SplitText>
                  {" "}
                  <span className="font-serif italic">
                    <SplitText
                      delay={0.56}
                      staggerDelay={0.08}
                      duration={0.6}
                      wordClassName="text-[#7C3AED]"
                    >
                      Business.
                    </SplitText>
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <BlurIn delay={0.6} duration={0.6}>
                <p className="max-w-xl text-lg font-normal leading-relaxed text-body">
                  Full-stack automation from booking pages to backend workflows
                  to customer portals. Eliminate manual work, prevent costly
                  errors, and integrate seamlessly with your existing tools.
                </p>
              </BlurIn>
            </div>

            {/* CTA Buttons */}
            <BlurIn delay={0.8} duration={0.6}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-call"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                >
                  Book A Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#case-studies"
                  className="inline-flex items-center rounded-full border-2 border-accent bg-transparent px-8 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]"
                >
                  View Case Studies
                </Link>
              </div>
            </BlurIn>
          </div>
        </div>
      </div>
    </section>
  );
}
