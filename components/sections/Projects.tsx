import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="container-site">
        <SectionHeading overline="04 · Projetos" title="Projetos e empreendedorismo" />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90} className="h-full">
              <article className="card-surface group hover:border-cyan/35 relative flex h-full flex-col p-6 transition-[border-color,translate] duration-base ease-glide hover:-translate-y-1">
                <header className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-ink group-hover:text-cyan-bright text-lg font-semibold transition-colors duration-fast ease-glide">
                      {/* Link do título cobre o card inteiro (after:inset-0): um único tab stop */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0"
                      >
                        {project.name}
                      </a>
                    </h3>
                    <p className="text-cyan-soft mt-0.5 text-sm">{project.tagline}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-muted group-hover:text-cyan-bright shrink-0 transition-[color,translate] duration-fast ease-glide group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </header>

                {project.badge && (
                  <p className="mb-3">
                    <span className="border-neon/30 text-neon rounded-full border px-2.5 py-0.5 text-[12px] font-medium">
                      {project.badge}
                    </span>
                  </p>
                )}

                <div className="text-body flex-1 space-y-2.5 text-pretty text-[14px] leading-relaxed">
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border-cyan/15 bg-cyan/5 text-cyan-soft rounded-full border px-2.5 py-0.5 text-[12px]"
                    >
                      {tech}
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
