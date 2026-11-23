// Pages under /yards/<slug>: one per kind of yard and one per common problem.
// They answer what owners search for, so keep each one specific to its
// subject, in Karolis's own voice, and keep every claim true.

import type { FaqItem } from "@/content/faq";

export type YardPage = {
  slug: string;
  group: "type" | "problem";
  /** Short name for links between pages. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  titleAccent: string;
  intro: string;
  pains: string[];
  includes: { title: string; text: string }[];
  note: string;
  faq: FaqItem[];
};

const COST: FaqItem = {
  question: "How much does it cost?",
  answer:
    "Less than most owners expect, and it replaces apps you pay for every month. Every build gets a fixed quote before work starts.",
};

const QUICKBOOKS: FaqItem = {
  question: "Does it work with QuickBooks?",
  answer:
    "Yes. Invoices and payments sync to QuickBooks, so your books stay where your accountant expects them.",
};

export const YARD_PAGES: YardPage[] = [
  {
    slug: "truck-parking",
    group: "type",
    label: "Truck parking",
    metaTitle: "Truck parking software for yards that rent by the month",
    metaDescription:
      "Online booking, leases, payments, late fees, insurance and gate codes for truck and trailer parking yards, built around how your yard runs. Phoenix, AZ, remote across the US.",
    kicker: "Truck and trailer parking",
    title: "Truck parking software",
    titleAccent: "built around your yard.",
    intro:
      "Drivers and fleets want a spot tonight, a lease they can sign from the cab and a gate code that works. You want the money in, the insurance on file and the yard full. I build one system that handles both sides.",
    pains: [
      "Calls and texts at all hours asking if there's a spot.",
      "Fleet accounts with several trucks, each on its own rate and due date.",
      "Chasing insurance certificates and DOT numbers before move-in.",
      "Trailers left behind after the payments stop.",
    ],
    includes: [
      { title: "Spots by size", text: "Bobtail, tractor-trailer and 53-foot trailer spots, shown live so drivers pick one that fits." },
      { title: "Leases signed online", text: "Nightly, weekly or monthly terms, signed from a phone before they pull in." },
      { title: "Fleet accounts", text: "One account for many trucks, one invoice and one contact for billing." },
      { title: "Card and ACH billing", text: "Recurring charges, late fees by your rules and receipts sent on their own." },
      { title: "Insurance and paperwork", text: "Insurance, DOT and MC numbers collected at signup and flagged when they expire." },
      { title: "Gate codes", text: "A code per driver, sent on signup and turned off at move-out, or with your OK when rent is late." },
    ],
    note:
      "I run truck parking yards in Phoenix myself, so this starts from the same calls and late payments you deal with.",
    faq: [
      {
        question: "Can drivers book a spot for one night?",
        answer:
          "Yes, if you rent by the night. Each yard sets its own terms: nightly, weekly, monthly, or monthly only.",
      },
      {
        question: "Can it handle fleet customers?",
        answer:
          "Yes. A fleet gets one account with all its trucks and one invoice, and you still see which spot each truck is in.",
      },
      QUICKBOOKS,
      COST,
    ],
  },
  {
    slug: "rv-boat-storage",
    group: "type",
    label: "RV and boat storage",
    metaTitle: "RV and boat storage software for independent yards",
    metaDescription:
      "Online rentals, waitlists, insurance and registration on file, billing and gate codes for RV and boat storage yards, built around how your yard runs.",
    kicker: "RV and boat storage",
    title: "RV and boat storage software",
    titleAccent: "for yards like yours.",
    intro:
      "Renters want to see what's open, pick a covered or uncovered space that fits their rig and pay without calling. You want fewer calls, no missed payments and a waitlist that fills open spaces for you.",
    pains: [
      "Every inquiry starts with a phone call or a voicemail.",
      "Spaces sorted by length and cover in a spreadsheet only you understand.",
      "A waitlist on paper while open spaces sit empty.",
      "Registration and insurance copies scattered across email.",
    ],
    includes: [
      { title: "Spaces by length and cover", text: "Renters filter by length, covered or uncovered and power, then pick a space." },
      { title: "Waitlist", text: "When a space opens, the next person on the list gets an offer with a link to sign and pay." },
      { title: "Leases and paperwork", text: "Signed online, with registration and insurance uploaded at signup." },
      { title: "Card and ACH billing", text: "Monthly billing, late fees by your rules and receipts sent on their own." },
      { title: "Gate codes", text: "Sent on signup and turned off at move-out, or with your OK when rent is late." },
      { title: "Owner reports", text: "Occupancy and revenue by space type, so you know what to price up or build next." },
    ],
    note:
      "Every system is built from scratch around your yard, whether you have 40 spaces or 400.",
    faq: [
      {
        question: "Can renters filter by RV length?",
        answer:
          "Yes. Each space is set up with its length, cover and power, so renters only see spaces that fit.",
      },
      {
        question: "Can I keep a waitlist?",
        answer:
          "Yes. When a space opens, the next person on the list gets an offer with a link to sign the lease and pay.",
      },
      {
        question: "I already use storage software. Is this for me?",
        answer:
          "Maybe not. If your current software does everything you need, keep it. I build for yards whose tools don't fit how they run, or that juggle several apps.",
      },
      COST,
    ],
  },
  {
    slug: "outdoor-storage",
    group: "type",
    label: "Outdoor and contractor storage",
    metaTitle: "Outdoor storage yard software for contractor and equipment yards",
    metaDescription:
      "Booking, leases, insurance, billing and gate access for outdoor storage, contractor yards and equipment lots, built around how your yard runs.",
    kicker: "Outdoor and contractor storage",
    title: "Outdoor storage software",
    titleAccent: "for contractor and equipment yards.",
    intro:
      "Contractors and small fleets rent lots, not units. They need room for their trucks and equipment, a lease, and access at 5 a.m. I build systems around how lots like yours actually rent.",
    pains: [
      "Lot sizes and prices live in your head or a spreadsheet.",
      "Every new tenant means a site visit, a paper lease and a manual invoice.",
      "Insurance certificates expire and nobody notices.",
      "Access hours and gate codes handled by text.",
    ],
    includes: [
      { title: "Lots by size", text: "Whole lots or parts of one, each with its size, surface, power and price." },
      { title: "Leases signed online", text: "Month-to-month or longer terms, signed before move-in." },
      { title: "Insurance on file", text: "Certificates collected at signup and flagged before they expire." },
      { title: "Card and ACH billing", text: "Monthly billing, late fees by your rules and receipts sent on their own." },
      { title: "Gate access", text: "A code per tenant, with access hours kept on each lease." },
      { title: "QuickBooks sync", text: "Invoices and payments land in your books." },
    ],
    note:
      "I rent outdoor storage to contractors at my own yards in Phoenix, so I know the questions they ask before they sign.",
    faq: [
      {
        question: "Can tenants rent a whole lot or part of one?",
        answer:
          "Yes. A lot can be rented whole or split into spaces, each with its own size and price.",
      },
      {
        question: "Can access be limited to certain hours?",
        answer:
          "If your gate system supports schedules, yes. If it doesn't, the hours are kept on each tenant's lease so everyone knows the rules.",
      },
      QUICKBOOKS,
      COST,
    ],
  },
  {
    slug: "late-payments",
    group: "problem",
    label: "Late payments",
    metaTitle: "Collect late rent at your parking or storage yard without chasing it",
    metaDescription:
      "Every late account on one screen. Email and text reminders, late fees by your rules, and notices and gate lockouts that wait for your OK.",
    kicker: "Late payments",
    title: "Stop chasing",
    titleAccent: "late rent.",
    intro:
      "Most of collections is the same steps every month: check who hasn't paid, send a reminder, add the late fee, follow up, decide on a lockout. I build systems that do the routine part and leave the decisions to you.",
    pains: [
      "Checking the bank and a spreadsheet to see who paid.",
      "The same reminder texts, typed by hand every month.",
      "Promises to pay next Friday that nobody writes down.",
      "Gate lockouts that happen late, or too early.",
    ],
    includes: [
      { title: "One list of who owes what", text: "Every late account, how late it is and what's been sent." },
      { title: "Reminders on their own", text: "Email and text reminders on the schedule you set, each with a link to pay." },
      { title: "Late fees by your rules", text: "Added on the day you choose, and waived in one click." },
      { title: "Promises tracked", text: "Write down a promise to pay. If the date passes, it's flagged." },
      { title: "Notices and lockouts", text: "Prepared for you, and sent only with your OK." },
      { title: "Card and ACH on file", text: "Automatic payments mean fewer late accounts in the first place." },
    ],
    note:
      "In most yards, collections and booking take the most time, so that's usually where we start.",
    faq: [
      {
        question: "Will it lock tenants out on its own?",
        answer:
          "No. Notices and gate lockouts wait for your OK. Reminders and late fees run on the rules you set.",
      },
      {
        question: "Can tenants pay straight from a reminder?",
        answer: "Yes. Every reminder has a link to pay by card or ACH.",
      },
      QUICKBOOKS,
      COST,
    ],
  },
  {
    slug: "gate-codes",
    group: "problem",
    label: "Gate codes",
    metaTitle: "Gate code management for parking and storage yards",
    metaDescription:
      "A code for every tenant, sent on signup and turned off at move-out, or with your OK when rent is late. No more shared codes passed around.",
    kicker: "Gate codes",
    title: "Gate codes that",
    titleAccent: "keep up with your tenants.",
    intro:
      "Shared codes get passed around, and old tenants keep getting in. I build systems that give every tenant their own code, send it on signup and turn it off when they leave.",
    pains: [
      "One code for everyone, shared with whoever asks.",
      "Former tenants who still know the code.",
      "Changing codes by hand at the keypad.",
      "Locking out a late tenant, then forgetting to let them back in after they pay.",
    ],
    includes: [
      { title: "One code per tenant", text: "Created at signup and sent with the lease." },
      { title: "Off at move-out", text: "The code stops working when the lease ends." },
      { title: "Late rent, your call", text: "A code is suspended only with your OK, and turned back on when they pay." },
      { title: "Works with your gate", text: "If your gate system can connect, codes update on their own. If it can't, you get a short list of codes to change." },
      { title: "Who has access", text: "A list of active codes, matched to tenants, whenever you need it." },
    ],
    note: "You don't need a new gate. Every system is built around the one you already have.",
    faq: [
      {
        question: "Do I need a new gate?",
        answer:
          "No. I build around the gate system you have. If it can't connect, the system tells you which codes to change.",
      },
      {
        question: "Can a code stop working when rent is late?",
        answer: "Yes, but only with your OK, and it comes back on when they pay.",
      },
      COST,
    ],
  },
  {
    slug: "online-booking",
    group: "problem",
    label: "Online booking",
    metaTitle: "Online booking for truck parking, RV and storage yards",
    metaDescription:
      "Customers see what's open, pick a spot on a live map, sign the lease and pay online. The booking, the payment and the paperwork land in one place.",
    kicker: "Online booking",
    title: "Let customers book",
    titleAccent: "without calling you.",
    intro:
      "Most yards still take every booking by phone, and customers who find you at night or on a weekend move on. I build booking that shows what's open, takes the lease and the payment and sends the gate code, all without a call.",
    pains: [
      "Missed calls are missed customers.",
      "What's open lives in your head or a spreadsheet.",
      "Leases printed, signed and scanned.",
      "Payments collected in person or by app transfer.",
    ],
    includes: [
      { title: "Live lot map", text: "Customers see which spots are open and what each one costs." },
      { title: "Pick and pay", text: "They choose a spot and pay by card or ACH in a few minutes." },
      { title: "Lease signed online", text: "Signed on their phone and stored with the customer." },
      { title: "Paperwork at signup", text: "Insurance, registration or DOT numbers, whatever your yard needs." },
      { title: "Gate code sent", text: "The code goes out as soon as the lease is signed and paid." },
      { title: "On your own website", text: "Under your name, not a marketplace that takes a cut." },
    ],
    note:
      "Customers at my own yards book through a system I built, so I know the questions they ask along the way.",
    faq: [
      {
        question: "Is this a marketplace like Neighbor or Truck Parking Club?",
        answer:
          "No. It's your own booking on your own website. Customers pay you directly, with no marketplace fee.",
      },
      {
        question: "Can I approve bookings first?",
        answer:
          "Yes, if you want to. Some owners approve each new customer, and others let bookings go straight through.",
      },
      COST,
    ],
  },
];

export function getYardPage(slug: string) {
  return YARD_PAGES.find((p) => p.slug === slug);
}
