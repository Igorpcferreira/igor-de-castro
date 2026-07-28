"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
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
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
