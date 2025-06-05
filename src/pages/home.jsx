import StarBackground from "../components/StarBackground";
import NebulaOverlay from "../components/NebulaOverlay";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillSection"; 
import CurrentLearning from "../components/CurrentLearning";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[var(--cosmic-bg)] text-[var(--cosmic-text)] overflow-hidden"
    >
      {/* Elementos de fundo */}
      <StarBackground />
      <NebulaOverlay />

      {/* Navegação */}
      <NavBar />

      {/* Conteúdo principal */}
      <main className="flex flex-col items-center justify-center px-4 py-20 z-10 relative">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="current-learning">
          <CurrentLearning />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default HomePage;
