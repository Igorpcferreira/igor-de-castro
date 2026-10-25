"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Icon } from "./icons";
import { prefersReducedMotion } from "./useSheet";
import { businesses, deadlines, modules, waLink, type ModuleId } from "@/data/journey";

const days = ["seg", "ter", "qua", "qui", "sex", "sáb"];
const blockOrder: ModuleId[] = ["catalogo", "galeria", "agenda", "whats", "planilha", "painel"];
const joinList = (items: string[]) => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`);
const INTRO = "Oi, Igor! Cheguei ao fim da trilha no seu site. ";
const OUTRO = " Podemos conversar?";

// Grupo de opção única: as setas trocam a escolha, como rádios.
function radioKeys(event: KeyboardEvent<HTMLDivElement>, ids: string[], current: string | null, pick: (id: string) => void) {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  event.preventDefault();
  const index = Math.max(0, ids.indexOf(current ?? ids[0]));
  const next = ids[(index + (event.key === "ArrowRight" ? 1 : -1) + ids.length) % ids.length];
  pick(next);
  event.currentTarget.querySelector<HTMLButtonElement>(`[data-id="${next}"]`)?.focus();
}

/**
 * Monte seu projeto (fase final da trilha): o tipo de negócio muda a prévia, cada módulo
 * entra no celular de exemplo e na mensagem, e o prazo libera o botão que destrava a fase.
 * A prévia é ilustrativa e fica fora da árvore de acessibilidade.
 */
export default function Builder({ unlocked, onUnlock }: { unlocked: boolean; onUnlock: () => void }) {
  const [biz, setBiz] = useState(businesses[0].id);
  const [on, setOn] = useState<ModuleId[]>(["dominio", "catalogo", "whats"]);
  const [when, setWhen] = useState<string | null>(null);
  const [fresh, setFresh] = useState<{ id: ModuleId; n: number } | null>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const urlRef = useRef<HTMLParagraphElement>(null);
  const doneLinkRef = useRef<HTMLAnchorElement>(null);

  const business = businesses.find((item) => item.id === biz) ?? businesses[0];
  const deadline = deadlines.find((item) => item.id === when);
  const chosen = modules.filter((item) => on.includes(item.id));
  const sentence = `Montei um projeto para ${business.article}${chosen.length ? `, com ${joinList(chosen.map((item) => item.short))}` : ""}, ${deadline ? deadline.text : "sem prazo definido"}.`;
  const message = `${INTRO}${sentence}${OUTRO}`;
  const ownDomain = on.includes("dominio");

  // O bloco recém-ligado rola para a vista dentro do celular.
  useEffect(() => {
    if (!fresh) return;
    const screen = screenRef.current;
    const block = screen?.querySelector<HTMLElement>(`[data-block="${fresh.id}"]`);
    if (screen && block) screen.scrollTo({ top: Math.max(0, block.offsetTop - 70), behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [fresh]);

  useEffect(() => {
    if (unlocked) doneLinkRef.current?.focus({ preventScroll: true });
  }, [unlocked]);

  const pickBusiness = (id: string) => {
    setBiz(id);
    if (!prefersReducedMotion()) {
      phoneRef.current?.animate([{ transform: "rotate(-2deg) scale(.97)" }, { transform: "none" }], { duration: 500, easing: "cubic-bezier(.34,1.56,.64,1)" });
    }
  };
  const toggle = (id: ModuleId) => {
    const turningOn = !on.includes(id);
    setOn((current) => (turningOn ? [...current, id] : current.filter((item) => item !== id)));
    if (turningOn) setFresh((current) => ({ id, n: (current?.n ?? 0) + 1 }));
    if (turningOn && id === "dominio" && !prefersReducedMotion()) {
      urlRef.current?.animate([{ transform: "scale(1.08)", background: "rgba(82,255,125,.35)" }, { transform: "none" }], { duration: 600, easing: "cubic-bezier(.34,1.56,.64,1)" });
    }
  };

  return (
    <div className="build">
      <p className="build-label"><span>1</span>Qual é o seu negócio?</p>
      <div
        className="build-chips"
        role="radiogroup"
        aria-label="Tipo de negócio"
        onKeyDown={(event) => radioKeys(event, businesses.map((item) => item.id), biz, pickBusiness)}
      >
        {businesses.map((item) => (
          <button
            key={item.id}
            type="button"
            role="radio"
            data-id={item.id}
            aria-checked={item.id === biz}
            tabIndex={item.id === biz ? 0 : -1}
            onClick={() => pickBusiness(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="build-label"><span>2</span>O que ele precisa ter?</p>
      <div className="build-grid">
        <div className="build-phone-col">
          <div
            ref={phoneRef}
            className={`phone ${ownDomain ? "has-domain" : ""} ${on.includes("ia") ? "has-ia" : ""}`.trim()}
            style={{ "--tint": business.tint } as CSSProperties}
            aria-hidden="true"
          >
            <div className="phone-screen" ref={screenRef}>
              <p className="m-url" ref={urlRef}>
                <Icon name="lock" />
                <span>{ownDomain ? `${business.slug}.com.br` : `instagram.com/${business.slug}`}</span>
              </p>
              <div className="m-hero">
                <span className="m-logo" />
                <p className="m-name">{business.name}</p>
                <span className="m-line" />
                <span className="m-line is-short" />
                <span className="m-cta">Agendar</span>
              </div>
              <div className="m-blocks">
                {blockOrder.filter((id) => on.includes(id)).map((id) => (
                  <PhoneBlock key={id} id={id} items={business.items} />
                ))}
              </div>
            </div>
            <span className="m-ia">Oi! Posso te ajudar com horários e valores.</span>
          </div>
          <p className="build-caption">Prévia ilustrativa</p>
        </div>
        <div className="build-tiles" role="group" aria-label="Módulos do projeto">
          {modules.map((item) => {
            const active = on.includes(item.id);
            return (
              <button key={item.id} className="tile" type="button" aria-pressed={active} onClick={() => toggle(item.id)}>
                <span className="tile-icon"><Icon name={item.icon} /></span>
                <span className="tile-copy">
                  <b>{item.label}</b>
                  <small>{active ? "Ligado" : "Desligado"}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="build-label"><span>3</span>Para quando?</p>
      <div
        className="build-chips"
        role="radiogroup"
        aria-label="Prazo"
        onKeyDown={(event) => radioKeys(event, deadlines.map((item) => item.id), when, setWhen)}
      >
        {deadlines.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="radio"
            data-id={item.id}
            aria-checked={item.id === when}
            tabIndex={item.id === when || (!when && index === 0) ? 0 : -1}
            onClick={() => setWhen(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {unlocked ? (
        <div className="build-done">
          <p className="build-unlocked"><Icon name="lock-open" /> Fase destravada</p>
          <blockquote className="build-summary">{sentence}</blockquote>
          <a ref={doneLinkRef} className="pill pill-neon pill-wide" href={waLink(message)} target="_blank" rel="noopener">
            <Icon name="whatsapp" /> Enviar para o Igor
          </a>
          <p className="build-hint">Mudou de ideia? É só ajustar acima: a mensagem acompanha.</p>
        </div>
      ) : (
        <div className="build-end">
          <p className="build-sum" aria-live="polite">
            <b>{business.label}</b> · {on.length} {on.length === 1 ? "módulo" : "módulos"} · {deadline ? deadline.label.toLowerCase() : "falta escolher o prazo"}
          </p>
          <button className="pill pill-neon pill-wide" type="button" disabled={!deadline || !on.length} onClick={onUnlock}>
            <Icon name="lock-open" /> Destravar a fase
          </button>
        </div>
      )}
    </div>
  );
}

function PhoneBlock({ id, items }: { id: ModuleId; items: string[] }) {
  if (id === "catalogo") {
    return (
      <div className="m-block m-cat" data-block={id}>
        <p className="m-h">Serviços</p>
        <div className="m-grid">
          {items.map((item) => (
            <span key={item} className="m-prod"><i /><b>{item}</b><em /></span>
          ))}
        </div>
      </div>
    );
  }
  if (id === "galeria") {
    return <div className="m-block m-gal" data-block={id}><i /><i /><i /><i /></div>;
  }
  if (id === "agenda") {
    return (
      <div className="m-block m-cal" data-block={id}>
        <p className="m-h">Agendar horário</p>
        <div className="m-days">
          {days.map((day, index) => <span key={day} className={index === 2 ? "is-on" : undefined}>{day}</span>)}
        </div>
        <div className="m-times"><span>09:00</span><span className="is-on">10:30</span><span>14:00</span></div>
      </div>
    );
  }
  if (id === "whats") {
    return <div className="m-block m-wa" data-block={id}><Icon name="whatsapp" /><span>Pedir pelo WhatsApp</span></div>;
  }
  if (id === "planilha") {
    return (
      <div className="m-block m-sheet" data-block={id}>
        <p className="m-h"><Icon name="bolt" /> Planilha</p>
        <span><i />Novo contato registrado</span>
        <span><i />Confirmação enviada</span>
      </div>
    );
  }
  return (
    <div className="m-block m-dash" data-block={id}>
      <p className="m-h">Painel da equipe</p>
      <div className="m-bars">
        {[0.5, 0.82, 0.36, 0.66, 0.92].map((height, index) => (
          <i key={index} style={{ "--h": height } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
