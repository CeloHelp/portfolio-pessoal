import React from "react";
import StarBackground from "@/components/StarBackground"; // Ajuste o caminho se necessário

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 z-10">
      {/* Fundo com estrelas */}
      <StarBackground />

      {/* Título */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold glow-text animate-fade-in">
        Transformando Ideias em Realidade Digital 🚀
      </h1>

      {/* Subtítulo */}
      <p className="mt-6 text-lg sm:text-xl max-w-2xl text-[var(--cosmic-text)] animate-fade-in delay-200">
        Sou um desenvolvedor apaixonado por criar experiências incríveis na web, com foco em performance, design e inovação intergaláctica.
      </p>

      {/* Botão de ação */}
      <a href="#projects">
      <button className="mt-10 px-6 py-3 rounded text-[var(--cosmic-bg)] bg-[var(--cosmic-accent)] hover:brightness-125 transition font-medium shadow-md animate-fade-in delay-300">
       Veja Meu Trabalho
      </button>
</a>

      <div className="mt-16 flex flex-col items-center animate-bounce z-10">
      <span className="text-sm text-[var(--cosmic-accent)] mb-1 tracking-wide">
    Scroll
      </span>
      <svg
       className="w-5 h-5 text-[var(--cosmic-accent)]"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       viewBox="0 0 24 24"
  >
     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>
    </section>

  );
};

export default HeroSection;
