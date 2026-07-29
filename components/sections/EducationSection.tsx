"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function EducationSection() {
  const { copy } = useLanguage();
  const section = copy.educationSection;
  const { education, certifications } = section;

  return (
    <section id="education" className="section-shell">
      <div className="container-site">
        <SectionHeading overline={section.overline} title={section.title} />

        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <article className="corner-card terminal-surface p-5 sm:p-7">
              <p className="text-neon mb-3 text-[10px]">~/education/main</p>
              <h3 className="font-display text-ink text-xl font-bold">{education.degree}</h3>
              <p className="text-cyan mt-1.5 text-[11px] leading-relaxed sm:text-xs">
                {education.institution}
              </p>
              <p className="text-muted mt-1 text-[10px]">{education.period}</p>
              <ul className="mt-5 space-y-3">
                {education.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-body flex gap-2.5 text-pretty text-[12px] leading-[1.75] sm:text-[13px]"
                  >
                    <span aria-hidden="true" className="text-neon shrink-0">
                      ▹
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-cyan mb-3 text-[10px] uppercase tracking-[0.16em]">
              {section.certificationsLabel}
            </h3>
            <ul className="divide-cyan/10 cyan-surface divide-y">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  {certification.url ? (
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:bg-cyan/[0.035] focus-visible:ring-cyan/50 flex items-start justify-between gap-4 px-4 py-3.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      aria-label={`${section.certificationLinkLabel}: ${certification.name}`}
                    >
                      <span className="text-body group-hover:text-cyan-bright text-[11px] leading-relaxed underline decoration-cyan/25 underline-offset-4 transition-colors sm:text-xs">
                        {certification.name}
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="text-muted text-[10px]">{certification.year}</span>
                        <span
                          aria-hidden="true"
                          className="text-cyan group-hover:text-cyan-bright text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start justify-between gap-4 px-4 py-3.5">
                      <span className="text-body text-[11px] leading-relaxed sm:text-xs">
                        {certification.name}
                      </span>
                      <span className="text-muted shrink-0 text-[10px]">
                        {certification.year}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
