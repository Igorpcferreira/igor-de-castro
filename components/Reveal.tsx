"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms, usado pra criar stagger entre itens irmãos. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
}

/**
 * Entrada suave quando o elemento aparece na viewport (fade + slide sutil).
 * O movimento em si vive em CSS (.reveal em globals.css) usando os tokens de
 * motion; aqui só observamos a visibilidade — one-shot, sem re-animar.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const setNode = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return (
    <Tag
      ref={setNode}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
