// Copy for the /yards landing page (where the Meta ads send people).
// Keep it short and in Karolis's own voice, and keep every claim true.

import type { FaqItem } from "@/content/faq";

export const LOCATION_LINE = "Based in Phoenix, AZ · Remote across the US";

// The three problems the ads open with, and what changes.
export const PROBLEMS = [
  {
    problem: "Every new customer is 10 steps by hand.",
    fix: "They book, sign and pay online. The rest runs itself.",
  },
  {
    problem: "Six apps that don't talk to each other.",
    fix: "One login. Every customer, spot, lease and payment in one place.",
  },
  {
    problem: "Who hasn't paid this month?",
    fix: "Every late account on one screen. Reminders go out on their own, and notices and lockouts wait for your OK.",
  },
];

// What a yard system can include. Pick what you need.
export const FEATURES = [
  { icon: "LayoutGrid", title: "Online booking", text: "Customers pick a spot on a live lot map." },
  { icon: "PenLine", title: "E-sign leases", text: "Signed online, stored with the customer." },
  { icon: "CreditCard", title: "Card and ACH payments", text: "Monthly billing that collects itself." },
  { icon: "RefreshCw", title: "QuickBooks sync", text: "Invoices and payments land in your books." },
  { icon: "BellRing", title: "Collections", text: "Late accounts, reminders and promises tracked." },
  { icon: "KeyRound", title: "Gate codes", text: "Sent on signup, turned off with your OK." },
  { icon: "ShieldCheck", title: "Insurance on file", text: "Certificates collected and tracked." },
  { icon: "UserRound", title: "Customer portal", text: "Tenants see invoices and pay on their own." },
  { icon: "ChartColumn", title: "Owner reports", text: "Occupancy and revenue for every yard." },
] as const;

export const STEPS = [
  { title: "Free call", text: "You walk me through how your yard runs today." },
  { title: "Fixed quote", text: "A clear plan and a fixed price before any work starts." },
  { title: "Built for your yard", text: "I build it around your process and get you running on it." },
];

export const YARDS_FAQ: FaqItem[] = [
  {
    question: "What kinds of yards do you build for?",
    answer:
      "Truck and trailer parking, outdoor storage, RV and boat storage, and similar lots that rent spaces month to month.",
  },
  {
    question: "Do I have to switch everything at once?",
    answer:
      "No. We start with whatever costs you the most time, usually booking or collections, and add the rest step by step.",
  },
  {
    question: "Does it work with QuickBooks?",
    answer:
      "Yes. Invoices and payments sync to QuickBooks, so your books stay where your accountant expects them.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Less than most owners expect, and it replaces apps you pay for every month. Every build gets a fixed quote before work starts.",
  },
  {
    question: "Do you only work with yards in Phoenix?",
    answer:
      "No. I'm based in Phoenix, AZ, and I work remotely with yards anywhere in the US.",
  },
];
