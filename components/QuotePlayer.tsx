"use client";

import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import { QuoteFilm } from "@/motion/src/QuoteFilm";
import type { Locale } from "@/data/content";

export default function QuotePlayer({ locale }: { locale: Locale }) {
  const player = useRef<PlayerRef>(null);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const pause = () => { if (document.hidden) player.current?.pause(); };
    document.addEventListener("visibilitychange", pause);
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) player.current?.pause(); });
    if (container.current) observer.observe(container.current);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", pause); };
  }, []);
  return <div ref={container} aria-label={locale === "pt-BR" ? "Vídeo: da ideia ao projeto" : "Video: from idea to project"}>
    <Player ref={player} component={QuoteFilm} inputProps={{ locale }} durationInFrames={780} compositionWidth={900} compositionHeight={1000} fps={30} controls autoPlay loop={false} style={{ width: "100%" }} showVolumeControls={false} errorFallback={() => <p className="p-8 text-body">{locale === "pt-BR" ? "Não foi possível reproduzir. Veja as etapas ao lado e fale comigo pelo botão de orçamento." : "Playback is unavailable. Read the steps beside the video and use the quote button to contact me."}</p>} />
  </div>;
}
