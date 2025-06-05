import React from "react";

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-transparent shadow-none">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-[var(--cosmic-accent)] text-xl font-bold tracking-wide">
          🌌 CeloHelp
        </div>

        <ul className="flex space-x-6 text-[var(--cosmic-text)] text-sm sm:text-base font-medium">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-[var(--cosmic-accent)] transition duration-200 cursor-pointer"
          >
            Início
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-[var(--cosmic-accent)] transition duration-200 cursor-pointer"
          >
            Sobre
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="hover:text-[var(--cosmic-accent)] transition duration-200 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-[var(--cosmic-accent)] transition duration-200 cursor-pointer"
          >
            Projetos
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-[var(--cosmic-accent)] transition duration-200 cursor-pointer"
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
