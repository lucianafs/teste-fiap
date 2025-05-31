import React, { useEffect, useState } from "react";
import styles from "../styles/faq.module.scss";

const faqs = [
  {
    question: "QUANDO POSSO ME MATRICULAR?",
    answer: "Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever."
  },
  {
    question: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
    answer: "Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica."
  },
  {
    question: "QUAIS OS PRÉ-REQUISITOS?",
    answer: "Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT."
  },
  {
    question: "QUAL A DURAÇÃO DOS CURSOS?",
    answer: "De 6 a 42 horas."
  },
  {
    question: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
    answer: "Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações."
  },
  {
    question: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
    answer: "Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma."
  }
];

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleEnter = (idx: number) => {
    if (!isMobile) setActiveIndex(idx);
  };
  const handleLeave = () => {
    if (!isMobile) setActiveIndex(null);
  };
  const handleClick = (idx: number) => {
    if (isMobile) setActiveIndex(activeIndex === idx ? null : idx);
  };

	return (
		<section className={styles.faq}>
			<div className={styles.wrapper}>

				<div className={styles.header}>
					<h1 className={styles.title}>FAQ</h1>
					<h2 className={styles.subtitle}>Dúvidas Frequentes</h2>
				</div>

				<div className={styles.faqContent}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
                onMouseEnter={() => handleEnter(index)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(index)}
                tabIndex={0}
                role="button"
              >
                <h3 className={styles.question}>{faq.question}</h3>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
				</div>

			</div>
		</section>
	);
};

export default FAQ;