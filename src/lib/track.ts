import { track } from "@vercel/analytics";
import { BOOK_CALL_SEND_TO } from "@/lib/google-ads";

type Fbq = (...args: unknown[]) => void;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: Gtag;
  }
}

type EventName = "lead" | "book_call_click" | "call_click";

// Meta's standard event names, so ad campaigns can optimise for them.
const META_EVENT: Record<EventName, string> = {
  lead: "Lead",
  book_call_click: "Schedule",
  call_click: "Contact",
};

// Google Ads conversion actions, by event. Events without one aren't sent.
const GOOGLE_ADS_SEND_TO: Partial<Record<EventName, string>> = {
  book_call_click: BOOK_CALL_SEND_TO,
};

// Reports a conversion to Vercel Web Analytics and, when their tags are
// loaded, to Meta and Google Ads. Never throws: tracking must not break a
// form submit.
export function trackEvent(name: EventName, props?: Record<string, string>) {
  try {
    track(name, props);
    window.fbq?.("track", META_EVENT[name], props);
    const sendTo = GOOGLE_ADS_SEND_TO[name];
    if (sendTo) window.gtag?.("event", "conversion", { send_to: sendTo });
  } catch {
    // Ignore: an ad blocker or a missing script is not the visitor's problem.
  }
}
