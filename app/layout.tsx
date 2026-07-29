import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteTitle = "Igor de Castro — Mid-Level Full Stack Developer";
const siteDescription =
  "Full Stack Developer specializing in Java, Spring Boot, Angular, enterprise modernization, and high-quality web products. Based in Goiânia, Brazil.";

export const metadata: Metadata = {
  metadataBase: new URL("https://igordecastro.com.br"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Igor de Castro",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "Enterprise Modernization",
    "Goiânia",
  ],
  authors: [{ name: "Igor de Castro", url: "https://igordecastro.com.br" }],
  creator: "Igor de Castro",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <noscript>
          <style>{`.reveal{opacity:1 !important;translate:0 0 !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
