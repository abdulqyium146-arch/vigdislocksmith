import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Shackle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 46,
              border: "13px solid #dc2626",
              borderBottom: "none",
              borderRadius: "36px 36px 0 0",
              marginBottom: -2,
            }}
          />
          {/* Lock body */}
          <div
            style={{
              width: 106,
              height: 74,
              background: "#dc2626",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Keyhole circle */}
            <div
              style={{
                width: 22,
                height: 22,
                background: "#0f172a",
                borderRadius: "50%",
                marginBottom: -6,
              }}
            />
            {/* Keyhole slot */}
            <div
              style={{
                width: 10,
                height: 18,
                background: "#0f172a",
                borderRadius: 5,
                marginTop: 2,
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
