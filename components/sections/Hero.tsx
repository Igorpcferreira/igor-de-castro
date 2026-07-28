import Reveal from "@/components/Reveal";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="topo" aria-label="Apresentação" className="flex min-h-svh flex-col justify-center">
      <div className="container-site max-w-6xl py-28">
        <Reveal>
          <p className="mb-6 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="bg-neon animate-ping-soft motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full" />
              <span className="bg-neon shadow-[0_0_12px] shadow-neon/80 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="text-neon text-[13px] font-medium uppercase tracking-[0.22em]">
              {profile.headlineTag}
            </span>
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="text-ink text-balance text-[clamp(2.4rem,6.5vw,4.8rem)] font-bold leading-[1.04] tracking-tight">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="text-cyan-bright mt-4 text-[clamp(1.15rem,2.4vw,1.6rem)] font-medium">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={270}>
          <p className="text-body mt-6 max-w-[52ch] text-pretty text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="bg-cyan text-night shadow-cyan/25 hover:bg-cyan-bright rounded-lg px-6 py-3 text-sm font-semibold shadow-[0_0_28px] transition-[background-color,translate] duration-fast ease-glide hover:-translate-y-0.5"
            >
              Ver projetos
            </a>
            <a
              href={profile.resumePdf}
              download
              className="border-cyan/40 text-cyan hover:border-cyan hover:bg-cyan/10 rounded-lg border px-6 py-3 text-sm font-semibold transition-[border-color,background-color,translate] duration-fast ease-glide hover:-translate-y-0.5"
            >
              Baixar currículo
            </a>
            <a
              href="#contato"
              className="text-body hover:text-cyan-bright group px-2 py-3 text-sm font-medium transition-colors duration-fast ease-glide"
            >
              Contato
              <span
                aria-hidden="true"
                className="ml-1.5 inline-block transition-transform duration-fast ease-glide group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={600} className="pb-10 text-center">
        <a
          href="#sobre"
          aria-label="Rolar para a seção Sobre"
          className="text-muted hover:text-cyan-bright inline-flex flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] transition-colors duration-fast ease-glide"
        >
          scroll
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="animate-bounce motion-reduce:animate-none"
          >
            <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
