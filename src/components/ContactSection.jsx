import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaCheckCircle } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fjg6z4m",
        "template_o7i65e7",
        formRef.current,
        "UACPWPYwxyAJQdg7I"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 4000);
        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <h2 className="text-3xl sm:text-4xl font-bold glow-text text-center mb-10">
        ✉️ Entre em Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card de Informações */}
        <div className="bg-transparent rounded-xl p-6 text-[var(--cosmic-text)] shadow-none float-soft">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Informações de Contato
          </h3>

          <div className="flex items-center gap-3 mb-4 text-lg">
            <FiMail className="text-[var(--cosmic-accent)] text-xl" />
            <span><strong>Email:</strong> marcelopacobello@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-4 text-lg">
            <FiPhone className="text-[var(--cosmic-accent)] text-xl" />
            <span><strong>Telefone:</strong> (19) 98213-0720</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FiMapPin className="text-[var(--cosmic-accent)] text-xl" />
            <span><strong>Localização:</strong> São Sebastião da Grama, SP - Brasil</span>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-center mb-4">
              Conecte-se Comigo
            </h4>
            <div className="flex justify-center gap-5 text-[var(--cosmic-accent)] text-2xl">
              <a href="https://www.linkedin.com/in/marcelo-henrique-pacobello-27550a275/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/CeloHelp" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/celohelp?igsh=MWhyZzFiZ3ZkbHg1NQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://discord.com/users/marselo1313" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>

        {/* Formulário com EmailJS */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 text-[var(--cosmic-text)] shadow-md float-soft">
          <h3 className="text-xl font-semibold mb-4">Envie sua Mensagem</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Seu nome"
              required
              className="p-3 rounded bg-white/5 border border-white/10 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--cosmic-accent)]"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Seu email"
              required
              className="p-3 rounded bg-white/5 border border-white/10 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--cosmic-accent)]"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              required
              className="p-3 rounded bg-white/5 border border-white/10 text-sm text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--cosmic-accent)]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-6 py-2 rounded bg-[var(--cosmic-accent)] text-[var(--cosmic-bg)] font-medium hover:brightness-125 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-[var(--cosmic-bg)]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Envie sua Mensagem"
              )}
            </button>

            {sent && (
              <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm bg-white/5 p-2 rounded shadow-inner animate-fade-in">
                <FaCheckCircle className="text-green-400" />
                Mensagem enviada com sucesso! 🚀
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
