# Igor de Castro — site principal

Site de Igor de Castro, desenvolvedor Full Stack e cofundador da Kyber Tech, em
igordecastro.com.br. O foco é fechar cliente sem esconder a trajetória: a página
é a **Jornada**, uma trilha da rede neural que vai do suporte técnico ao
cofundador e termina no projeto de quem está visitando.

## Stack

- Next.js 16 com App Router e export estático
- React 19 e TypeScript strict
- Tailwind CSS 4 (base) e CSS próprio em `app/globals.css`
- Space Grotesk + JetBrains Mono
- Canvas 2D, SVG, CSS e IntersectionObserver para o movimento, sem biblioteca de animação

## Rodar localmente

```bash
npm install
npm run dev
npm run lint
npm run build
```

O build de produção é gerado em `out/`.

## Estrutura

```text
app/                         layout, metadados, estilos e página
components/NeuralBackground  engine do fundo em rede neural (matemática intocável)
components/BackgroundVeil    véu que escurece o fundo com a rolagem
components/journey/          a página: trilha, montador, folhas, dock e ícones
data/journey.ts              conteúdo, projetos, preço, dúvidas e o WhatsApp
public/                      fotos, currículos, ícones e imagem de compartilhamento
public/links/                página da bio do Instagram, servida em /links
public/modelo/               portfólio de modelo, servido em /modelo
reference/                   protótipos e materiais de referência
```

## A página

- **Abertura:** retrato no nó de partida, o selo da Kyber, a proposta e três números (4+ anos, 11 projetos no ar, 950+ testes nos produtos).
- **Trilha:** um pulso de luz desce pela trilha com a rolagem e acende os nós: PUC Goiás, suporte técnico, DocNix, Minsait · Grupo Indra, Kyber Tech, projetos, serviços e como funciona. Algumas paradas destravam conquistas, avisadas no topo; no computador, um painel fixo mostra a fase e a lista.
- **Projetos:** os 11 projetos como círculos. Cada um abre uma folha com o vídeo (só depois do toque), o desafio, o que foi feito, o resultado e o WhatsApp já falando do projeto. Conceitos sempre rotulados como conceito.
- **Fase final, Monte seu projeto:** tipo de negócio, módulos que aparecem num celular de exemplo e prazo. O botão destrava a fase e a mensagem do WhatsApp sai pronta.
- **Dock:** Conversar sempre embaixo, mais Projetos e Montar no celular; no computador, todos os atalhos, com lupa.

Protótipos, decisões e travas de honestidade do conteúdo ficam em `reference/portfolio/`. A imagem de compartilhamento sai de `reference/portfolio/docs/og.html` (veja `render-og.cjs`).

O site está em português. O WhatsApp (556284196646, sem o 9 adicional) está em `data/journey.ts`, o mesmo número da /links e do vCard. Preço e prazos vêm da página de preços da Kyber Tech e precisam ser conferidos quando ela mudar.

## Rota /links

Página da bio do Instagram (versão IgorOS), em HTML, CSS e JavaScript locais em
`public/links/`, copiados pelo export para `out/links/`. Em `next dev`, abra
`http://localhost:3000/links/index.html`; no export estático, `/links/`. A
documentação de manutenção fica em `reference/links/README.md`.

## Rota /modelo

`igordecastro.com.br/modelo` é o portfólio de modelo, um site estático próprio
em HTML, CSS e JavaScript, com fotos e fontes locais. Os arquivos ficam em
`public/modelo/` e o export os copia para `out/modelo/`:

```text
public/modelo/index.html     estrutura e conteúdo
public/modelo/styles.css     tokens, tipografia, layout e cena 3D
public/modelo/photos.js      ordem, arquivos, legendas e filtros das fotos
public/modelo/app.js         galeria, filtros, lightbox e interação 3D
public/modelo/assets/        fotografias e fontes locais
```

Em `next dev`, abra `http://localhost:3000/modelo/index.html`. O material de
apoio fica em `reference/modelo/`, fora do que vai ao ar.

## Background neural

O desktop preserva a calibração visual original. No mobile, a engine usa uma
faixa controlada de 62 a 105 nós, distribuição mais uniforme e eventos neurais
um pouco mais frequentes. O componente respeita `prefers-reduced-motion` e
pausa quando a página fica oculta.
