import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { FeaturedWork } from "@/components/featured-work";
import { ServicesTeaser } from "@/components/services-teaser";
import { AboutTeaser } from "@/components/about-teaser";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedWork />
      <ServicesTeaser />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
