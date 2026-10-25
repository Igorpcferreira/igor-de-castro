import BackgroundVeil from "@/components/BackgroundVeil";
import NeuralBackground from "@/components/NeuralBackground";
import Journey from "@/components/journey/Journey";
import { profile, SITE_URL, socials } from "@/data/journey";

// Dados estruturados só com fatos publicados no próprio site.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: SITE_URL,
  image: `${SITE_URL}${profile.poster}`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
  sameAs: socials.map((social) => social.href),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <NeuralBackground />
      <BackgroundVeil mobile={0.46} desktop={0.52} />
      <Journey />
    </>
  );
}
