import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
  title:
    "Karolis Tamosiunas — I build AI and automation systems that run real businesses.",
  description:
    "Self-taught engineer and founder. I build full-stack software, custom AI agents, and the integrations that tie it all together, and I've shipped products that run real businesses.",
  openGraph: {
    title:
      "Karolis Tamosiunas — I build AI and automation systems that run real businesses.",
    description:
      "Full-stack software, custom AI agents, and the integrations that tie it all together. Products that run real businesses.",
    url: "https://karolis.ai",
    siteName: "Karolis Tamosiunas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karolis Tamosiunas — I build AI and automation systems that run real businesses.",
    description:
      "Full-stack software, custom AI agents, and the integrations that tie it all together. Products that run real businesses.",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
