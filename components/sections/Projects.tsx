"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const { copy } = useLanguage();
  const section = copy.projectsSection;

  return (
    <section id="projects" className="section-shell">
      <div className="container-site">
        <SectionHeading overline={section.overline} title={section.title} />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {section.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 75} className="h-full">
              <article className="corner-card cyan-surface group flex h-full flex-col p-5 [--corner-color:var(--color-cyan)] hover:border-cyan/50 transition-[border-color,box-shadow,translate] duration-base hover:-translate-y-1 hover:shadow-[0_0_34px_rgb(53_200_255_/_0.09)] sm:p-7">
                <header className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-ink group-hover:text-cyan-bright text-xl font-bold transition-colors">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${section.visitLabel}: ${project.name}`}
                        className="after:absolute after:inset-0"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-cyan mt-1 text-[11px] leading-relaxed sm:text-xs">
                      {project.tagline}
                    </p>
                  </div>
                  <Icon
                    name="external"
                    size={19}
                    className="text-cyan group-hover:text-cyan-bright shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </header>

                {project.badge && (
                  <p className="mt-4">
                    <span className="border-neon/35 bg-neon/[0.05] text-neon inline-flex border px-2.5 py-1 text-[9px] uppercase tracking-[0.06em] sm:text-[10px]">
                      {project.badge}
                    </span>
                  </p>
                )}

                <div className="text-body mt-4 flex-1 space-y-3 text-pretty text-[12px] leading-[1.75] sm:text-[13px]">
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                  {project.stack.map((technology) => (
                    <li key={technology} className="text-muted text-[9px] sm:text-[10px]">
                      <span className="text-cyan/60">#</span>
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
