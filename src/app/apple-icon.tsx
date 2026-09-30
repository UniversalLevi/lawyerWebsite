import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1626",
          color: "#c4a35a",
          fontSize: 52,
          fontFamily: "Georgia, serif",
        }}
      >
        SM
      </div>
    ),
    { ...size },
  );
}
