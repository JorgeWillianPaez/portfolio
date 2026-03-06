"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Locale } from "../../i18n/translations";
import styles from "./LanguageSelector.module.css";

const options: { value: Locale; label: string; flag: string }[] = [
  { value: "pt", label: "Português", flag: "🇧🇷" },
  { value: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = options.find((o) => o.value === locale)!;

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Select language"
      >
        <span className={styles.flag}>{current.flag}</span>
        {current.value.toUpperCase()}
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="14"
          height="14"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.option} ${locale === opt.value ? styles.optionActive : ""}`}
              onClick={() => {
                setLocale(opt.value);
                setOpen(false);
              }}
            >
              <span className={styles.flag}>{opt.flag}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
