"use client";
/* eslint-disable @next/next/no-img-element -- export estático: as imagens já saem otimizadas em WebP */

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import AchievementsSheet from "./AchievementsSheet";
import Builder from "./Builder";
import CaseSheet from "./CaseSheet";
import Dock from "./Dock";
import { Icon, IconSprite, type IconName } from "./icons";
import { prefersReducedMotion } from "./useSheet";
import {
  extras,
  faq,
  kyberMark,
  MESSAGE,
  offer,
  processSteps,
  profile,
  projectGroups,
  proof,
  services,
  socials,
  timeline,
  waLink,
} from "@/data/journey";

type StopKind = "projects" | "services" | "process" | "final";
interface Stop {
  id: string;
  phase: string;
  icon: IconName;
  achievement?: string;
  manual?: boolean;
  kind?: StopKind;
  step?: (typeof timeline)[number];
}

const [puc, suporte, docnix, minsait, kyber] = timeline;
const caseOrder = projectGroups.flatMap((group) => group.items);
const stops: Stop[] = [
  { id: "base", phase: "Base", step: puc, icon: puc.icon },
  { id: "suporte", phase: "Base", step: suporte, icon: suporte.icon, achievement: "Primeiro emprego em tecnologia" },
  { id: "produto", phase: "Produto", step: docnix, icon: docnix.icon, achievement: "Duas promoções" },
  { id: "escala", phase: "Escala", step: minsait, icon: minsait.icon, achievement: "Sistemas de grande porte" },
  { id: "estudio", phase: "Estúdio", step: kyber, icon: kyber.icon, achievement: "Cofundador" },
  { id: "projetos", phase: "Projetos", kind: "projects", icon: "grid", achievement: `${caseOrder.length} projetos no ar` },
  { id: "servicos", phase: "Serviços", kind: "services", icon: "layers" },
  { id: "como-funciona", phase: "Como funciona", kind: "process", icon: "flag", achievement: "Você vê antes de pagar" },
  { id: "seu-projeto", phase: "Seu projeto", kind: "final", icon: "lock", achievement: "Próximo nível: seu projeto", manual: true },
];
const phases = [...new Set(stops.map((stop) => stop.phase))];
const phaseNumber = (name: string) => phases.indexOf(name) + 1;
const achievements = stops.filter((stop) => stop.achievement).map((stop) => ({ id: stop.id, title: stop.achievement as string }));
const dockFor: Record<string, string> = {
  base: "trajetoria",
  suporte: "trajetoria",
  produto: "trajetoria",
  escala: "trajetoria",
  estudio: "trajetoria",
  projetos: "projetos",
  "como-funciona": "como-funciona",
  "seu-projeto": "montar",
};

// Conquistas que destravam juntas (ao pular pelo dock, por exemplo) viram um aviso só.
function useAchievementToast() {
  const [toast, setToast] = useState({ label: "", title: "", on: false });
  const queue = useRef<string[]>([]);
  const busy = useRef(false);
  const timer = useRef(0);
  const run = useRef<() => void>(() => {});
  useEffect(() => {
    run.current = () => {
      if (busy.current || !queue.current.length) return;
      busy.current = true;
      const items = queue.current.splice(0);
      setToast({
        label: items.length === 1 ? "Conquista desbloqueada" : "Conquistas desbloqueadas",
        title: items.length === 1 ? items[0] : `${items.length} novas · ${items[items.length - 1]}`,
        on: true,
      });
      window.setTimeout(() => {
        setToast((current) => ({ ...current, on: false }));
        window.setTimeout(() => {
          busy.current = false;
          run.current();
        }, 350);
      }, 2400);
    };
  }, []);
  const push = useCallback((title: string) => {
    queue.current.push(title);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => run.current(), 80);
  }, []);
  return { toast, push };
}

/**
 * Página principal: a trajetória como uma trilha da rede neural. Um pulso de luz desce com a
 * rolagem, os nós acendem e as conquistas aparecem; a fase final é o "Monte seu projeto", que
 * destrava a última fase e deixa a mensagem do WhatsApp pronta. O dock embaixo leva o WhatsApp.
 */
export default function Journey() {
  const [lit, setLit] = useState(0);
  const [afterActive, setAfterActive] = useState(false);
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [caseIndex, setCaseIndex] = useState<number | null>(null);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [finalOpen, setFinalOpen] = useState(false);
  const { toast, push } = useAchievementToast();
  const unlockedRef = useRef(new Set<string>());
  const trailRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const litRef = useRef<SVGPathElement>(null);
  const packetRef = useRef<SVGCircleElement>(null);
  const xpRef = useRef<HTMLElement>(null);
  const hudXpRef = useRef<HTMLElement>(null);
  const hudProgressRef = useRef<HTMLParagraphElement>(null);
  const afterRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const unlock = useCallback(
    (id: string, title: string) => {
      if (unlockedRef.current.has(id)) return;
      unlockedRef.current.add(id);
      setUnlocked([...unlockedRef.current]);
      push(title);
    },
    [push],
  );

  // Entrada suave dos cartões, uma vez. Sem JavaScript (ou com movimento reduzido), tudo aparece pronto.
  useEffect(() => {
    const items = [...document.querySelectorAll(".rv")];
    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      items.forEach((item) => item.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Trilha: o caminho passa pelo centro de cada nó; o pulso desce com a rolagem e acende os nós.
  useEffect(() => {
    const trail = trailRef.current;
    const svg = svgRef.current;
    const base = baseRef.current;
    const litPath = litRef.current;
    const packet = packetRef.current;
    if (!trail || !svg || !base || !litPath || !packet) return;
    let points: { x: number; y: number }[] = [];
    let total = 0;
    let frame = 0;
    let timer = 0;
    let lastLit = -1;
    let lastAfter = false;
    let lastPercent = -1;
    // Comprimento do caminho em que a altura y é alcançada (o caminho só desce).
    const lengthAtY = (y: number) => {
      let low = 0;
      let high = total;
      for (let step = 0; step < 22; step += 1) {
        const mid = (low + high) / 2;
        if (base.getPointAtLength(mid).y < y) low = mid;
        else high = mid;
      }
      return low;
    };
    const paint = () => {
      frame = 0;
      if (!total) return;
      const box = trail.getBoundingClientRect();
      const y = window.innerHeight * 0.58 - box.top;
      const length = y <= 0 ? 0 : y >= box.height ? total : lengthAtY(y);
      litPath.style.strokeDashoffset = `${total - length}`;
      const point = base.getPointAtLength(length);
      packet.setAttribute("cx", String(point.x));
      packet.setAttribute("cy", String(point.y));
      packet.classList.toggle("is-hidden", length <= 0 || length >= total - 1);
      const count = points.filter((item) => item.y <= y).length;
      if (count !== lastLit) {
        lastLit = count;
        setLit(count);
      }
      stops.slice(0, count).forEach((stop) => {
        if (stop.achievement && !stop.manual) unlock(stop.id, stop.achievement);
      });
      const progress = Math.max(0, Math.min(1, length / total));
      const scale = `scaleX(${progress.toFixed(4)})`;
      if (xpRef.current) xpRef.current.style.transform = scale;
      if (hudXpRef.current) hudXpRef.current.style.transform = scale;
      const percent = Math.round(progress * 100);
      if (percent !== lastPercent && hudProgressRef.current) {
        lastPercent = percent;
        hudProgressRef.current.textContent = `${percent}% da trilha`;
      }
      const after = (afterRef.current?.getBoundingClientRect().top ?? Infinity) < window.innerHeight * 0.58;
      if (after !== lastAfter) {
        lastAfter = after;
        setAfterActive(after);
      }
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const build = () => {
      const box = trail.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      svg.setAttribute("width", String(box.width));
      svg.setAttribute("height", String(box.height));
      points = nodeRefs.current.map((node) => {
        const rect = node?.getBoundingClientRect();
        return rect ? { x: rect.left - box.left + rect.width / 2, y: rect.top - box.top + rect.height / 2 } : { x: 0, y: 0 };
      });
      if (!points.length) return;
      let d = `M ${points[0].x} 0 L ${points[0].x} ${points[0].y}`;
      points.slice(1).forEach((point, index) => {
        const from = points[index];
        const dy = point.y - from.y;
        // Na chegada ao nó final, que fica no centro, a curva sai da trilha e vai até ele.
        if (Math.abs(point.x - from.x) > 40) {
          d += ` C ${from.x} ${from.y + dy * 0.55}, ${point.x} ${point.y - dy * 0.55}, ${point.x} ${point.y}`;
          return;
        }
        const wiggle = (index % 2 ? -1 : 1) * Math.min(46, Math.max(box.width * 0.08, 22));
        d += ` C ${from.x + wiggle} ${from.y + dy * 0.45}, ${point.x + wiggle} ${point.y - dy * 0.45}, ${point.x} ${point.y}`;
      });
      base.setAttribute("d", d);
      litPath.setAttribute("d", d);
      total = base.getTotalLength();
      litPath.style.strokeDasharray = `${total} ${total}`;
      request();
    };
    const rebuild = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(build, 120);
    };
    const first = requestAnimationFrame(build);
    const observer = new ResizeObserver(rebuild);
    observer.observe(trail);
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", rebuild);
    document.fonts?.ready.then(rebuild);
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", rebuild);
    };
  }, [unlock]);

  const handleUnlock = useCallback(() => {
    setFinalOpen(true);
    unlock("seu-projeto", "Próximo nível: seu projeto");
    const node = nodeRefs.current[stops.length - 1];
    if (!node || prefersReducedMotion()) return;
    node.animate([{ transform: "scale(1)" }, { transform: "scale(1.35)" }, { transform: "scale(1)" }], { duration: 700, easing: "cubic-bezier(.34,1.56,.64,1)" });
    for (let spark = 0; spark < 12; spark += 1) {
      const dot = document.createElement("i");
      dot.className = "spark";
      node.append(dot);
      const angle = (spark / 12) * Math.PI * 2;
      dot.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
          { transform: `translate(calc(-50% + ${Math.cos(angle) * 70}px), calc(-50% + ${Math.sin(angle) * 70}px)) scale(.3)`, opacity: 0 },
        ],
        { duration: 800 + spark * 20, easing: "cubic-bezier(.22,1,.36,1)" },
      ).onfinish = () => dot.remove();
    }
  }, [unlock]);

  const openCase = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setCaseIndex(caseOrder.findIndex((item) => item.slug === slug));
  };

  const current = lit > 0 ? stops[lit - 1] : null;
  const dockActive = afterActive ? "duvidas" : current ? dockFor[current.id] ?? "" : "";

  const stopCard = (stop: Stop) => {
    const meta = (label: string) => (
      <p className="stop-meta">
        <span className="stop-year">{label}</span>
        <span>
          Fase {phaseNumber(stop.phase)} · {stop.phase}
        </span>
      </p>
    );
    if (stop.kind === "projects") {
      return (
        <>
          {meta("2026")}
          <h3>{caseOrder.length} projetos no ar, todos com vídeo</h3>
          <p className="stop-text">Toque num círculo para ver o vídeo, o desafio, o que foi feito e o resultado.</p>
          {projectGroups.map((group) => (
            <div className="bubbles-group" key={group.title}>
              <p className="group-title">
                {group.title} <span>{group.items.length}</span>
              </p>
              <ul className="bubbles">
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <a
                      className={`bubble ${item.kind === "conceito" ? "is-concept" : ""}`.trim()}
                      href={item.site}
                      target="_blank"
                      rel="noopener"
                      onClick={(event) => openCase(event, item.slug)}
                    >
                      <span className="bubble-ring">
                        <img src={item.poster} alt="" width={128} height={128} loading="lazy" />
                      </span>
                      <span className="bubble-name">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {group.note && (
                <p className="group-note">
                  <Icon name="info" /> {group.note}
                </p>
              )}
            </div>
          ))}
        </>
      );
    }
    if (stop.kind === "services") {
      return (
        <>
          {meta("hoje")}
          <h3>O que eu construo para o seu negócio</h3>
          <ul className="skills">
            {services.map((service) => (
              <li className="skill" key={service.title}>
                <span className="skill-node">
                  <Icon name={service.icon} />
                </span>
                <div>
                  <b>{service.title}</b>
                  <p>{service.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      );
    }
    if (stop.kind === "process") {
      return (
        <>
          {meta("4 etapas")}
          <h3>Do primeiro oi ao site no ar</h3>
          <ol className="mini-trail">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="mini-node">{index + 1}</span>
                <div>
                  <b>{step.title}</b>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="capsule">
            <div className="capsule-price">
              <span>{offer.name}</span>
              <b>{offer.price}</b>
              <small>
                {offer.badge} · {offer.installments}
              </small>
            </div>
            <p className="capsule-guarantee">
              <Icon name="shield" /> {offer.guarantee}
            </p>
            <p className="capsule-note">
              {offer.others}{" "}
              <a href={offer.href} target="_blank" rel="noopener">
                Planos da Kyber <Icon name="arrow-up-right" />
              </a>
            </p>
          </div>
        </>
      );
    }
    if (stop.kind === "final") {
      return (
        <>
          {meta("agora")}
          <h3>Monte o seu projeto e destrave a última fase</h3>
          <p className="stop-text">
            Escolha o tipo de negócio, ligue o que ele precisa ter e diga para quando. A prévia é ilustrativa: o projeto de verdade a gente desenha junto.
          </p>
          <Builder unlocked={finalOpen} onUnlock={handleUnlock} />
        </>
      );
    }
    const step = stop.step;
    if (!step) return null;
    return (
      <>
        {meta(step.year)}
        <h3>{step.title}</h3>
        <p className="stop-place">{step.place}</p>
        <p className="stop-text">{step.text}</p>
      </>
    );
  };

  return (
    <>
      <IconSprite />
      <a className="skip" href="#seu-projeto">
        Pular para o seu projeto
      </a>
      <header className="bar">
        <div className="xp" aria-hidden="true">
          <i ref={xpRef} />
        </div>
        <div className="bar-row">
          <a className="me" href="#inicio">
            <img src={profile.poster} alt="" width={80} height={80} />
            <span>
              <b>{profile.name}</b>
              <small>{current ? `Fase ${phaseNumber(current.phase)} de ${phases.length} · ${current.phase}` : "Início da trilha"}</small>
            </span>
          </a>
          <button className="trophy" type="button" onClick={() => setAchievementsOpen(true)} aria-label={`Conquistas: ${unlocked.length} de ${achievements.length}`}>
            <Icon name="trophy" />
            <span>
              {unlocked.length}/{achievements.length}
            </span>
          </button>
        </div>
      </header>

      <div className="layout">
        <aside className="hud" aria-label="Progresso da trilha">
          <div className="hud-card">
            <p className="hud-label">Fase atual</p>
            <p className="hud-phase">{current ? current.phase : "Início"}</p>
            <div className="hud-meter" aria-hidden="true">
              <i ref={hudXpRef} />
            </div>
            <p className="hud-small" ref={hudProgressRef}>
              0% da trilha
            </p>
            <p className="hud-label is-gap">Conquistas</p>
            <ul className="ach-list">
              {achievements.map((item) => {
                const on = unlocked.includes(item.id);
                return (
                  <li key={item.id} className={on ? "is-on" : undefined}>
                    <Icon name={on ? "trophy" : "lock"} />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <a className="hud-skip" href="#seu-projeto">
              Pular para o seu projeto <Icon name="arrow-down" />
            </a>
          </div>
        </aside>

        <main className="main">
          <section className="hero" id="inicio" aria-labelledby="hero-title">
            <div className="start-node" aria-hidden="true">
              <span className="orbit">
                <i />
                <i />
                <i />
              </span>
              <span className="start-ring">
                <img src={profile.poster} alt="" width={720} height={960} fetchPriority="high" />
              </span>
            </div>
            <p className="kicker">{profile.studio}</p>
            <h1 className="hero-name" id="hero-title">
              {profile.name}
            </h1>
            <p className="hero-lead">
              Sites, sistemas e automações <b>sob medida</b> para o seu negócio.
            </p>
            <p className="hero-text">{profile.journey}</p>
            <div className="hero-actions">
              <a className="pill pill-neon" href="#base">
                <Icon name="arrow-down" /> Começar a trilha
              </a>
              <a className="pill pill-glass" href="#seu-projeto">
                <Icon name="widget" /> Montar meu projeto
              </a>
            </div>
            <ul className="badges">
              {proof.map((item) => (
                <li key={item.label}>
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="trail" ref={trailRef} aria-labelledby="trilha-title">
            <h2 className="sr-only" id="trilha-title">
              Trajetória, projetos e como trabalho
            </h2>
            <svg className="trail-svg" aria-hidden="true" ref={svgRef}>
              <path className="trail-base" ref={baseRef} />
              <path className="trail-lit" ref={litRef} />
              <circle className="packet is-hidden" r={7} ref={packetRef} />
            </svg>
            <ol className="stops">
              {stops.map((stop, index) => {
                const isFinal = stop.kind === "final";
                const badgeOn = Boolean(stop.achievement && unlocked.includes(stop.id));
                return (
                  <li
                    key={stop.id}
                    id={stop.id}
                    className={["stop", stop.kind ? "is-wide" : "", isFinal ? "is-final" : "", index < lit ? "is-lit" : ""].filter(Boolean).join(" ")}
                  >
                    <span
                      className={["node", isFinal && !finalOpen ? "is-lock" : "", isFinal && finalOpen ? "is-open" : ""].filter(Boolean).join(" ")}
                      ref={(node) => {
                        nodeRefs.current[index] = node;
                      }}
                    >
                      <Icon name={isFinal && finalOpen ? "lock-open" : stop.icon} />
                    </span>
                    <div className="stop-card rv">
                      {stopCard(stop)}
                      {stop.achievement && !stop.manual && (
                        <p className={`badge ${badgeOn ? "is-on" : ""}`.trim()}>
                          <Icon name="trophy" /> {stop.achievement}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="after rv" id="duvidas" ref={afterRef} aria-labelledby="duvidas-title">
            <h2 id="duvidas-title">Dúvidas pelo caminho</h2>
            <div className="faq">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <Icon name="plus" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <div className="end">
              <p className="end-title">Prefere ir direto?</p>
              <p className="end-text">
                {profile.note} {profile.reach}.
              </p>
              <div className="end-actions">
                <a className="pill pill-neon" href={waLink(MESSAGE)} target="_blank" rel="noopener">
                  <Icon name="whatsapp" /> Conversar no WhatsApp
                </a>
                <a className="pill pill-glass" href={`mailto:${profile.email}`}>
                  <Icon name="envelope" /> E-mail
                </a>
              </div>
              <ul className="links">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a href={social.href} target="_blank" rel="noopener">
                      <Icon name={social.id} />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
                {extras.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      {...(item.download ? { download: "" } : item.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      {item.icon === "kyber" ? <img src={kyberMark} alt="" width={53} height={120} /> : <Icon name={item.icon} />}
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={profile.vcard} download="igor-de-castro.vcf">
                    <Icon name="user" />
                    <span>Salvar contato</span>
                  </a>
                </li>
              </ul>
              <p className="fine">© 2026 Igor de Castro</p>
            </div>
          </section>
        </main>
      </div>

      <Dock active={dockActive} />

      <div className={`ach-toast ${toast.on ? "is-on" : ""}`.trim()} role="status" aria-live="polite">
        {toast.title && (
          <>
            <span className="ach-icon">
              <Icon name="trophy" />
            </span>
            <span>
              <small>{toast.label}</small>
              <b>{toast.title}</b>
            </span>
          </>
        )}
      </div>

      <AchievementsSheet open={achievementsOpen} items={achievements} unlocked={unlocked} onClosed={() => setAchievementsOpen(false)} />
      <CaseSheet items={caseOrder} index={caseIndex} onIndexChange={setCaseIndex} onClosed={() => setCaseIndex(null)} />
    </>
  );
}
