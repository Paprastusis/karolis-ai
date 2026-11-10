import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { MetaPixel } from "@/components/meta-pixel";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Paste the Google Search Console "HTML tag" token into
// NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to verify the site.
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  title: {
    default:
      "Karolis Tamosiunas — AI and automation systems for real businesses",
    template: "%s — Karolis Tamosiunas",
  },
  description:
    "Founder and full-stack engineer. I build custom software, AI agents, and automation for real businesses, including my own. Based in Phoenix, available remote.",
  openGraph: {
    title:
      "Karolis Tamosiunas — AI and automation systems for real businesses",
    description:
      "Full-stack software, custom AI agents, and the integrations that tie it all together. Products that run real businesses.",
    url: SITE_URL,
    siteName: "Karolis Tamosiunas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karolis Tamosiunas — AI and automation systems for real businesses",
    description:
      "Full-stack software, custom AI agents, and the integrations that tie it all together. Products that run real businesses.",
  },
};

// Structured data so search engines and AI assistants connect the domain to
// the person, the service he sells, and the entry offer.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#karolis`,
      name: "Karolis Tamosiunas",
      url: SITE_URL,
      image: `${SITE_URL}/karolis.jpg`,
      jobTitle: "Founder and Full-Stack Engineer",
      email: "mailto:karolistamas@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/karolis-tamosiunas/",
        "https://github.com/Paprastusis",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Karolis Tamosiunas: custom software and AI automation",
      url: SITE_URL,
      image: `${SITE_URL}/karolis.jpg`,
      description:
        "Custom software, AI agents, and automation for businesses that run on manual work: booking, invoicing, document handling, reporting, customer portals, and QuickBooks and Stripe integrations.",
      founder: { "@id": `${SITE_URL}/#karolis` },
      email: "mailto:karolistamas@gmail.com",
      telephone: "+16027673078",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        addressCountry: "US",
      },
      areaServed: "US",
      knowsAbout: [
        "Business process automation",
        "AI agents",
        "Custom business software",
        "QuickBooks integration",
        "Stripe integration",
        "Storage and parking yard management software",
      ],
      makesOffer: {
        "@type": "Offer",
        name: "The Automation Blueprint",
        description:
          "A fixed-price, fixed-scope plan delivered in one week: a map of how work flows through the business, automation opportunities ranked with ROI math, a build-or-buy recommendation for each, and a fixed quote for anything worth building.",
        price: "999",
        priceCurrency: "USD",
        url: `${SITE_URL}/services#blueprint`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
