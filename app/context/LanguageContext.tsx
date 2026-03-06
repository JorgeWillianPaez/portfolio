"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  translations,
  type Locale,
  type Translations,
} from "../i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "pt",
  setLocale: () => {},
  t: translations.pt,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "pt";

  const saved = localStorage.getItem("portfolio-locale") as Locale | null;
  if (saved && (saved === "pt" || saved === "en")) return saved;

  const browserLang = navigator.language || "";
  if (browserLang.startsWith("pt")) return "pt";
  return "en";
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected === "pt" ? "pt-BR" : "en";
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    document.documentElement.lang = newLocale === "pt" ? "pt-BR" : "en";
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
