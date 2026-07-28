"use client";

import { useEffect, useRef } from "react";

/** Opacidade máxima do véu depois de rolar um viewport inteiro. */
const MAX_OPACITY = 0.55;

/**
 * Véu de calibração do background: no hero a rede neural fica totalmente
 * visível; ao rolar, este overlay escurece gradualmente pra que o texto denso
 * das seções seguintes ganhe contraste. Anima só opacity de um único elemento
 * fixo (barato, roda no compositor), atualizado via requestAnimationFrame.
 */
export default function BackgroundVeil() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      el.style.opacity = (progress * MAX_OPACITY).toFixed(3);
    };
    const onScrollOrResize = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="bg-night pointer-events-none fixed inset-0 z-[1]"
      style={{ opacity: 0 }}
    />
  );
}
