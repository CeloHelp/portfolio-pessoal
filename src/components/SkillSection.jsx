import React, { useState } from "react";

const skills = [
  { name: "HTML", category: "frontend", level: 25 },
  { name: "CSS", category: "frontend", level: 25 },
  { name: "JavaScript", category: "frontend", level: 20 },
  { name: "Angular", category: "frontend", level: 15 },
  { name: "Spring Boot", category: "backend", level: 40 },
  { name: "Java", category: "backend", level: 40 },
  { name: "MySQL", category: "backend", level: 40 },
  { name: "PostgreSQL", category: "backend", level: 35 },
  { name: "AWS", category: "backend", level: 20 },
  { name: "API Rest", category: "backend", level: 50 },
  { name: "Git", category: "tools", level: 50 },
  { name: "GitHub", category: "tools", level: 60 },
  { name: "Docker", category: "tools", level: 10 },
  { name: "Figma", category: "tools", level: 65 },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Front-end", value: "frontend" },
  { label: "Back-end", value: "backend" },
  { label: "Tools", value: "tools" },
];

const SkillsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <h2 className="text-3xl sm:text-4xl font-bold glow-text text-center mb-10">
        Skills
      </h2>

      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`px-4 py-2 rounded-full border font-medium transition shadow-md text-sm sm:text-base ${
              filter === option.value
                ? "bg-[var(--cosmic-accent)] text-[var(--cosmic-bg)]"
                : "border-[var(--cosmic-accent)] text-[var(--cosmic-accent)]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="w-full max-w-[180px] h-24 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-sm sm:text-base text-[var(--cosmic-text)] shadow-md transition hover:scale-105 cursor-pointer p-3 flex flex-col justify-center animate-glow-soft"
          >
            <span className="mb-2 text-center font-medium">{skill.name}</span>

            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--cosmic-accent)] transition-all duration-700 ease-in-out rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-1 text-xs text-[var(--cosmic-text)]">
              <span className="opacity-60">Nível</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
