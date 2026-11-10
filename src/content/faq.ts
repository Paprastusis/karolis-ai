// Questions shown on the Services page and published as FAQ structured data,
// so search engines and AI assistants can quote the answers directly.
// Keep every answer factual and consistent with the rest of the site.

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "What does Karolis build?",
    answer:
      "Custom software and AI automation for businesses that still run on manual work: business management software, online booking and customer portals, automated invoicing and payments, QuickBooks and Stripe integrations, and AI agents that handle documents, follow-ups, and reporting.",
  },
  {
    question: "Who is this for?",
    answer:
      "Owners of operations-heavy businesses such as storage and parking yards, trucking companies, and back offices that run on spreadsheets, paper, and software that doesn't talk to each other. Karolis runs his own storage business on software he built, so he starts from how the operation works, not from the code.",
  },
  {
    question: "What is the Automation Blueprint?",
    answer:
      "A fixed-price, fixed-scope first step. For $999, delivered in one week, you get a map of how work flows through your business, automation opportunities ranked with ROI math, a build-or-buy recommendation for each one, and a fixed quote for anything worth building. It is yours to keep, with no obligation to build.",
  },
  {
    question: "How much does a custom build cost?",
    answer:
      "It depends on the scope, so every build gets a fixed quote before work starts. The usual path is the $999 Automation Blueprint, which ends with that quote. If you go ahead with the build, the $999 comes off the price.",
  },
  {
    question: "Do I have to replace QuickBooks, Stripe, or my other tools?",
    answer:
      "No. The systems Karolis builds connect to the tools you already use, including two-way QuickBooks sync and Stripe payments, so your team keeps working where it already works.",
  },
  {
    question: "Where is Karolis based, and does he work remotely?",
    answer:
      "Karolis Tamosiunas is based in Phoenix, Arizona, and works with clients remotely.",
  },
];
