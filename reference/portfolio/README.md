# Site principal · protótipos

**25/10/2026.** Três direções para o site principal (igordecastro.com.br), montadas para Igor escolher, como foi feito com a /links. O foco é fechar cliente sem esconder a trajetória e quem ele é. O bloco "Da ideia ao projeto" (o vídeo Remotion com o seletor Site/Sistema/Automação, que Igor chamou de joguinho) saiu; cada direção tem uma brincadeira não técnica no lugar.

## Abrir

- Painel de comparação: `prototipos/index.html`, com a troca entre celular e computador.
- O `.claude/launch.json` do worktree serve a raiz do repositório com `.claude/serve.py`, que desliga o cache do navegador: `/reference/portfolio/prototipos/`. Aberto direto como arquivo, o painel não roda os protótipos (módulos JavaScript precisam de servidor).

## Direções

| Direção | Ideia | Brincadeira |
| --- | --- | --- |
| A · IgorOS | Continuação da /links: pôster de contato, notificações como provas, projetos no estilo "Hoje" da App Store, rastreio das etapas, preço num passe da Wallet, Ajustes com a trajetória, dúvidas numa conversa e dock | Monte seu projeto: módulos que montam um site de exemplo num celular |
| B · Estúdio | Editorial e conversa: retrato em arco com figurinhas, caixa de mensagem que vai para o WhatsApp, reels que abrem em stories, destaques e barra de mensagem fixa | "Isso acontece no seu negócio?": seis cartas para arrastar e um resultado |
| C · Jornada (escolhida) | A trajetória como trilha da rede neural: pulso de luz, nós que acendem, conquistas e painel de fase no computador. Por pedido de Igor, ganhou o dock da A embaixo, no lugar do botão de WhatsApp no topo | A trilha e a fase final, que é o "Monte seu projeto" da A: tipo de negócio, módulos com a prévia no celular e prazo destravam a fase |

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `prototipos/shared/content.js` | Conteúdo único das três direções |
| `prototipos/shared/kit.js` | WhatsApp, vídeo, relógio, folhas com "voltar", fundo neural e entrada dos blocos |
| `prototipos/shared/icons.js` | Sprite Boxicons (MIT) gerado a partir dos SVGs originais |
| `prototipos/shared/base.css` | Fontes, tokens e fundo neural |
| `prototipos/a-os/`, `b-estudio/`, `c-jornada/` | Uma pasta por direção |

O fundo neural vem de `../links/prototipos/shared/neural.js`, com a mesma matemática do `components/NeuralBackground.tsx`. As fotos vêm de `../links/prototipos/shared/img/` e as capas dos projetos de `public/links/assets/projects/`.

## Conteúdo e honestidade

- Trajetória e produtos: `data/content.ts`. Projetos: os mesmos 11 da /links. Desafio, solução e resultado de cada caso, processo, preço e dúvidas: site da Kyber Tech (`ecossistema-kyber/kyber-tech/components/content.jsx`).
- Conceitos (Lume, Aura, BRUMA, Casa Umbra) sempre rotulados como conceito e sem resultado de negócio. André Mei é "Site de atleta", feito para um familiar. Encanto Gourmet não entra, porque saiu do ar.
- Trabalho atual só como "Minsait · Grupo Indra", sem citar projeto ou cliente de lá.
- Preço do Site Completo (R$ 569, ou até 12x de aproximadamente R$ 47,42) e "você só paga depois de aprovar" valem para a data acima. A parcela aparece sempre junto do total.

## Implementação

A C foi implementada no site principal em 25/10/2026: `components/journey/` (página, montador, folhas, dock e ícones) e `data/journey.ts` (conteúdo). Saíram as seções antigas, o `data/content.ts` (que citava SINGRA 2 e Marinha do Brasil), o vídeo Remotion "Da ideia ao projeto" e a pasta `motion/`. Os metadados usam o domínio igordecastro.com.br e `lang="pt-BR"`; a imagem de compartilhamento sai de `docs/og.html` com `docs/render-og.cjs`. A versão em inglês ainda não existe.
