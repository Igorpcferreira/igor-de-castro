# Da ideia ao projeto

Vídeo de conversão do portfólio: 26 segundos, 30 fps, 900 × 1000. Português e inglês, com texto na tela e sem áudio.

O site usa o Remotion Player e esta mesma composição. O player carrega somente ao clicar em assistir, não repete automaticamente e pausa quando sai da tela ou quando a aba fica oculta. As três etapas e o botão de orçamento continuam disponíveis sem assistir. O clique para reproduzir é explícito, inclusive com movimento reduzido.

## Roteiro

- 0–6 s: exemplo de conversa para entender a necessidade.
- 6–13 s: escopo, prazo e investimento, com aprovação antes do início.
- 13–20 s: desenvolvimento, validação com o cliente e preparação da entrega.
- 20–26 s: convite para conversar no WhatsApp pelo botão da página.

A conversa é ilustrativa, identificada na tela. Não há depoimento, resultado comercial, preço ou prazo de entrega inventado. O seletor Site/Sistema/Automação prepara uma mensagem editável; não calcula nem envia orçamento automaticamente.

## Editar

Na raiz do repositório, execute npm ci e npm run motion:studio. Abra a URL exibida pelo Studio e selecione QuotePT ou QuoteEN.

Cada cena fica em motion/src/scenes/. O registro está em motion/src/Root.tsx; a integração está em components/QuotePlayer.tsx e components/sections/StartProject.tsx.

As dependências são compartilhadas com o Next.js na raiz para manter uma única instalação do React. Não execute npm install nesta pasta.

O WhatsApp vem de data/content.ts, alinhado ao contato da página /links.

Referência: [Remotion Player](https://www.remotion.dev/docs/player).
