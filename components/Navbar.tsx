"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/data/content";

function BrazilFlag() {
  return (
    <svg viewBox="0 0 28 20" role="img" aria-label="Brasil" className="h-4 w-[22px]">
      <rect width="28" height="20" rx="1.5" fill="#169B62" />
      <path d="M14 2.4 25 10 14 17.6 3 10Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <path d="M10.2 9.2c2.7-.6 5.2-.1 7.6 1.4" fill="none" stroke="#fff" strokeWidth=".7" />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg viewBox="0 0 28 20" role="img" aria-label="United States" className="h-4 w-[22px]">
      <clipPath id="us-flag-clip">
        <rect width="28" height="20" rx="1.5" />
      </clipPath>
      <g clipPath="url(#us-flag-clip)">
        <path fill="#fff" d="M0 0h28v20H0z" />
        {[0, 3.08, 6.16, 9.24, 12.32, 15.4, 18.48].map((y) => (
          <rect key={y} y={y} width="28" height="1.54" fill="#B22234" />
        ))}
        <rect width="12.2" height="10.8" fill="#3C3B6E" />
        <g fill="#fff">
          {[2, 4.5, 7, 9.5].flatMap((x) =>
            [2, 4.5, 7, 9.5].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r=".45" />),
          )}
        </g>
      </g>
    </svg>
  );
}

function LanguageButton({
  value,
  active,
  label,
  onSelect,
  children,
}: {
  value: Locale;
  active: boolean;
  label: string;
  onSelect: (locale: Locale) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      title={label}
      onClick={() => onSelect(value)}
      className={`grid h-8 w-9 place-items-center border transition-[border-color,background-color,opacity] duration-fast ${
        active
          ? "border-neon/55 bg-neon/10 opacity-100"
          : "border-transparent opacity-55 hover:border-neon/25 hover:opacity-100"
      }`}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const { copy, locale, setLocale } = useLanguage();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const targets = copy.sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [copy.sections]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const navigationLinks = copy.sections.filter((section) => section.id !== "contact");
  const contact = copy.sections.find((section) => section.id === "contact");

  return (
    <header className="border-neon/15 bg-night/78 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <a
        href="#content"
        className="bg-night text-neon sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:px-4 focus:py-2"
      >
        {copy.skipLabel}
      </a>

      <nav
        aria-label={copy.navigationLabel}
        className="container-site flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-baseline gap-1 text-[12px] font-bold tracking-[0.025em] sm:text-sm"
        >
          <span className="text-neon">~/</span>
          <span className="text-ink group-hover:text-neon-bright transition-colors">
            igor.de.castro
          </span>
          <span
            aria-hidden="true"
            className="bg-neon animate-blink ml-1 inline-block h-[13px] w-[7px] translate-y-0.5 motion-reduce:animate-none"
          />
        </a>

        <ul className="hidden items-center gap-[clamp(0.8rem,1.7vw,1.75rem)] text-[11px] lg:flex">
          {navigationLinks.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active === section.id ? "true" : undefined}
                className={`tracking-[0.06em] transition-colors duration-fast ${
                  active === section.id ? "text-neon" : "text-muted hover:text-neon-bright"
                }`}
              >
                <span className="text-neon/50">{String(index + 1).padStart(2, "0")}.</span>
                {section.shortLabel}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <div className="border-neon/15 flex items-center border p-0.5" aria-label="Language">
            <LanguageButton
              value="en"
              active={locale === "en"}
              label="View site in English"
              onSelect={setLocale}
            >
              <UnitedStatesFlag />
            </LanguageButton>
            <LanguageButton
              value="pt-BR"
              active={locale === "pt-BR"}
              label="Ver site em português do Brasil"
              onSelect={setLocale}
            >
              <BrazilFlag />
            </LanguageButton>
          </div>

          {contact && (
            <a
              href="#contact"
              className="border-neon/45 text-neon hover:bg-neon/10 hidden border px-3.5 py-2 text-[11px] font-medium transition-colors sm:inline-flex"
            >
              ./{contact.shortLabel}
            </a>
          )}

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.menuCloseLabel : copy.menuOpenLabel}
            onClick={() => setOpen((current) => !current)}
            className="border-neon/30 text-neon ml-1 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border lg:hidden"
          >
            <span
              className={`bg-current block h-px w-5 transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`bg-current block h-px transition-[width,opacity] ${open ? "w-0 opacity-0" : "w-3.5"}`}
            />
            <span
              className={`bg-current block h-px w-5 transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-base lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="container-site border-neon/10 grid gap-1 border-t py-4 text-sm">
            {copy.sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-2 py-2.5 transition-colors ${
                    active === section.id ? "text-neon" : "text-body hover:text-neon-bright"
                  }`}
                >
                  <span className="text-neon/55 text-[11px]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
