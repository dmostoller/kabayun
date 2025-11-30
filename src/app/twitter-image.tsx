import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kabayun - Psytrance Producer & DJ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a12 0%, #12101f 50%, #0a0a12 100%)",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Cosmic glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "50%",
            background: "radial-gradient(ellipse, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "10%",
            width: "60%",
            height: "40%",
            background: "radial-gradient(ellipse, rgba(34, 211, 238, 0.2) 0%, transparent 70%)",
          }}
        />

        {/* Profile photo with glow */}
        <div
          style={{
            display: "flex",
            position: "relative",
            marginBottom: 32,
          }}
        >
          {/* Glow behind photo */}
          <div
            style={{
              position: "absolute",
              inset: -16,
              background: "linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(34, 211, 238, 0.6))",
              borderRadius: "50%",
              filter: "blur(24px)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.kabayun.com/22cc-Kabayun.jpg"
            alt="Kabayun"
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              border: "3px solid rgba(147, 51, 234, 0.5)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f0f0f5",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Kabayun
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(240, 240, 245, 0.6)",
            letterSpacing: "0.05em",
          }}
        >
          Drop into the momentary
        </div>

        {/* Subtle branding */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 18,
            color: "rgba(147, 51, 234, 0.7)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Psytrance Producer & DJ
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
