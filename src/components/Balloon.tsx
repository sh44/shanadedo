import React from "react";

interface BalloonProps {
  side?: "left" | "right";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Balloon({ side = "left", children, style }: BalloonProps) {
  const isLeft = side === "left";

  return (
    <div
      style={{
        position: "relative",
        background: "#1f2937",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "16px",
        fontFamily: '"Courier Prime", monospace',
        maxWidth: "70%",
        margin: "1rem",
        alignSelf: isLeft ? "flex-start" : "flex-end",
        ...style,
      }}
    >
      {children}

      {/* Pipetta */}
      {isLeft ? (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          style={{
            position: "absolute",
            bottom: "0px",
            left: "-12px",
            transform: "rotate(270deg)",
            transformOrigin: "0 50%",
          }}
        >
          <path
            d="M0,0 C4,0 8,8 12,8 L12,16 L0,16 Z"
            fill="#1f2937"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          style={{
            position: "absolute",
            bottom: "23px",
            right: "-12px",
            transform: "scaleX(-1) rotate(270deg)",
            transformOrigin: "100% 50%",
          }}
        >
          <path
            d="M0,0 C4,0 8,8 12,8 L12,16 L0,16 Z"
            fill="#1f2937"
          />
        </svg>
      )}
    </div>
  );
}
