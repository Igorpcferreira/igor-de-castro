"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/content";

/**
 * Navbar fixa e discreta: ganha fundo com blur ao rolar, marca a seção ativa
 * (via IntersectionObserver) e vira menu recolhível no mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // faixa central da viewport: a seção que a ocupa é a ativa
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `transition-colors duration-fast ease-glide hover:text-cyan-bright ${
      active === id ? "text-cyan-bright" : "text-muted"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-base ease-glide ${
        scrolled || open
          ? "border-b border-cyan/10 bg-night/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-night focus:px-4 focus:py-2 focus:text-cyan"
      >
        Pular para o conteúdo
      </a>
      <nav aria-label="Navegação principal" className="container-site flex h-16 items-center justify-between">
        <a
          href="#topo"
          className="text-ink text-lg font-bold tracking-tight transition-colors duration-fast ease-glide hover:text-cyan-bright"
          onClick={() => setOpen(false)}
        >
          igor<span className="text-cyan">.</span>de<span className="text-cyan">.</span>castro
        </a>

        {/* Links no desktop */}
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={linkClass(s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão do menu no mobile */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-body hover:text-cyan-bright flex h-10 w-10 items-center justify-center transition-colors duration-fast ease-glide md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Painel do menu mobile */}
      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-base ease-glide md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="container-site flex flex-col gap-1 pb-4 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2 ${linkClass(s.id)}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
