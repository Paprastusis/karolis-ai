import type { Metadata } from "next";
import { Calendar, Mail } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";

// ─── To go live: paste the Google Calendar Appointment Scheduling embed URL ───
// Google Calendar → your appointment schedule → "Share" → "Embed" → copy the
// src="..." URL from the generated <iframe> and drop it in below. That's the
// only change needed. While this is empty, a tasteful placeholder renders
// instead of a broken iframe, so the page never looks unfinished.
const GOOGLE_BOOKING_URL = "";

export const metadata: Metadata = {
  title: "Book a call — Karolis Tamosiunas",
  description:
    "Book a quick call. Whether you're hiring or want something built, no pitch, just a conversation.",
};

export function BookingScheduler() {
  if (GOOGLE_BOOKING_URL) {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        <iframe
          src={GOOGLE_BOOKING_URL}
          title="Book a call with Karolis"
          className="h-[640px] w-full"
          style={{ border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
        <Calendar className="h-6 w-6 text-accent" />
      </div>
      <p className="text-base font-medium text-white">
        Booking calendar is coming online.
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-body">
        Email me using the link below and I&apos;ll get you on the calendar
        within a day.
      </p>
    </div>
  );
}

export default function BookCallPage() {
  return (
    <section className="relative w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <BlurIn delay={0.1}>
            <h1 className="text-4xl font-medium text-white md:text-5xl">
              Let&apos;s <span className="font-serif italic">talk.</span>
            </h1>
          </BlurIn>

          <BlurIn delay={0.2}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
              Book a quick call. Whether you&apos;re hiring or want something
              built, no pitch, just a conversation.
            </p>
          </BlurIn>
        </div>

        {/* Scheduler */}
        <BlurIn delay={0.3}>
          <div className="mt-12">
            <BookingScheduler />
          </div>
        </BlurIn>

        {/* Email fallback */}
        <BlurIn delay={0.4}>
          <p className="mt-8 text-center text-sm text-muted">
            Prefer email?{" "}
            <a
              href="mailto:karolistamas@gmail.com"
              className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
            >
              <Mail className="h-3.5 w-3.5" />
              karolistamas@gmail.com
            </a>
          </p>
        </BlurIn>
      </div>
    </section>
  );
}
