"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function ExperienceSection() {
  const { copy } = useLanguage();
  const section = copy.experienceSection;

  return (
    <section id="experience" className="section-shell">
      <div className="container-site max-w-[69rem]">
        <SectionHeading overline={section.overline} title={section.title} />

        <ol className="space-y-0">
          {section.experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${copy.localeName}`}
              as="li"
              delay={index * 90}
              className="grid grid-cols-[18px_minmax(0,1fr)] gap-4 sm:grid-cols-[24px_minmax(0,1fr)] sm:gap-6"
            >
              <div aria-hidden="true" className="flex flex-col items-center">
                <span
                  className={`mt-1.5 h-3 w-3 rotate-45 border-2 ${
                    index === 0
                      ? "border-neon bg-night shadow-[0_0_12px_rgb(82_255_125_/_0.7)]"
                      : "border-cyan/55 bg-night"
                  }`}
                />
                {index < section.experiences.length - 1 && (
                  <span className="from-neon/40 to-neon/5 mt-2 min-h-16 w-px flex-1 bg-gradient-to-b" />
                )}
              </div>

              <article className="pb-12 sm:pb-16">
                <header className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                  <h3 className="font-display text-ink text-xl font-bold sm:text-[1.35rem]">
                    {experience.company}
                  </h3>
                  <p className="text-cyan text-[12px] sm:text-[13px]">{experience.role}</p>
                </header>
                <p className="text-muted mt-1.5 text-[10px] leading-relaxed tracking-[0.04em] sm:text-[11px]">
                  {experience.period} · {experience.location}
                </p>

                {experience.roles && (
                  <ol className="mt-4 space-y-1.5">
                    {experience.roles.map((role) => (
                      <li
                        key={role.title}
                        className="flex flex-col text-[11px] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2"
                      >
                        <span className="text-neon">
                          ↳ <span className="text-body font-medium">{role.title}</span>
                        </span>
                        <span className="text-muted">{role.period}</span>
                      </li>
                    ))}
                  </ol>
                )}

                <p className="text-body mt-4 max-w-[76ch] text-pretty text-[13px] leading-[1.8] sm:text-[14px]">
                  <span className="text-neon">&gt; </span>
                  {experience.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {experience.summaryTags.map((tag) => (
                    <li
                      key={tag}
                      className="border-neon/20 text-body border px-2 py-1 text-[9px] sm:text-[10px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <details className="experience-details border-neon/15 mt-5 border-l pl-4 sm:pl-5">
                  <summary className="text-neon hover:text-neon-bright inline-flex cursor-pointer list-none items-center gap-2 py-1 text-[11px] tracking-[0.05em] transition-colors">
                    <span
                      aria-hidden="true"
                      className="details-arrow inline-block transition-transform duration-fast"
                    >
                      ▸
                    </span>
                    {section.detailsLabel}
                  </summary>

                  <div className="mt-5 space-y-7">
                    <ul className="max-w-[80ch] space-y-2.5">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-body flex gap-2.5 text-pretty text-[12px] leading-[1.75] sm:text-[13px]"
                        >
                          <span aria-hidden="true" className="text-cyan shrink-0">
                            ▹
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {experience.projects && (
                      <div>
                        <h4 className="text-cyan mb-3 text-[10px] uppercase tracking-[0.16em]">
                          {section.projectsLabel}
                        </h4>
                        <div className="grid gap-3 md:grid-cols-2">
                          {experience.projects.map((project) => (
                            <article key={project.name} className="cyan-surface p-4">
                              <h5 className="font-display text-ink text-sm font-bold">
                                {project.name}
                              </h5>
                              <p className="text-cyan mt-1 text-[9px] leading-relaxed">
                                {project.period} · {project.client}
                              </p>
                              <p className="text-body mt-2 text-pretty text-[11px] leading-[1.7]">
                                {project.description}
                              </p>
                            </article>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
