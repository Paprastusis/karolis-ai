// Site-wide constants. Vercel serves www.karolis.ai as the primary domain (the
// apex redirects to it), so every canonical URL, sitemap entry, and structured
// data link must use the www form or search engines see two different sites.
export const SITE_URL = "https://www.karolis.ai";

// Public booking page: a Google Calendar appointment schedule. Every main
// button on the site opens it as "Book a free call". To change it without a
// code change, set NEXT_PUBLIC_BOOKING_URL in Vercel; that value wins.
const DEFAULT_BOOKING_URL = "https://calendar.app.google/mNA6nYbmnxgMzhq27";
const rawBookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;
export const BOOKING_URL = /^https:\/\//.test(rawBookingUrl) ? rawBookingUrl : "";
