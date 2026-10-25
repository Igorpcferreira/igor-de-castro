# Referências do portfólio

As fontes visuais do projeto foram consolidadas em `design-system/`. Essa pasta
mantém uma única cópia de cada protótipo e asset.

## Estrutura

```text
design-system/
├── Design System.dc.html       identidade visual, tokens e assets de marca
├── support.js                  runtime compartilhado pelos arquivos `.dc.html`
├── assets/
│   ├── brand/                  favicons, ícones e imagem Open Graph
│   └── profile/                fotografias finais do portfólio
├── prototypes/                 protótipos desktop, mobile e background neural
├── docs/                       documentação técnica dos protótipos
└── uploads/                    materiais brutos usados durante a criação
```

Abra `design-system/Design System.dc.html` para consultar a identidade visual.
Os protótipos preservam referências relativas ao runtime e aos assets
compartilhados, portanto podem ser abertos diretamente a partir de suas novas
localizações.

## links/

Material de apoio da página comercial `/links`, cuja implementação fica em
`public/links/`. A versão atual é a IgorOS (25/10/2026), escolhida entre as três
direções de `links/prototipos/`; o resumo está em `links/README.md`.
`links/index.html` e `comparacao.html` guardam a versão anterior (Verde
assinatura) e as propostas iniciais. Inclui o guia `INSTAGRAM.md`, as pranchas
em `docs/pranchas-final.html` e os relatórios de verificação.

## portfolio/

Três protótipos do site principal (A · IgorOS, B · Estúdio, C · Jornada) com foco em fechar cliente, aguardando a escolha. Abra `portfolio/prototipos/index.html`; o resumo está em `portfolio/README.md`.

## modelo/

Material de apoio do portfólio de modelo publicado em `/modelo`. O site em si
fica em `public/modelo/`; aqui ficam o design system (`docs/design-system.html`),
as pranchas responsivas (`docs/pranchas.html`), a composição Remotion (`motion/`)
e as notas de entrega. Nada desta pasta é publicado.
