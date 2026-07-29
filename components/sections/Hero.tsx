"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";

function TypedCommand({ command }: { command: string }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(command.slice(0, index));
      if (index >= command.length) window.clearInterval(timer);
    }, 135);
    return () => window.clearInterval(timer);
  }, [command]);

  return (
    <span className="text-[12px] sm:text-sm">
      <span className="text-cyan">igor@dev</span>
      <span className="text-muted">:~$ </span>
      <span className="text-ink">{typed}</span>
      <span
        aria-hidden="true"
        className="bg-neon animate-blink ml-1 inline-block h-[14px] w-2 translate-y-[3px] motion-reduce:animate-none"
      />
    </span>
  );
}

function Portrait({
  mobile = false,
  caption,
}: {
  mobile?: boolean;
  caption: string;
}) {
  return (
    <div
      className={`corner-card [--corner-secondary:var(--color-cyan)] ${
        mobile ? "h-[78px] w-[78px] shrink-0 p-1" : "terminal-surface p-2.5"
      }`}
    >
      <div className={`relative overflow-hidden ${mobile ? "h-full w-full" : ""}`}>
        <picture>
          {!mobile && <source media="(min-width: 700px)" srcSet="/igor-hero.png" />}
          <img
            src="/igor-square.png"
            alt="Igor de Castro"
            width={mobile ? 78 : 720}
            height={mobile ? 78 : 911}
            fetchPriority="high"
            className={`block w-full object-cover ${
              mobile ? "h-full object-[50%_22%]" : "aspect-[0.79] h-auto"
            }`}
          />
        </picture>
      </div>
      {!mobile && (
        <p className="text-muted flex items-center justify-between px-1 pb-0.5 pt-2.5 text-[10px]">
          <span>
            <span className="text-neon">&gt;</span> {caption}
          </span>
          <span className="text-neon">● online</span>
        </p>
      )}
    </div>
  );
}

export default function Hero() {
  const { copy, locale } = useLanguage();
  const { profile, hero, metrics } = copy;
  const taglineHighlight =
    locale === "pt-BR" ? "qualidade mensurável" : "measurable quality";
  const [taglineStart, taglineEnd = ""] = profile.tagline.split(taglineHighlight);

  return (
    <section
      id="top"
      aria-label={profile.title}
      className="container-site flex min-h-svh flex-col justify-center pb-12 pt-28 md:pb-10 md:pt-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(250px,330px)] lg:gap-20">
        <div>
          <Reveal className="mb-5 hidden md:block">
            <TypedCommand command={profile.command} />
          </Reveal>

          <Reveal className="mb-5 flex items-center gap-4 md:hidden">
            <Portrait mobile caption={hero.photoCaption} />
            <div className="min-w-0">
              <TypedCommand command={profile.command} />
              <p className="text-neon mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em]">
                <span
                  aria-hidden="true"
                  className="bg-neon animate-ping-soft h-1.5 w-1.5 motion-reduce:animate-none"
                />
                {profile.headlineTag}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-neon mb-3 hidden items-center gap-3 text-[11px] uppercase tracking-[0.24em] md:flex">
              <span
                aria-hidden="true"
                className="bg-neon animate-ping-soft h-2 w-2 motion-reduce:animate-none"
              />
              {profile.headlineTag}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="font-display text-ink text-[clamp(3.1rem,8vw,7.25rem)] font-bold leading-[0.91] tracking-[-0.045em] [text-shadow:0_0_42px_rgb(82_255_125_/_0.12)]">
              Igor
              <br />
              de Castro<span className="text-neon">_</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="text-body mt-6 max-w-[58ch] text-pretty text-[13px] leading-[1.8] sm:text-[15px] lg:text-base">
              <span className="text-neon">&gt; </span>
              {taglineStart}
              <span className="text-cyan">{taglineHighlight}</span>
              {taglineEnd}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="cut-corners bg-neon text-night shadow-neon/30 hover:bg-neon-bright inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[12px] font-bold uppercase tracking-[0.09em] shadow-[0_0_26px] transition-[background-color,box-shadow,translate] duration-fast hover:-translate-y-0.5 hover:shadow-[0_0_38px]"
              >
                {hero.projectsCta} <span aria-hidden="true">→</span>
              </a>
              <a
                href={profile.resumePdf}
                download
                className="border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-[11px] font-medium uppercase tracking-[0.07em] transition-[border-color,background-color,translate] duration-fast hover:-translate-y-0.5 sm:text-[12px]"
              >
                {profile.resumeDownloadLabel} <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-neon inline-flex min-h-10 items-center justify-center border-b border-dashed border-current text-[12px] tracking-[0.06em] transition-colors sm:ml-1"
              >
                {hero.contactCta} --&gt;
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="hidden md:block">
          <Portrait caption={hero.photoCaption} />
        </Reveal>
      </div>

      <Reveal delay={380}>
        <dl className="border-neon/15 mt-11 grid max-w-[760px] grid-cols-3 gap-3 border-t pt-5 sm:mt-16 sm:gap-10 sm:pt-7">
          {metrics.map((metric, index) => (
            <div key={metric.label}>
              <dd
                className={`font-display text-2xl font-bold sm:text-3xl ${
                  index === 1 ? "text-cyan" : "text-neon"
                }`}
              >
                {metric.value}
              </dd>
              <dt className="text-muted mt-1 text-[8px] uppercase leading-relaxed tracking-[0.11em] sm:text-[10px] sm:tracking-[0.16em]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={520} className="mt-9 hidden justify-center md:flex">
        <a
          href="#about"
          className="text-muted hover:text-neon flex flex-col items-center gap-1 text-[9px] uppercase tracking-[0.2em] transition-colors"
        >
          {hero.scrollLabel}
          <span aria-hidden="true" className="text-sm">
            ↓
          </span>
        </a>
      </Reveal>
    </section>
  );
}
