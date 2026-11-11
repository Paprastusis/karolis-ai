## karolis.ai

Personal brand site for Karolis Tamosiunas — a self-taught engineer and founder who builds AI and automation systems that run real businesses. The site is a portfolio of shipped products (a multi-tenant SaaS, the software that runs a 3-location storage business, and several trucking and operations tools) and a services offer for companies that want similar systems built. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and framer-motion.

### Develop

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

Project content lives in `src/content/projects.ts` (single source of truth for the Work section). FAQ content lives in `src/content/faq.ts`.

### Environment variables (set in Vercel)

| Variable | What it does |
|---|---|
| `RESEND_API_KEY` | Delivers contact-form and agent leads by email. |
| `ANTHROPIC_API_KEY` | Turns on the intake agent. |
| `NEXT_PUBLIC_BOOKING_URL` | Optional. Overrides the booking page link set in `src/lib/site.ts`, which the "Book a free call" buttons open. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Numeric Meta Pixel ID. Loads the Pixel and reports page views, `Lead`, and `Schedule` events. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token from Google Search Console's "HTML tag" verification method. |

The canonical domain is `https://www.karolis.ai` (see `src/lib/site.ts`); the apex redirects to it in Vercel.
