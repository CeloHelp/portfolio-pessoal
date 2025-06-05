import React from "react";
import { FaGithub } from "react-icons/fa";



const projects = [
  {
    name: "Cardápio Digital",
    description:
      "Sistema completo para restaurantes e lanchonetes com painel de controle, pedidos em tempo real e atualização automática de status.",
    status: "Em andamento",
    link: "https://github.com/CeloHelp/cardapio-digital",
    techs: ["Java", "Spring Boot", "MySQL", "React", "Tailwind CSS"],
  },
  {
    name: "Movimentação Financeira",
    description:
      "Projeto finalizado que permite registrar entradas, saídas, visualizar saldo, gerar relatórios e organizar a gestão financeira pessoal ou empresarial.",
    status: "Finalizado",
    link: "https://github.com/CeloHelp/movimentacao-financeira",
    techs: ["Java", "Spring Boot", "MySQL", "React"],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 py-20 z-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold glow-text text-center mb-10">
        🚀 Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 text-[var(--cosmic-text)] shadow-md float-soft hover:scale-[1.02] transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold glow-text">
                {project.name}
              </h3>
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  project.status === "Finalizado"
                    ? "bg-green-500/30 text-green-300"
                    : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm opacity-80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs">
              {project.techs.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-2 py-1 rounded-full bg-[var(--cosmic-accent)]/20 text-[var(--cosmic-accent)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-[var(--cosmic-accent)] hover:underline"
              title="Ver no GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
