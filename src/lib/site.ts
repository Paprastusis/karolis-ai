// Site-wide constants. Vercel serves www.karolis.ai as the primary domain (the
// apex redirects to it), so every canonical URL, sitemap entry, and structured
// data link must use the www form or search engines see two different sites.
export const SITE_URL = "https://www.karolis.ai";

// Public booking page (Google Calendar appointment schedule, Cal.com, or
// Calendly). Set NEXT_PUBLIC_BOOKING_URL in Vercel to switch every "Let's talk"
// button to "Book a free call". Until it is set, those buttons go to /contact.
const rawBookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const BOOKING_URL = /^https:\/\//.test(rawBookingUrl) ? rawBookingUrl : "";
