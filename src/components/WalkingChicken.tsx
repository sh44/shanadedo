import React, { useState } from "react";
import chicken from "../assets/chicken.svg";
import { useTranslation } from "react-i18next";

interface WalkingChickenProps {
  speed?: number; // secondi per attraversare lo schermo
  top?: string; // distanza dall'alto
}

export default function WalkingChicken({ speed = 10, top = "60%" }: WalkingChickenProps) {
  const [paused, setPaused] = useState(false);
  const { t } = useTranslation();

  const tiltDuration = Math.max(0.6, speed / 8); // più veloce → oscillazione più rapida

  return (
    <div
      style={{
        position: "fixed",
        top: top,
        right: "-150px",
        animation: `walkLeft ${speed}s linear infinite`,
        animationPlayState: paused ? "paused" : "running",
        zIndex: 200,
      }}
    >
      <img
        src={chicken}
        alt={t("altText.chicken")}
        style={{
          width: "120px",
          transform: "scaleX(-1)", // guarda a sinistra
          cursor: paused ? "grab" : "pointer",
          animation: paused
            ? `petting 0.4s ease-in-out infinite`
            : `bounce 0.8s ease-in-out infinite, tilt ${tiltDuration}s ease-in-out infinite`,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      />
      <style>
        {`
          @keyframes walkLeft {
            0% { right: -150px; }
            100% { right: 100vw; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(0deg); }
          }
          @keyframes tilt {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(4deg); }
            75% { transform: rotate(-4deg); }
          }
          @keyframes petting {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-2px) rotate(3deg); }
          }
        `}
      </style>
    </div>
  );
}
