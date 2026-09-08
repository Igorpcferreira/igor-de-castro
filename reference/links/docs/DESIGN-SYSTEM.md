# Tokens das alternativas /links

**Direção aprovada: Verde assinatura.** A implementação final está em `public/links/`, sem seletor de tema. A coluna azul abaixo registra apenas a alternativa original. Projetos usam cartões com duas ações, galeria horizontal nativa no mobile e player em dialog; ferramentas e modelo possuem capas locais. Veja `pranchas-final.html` e `VALIDACAO-FINAL.md`.

| Papel | Verde assinatura | Azul profundo |
| --- | --- | --- |
| Fundo | `#090e0c` | `#080e1d` |
| Superfície | `#101813` | `#0e192c` |
| Superfície hover | `#18261d` | `#15273e` |
| Texto principal | `#f1f5ef` | `#f0f4fc` |
| Texto secundário | `#a0aea4` | `#a0afc7` |
| Divisórias | `#2d3c32` | `#2b3c56` |
| Destaque | `#a7ef80` | `#8fdcff` |
| Texto sobre destaque | `#13200e` | `#091b2a` |
| Raio de cartões | 10 px | 17 px |

Fontes locais Nimbus Sans para texto e Nimbus Sans Narrow Bold para o monograma. Arquivos e licença herdados do pacote original, em `assets/fonts/`. Títulos utilizam a fonte de texto, com peso sintetizado pelo navegador; a assinatura IC utiliza o arquivo bold dedicado.

Headline fluida, 47–64 px nas larguras testadas; corpo principal 14–15 px. Escala de espaçamento baseada em 4 px, com ajustes ópticos. Conteúdo centralizado em até 1180 px, duas colunas no desktop/tablet, uma coluna até 760 px. Botão principal preenchido; links secundários com borda e superfície escura. Miniaturas de projetos com proporção fixa e descrição textual fora da imagem.

Foco em contorno de 2 px na cor de destaque, offset de 5 px. Interações com altura mínima de 44 px. Divisórias são decorativas e não comunicam estados sozinhas. Texto secundário, principal, destaque e CTA têm contraste AA sobre as respectivas superfícies; combinações verificadas por cálculo em `checks-contrast.json`.

IC: duas letras em CSS, sem bloquear conteúdo, ciclo de 7 s com movimentos curtos e repouso predominante. `prefers-reduced-motion` exibe as letras completas. Controle manual permite parar e retomar. Observer e Page Visibility evitam reprodução fora de vista. Hover usa translação discreta, sem alterar geometria do layout; movimento reduzido elimina também essas transformações.

Capturas em 1440, 834 e 390 px documentam as duas opções. Também foi verificado 320 px. A imagem `comparacao.png` resume a apresentação; a página `index.html` permite experimentar as prévias.
