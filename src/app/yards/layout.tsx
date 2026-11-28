import { MobileCtaBar } from "@/components/mobile-cta-bar";

// Every yard page gets the call/book bar on phones, where the ad clicks come from.
export default function YardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MobileCtaBar />
    </>
  );
}
