"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  const { copy } = useLanguage();
  const section = copy.servicesSection;
  const { links } = copy.profile;

  return (
    <section id="services" className="section-shell">
      <div className="container-site">
        <SectionHeading overline={section.overline} title={section.title} />

        <Reveal delay={60}>
          <p className="text-body -mt-4 max-w-[68ch] text-pretty text-[13px] leading-[1.85] sm:text-[15px]">
            <span className="text-neon">&gt; </span>
            {section.lead}
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-3 lg:gap-5">
          {section.services.map((service, index) => (
            <Reveal key={service.title} delay={120 + index * 75} className="h-full">
              <article className="corner-card terminal-surface group flex h-full flex-col p-5 transition-[border-color,box-shadow,translate] duration-base hover:-translate-y-1 hover:border-neon/45 hover:shadow-[0_0_34px_rgb(82_255_125_/_0.08)] sm:p-6">
                <p className="text-neon/70 font-display text-[11px] font-bold tracking-[0.18em]">
                  {service.index}
                </p>
                <h3 className="font-display text-ink group-hover:text-neon mt-2 text-lg font-bold transition-colors">
                  {service.title}
                </h3>
                <p className="text-body mt-3 flex-1 text-pretty text-[12px] leading-[1.75] sm:text-[13px]">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-muted text-[10px] sm:text-[11px]">
                      <span className="text-neon/60 mr-1.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={340}>
          <div className="corner-card cyan-surface mt-5 flex flex-col gap-6 p-6 [--corner-color:var(--color-cyan)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <p className="text-cyan text-[10px] uppercase tracking-[0.2em]">
                {section.studioLabel}
              </p>
              <p className="font-display text-ink mt-2 text-2xl font-bold tracking-[-0.02em]">
                {section.studioName}
                <span className="text-cyan">_</span>
              </p>
              <p className="text-body mt-3 max-w-[52ch] text-pretty text-[12px] leading-[1.75] sm:text-[13px]">
                {section.studioBody}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <a
                href={links.kyber}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-corners bg-neon text-night shadow-neon/30 hover:bg-neon-bright inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[11px] font-bold uppercase tracking-[0.08em] shadow-[0_0_26px] transition-[background-color,box-shadow,translate] duration-fast hover:-translate-y-0.5 hover:shadow-[0_0_38px] sm:text-xs"
              >
                {section.primaryCta} <Icon name="arrow-right" size={17} />
              </a>
              <a
                href={links.kyberPricing}
                target="_blank"
                rel="noopener noreferrer"
                className="border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan inline-flex min-h-12 items-center justify-center border px-5 text-[11px] uppercase tracking-[0.07em] transition-[border-color,background-color,translate] duration-fast hover:-translate-y-0.5"
              >
                {section.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="text-muted mt-5 text-pretty text-[11px] leading-relaxed">
            {section.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
