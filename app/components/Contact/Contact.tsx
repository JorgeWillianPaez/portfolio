"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { useLanguage } from "../../context/LanguageContext";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jorgenagakura",
    href: "https://www.linkedin.com/in/jorgenagakura/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0077b5",
  },
  {
    label: "GitHub",
    value: "github.com/JorgeWillianPaez",
    href: "https://github.com/JorgeWillianPaez",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
    color: "#6e5494",
  },
  {
    label: "Email",
    value: "jorgenagakura@email.com",
    href: "mailto:jorgenagakura@email.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="22"
        height="22"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "#00d4ff",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contato"
      className={`section ${styles.section}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-tag">{t.contact.tag}</span>
          <h2 className="section-title">
            {t.contact.titleStart}{" "}
            <span className="highlight">{t.contact.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>

        <div className={styles.layout}>
          {/* Left: contact info */}
          <div className={styles.infoSide}>
            <p className={`${styles.infoText} reveal`}>{t.contact.infoText}</p>

            <div className={styles.links}>
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card ${styles.linkCard} reveal`}
                  style={
                    {
                      transitionDelay: `${i * 100}ms`,
                      "--link-color": link.color,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={styles.linkIcon}
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </span>
                  <div>
                    <p className={styles.linkLabel}>{link.label}</p>
                    <p className={styles.linkValue}>{link.value}</p>
                  </div>
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="16"
                    height="16"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className={`${styles.availability} reveal`}>
              <div className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>{t.contact.availTitle}</p>
                <p className={styles.availSub}>{t.contact.availSub}</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`glass-card ${styles.formCard} reveal`}>
            <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>
            {sent ? (
              <div className={styles.successMsg}>
                <span>
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
                <p>{t.contact.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t.contact.labelName}</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t.contact.placeholderName}
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t.contact.labelEmail}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t.contact.placeholderEmail}
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">{t.contact.labelMessage}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t.contact.placeholderMessage}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  disabled={sending}
                >
                  <span>{sending ? t.contact.sending : t.contact.send}</span>
                  {!sending && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                    >
                      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
