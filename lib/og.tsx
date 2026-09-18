import { ImageResponse } from "next/og";

export function brandMark(size: { width: number; height: number }, label = "D") {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070b",
          color: "#d7dbe3",
          fontSize: Math.round(size.width * 0.52),
          fontWeight: 800,
          letterSpacing: "-0.08em",
        }}
      >
        {label}
      </div>
    ),
    size,
  );
}

export function socialCard(size: { width: number; height: number }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05070b",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 90% 10%, rgba(107, 140, 255, 0.2), transparent 55%)",
          color: "#f4f6fb",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#9aa6c7",
            fontWeight: 700,
          }}
        >
          DCRBN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              fontWeight: 560,
              maxWidth: 900,
            }}
          >
            Speed to Scale for AI, blockchain, and quantum.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a8adb9",
              maxWidth: 760,
            }}
          >
            Las Vegas venture studio for infrastructure companies.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
