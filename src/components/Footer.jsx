import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-20 bg-black/50 backdrop-blur-md border-t border-white/10 py-6 px-4 text-[var(--cosmic-text)] z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-70 text-center sm:text-left">
          © {new Date().getFullYear()} CeloHelp • Todos os direitos reservados
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded bg-[var(--cosmic-accent)] text-[var(--cosmic-bg)] font-medium shadow-md hover:brightness-125 transition"
        >
          <FaArrowUp /> Voltar ao topo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
