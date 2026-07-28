import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteTitle = "Igor de Castro — Desenvolvedor Full Stack Pleno";
const siteDescription =
  "Desenvolvedor Full Stack Pleno em Goiânia. Java, Spring Boot, Quarkus, Angular, React e modernização de sistemas corporativos de grande porte. Portfólio com projetos, experiência e contato.";

export const metadata: Metadata = {
  // Ajustar quando o domínio definitivo do deploy estiver no ar
  metadataBase: new URL("https://igor-ferreira-portfolio.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Igor de Castro",
    "Igor Ferreira",
    "Desenvolvedor Full Stack",
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "Goiânia",
  ],
  authors: [{ name: "Igor de Castro" }],
  creator: "Igor de Castro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Igor de Castro",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Sem JavaScript o reveal nunca dispararia — garante conteúdo visível */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;translate:0 0 !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
