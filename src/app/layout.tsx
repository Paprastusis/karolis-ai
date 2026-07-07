import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://karolis.ai"),
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
    url: "https://karolis.ai",
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

// Structured data so search engines connect the domain to the person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Karolis Tamosiunas",
  url: "https://karolis.ai",
  image: "https://karolis.ai/karolis.jpg",
  jobTitle: "Founder and Full-Stack Engineer",
  email: "mailto:karolistamas@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/karolis-tamosiunas/",
    "https://github.com/Paprastusis",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
