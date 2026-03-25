import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { WhatIBuild } from "@/components/what-i-build";
import { CaseStudy } from "@/components/case-study";
import { HowItWorks } from "@/components/how-it-works";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <WhatIBuild />
      <CaseStudy />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
