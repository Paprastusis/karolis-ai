"use client";

import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { trackEvent } from "@/lib/track";

// A tap-to-call button that sits next to "Book a free call". Most ad clicks
// come from phones, where calling is one tap.
export function CallLink({
  placement,
  className = "",
}: {
  /** Where on the site this button sits, reported with the tap. */
  placement: string;
  className?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      onClick={() => trackEvent("call_click", { placement })}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-6 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)] ${className}`.trim()}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call {PHONE_DISPLAY}
    </a>
  );
}
