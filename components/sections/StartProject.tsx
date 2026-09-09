"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Icon from "@/components/Icon";

const QuotePlayer = dynamic(() => import("@/components/QuotePlayer"), { ssr: false, loading: () => <p role="status" className="p-8 text-body">Carregando / Loading…</p> });

export default function StartProject() {
  const { locale, copy } = useLanguage();
  const pt = locale === "pt-BR";
  const [playing, setPlaying] = useState(false);
  const [service, setService] = useState(0);
  const services = pt ? ["Site", "Sistema", "Automação"] : ["Website", "Software", "Automation"];
  const message = pt
    ? `Olá, Igor! Vi seu portfólio e gostaria de um orçamento para ${services[service].toLowerCase()}. Meu negócio é: ___. O que preciso resolver: ___.`
    : `Hi, Igor! I found your portfolio and would like a quote for ${services[service].toLowerCase()}. My business is: ___. What I need to solve: ___.`;
  return <section id="start-project" aria-labelledby="start-project-title" className="section-shell">
    <div className="container-site">
      <div className="overflow-hidden rounded-xl border border-neon/25 bg-night-soft/95 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <p className="text-neon text-[11px] font-bold tracking-[0.16em]">{pt ? "DA IDEIA AO PROJETO" : "FROM IDEA TO PROJECT"}</p>
          <h2 id="start-project-title" className="font-display mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">{pt ? "Seu projeto começa com uma conversa." : "Your project starts with a conversation."}</h2>
          <p className="mt-5 text-sm leading-relaxed text-body">{pt ? "Me conte o que seu negócio precisa. Vamos definir o que faz sentido construir e combinar os próximos passos." : "Tell me what your business needs. We’ll decide what makes sense to build and agree on the next steps."}</p>
          <ol className="my-7 space-y-3 text-xs leading-relaxed text-body">
            {(pt ? ["Entendemos sua necessidade.", "Você recebe escopo, prazo e investimento.", "Com a proposta aprovada, começamos o projeto."] : ["We understand your needs.", "You receive a scope, timeline, and price.", "Once you approve the proposal, we start."]).map((item, i) => <li key={item} className="flex gap-3"><span className="text-neon">0{i + 1}</span>{item}</li>)}
          </ol>
          <fieldset>
            <legend className="mb-3 text-xs text-ink">{pt ? "O que você precisa?" : "What do you need?"}</legend>
            <div className="flex flex-wrap gap-2">{services.map((name, index) => <label key={name} className="cursor-pointer"><input type="radio" name="project-service" value={name} checked={service === index} onChange={() => setService(index)} className="peer sr-only" /><span className="block rounded border border-neon/25 px-4 py-2 text-xs text-body peer-checked:border-neon peer-checked:bg-neon/10 peer-checked:text-neon peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-neon">{name}</span></label>)}</div>
          </fieldset>
          <a id="quote-whatsapp" href={`${copy.profile.links.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded bg-neon px-5 py-3 text-center text-xs font-bold text-night hover:bg-neon-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon">{pt ? "Conversar sobre meu orçamento" : "Let’s discuss my project"}<Icon name="arrow-right" size={18} /></a>
          <p className="mt-3 text-[11px] leading-relaxed text-muted">{pt ? "Abre o WhatsApp com uma mensagem pronta para você completar." : "Opens WhatsApp with a message you can complete."}</p>
        </div>
        <div className="border-t border-neon/20 lg:border-t-0 lg:border-l">
          <div className="aspect-[9/10] overflow-hidden bg-[#031008]">
            {playing ? <QuotePlayer key={locale} locale={locale} /> : <button type="button" onClick={() => setPlaying(true)} className="group relative flex h-full w-full cursor-pointer flex-col justify-center gap-7 p-8 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-neon sm:p-12" style={{ background: "radial-gradient(ellipse at top right, #123724, #031008 70%)" }} aria-label={pt ? "Assistir: como seu projeto começa, 26 segundos" : "Watch: how your project starts, 26 seconds"}>
              <span className="text-[11px] tracking-[0.18em] text-neon">IGOR DE CASTRO / 00:26</span>
              <span className="font-display text-4xl leading-tight font-bold text-ink sm:text-5xl">{pt ? "Uma ideia. Um plano. Seu próximo projeto." : "One idea. One plan. Your next project."}</span>
              <span className="text-sm text-body">{pt ? "Veja como funciona, em 26 segundos." : "See how it works in 26 seconds."}</span>
              <span className="flex items-center gap-4 text-sm text-neon"><span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full border border-neon/60 text-xl group-hover:bg-neon/10">▷</span>{pt ? "Assistir ao vídeo" : "Watch the video"}</span>
              <span className="text-xs text-muted">{pt ? "Sem áudio. Você controla a reprodução." : "Silent video. You control playback."}</span>
            </button>}
          </div>
          {playing && <button type="button" onClick={() => setPlaying(false)} className="w-full cursor-pointer border-t border-neon/20 p-3 text-xs text-neon hover:bg-neon/10">{pt ? "Fechar vídeo" : "Close video"}</button>}
        </div>
      </div>
    </div>
  </section>;
}
