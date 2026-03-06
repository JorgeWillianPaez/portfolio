"use client";

import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import { useLanguage } from "../../context/LanguageContext";

function CategoryIcon({ id }: { id: string }) {
  switch (id) {
    case "frontend":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="22"
          height="22"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "backend":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="22"
          height="22"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "power":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="22"
          height="22"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "cloud":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          width="22"
          height="22"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    default:
      return null;
  }
}

function getLevelDots(level: number): number {
  if (level >= 85) return 3;
  if (level >= 70) return 2;
  return 1;
}

const skillCategories = [
  {
    title: "Frontend",
    iconId: "frontend",
    color: "#00d4ff",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Angular", level: 72 },
    ],
  },
  {
    title: "Backend & Mobile",
    iconId: "backend",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python / Django", level: 75 },
      { name: ".NET / C#", level: 65 },
      { name: "REST APIs", level: 88 },
      { name: "Kotlin (Android)", level: 70 },
      { name: "SQL / SQLite", level: 75 },
    ],
  },
  {
    title: "Power Platform",
    iconId: "power",
    color: "#f59e0b",
    skills: [
      { name: "Power Apps", level: 88 },
      { name: "Power Automate", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Power Pages", level: 75 },
      { name: "Dynamics 365 CRM", level: 85 },
      { name: "Dataverse", level: 80 },
    ],
  },
  {
    title: "Microsoft & Cloud",
    iconId: "cloud",
    color: "#10b981",
    skills: [
      { name: "Microsoft 365", level: 88 },
      { name: "Azure", level: 72 },
      { name: "SharePoint", level: 80 },
      { name: "Teams & Graph API", level: 75 },
      { name: "DevOps / Git", level: 85 },
      { name: "Docker", level: 60 },
    ],
  },
];

const techBadges = [
  "Power Apps",
  "Power Automate",
  "Power BI",
  "Dynamics 365 CRM",
  "Dataverse",
  "Microsoft 365",
  "SharePoint",
  "Azure",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Kotlin",
  "C# / .NET",
  "SQL",
  "Git",
  "REST API",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  function getLevelLabel(level: number): string {
    if (level >= 85) return t.skills.levels.advanced;
    if (level >= 70) return t.skills.levels.intermediate;
    return t.skills.levels.basic;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      id="habilidades"
      className={`section ${styles.skills}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">{t.skills.tag}</span>
          <h2 className="section-title">
            {t.skills.titleStart}{" "}
            <span className="highlight">{t.skills.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.skills.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              className={`glass-card ${styles.card} reveal`}
              style={{ transitionDelay: `${catIndex * 120}ms` }}
            >
              <div
                className={styles.cardHeader}
                style={{ "--accent": cat.color } as React.CSSProperties}
              >
                <span className={styles.icon} style={{ color: cat.color }}>
                  <CategoryIcon id={cat.iconId} />
                </span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {cat.skills.map((skill) => {
                  const dots = getLevelDots(skill.level);
                  const label = getLevelLabel(skill.level);
                  return (
                    <div key={skill.name} className={styles.skillItem}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <div className={styles.levelIndicator}>
                        <div className={styles.levelDots}>
                          {[1, 2, 3].map((d) => (
                            <span
                              key={d}
                              className={styles.dot}
                              style={
                                d <= dots
                                  ? {
                                      background: cat.color,
                                      boxShadow: `0 0 6px ${cat.color}80`,
                                    }
                                  : {}
                              }
                              data-filled={d <= dots}
                            />
                          ))}
                        </div>
                        <span
                          className={styles.levelLabel}
                          style={{ color: cat.color }}
                        >
                          {label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.badgesSection} reveal`}>
          <p className={styles.badgesTitle}>{t.skills.badgesTitle}</p>
          <div className={styles.badges}>
            {techBadges.map((tech) => (
              <span key={tech} className={styles.badge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
