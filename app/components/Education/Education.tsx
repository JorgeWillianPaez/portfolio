"use client";

import { useEffect, useRef } from "react";
import styles from "./Education.module.css";
import { useLanguage } from "../../context/LanguageContext";

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

const certColors = ["#8b5cf6", "#00d4ff", "#10b981", "#f59e0b"];
const certIcons = ["certificate", "react", "python", "devops"];
const certPeriods = ["2023", "2024", "2025", "2025"];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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
          <span className="section-tag">{t.education.tag}</span>
          <h2 className="section-title">
            {t.education.titleStart}{" "}
            <span className="highlight">{t.education.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.education.subtitle}</p>
        </div>

        {/* Education Timeline */}
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} reveal`}>
            <div className={styles.timelineLine}>
              <div
                className={styles.timelineDot}
                style={{ background: "#00d4ff" }}
              />
              <div className={styles.timelineVertical} />
            </div>
            <div
              className={`glass-card ${styles.eduCard}`}
              style={{ "--edu-color": "#00d4ff" } as React.CSSProperties}
            >
              <div className={styles.eduHeader}>
                <span className={styles.eduIcon}>
                  <EducationIcon id="graduation" color="#00d4ff" />
                </span>
                <div>
                  <h3 className={styles.degree}>{t.education.degree}</h3>
                  <p className={styles.institution}>
                    {t.education.institution}
                  </p>
                </div>
                <div className={styles.eduMeta}>
                  <span className={styles.period}>{t.education.period}</span>
                  <span className={styles.status} style={{ color: "#00d4ff" }}>
                    {t.education.status}
                  </span>
                </div>
              </div>
              <p className={styles.description}>{t.education.description}</p>
              <div className={styles.highlights}>
                {t.education.highlights.map((h) => (
                  <span
                    key={h}
                    className={styles.highlightTag}
                    style={{
                      borderColor: "rgba(0, 212, 255, 0.25)",
                      color: "#00d4ff",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`${styles.certsSection} reveal`}>
          <h3 className={styles.certsTitle}>{t.education.certsTitle}</h3>
          <div className={styles.certsGrid}>
            {t.education.certs.map((cert, i) => (
              <div
                key={cert.name}
                className={`glass-card ${styles.certCard} reveal`}
                style={
                  {
                    transitionDelay: `${i * 80}ms`,
                    "--cert-color": certColors[i],
                  } as React.CSSProperties
                }
              >
                <span className={styles.certIcon}>
                  <EducationIcon id={certIcons[i]} color={certColors[i]} />
                </span>
                <div>
                  <p className={styles.certName}>{cert.name}</p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
                <span className={styles.certPeriod}>{certPeriods[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
