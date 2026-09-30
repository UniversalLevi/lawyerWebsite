import { ImageResponse } from "next/og";
import { lawyerProfile } from "@/content/lawyer";

export const alt = "Advocate Manoj Kumar Singh, S&M Law Firm, Howrah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b1626",
          color: "#f4efe6",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c4a35a",
          }}
        >
          {lawyerProfile.firm.name}
        </div>
        <div
          style={{
            width: 56,
            height: 1,
            background: "#c4a35a",
            margin: "28px 0",
          }}
        />
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.1,
            fontFamily: "Georgia, serif",
            maxWidth: 980,
          }}
        >
          {lawyerProfile.displayName}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#d7d0c4" }}>
          {lawyerProfile.headline}
        </div>
        <div style={{ marginTop: 8, fontSize: 24, color: "#c4a35a" }}>
          Howrah, West Bengal
        </div>
      </div>
    ),
    { ...size },
  );
}
