import { Calendar } from "lucide-react";

// ─── To go live: paste the Google Calendar Appointment Scheduling embed URL ───
// Google Calendar → your appointment schedule → "Share" → "Embed" → copy the
// src="..." URL from the generated <iframe> and drop it in below. That's the
// only change needed. While this is empty, a tasteful placeholder renders
// instead of a broken iframe, so the page never looks unfinished.
export const GOOGLE_BOOKING_URL = "";

export function BookingScheduler() {
  if (GOOGLE_BOOKING_URL) {
    return (
      <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        <iframe
          src={GOOGLE_BOOKING_URL}
          title="Book a call with Karolis"
          className="h-[600px] w-full"
          style={{ border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
        <Calendar className="h-6 w-6 text-accent" />
      </div>
      <p className="text-base font-medium text-white">
        Booking calendar is coming online.
      </p>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-body">
        Send a message instead, or use the direct details below, and I&apos;ll
        get you on the calendar within a day.
      </p>
    </div>
  );
}
