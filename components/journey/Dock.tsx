"use client";

import { useEffect, useRef } from "react";
import { Icon, type IconName } from "./icons";
import { MESSAGE, waLink } from "@/data/journey";
import { prefersReducedMotion } from "./useSheet";

// No celular aparecem Conversar, Projetos e Montar; no computador, todos os atalhos.
export const dockItems: { id: string; target: string; icon: IconName; label: string; desk?: boolean }[] = [
  { id: "projetos", target: "projetos", icon: "grid", label: "Projetos" },
  { id: "montar", target: "seu-projeto", icon: "widget", label: "Montar" },
  { id: "como-funciona", target: "como-funciona", icon: "flag", label: "Como funciona", desk: true },
  { id: "trajetoria", target: "base", icon: "user", label: "Trajetória", desk: true },
  { id: "duvidas", target: "duvidas", icon: "message", label: "Dúvidas", desk: true },
];

/** Dock fixo embaixo, com o WhatsApp sempre à mão. No computador, os ícones crescem perto do ponteiro. */
export default function Dock({ active }: { active: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dock = ref.current;
    if (!dock || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const desktop = window.matchMedia("(min-width: 960px)");
    const buttons = [...dock.querySelectorAll<HTMLElement>(".dock-btn")];
    const move = (event: PointerEvent) => {
      if (!desktop.matches) return;
      buttons.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
        item.style.setProperty("--s", (1 + Math.max(0, 1 - distance / 150) * 0.42).toFixed(3));
      });
    };
    const leave = () => buttons.forEach((item) => item.style.setProperty("--s", "1"));
    dock.addEventListener("pointermove", move);
    dock.addEventListener("pointerleave", leave);
    return () => {
      dock.removeEventListener("pointermove", move);
      dock.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <nav ref={ref} className="dock" aria-label="Atalhos">
      <a className="dock-main" href={waLink(MESSAGE)} target="_blank" rel="noopener">
        <Icon name="whatsapp" />
        <span>Conversar</span>
      </a>
      {dockItems.map((item) => (
        <a
          key={item.id}
          className={`dock-btn ${item.desk ? "is-desk" : ""}`.trim()}
          href={`#${item.target}`}
          aria-current={active === item.id ? "true" : undefined}
        >
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
