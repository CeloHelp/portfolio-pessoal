import { FaJava } from "react-icons/fa";

const CurrentLearning = () => {
  return (
    <section
      id="current-learning"
      className="w-full max-w-4xl mx-auto px-6 py-20 z-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold glow-text text-center mb-10">
        📚 Aprendizado Atual
      </h2>

      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 text-[var(--cosmic-text)] shadow-md flex flex-col sm:flex-row items-center gap-6 float-soft">
        {/* Ícone do Java com brilho suave */}
        <div className="text-[var(--cosmic-accent)] text-6xl animate-glow-soft">
          <FaJava />
        </div>

        {/* Conteúdo do aprendizado */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Estudando Testes Unitários com Java
          </h3>
          <p className="text-sm sm:text-base opacity-80">
            Aprofundando em <strong>JUnit</strong> e <strong>Mockito</strong> para escrever testes automatizados e confiáveis,
            garantindo qualidade e robustez nos sistemas que desenvolvo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentLearning;
