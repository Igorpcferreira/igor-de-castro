"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 7.7c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.6 1.6-.5.5-1.2.8-2 .7-1.1-.1-2.5-.6-4.2-2.1-1.4-1.2-2.4-2.7-2.7-3.7-.4-1.1 0-2 .3-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Contact() {
  const { copy } = useLanguage();
  const section = copy.contactSection;
  const { profile } = copy;
  const whatsappUrl = `${profile.links.whatsapp}?text=${encodeURIComponent(section.whatsappMessage)}`;

  return (
    <section id="contact" className="section-shell pb-24 md:pb-32">
      <div className="container-site max-w-[54rem] text-center">
        <SectionHeading overline={section.overline} title={section.title} centered />

        <Reveal delay={90}>
          <p className="text-body mx-auto -mt-4 max-w-[62ch] text-pretty text-[13px] leading-[1.85] sm:text-[15px]">
            {section.body}
          </p>
        </Reveal>

        <Reveal delay={170}>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cut-corners bg-neon text-night shadow-neon/30 hover:bg-neon-bright inline-flex min-h-13 items-center justify-center gap-2.5 px-7 text-[11px] font-bold uppercase tracking-[0.08em] shadow-[0_0_28px] transition-[background-color,box-shadow,translate] duration-fast hover:-translate-y-0.5 hover:shadow-[0_0_40px] sm:text-xs"
            >
              <WhatsAppIcon />
              {section.whatsappCta} <span aria-hidden="true">→</span>
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan inline-flex min-h-12 items-center justify-center border px-5 text-[11px] uppercase tracking-[0.07em] transition-[border-color,background-color,translate] hover:-translate-y-0.5"
            >
              {section.emailCta}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-cyan/25 text-body hover:border-cyan/60 hover:text-cyan inline-flex min-h-12 items-center justify-center border px-4 text-[11px] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-cyan/25 text-body hover:border-cyan/60 hover:text-cyan inline-flex min-h-12 items-center justify-center border px-4 text-[11px] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="text-muted mt-7 text-[11px]">
            {section.resumePrefix}{" "}
            <a
              href={profile.resumePdf}
              download
              className="text-cyan hover:text-cyan-bright border-b border-dashed border-current pb-0.5 transition-colors"
            >
              {profile.resumeDownloadLabel} ↓
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
