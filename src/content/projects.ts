// Single source of truth for every project shown on the site.
// The /work page renders all of these; the homepage renders the `featured` ones.
// Edit data here, not JSX, to add or update a project.

export type Project = {
  slug: string;
  name: string;
  /** Canonical one-line description, used on the Work page. */
  tagline: string;
  /** Shorter tagline used on the homepage featured cards (falls back to `tagline`). */
  homeTagline?: string;
  /** e.g. "Live", "In production since 2023", "MVP", "In pilot". */
  status: string;
  liveUrl?: string;
  problem?: string;
  whatIBuilt: string;
  stack?: string[];
  /** Shown on the homepage and rendered as a larger card. */
  featured: boolean;
  /** Smaller, lighter card (side projects). */
  light?: boolean;
};

export const projects: Project[] = [
  {
    slug: "flux-sync",
    name: "Flux Sync",
    tagline: "Multi-tenant SaaS for storage-yard operators.",
    homeTagline: "Multi-tenant SaaS for storage operators.",
    status: "Live",
    liveUrl: "https://fluxsync.io",
    problem:
      "Storage and parking yards run on spreadsheets and paper. I'd already built software for my own yards, so I turned it into a product other operators could use. The approach is “sync, don't replace” — it connects to the tools they already use like Stripe and QuickBooks instead of forcing a switch.",
    whatIBuilt:
      "A full multi-tenant platform where each business is its own isolated tenant. Online booking with an embeddable widget, AI document parsing that tracks expirations, a customer portal, subscription billing, and a separate AI service for parsing and insights. Around 42,000 lines of code, plus a security audit I ran myself.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Stripe Connect",
      "Python/FastAPI",
      "Gemini",
    ],
    featured: true,
  },
  {
    slug: "paddock-pms",
    name: "Paddock PMS",
    tagline: "The software that runs a storage business.",
    homeTagline: "The software that runs a 3-location storage business.",
    status: "In production since 2023",
    liveUrl: "https://paddockparking.com",
    problem:
      "Running multiple storage locations by hand means endless paperwork, manual invoicing, and lost bookings. I built the entire software backbone so the business runs itself.",
    whatIBuilt:
      "12 connected apps covering booking, digital leases with e-signatures, automated recurring invoicing, Stripe payments, two-way QuickBooks sync, gate codes, and an investor data room for due diligence. The headline piece: one payment automatically creates the customer, assigns their spots, generates a gate code, builds the invoice and lease, sends the emails, and syncs the books. It's still running every day across 3 locations.",
    stack: [
      "Django",
      "Python",
      "PostgreSQL",
      "Stripe",
      "QuickBooks",
      "Google Cloud Storage",
      "Internal API for AI agents",
    ],
    featured: true,
  },
  {
    slug: "carrier-grade",
    name: "CarrierGrade",
    tagline: "Carrier ratings for truck drivers.",
    homeTagline: "Carrier ratings for truck drivers, built on millions of safety records.",
    status: "MVP",
    liveUrl: "https://carrier-grade.vercel.app",
    problem:
      "Carriers screen every driver through paid databases, but drivers pick who to work for based on a recruiter's word. CarrierGrade flips it: search any carrier and get an A to F grade built from safety data, live market signals, and verified reviews.",
    whatIBuilt:
      "A pipeline that loads around 4.45 million carriers and 877,000 safety records, and a scoring engine designed to be fair (it shrinks tiny sample sizes so two clean inspections don't look perfect, and compares carriers to others their own size). I backtested it against history and it would have flagged Convoy and Yellow as high risk months before they collapsed.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Python",
      "FMCSA & SONAR data",
    ],
    featured: true,
  },
  {
    slug: "fuel-iq",
    name: "FuelIQ",
    tagline: "Fuel savings for trucking fleets.",
    status: "In pilot with a partner fleet",
    problem:
      "Even fleets with a strict fuel policy leave money on the table, because prices swing a lot between stops on the same route. FuelIQ tells dispatchers the cheapest reachable stop and tracks whether drivers actually take it.",
    whatIBuilt:
      "A recommendation engine that accounts for how loaded the truck is, hours-of-service limits, truck-safe routing, and cheaper fuel across state lines, while always keeping enough range so a truck is never stranded. The savings number is deliberately honest and only counts money the app actually saved.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Next.js",
      "HERE Maps",
      "Twilio",
      "Samsara",
    ],
    featured: false,
  },
  {
    slug: "openclaw-lani",
    name: "OpenClaw / Lani",
    tagline: "Business-ops automation.",
    status: "In use",
    whatIBuilt:
      "A self-hosted AI agent I built to handle the routine parts of running my businesses. It connects to Gmail, Google Calendar and Drive, GoHighLevel, and QuickBooks, and takes care of reporting, invoice workflows, and routine communication.",
    featured: false,
    light: true,
  },
  {
    slug: "workstyle-insights",
    name: "WorkStyle Insights",
    tagline: "Team-fit assessment.",
    status: "Live",
    liveUrl: "https://workstyle-insights.vercel.app",
    whatIBuilt:
      "A DISC-based assessment that shows how someone works and how well they'd fit with a team. A quick build in a different domain from the rest.",
    featured: false,
    light: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
