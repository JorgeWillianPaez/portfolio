"use client";

import { useEffect, useRef } from "react";
import styles from "./Education.module.css";

function EducationIcon({ id, color }: { id: string; color: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    width: "22",
    height: "22",
  };
  switch (id) {
    case "graduation":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h6" />
          <circle cx="16" cy="16" r="2" />
          <path d="M15 18l-1 3 2-1 2 1-1-3" />
        </svg>
      );
    case "react":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "python":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "devops":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      );
    default:
      return null;
  }
}

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "UTFPR — Universidade Tecnológica Federal do Paraná",
    period: "2022 — 2025",
    status: "Concluído",
    description:
      "Formação focada no desenvolvimento de software, análise de sistemas, banco de dados, engenharia de requisitos e metodologias ágeis. Projetos práticos com desenvolvimento web, mobile e aplicações enterprise.",
    highlights: [
      "Desenvolvimento Web",
      "Banco de Dados",
      "Engenharia de Software",
      "Metodologias Ágeis",
    ],
    color: "#00d4ff",
    iconId: "graduation",
  },
];

const certifications = [
  {
    name: "Desenvolvimento Full Stack",
    issuer: "Bootcamp / Treinamento",
    period: "2023",
    color: "#8b5cf6",
    iconId: "certificate",
  },
  {
    name: "React & Next.js",
    issuer: "Formação Prática",
    period: "2024",
    color: "#00d4ff",
    iconId: "react",
  },
  {
    name: "Python para Data Science",
    issuer: "Treinamento",
    period: "2025",
    color: "#10b981",
    iconId: "python",
  },
  {
    name: "DevOps Fundamentals",
    issuer: "Treinamento",
    period: "2025",
    color: "#f59e0b",
    iconId: "devops",
  },
];

export default function Education() {
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
    <section
      id="formacao"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">Formação</span>
          <h2 className="section-title">
            Minha <span className="highlight">Trajetória Acadêmica</span>
          </h2>
          <p className={styles.subtitle}>
            Formação sólida em tecnologia combinada com aprendizado contínuo
          </p>
        </div>

        {/* Education Timeline */}
        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`${styles.timelineItem} reveal`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={styles.timelineLine}>
                <div
                  className={styles.timelineDot}
                  style={{ background: edu.color }}
                />
                <div className={styles.timelineVertical} />
              </div>
              <div
                className={`glass-card ${styles.eduCard}`}
                style={{ "--edu-color": edu.color } as React.CSSProperties}
              >
                <div className={styles.eduHeader}>
                  <span className={styles.eduIcon}>
                    <EducationIcon id={edu.iconId} color={edu.color} />
                  </span>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                  <div className={styles.eduMeta}>
                    <span className={styles.period}>{edu.period}</span>
                    <span
                      className={styles.status}
                      style={{ color: edu.color }}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{edu.description}</p>
                <div className={styles.highlights}>
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className={styles.highlightTag}
                      style={{
                        borderColor: `${edu.color}40`,
                        color: edu.color,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`${styles.certsSection} reveal`}>
          <h3 className={styles.certsTitle}>Cursos &amp; Certificações</h3>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={`glass-card ${styles.certCard} reveal`}
                style={
                  {
                    transitionDelay: `${i * 80}ms`,
                    "--cert-color": cert.color,
                  } as React.CSSProperties
                }
              >
                <span className={styles.certIcon}>
                  <EducationIcon id={cert.iconId} color={cert.color} />
                </span>
                <div>
                  <p className={styles.certName}>{cert.name}</p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
                <span className={styles.certPeriod}>{cert.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
