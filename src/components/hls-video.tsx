"use client";

import { useEffect, useRef } from "react";
import type Hls from "hls.js";

interface HlsVideoProps {
  src: string;
  className?: string;
}

export function HlsVideo({ src, className }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reduced-motion users get the static first frame instead of a moving
    // background. Must happen before a source is attached or autoplay wins.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.autoplay = false;
    }

    let hls: Hls | null = null;
    let cancelled = false;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari plays HLS natively; skip downloading hls.js entirely.
      video.src = src;
    } else {
      // Everyone else loads hls.js on demand, keeping it out of the initial bundle.
      import("hls.js").then(({ default: HlsLib }) => {
        if (cancelled || !HlsLib.isSupported()) return;
        hls = new HlsLib({ enableWorker: false });
        hls.loadSource(src);
        hls.attachMedia(video);
      });
    }

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
    />
  );
}
