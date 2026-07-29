"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Locale } from "@/data/content";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof content)[Locale];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "pt-BR" || saved === "en") {
      const frame = window.requestAnimationFrame(() => setLocaleState(saved));
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        setLocaleState(nextLocale);
        window.localStorage.setItem("portfolio-locale", nextLocale);
      },
      copy: content[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return value;
}
