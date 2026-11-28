"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { BOOKING_URL, PHONE_HREF } from "@/lib/site";
import { trackEvent } from "@/lib/track";

// Call and booking buttons pinned to the bottom of the screen on phones, so
// they stay in reach while a visitor scrolls. Hidden from tablet width up.
// globals.css adds bottom padding to the page while this bar is shown.
export function MobileCtaBar() {
  const pathname = usePathname();
  const placement = `mobile_bar${pathname.replace(/\//g, "_")}`;

  return (
    <div
      data-mobile-cta
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#070612]/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden"
    >
      <div className="flex gap-3">
        <a
          href={PHONE_HREF}
          onClick={() => trackEvent("call_click", { placement })}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-accent py-3 font-medium text-accent"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        {BOOKING_URL && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("book_call_click", { placement })}
            className="flex flex-[1.4] items-center justify-center rounded-full bg-accent py-3 font-medium text-[#070612]"
          >
            Book a free call
          </a>
        )}
      </div>
    </div>
  );
}
