import type { Metadata } from "next";
import { Calendar, Mail, MessageSquare, Phone } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import {
  BookingScheduler,
  GOOGLE_BOOKING_URL,
} from "@/components/booking-scheduler";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you're hiring or want something built, send a message, or just email, call, or text me. No pitch, just a conversation.",
};

// The "Book a time" column appears automatically once GOOGLE_BOOKING_URL is
// set in booking-scheduler.tsx. Until then the form is the whole page, so
// nothing ever looks half-wired.
const hasScheduler = GOOGLE_BOOKING_URL.length > 0;

export default function ContactPage() {
  return (
    <section className="relative w-full bg-[#070612] py-24 lg:py-32">
      <div
        className={`mx-auto px-6 lg:px-12 ${hasScheduler ? "max-w-5xl" : "max-w-2xl"}`}
      >
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <BlurIn>
            <h1 className="text-4xl font-medium text-white md:text-5xl">
              Let&apos;s <span className="font-serif italic">talk.</span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">
              {hasScheduler
                ? "Whether you're hiring or want something built, pick a time, send a message, or just email or text me. No pitch, just a conversation."
                : "Whether you're hiring or want something built, send a message, or just email, call, or text me. No pitch, just a conversation."}
            </p>
          </BlurIn>
        </div>

        {hasScheduler ? (
          /* Two paths side by side */
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8">
            <BlurIn delay={0.15}>
              <div className="flex h-full flex-col">
                <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted">
                  <Calendar className="h-4 w-4 text-accent" />
                  Book a time
                </h2>
                <div className="flex-1">
                  <BookingScheduler />
                </div>
              </div>
            </BlurIn>

            <BlurIn delay={0.2}>
              <div className="flex h-full flex-col">
                <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted">
                  <MessageSquare className="h-4 w-4 text-accent" />
                  Send a message
                </h2>
                <div className="flex-1">
                  <ContactForm />
                </div>
              </div>
            </BlurIn>
          </div>
        ) : (
          /* Message form is the page */
          <BlurIn delay={0.15}>
            <div className="mt-14">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted">
                <MessageSquare className="h-4 w-4 text-accent" />
                Send a message
              </h2>
              <ContactForm />
            </div>
          </BlurIn>
        )}

        {/* Direct line */}
        <BlurIn delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:gap-8">
            <a
              href="mailto:karolistamas@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              karolistamas@gmail.com
            </a>
            <span className="hidden text-white/15 sm:inline">|</span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted">
              <Phone className="h-4 w-4" />
              <span>
                <a
                  href="tel:+16027673078"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  Call
                </a>{" "}
                or{" "}
                <a
                  href="sms:+16027673078"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  text
                </a>
                : 602-767-3078
              </span>
            </span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
