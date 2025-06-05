import React from "react";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="relative w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10 z-10"
    >
      {/* Foto de perfil */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/meu-avatar.jpg" // Coloque a imagem em /public/meu-avatar.jpg
          alt="Minha Foto"
          className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-[var(--cosmic-accent)]"
        />
      </div>

      {/* Texto + Botões */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-left">
        <h2 className="text-3xl sm:text-4xl font-bold glow-text">
          Sobre Mim
        </h2>
        <p className="text-lg leading-relaxed">
          Sou estudante de Análise e Desenvolvimento de Sistemas com foco em Back-End. Trabalho com Java, Spring Boot e bancos de dados relacionais. Tenho experiência com suporte técnico e desenvolvimento de APIs em projetos pessoais. Busco crescer como desenvolvedor e contribuir com soluções práticas e eficientes.
        </p>

        {/* Botões */}
        <div className="flex gap-4 mt-4">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-[var(--cosmic-accent)] text-[var(--cosmic-bg)] font-medium transition hover:brightness-125 shadow-md"
          >
            Entre em Contato
          </a>

          <a
            href="/Curriculo_atualizado.pdf"
            download="Curriculo_Marcelo_Henrique_Pacobello.pdf"
            className="px-6 py-2 rounded-full border border-[var(--cosmic-accent)] text-[var(--cosmic-accent)] font-medium transition hover:brightness-125 shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
