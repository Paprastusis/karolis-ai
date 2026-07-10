import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { FeaturedWork } from "@/components/featured-work";
import { AgentShowcase } from "@/components/agent-showcase";
import { ServicesTeaser } from "@/components/services-teaser";
import { AboutTeaser } from "@/components/about-teaser";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  // Same gate as /contact: the demo section exists only when the key does.
  const agentEnabled = Boolean(process.env.ANTHROPIC_API_KEY);

  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedWork />
      {agentEnabled && <AgentShowcase />}
      <ServicesTeaser />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
