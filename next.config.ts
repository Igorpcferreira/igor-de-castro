import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: gera HTML puro em /out, sem servidor Node em produção.
  output: "export",
  // Preserva a base dos assets relativos de /links/ e /modelo/ na Vercel.
  trailingSlash: true,
  // O otimizador de imagens do Next precisa de servidor; no export estático fica desligado.
  images: { unoptimized: true },
  // Evita o Next inferir o lockfile global de C:\Users\user como raiz do workspace.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
