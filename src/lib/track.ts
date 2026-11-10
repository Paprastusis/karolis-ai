import { track } from "@vercel/analytics";

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

type EventName = "lead" | "book_call_click";

// Meta's standard event names, so ad campaigns can optimise for them.
const META_EVENT: Record<EventName, string> = {
  lead: "Lead",
  book_call_click: "Schedule",
};

// Reports a conversion to Vercel Web Analytics and, when the Meta Pixel is
// loaded, to Meta. Never throws: tracking must not break a form submit.
export function trackEvent(name: EventName, props?: Record<string, string>) {
  try {
    track(name, props);
    window.fbq?.("track", META_EVENT[name], props);
  } catch {
    // Ignore: an ad blocker or a missing script is not the visitor's problem.
  }
}
