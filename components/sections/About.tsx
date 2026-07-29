"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const { copy } = useLanguage();
  const section = copy.aboutSection;
  const { profile, languages } = copy;

  return (
    <section id="about" className="section-shell">
      <div className="container-site">
        <SectionHeading overline={section.overline} title={section.title} />

        <div className="grid items-start gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <Reveal>
            <article className="terminal-surface">
              <header className="border-neon/15 bg-neon/[0.045] flex items-center gap-2 border-b px-4 py-3">
                <span aria-hidden="true" className="bg-danger/85 h-2.5 w-2.5 rounded-full" />
                <span aria-hidden="true" className="bg-warning/85 h-2.5 w-2.5 rounded-full" />
                <span aria-hidden="true" className="bg-neon/85 h-2.5 w-2.5 rounded-full" />
                <Icon name="terminal" size={16} className="text-neon/70 ml-2 shrink-0" />
                <span className="text-muted text-[10px] sm:text-xs">
                  {section.terminalTitle}
                </span>
              </header>
              <div className="space-y-4 p-5 text-[13px] leading-[1.8] sm:p-7 sm:text-[14px]">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className="text-body text-pretty">
                    <span className={index % 2 === 0 ? "text-neon" : "text-cyan"}>
                      {index === 0 ? "> " : "$ "}
                    </span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <dl className="cyan-surface divide-cyan/10 divide-y">
              <div className="p-5">
                <dt className="text-cyan mb-2 text-[10px] uppercase tracking-[0.18em]">
                  {section.statusLabel}
                </dt>
                <dd className="text-ink flex gap-2 text-[12px] leading-relaxed sm:text-[13px]">
                  <span
                    aria-hidden="true"
                    className="bg-neon animate-ping-soft mt-1.5 h-1.5 w-1.5 shrink-0 motion-reduce:animate-none"
                  />
                  {section.statusValue}
                </dd>
              </div>
              <div className="p-5">
                <dt className="text-cyan mb-2 text-[10px] uppercase tracking-[0.18em]">
                  {section.locationLabel}
                </dt>
                <dd className="text-ink text-[13px]">
                  {profile.location} <span className="text-muted">· {profile.timezone}</span>
                </dd>
              </div>
              <div className="p-5">
                <dt className="text-cyan mb-2 text-[10px] uppercase tracking-[0.18em]">
                  {section.emailLabel}
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="text-neon hover:text-neon-bright break-all text-[12px] transition-colors sm:text-[13px]"
                  >
                    {profile.links.email}
                  </a>
                </dd>
              </div>
              <div className="p-5">
                <dt className="text-cyan mb-2 text-[10px] uppercase tracking-[0.18em]">
                  {section.languagesLabel}
                </dt>
                <dd className="text-ink text-[13px]">
                  {languages.map((language) => (
                    <span key={language.name} className="mr-3 inline-block">
                      {language.name} <span className="text-muted">({language.level})</span>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
