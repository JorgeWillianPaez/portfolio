"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "27+", label: "Repositórios" },
  { value: "611", label: "Contribuições (último ano)" },
  { value: "10+", label: "Tecnologias" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className={`section ${styles.about}`} ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textSide}>
          <span className="section-tag reveal">Sobre mim</span>
          <h2 className={`section-title reveal`}>
            Construindo o futuro,{" "}
            <span className="highlight">uma linha de código por vez</span>
          </h2>
          <p className={`${styles.bio} reveal`}>
            Sou <strong>Jorge Willian Paez Nagakura</strong>, desenvolvedor Full
            Stack apaixonado por tecnologia e pela criação de soluções digitais
            que fazem a diferença. Com experiência em todo o ciclo de
            desenvolvimento — do backend ao frontend — me dedico a entregar
            aplicações robustas, performáticas e com excelente experiência do
            usuário.
          </p>
          <p className={`${styles.bio} reveal`}>
            Trabalho principalmente com o ecossistema{" "}
            <strong>JavaScript/TypeScript</strong>, utilizando{" "}
            <strong>React</strong>, <strong>Next.js</strong> e{" "}
            <strong>Node.js</strong>
            como minhas ferramentas principais. Também tenho experiência com{" "}
            <strong>Python/Django</strong>,<strong> C#/.NET</strong> e
            desenvolvimento mobile com <strong>Kotlin</strong>.
          </p>
          <p className={`${styles.bio} reveal`}>
            Quando não estou codando, gosto de explorar novas tecnologias,
            contribuir com projetos open source e me manter sempre atualizado
            com as últimas tendências do mercado de tecnologia.
          </p>

          <div className={`${styles.highlights} reveal`}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Power Platform (Apps, Automate, BI, Pages)
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Dynamics 365 CRM &amp; Dataverse
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Desenvolvimento Web Full Stack
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Microsoft 365, Azure &amp; SharePoint
            </div>
          </div>

          <div className={`${styles.actions} reveal`}>
            <a
              href="https://www.linkedin.com/in/jorgenagakura/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Ver LinkedIn</span>
            </a>
            <a
              href="https://github.com/JorgeWillianPaez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver GitHub
            </a>
          </div>
        </div>

        <div className={styles.statsSide}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card ${styles.statCard} reveal`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}

          <div className={`glass-card ${styles.statusCard} reveal`}>
            <div className={styles.statusDot} />
            <div>
              <p className={styles.statusTitle}>Disponível para trabalhar</p>
              <p className={styles.statusSub}>Aberto a novas oportunidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
