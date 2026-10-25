"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { useDragToClose, useSheet } from "./useSheet";
import { projectMessage, waLink, type Project } from "@/data/journey";

interface CaseSheetProps {
  items: Project[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClosed: () => void;
}

/** Caso aberto: folha com o vídeo (só depois do toque), o caminho do projeto e as ações. */
export default function CaseSheet({ items, index, onIndexChange, onClosed }: CaseSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const grabRef = useRef<HTMLDivElement>(null);
  const [video, setVideo] = useState<{ slug: string; autoPlay: boolean; failed: boolean } | null>(null);
  const handleClosed = useCallback(() => {
    setVideo(null);
    onClosed();
  }, [onClosed]);
  const { show, close } = useSheet(dialogRef, handleClosed);
  useDragToClose(grabRef, dialogRef, close);

  useEffect(() => {
    if (index !== null) show();
  }, [index, show]);

  const item = index === null ? null : items[index];
  const go = (step: number) => {
    if (index === null) return;
    setVideo(null);
    onIndexChange((index + step + items.length) % items.length);
    dialogRef.current?.scrollTo({ top: 0 });
  };
  const notes = item
    ? [
        item.kind === "conceito" ? "Projeto conceitual da Kyber: marca fictícia, não é cliente." : "",
        item.kind === "atleta" ? "Site feito para um familiar, sem relação comercial." : "",
        item.note ?? "",
      ].filter(Boolean)
    : [];
  const playing = item && video?.slug === item.slug ? video : null;

  return (
    <dialog
      ref={dialogRef}
      className="sheet case"
      id="case"
      aria-labelledby="case-title"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="sheet-grab" ref={grabRef}>
        <span />
      </div>
      <button className="round case-close" type="button" onClick={close} aria-label="Fechar">
        <Icon name="x" />
      </button>
      {item && (
        <>
          <div className="case-media">
            {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sem otimizador */}
            <img className="case-bg" src={item.poster} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sem otimizador */}
            <img className="case-shot" src={item.poster} alt={`Página inicial do site ${item.name}`} />
            {playing ? (
              playing.failed ? (
                <p className="case-error">Não foi possível carregar o vídeo agora. O site continua no botão abaixo.</p>
              ) : (
                <video
                  key={item.slug}
                  ref={(node) => {
                    // Mudo antes de tocar: é o que os navegadores do celular exigem para o autoplay.
                    if (!node || !playing.autoPlay) return;
                    node.muted = true;
                    node.play().catch(() => {});
                  }}
                  src={item.video}
                  poster={item.poster}
                  muted
                  loop
                  controls
                  playsInline
                  autoPlay={playing.autoPlay}
                  preload={playing.autoPlay ? "auto" : "none"}
                  aria-label={`Demonstração de ${item.name}`}
                  onError={() => setVideo({ ...playing, failed: true })}
                />
              )
            ) : (
              <button
                className="pill pill-neon case-play"
                type="button"
                onClick={() => {
                  // Com economia de dados ligada, o vídeo não começa sozinho.
                  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
                  setVideo({ slug: item.slug, autoPlay: !saveData, failed: false });
                }}
              >
                <Icon name="play" /> Ver o vídeo · {item.duration}
              </button>
            )}
          </div>
          <div className="sheet-body">
            <p className="case-kind">{item.label}</p>
            <h2 className="case-title" id="case-title">
              {item.name}
            </h2>
            <ol className="case-path">
              <li>
                <span className="mini-node"><Icon name="flag" /></span>
                <div><b>O desafio</b><p>{item.problem}</p></div>
              </li>
              <li>
                <span className="mini-node"><Icon name="bolt" /></span>
                <div><b>O que foi feito</b><p>{item.solution}</p></div>
              </li>
              {item.result && (
                <li>
                  <span className="mini-node"><Icon name="check" /></span>
                  <div><b>Resultado</b><p>{item.result}</p></div>
                </li>
              )}
            </ol>
            {notes.length > 0 && <p className="case-note">{notes.join(" ")}</p>}
            <ul className="chips">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="case-actions">
              <a className="pill pill-neon pill-wide" href={waLink(projectMessage(item.name))} target="_blank" rel="noopener">
                <Icon name="whatsapp" /> Quero um projeto assim
              </a>
              <a className={`pill pill-glass pill-wide ${item.desktopOnly ? "is-desktop-only" : ""}`.trim()} href={item.site} target="_blank" rel="noopener">
                Visitar o site <Icon name="arrow-up-right" />
              </a>
            </div>
            <div className="case-nav">
              <button className="round" type="button" onClick={() => go(-1)} aria-label="Projeto anterior">
                <Icon name="chevron-left" />
              </button>
              <span className="case-count">
                {(index ?? 0) + 1} de {items.length}
              </span>
              <button className="round" type="button" onClick={() => go(1)} aria-label="Próximo projeto">
                <Icon name="chevron-right" />
              </button>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
