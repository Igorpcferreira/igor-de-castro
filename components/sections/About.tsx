import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, experiences, languages, profile } from "@/data/content";

export default function About() {
  const current = experiences[0];

  return (
    <section id="sobre" className="py-24">
      <div className="container-site">
        <SectionHeading overline="01 · Sobre" title="Quem sou eu" />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            {about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-body text-pretty leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <dl className="card-surface space-y-5 p-6 text-sm">
              <div>
                <dt className="text-cyan-soft mb-1 text-[12px] uppercase tracking-[0.16em]">
                  Atualmente
                </dt>
                <dd className="text-ink flex items-center gap-2">
                  <span className="bg-neon h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                  {current.role} · {current.company}
                </dd>
              </div>
              <div>
                <dt className="text-cyan-soft mb-1 text-[12px] uppercase tracking-[0.16em]">
                  Local
                </dt>
                <dd className="text-body">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-cyan-soft mb-1 text-[12px] uppercase tracking-[0.16em]">
                  E-mail
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="text-cyan hover:text-cyan-bright break-all transition-colors duration-fast ease-glide"
                  >
                    {profile.links.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cyan-soft mb-1 text-[12px] uppercase tracking-[0.16em]">
                  Idiomas
                </dt>
                <dd className="text-body">
                  {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
