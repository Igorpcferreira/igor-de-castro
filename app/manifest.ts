import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Igor de Castro — Sites, sistemas e automações sob medida",
    short_name: "Igor de Castro",
    description:
      "Desenvolvedor Full Stack e cofundador da Kyber Tech. Sites, sistemas e automações sob medida para o seu negócio.",
    start_url: "/",
    display: "standalone",
    background_color: "#020409",
    theme_color: "#020409",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
