"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/data/content";

export default function ProjectMedia({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const pt = locale === "pt-BR";
  if (!project.image) return null;

  return (
    <div className="mb-5 overflow-hidden rounded border border-cyan/20 bg-black/30">
      {playing && project.video ? (
        <>
          <video
            className="aspect-video w-full object-contain"
            src={project.video}
            poster={project.image}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-label={`${pt ? "Demonstração de" : "Demo of"} ${project.name}`}
            onError={() => setFailed(true)}
          />
          {failed && <p role="alert" className="p-3 text-xs">{pt ? "Não foi possível carregar o vídeo." : "Could not load the video."} <a className="underline" href={project.video} target="_blank" rel="noopener noreferrer">{pt ? "Abrir vídeo" : "Open video"}</a></p>}
        </>
      ) : (
        <Image src={project.image} alt={`${pt ? "Prévia de" : "Preview of"} ${project.name}`} width={800} height={500} className="aspect-video w-full object-cover object-top" />
      )}
      {project.video && (
        <button type="button" className="w-full cursor-pointer border-t border-cyan/20 p-3 text-left text-xs text-cyan hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan" onClick={() => { setPlaying(!playing); setFailed(false); }}>
          {playing ? (pt ? "Fechar vídeo" : "Close video") : (pt ? "▷ Ver vídeo" : "▷ Watch video")}
          <span className="sr-only">: {project.name}</span>
        </button>
      )}
    </div>
  );
}
