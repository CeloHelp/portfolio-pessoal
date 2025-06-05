import React from "react";

const NebulaOverlay = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
      {/* Névoa azulada radial suave */}
      <div
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(80,180,255,0.12) 0%, rgba(80,180,255,0.04) 40%, transparent 80%)",
          mixBlendMode: "screen",
          filter: "blur(36px)",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />

      {/* Planetas translúcidos como círculos coloridos */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <circle cx="20%" cy="30%" r="50" fill="#7ecfff" opacity="0.08" />
        <circle cx="65%" cy="80%" r="60" fill="#f7d774" opacity="0.06" />
        <circle cx="85%" cy="55%" r="40" fill="#e07fff" opacity="0.07" />
        <circle cx="35%" cy="65%" r="30" fill="#7fffc1" opacity="0.05" />
      </svg>
    </div>
  );
};

export default NebulaOverlay;
