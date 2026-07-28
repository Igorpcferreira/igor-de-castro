# Igor de Castro — Portfólio

Portfólio pessoal como Desenvolvedor Full Stack. Single-page estática com um
background interativo de "rede neural viva" em canvas puro, portado do Claude
Design.

**Stack:** Next.js 16 (App Router, `output: "export"`), React 19, TypeScript
strict, Tailwind CSS 4, Space Grotesk. Sem biblioteca de animação — tudo em CSS
nativo + IntersectionObserver.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em /out
npm run lint
```

> O `.npmrc` do projeto aponta pro registry público do npm (a máquina pode ter
> registries corporativos configurados globalmente).

## Estrutura

```
app/                  # layout (metadata, fonte, lang pt-BR) e página única
data/content.ts       # TODO o conteúdo textual, tipado — edite texto aqui
components/
  NeuralBackground.tsx  # background neural (canvas puro, portado do Claude Design)
  BackgroundVeil.tsx    # véu que escurece o background fora do hero (legibilidade)
  Reveal.tsx            # entrada suave ao rolar (IntersectionObserver + CSS)
  Navbar.tsx            # navbar fixa com seção ativa e menu mobile
  sections/             # Hero, Sobre, Competências, Experiência, Projetos, Formação, Contato
reference/neural-background/  # artifact original do Claude Design + guia de porte
```

## Design tokens

Cores, curva de easing e durações vivem no `@theme` de `app/globals.css` e são
usadas em todo o site (nunca valores hardcoded). O verde neon (`--color-neon`)
é restrito a pequenos acentos: tags, status e badges.

## Background neural

A lógica do canvas foi portada **sem alterações na matemática** do artifact
original — ver `reference/neural-background/neural-background.md` para o guia
completo de funcionamento, parâmetros e decisões de performance. O componente
respeita `prefers-reduced-motion` (congela no último frame) e pausa quando a
aba fica oculta.

## Pendências de conteúdo

- Colocar o PDF do currículo em `public/curriculo-igor-de-castro.pdf`
  (os botões "Baixar currículo" já apontam pra esse caminho).
- Preencher `certificateUrl` de cada certificação em `data/content.ts`.
- Ajustar `metadataBase` em `app/layout.tsx` quando o domínio definitivo do
  deploy estiver no ar.

## Deploy

Deploy padrão da Vercel (framework preset Next.js). O build gera saída
estática — nenhum servidor Node é necessário em produção.
