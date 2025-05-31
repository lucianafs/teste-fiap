import React, { useEffect, useState } from "react";
import styles from "../styles/cursos.module.scss";

const cursosData = [
  {
    id: 1,
    title: "Tecnologia",
    courseTitle: "Tecnologia",
    description: `
      <ul>
        <li>
          Big Data Ecosystem
          <span>remoto • live</span>
        </li>
        <li>
          Creating Dashboards for BI
          <span>remoto • live</span>
        </li>
        <li>
          Big Data Science - Machine Learning & Data Mining
          <span>remoto • live + multimídia </span>
        </li>
        <li>
          Storytelling
          <span>remoto • live</span>
        </li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Inovação",
    courseTitle: "Inovação",
    description: `
      <ul>
        <li>
          UX
          <span>digital</span>
        </li>
        <li>
          UX Writing
          <span>live</span>
        </li>
        <li>
          Storytelling para Negócios
          <span>live</span>
        </li>
        <li>
          Chatbots
          <span>live</span>
        </li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Negócios",
    courseTitle: "Negócios",
    description: `
      <ul>
        <li>
          Agile Culture
          <span>digital</span>
        </li>
        <li>
          DPO Data Protection Officer
          <span>live</span>
        </li>
        <li>
          IT Business Partner
          <span>live</span>
        </li>
        <li>
          Perícia Forense Computacional
          <span>live</span>
        </li>
      </ul>
    `,
  },
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

const Cursos: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const isMobile = useIsMobile();

  return (
    <section className={styles.cursos}>
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <h1 className={styles.title}>Cursos</h1>
          <h2 className={styles.subtitle}>Cursos de Curta Duração</h2>
        </div>
        
        <nav className={styles.menu}>
          {cursosData.map((course, idx) => (
            <div
              key={course.id}
              className={`${styles.menuItem} ${activeIndex === idx ? styles.active : ""}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              tabIndex={0}
              role="button"
            >
              <div className={styles.menuItemTitle}>
                {course.title}
                <div className={`${styles.button} ${activeIndex === idx ? styles.buttonActive : ""}`}></div>
              </div>
              {isMobile && activeIndex === idx && (
                <div className={styles.courseContent}>
                  <div
                    className={styles.courseDescription}
                    dangerouslySetInnerHTML={{ __html: course.description }}
                  />
                </div>
              )}
            </div>
          ))}
        </nav>

        {!isMobile && activeIndex !== null && (
          <div className={styles.courseContent}>
            <h2 key={activeIndex} className={styles.courseTitle}>{cursosData[activeIndex].courseTitle}</h2>
            <div
              className={styles.courseDescription}
              dangerouslySetInnerHTML={{ __html: cursosData[activeIndex].description }}
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default Cursos;