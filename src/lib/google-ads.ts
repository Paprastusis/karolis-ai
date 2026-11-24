// Google Ads account 568-204-6094 (karolis@karolis.ai). The tag ID and the
// conversion label are public: they ship in the page source. To use a
// different tag without a code change, set NEXT_PUBLIC_GOOGLE_ADS_ID in Vercel.
const DEFAULT_GOOGLE_ADS_ID = "AW-18594122035";
const rawId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || DEFAULT_GOOGLE_ADS_ID;

export const GOOGLE_ADS_ID = /^AW-\d+$/.test(rawId) ? rawId : "";

// The "Book a call click" conversion action (goal: Book appointment).
const BOOK_CALL_LABEL = "dvczCKmg574dELOSr6JF";

export const BOOK_CALL_SEND_TO =
  GOOGLE_ADS_ID && rawId === DEFAULT_GOOGLE_ADS_ID
    ? `${GOOGLE_ADS_ID}/${BOOK_CALL_LABEL}`
    : "";
