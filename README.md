## karolis.ai

Personal brand site for Karolis Tamosiunas — a self-taught engineer and founder who builds AI and automation systems that run real businesses. The site is a portfolio of shipped products (a multi-tenant SaaS, the software that runs a 3-location storage business, and several trucking and operations tools) and a services offer for companies that want similar systems built. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and framer-motion.

### Develop

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

Project content lives in `src/content/projects.ts` (single source of truth for the Work section). Booking goes through `/book-call`; paste the Google Calendar embed URL into `GOOGLE_BOOKING_URL` in `src/app/book-call/page.tsx` to go live.
