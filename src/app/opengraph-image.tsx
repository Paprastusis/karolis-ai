import { ImageResponse } from "next/og";

// Branded Open Graph image, generated at build time. Applies site-wide so
// links pasted into LinkedIn, Slack, iMessage, etc. preview cleanly.
export const alt =
  "Karolis Tamosiunas — I build AI and automation systems that run real businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070612",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#00E5FF",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Karolis Tamosiunas
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 66,
              fontWeight: 600,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            I build AI and automation systems that run real businesses.
          </div>
          <div
            style={{
              display: "flex",
              color: "#9ca3af",
              fontSize: 30,
              marginTop: 28,
            }}
          >
            Full-stack software · custom AI agents · real integrations
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#00E5FF",
            }}
          />
          <div style={{ display: "flex", color: "#d1d5db", fontSize: 26 }}>
            karolis.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
