"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";
import { trackEvent } from "@/lib/track";

const VARIANTS = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]",
  outline:
    "inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-6 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]",
};

// The site's main call to action. With a booking URL configured it opens the
// calendar ("Book a free call"); without one it falls back to the contact page.
export function BookCallLink({
  variant = "primary",
  placement,
  className = "",
}: {
  variant?: keyof typeof VARIANTS;
  /** Where on the site this button sits, reported with the click. */
  placement: string;
  className?: string;
}) {
  const classes = `${VARIANTS[variant]} ${className}`.trim();

  if (!BOOKING_URL) {
    return (
      <Link href="/contact" className={classes}>
        Let&apos;s talk
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("book_call_click", { placement })}
      className={classes}
    >
      Book a free call
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
