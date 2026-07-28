import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/content";

const socialLinks = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
] as const;

export default function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="container-site max-w-3xl text-center">
        <SectionHeading overline="06 · Contato" title="Vamos conversar?" />

        <Reveal delay={90}>
          <p className="text-body mx-auto -mt-4 max-w-[48ch] text-pretty leading-relaxed">
            Aberto a boas conversas sobre desenvolvimento, modernização de sistemas e novos
            projetos. O caminho mais rápido é o e-mail — respondo rápido.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.links.email}`}
              className="bg-cyan text-night shadow-cyan/25 hover:bg-cyan-bright rounded-lg px-6 py-3 text-sm font-semibold shadow-[0_0_28px] transition-[background-color,translate] duration-fast ease-glide hover:-translate-y-0.5"
            >
              {profile.links.email}
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-cyan/40 text-cyan hover:border-cyan hover:bg-cyan/10 rounded-lg border px-6 py-3 text-sm font-semibold transition-[border-color,background-color,translate] duration-fast ease-glide hover:-translate-y-0.5"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={270}>
          <p className="mt-6">
            <a
              href={profile.resumePdf}
              download
              className="text-cyan-soft hover:text-cyan-bright text-sm transition-colors duration-fast ease-glide"
            >
              Ou baixe meu currículo em PDF <span aria-hidden="true">↓</span>
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
