import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";

// Loads the Google tag for Google Ads so ad clicks can be matched to booked
// calls. The conversion itself is sent from trackEvent in lib/track.ts.
export function GoogleTag() {
  if (!GOOGLE_ADS_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}');`}
      </Script>
    </>
  );
}
