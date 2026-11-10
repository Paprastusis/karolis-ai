"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Set NEXT_PUBLIC_META_PIXEL_ID in Vercel to turn the Pixel on. Without it
// (or with anything that isn't a numeric ID) nothing is loaded.
const rawPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const PIXEL_ID = /^\d+$/.test(rawPixelId) ? rawPixelId : "";

export function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // The init snippet below reports the first page view. Client-side
  // navigations don't reload the page, so report those here.
  useEffect(() => {
    if (!PIXEL_ID) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
