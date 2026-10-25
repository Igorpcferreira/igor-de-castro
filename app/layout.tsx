import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/data/journey";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteTitle = "Igor de Castro — Sites, sistemas e automações sob medida";
const siteDescription =
  "Desenvolvedor Full Stack e cofundador da Kyber Tech. Sites, sistemas e automações sob medida, com projetos reais, preço claro e conversa direta no WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Igor de Castro",
    "criação de sites Goiânia",
    "site para pequenos negócios",
    "automação de WhatsApp",
    "sistema sob medida",
    "desenvolvedor full stack",
    "Kyber Tech",
  ],
  authors: [{ name: "Igor de Castro", url: SITE_URL }],
  creator: "Igor de Castro",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Igor de Castro",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteTitle, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#020409",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que há JavaScript antes da primeira pintura: só então os cartões entram com animação. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
