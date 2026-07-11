import { ImageResponse } from "next/og";

export const alt = "Haxxcel Solutions — AI Automation & Custom Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #111844 0%, #171f4d 55%, #2b3566 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              border: "2px solid rgba(114,136,174,0.5)",
              color: "#7288ae",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            H
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 600,
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Haxxcel Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            We build systems that work for you.
          </div>
          <div style={{ color: "#7288ae", fontSize: "30px", fontWeight: 500 }}>
            AI Automation &amp; Custom Software Development
          </div>
        </div>

        <div
          style={{
            color: "rgba(234,224,207,0.75)",
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          haxxcelsolutions.com
        </div>
      </div>
    ),
    { ...size },
  );
}
