"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const sectionIds = ["sobre", "habilidades", "projetos", "formacao", "contato"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#sobre", label: t.nav.about },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#projetos", label: t.nav.projects },
    { href: "#formacao", label: t.nav.education },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <a
          href="#inicio"
          className={styles.logo}
          onClick={() => handleLinkClick("#inicio")}
        >
          <span className={styles.logoAngle}>&lt;</span>
          Jorge
          <span className={styles.logoDot}>.</span>
          Nagakura
          <span className={styles.logoAngle}>&gt;</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href.replace("#", "") ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/jorgenagakura/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {t.nav.hire}
            </a>
          </li>
        </ul>

        <div className={styles.rightControls}>
          <LanguageSelector />
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t.nav.activateLight : t.nav.activateDark
            }
            title={theme === "dark" ? t.nav.lightTheme : t.nav.darkTheme}
          >
            {theme === "dark" ? (
              // Sun icon
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
