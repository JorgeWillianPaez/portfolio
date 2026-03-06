"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import { useLanguage } from "../../context/LanguageContext";

const projectsData = [
  {
    tech: ["Dynamics 365", "Dataverse", "Power Platform", "C#", "JavaScript"],
    category: "Microsoft",
    links: { github: "https://github.com/JorgeWillianPaez", live: null },
    featured: true,
    color: "#f59e0b",
  },
  {
    tech: [
      "Power Automate",
      "SharePoint",
      "Teams",
      "REST API",
      "Microsoft 365",
    ],
    category: "Microsoft",
    links: { github: "https://github.com/JorgeWillianPaez", live: null },
    featured: true,
    color: "#10b981",
  },
  {
    tech: ["Angular", "TypeScript", "C#", ".NET", "SQLite"],
    category: "Full Stack",
    links: {
      github: "https://github.com/JorgeWillianPaez/GameHubAPI",
      live: null,
    },
    featured: true,
    color: "#00d4ff",
  },
  {
    tech: ["Next.js", "TypeScript", "React", "CSS"],
    category: "Frontend",
    links: {
      github: "https://github.com/JorgeWillianPaez/music-town-store",
      live: "https://music-town-store.vercel.app",
    },
    featured: false,
    color: "#8b5cf6",
  },
  {
    tech: ["Power Apps", "Dataverse", "SharePoint", "Power Fx"],
    category: "Microsoft",
    links: { github: "https://github.com/JorgeWillianPaez", live: null },
    featured: false,
    color: "#f59e0b",
  },
  {
    tech: ["Power BI", "DAX", "Dynamics 365", "Dataverse"],
    category: "Microsoft",
    links: { github: "https://github.com/JorgeWillianPaez", live: null },
    featured: false,
    color: "#ec4899",
  },
  {
    tech: ["React", "TypeScript", "CSS"],
    category: "Frontend",
    links: {
      github: "https://github.com/JorgeWillianPaez/F1-Bets-React",
      live: null,
    },
    featured: false,
    color: "#00d4ff",
  },
  {
    tech: ["Python", "Django", "HTML", "Bootstrap"],
    category: "Backend",
    links: {
      github: "https://github.com/JorgeWillianPaez/taskmanager-django",
      live: null,
    },
    featured: false,
    color: "#8b5cf6",
  },
  {
    tech: ["Kotlin", "Android"],
    category: "Mobile",
    links: {
      github: "https://github.com/JorgeWillianPaez/DungeonsAndDragons",
      live: null,
    },
    featured: false,
    color: "#10b981",
  },
];

const categoryKeys = [
  "all",
  "Microsoft",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(6);
  const { t } = useLanguage();

  const filtered = projectsData.filter(
    (p) => filter === "all" || p.category === filter,
  );

  const shownProjects = filtered.slice(0, visible);

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
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projetos"
      className={`section ${styles.projects}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">{t.projects.tag}</span>
          <h2 className="section-title">
            {t.projects.titleStart}{" "}
            <span className="highlight">{t.projects.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>

        <div className={`${styles.filters} reveal`}>
          {categoryKeys.map((cat, i) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              onClick={() => {
                setFilter(cat);
                setVisible(6);
              }}
            >
              {t.projects.categories[i]}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {shownProjects.map((project, i) => {
            const idx = projectsData.indexOf(project);
            const translated = t.projects.items[idx];
            return (
              <article
                key={idx}
                className={`glass-card ${styles.card} ${project.featured ? styles.featured : ""} reveal`}
                style={
                  {
                    transitionDelay: `${i * 80}ms`,
                    "--card-color": project.color,
                  } as React.CSSProperties
                }
              >
                <div className={styles.cardTop}>
                  {project.featured && (
                    <span className={styles.featuredBadge}>
                      {t.projects.featured}
                    </span>
                  )}
                  <span className={styles.categoryBadge}>
                    {project.category}
                  </span>
                </div>

                <div className={styles.accent} />

                <h3 className={styles.cardTitle}>{translated.title}</h3>
                <p className={styles.cardDesc}>{translated.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((techItem) => (
                    <span key={techItem} className={styles.techTag}>
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label="GitHub"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    {t.projects.code}
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.livLink}`}
                      aria-label={t.projects.liveDemo}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="18"
                        height="18"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {t.projects.demo}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {visible < filtered.length && (
          <div className={`${styles.loadMore} reveal`}>
            <button
              className="btn-outline"
              onClick={() => setVisible((v) => v + 3)}
            >
              {t.projects.loadMore}
            </button>
          </div>
        )}

        <div className={`${styles.githubCta} reveal`}>
          <p>{t.projects.githubCta}</p>
          <a
            href="https://github.com/JorgeWillianPaez"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>{t.projects.viewGithub}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
