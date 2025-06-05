import React from "react";

const BackgroundCosmic = () => {
  return (
    <div
      className="fixed inset-0 -z-50 bg-[var(--bg-main)] overflow-hidden"
      aria-hidden="true"
    >
      {/* Estrelas brilhantes */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-white twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCosmic;
