import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Igor de Castro — Full Stack Developer",
    short_name: "Igor de Castro",
    description:
      "Modernizo sistemas de grande porte e construo produtos web rápidos, acessíveis e com qualidade mensurável.",
    start_url: "/",
    display: "standalone",
    background_color: "#010503",
    theme_color: "#010503",
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
