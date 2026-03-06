"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
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
          <span className="section-tag reveal">{t.about.tag}</span>
          <h2 className={`section-title reveal`}>
            {t.about.titleStart}{" "}
            <span className="highlight">{t.about.titleHighlight}</span>
          </h2>
          <p
            className={`${styles.bio} reveal`}
            dangerouslySetInnerHTML={{ __html: t.about.bio1 }}
          />
          <p
            className={`${styles.bio} reveal`}
            dangerouslySetInnerHTML={{ __html: t.about.bio2 }}
          />
          <p
            className={`${styles.bio} reveal`}
            dangerouslySetInnerHTML={{ __html: t.about.bio3 }}
          />

          <div className={`${styles.highlights} reveal`}>
            {t.about.highlights.map((highlight) => (
              <div key={highlight} className={styles.highlightItem}>
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
                {highlight}
              </div>
            ))}
          </div>

          <div className={`${styles.actions} reveal`}>
            <a
              href="https://www.linkedin.com/in/jorgenagakura/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>{t.about.viewLinkedIn}</span>
            </a>
            <a
              href="https://github.com/JorgeWillianPaez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              {t.about.viewGitHub}
            </a>
          </div>
        </div>

        <div className={styles.statsSide}>
          {t.about.stats.map((stat, i) => (
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
              <p className={styles.statusTitle}>{t.about.statusTitle}</p>
              <p className={styles.statusSub}>{t.about.statusSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
