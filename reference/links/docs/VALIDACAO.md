# Validação das opções de /links

Executada em Chromium headless com Playwright, nesta sessão. Inspeção visual das capturas desktop e mobile realizada.

- Verde e azul em 320, 390, 834 e 1440 px: sem overflow horizontal e sem erros JavaScript.
- Fontes e imagens locais; capturas reais da Manus Barbearia e Gabriela Camargo, obtidas dos sites públicos indicados no briefing. Nenhum placeholder do ZIP foi usado como projeto real.
- Todos os links/botões/summary visíveis com altura mínima de 44 px nas larguras verificadas.
- Um H1, rótulos de links e descrições textuais presentes.
- WhatsApp com o número confirmado e mensagem pronta em todos os CTAs; link HTML disponível sem JavaScript.
- CTA fixo no mobile aparece após a saída do botão principal da tela. Conteúdo final tem espaço para não ficar encoberto.
- Animação IC contínua; pausa/retomada e preferência de movimento reduzido testadas.
- vCard baixado com CRLF e número correto.
- Compartilhamento: cópia com sucesso, fallback selecionável quando clipboard falha e cancelamento de Web Share sem erro visível.
- Navegação por foco, estados de hover e movimento reduzido capturados.
- Abertura `file://`, offline, sem JavaScript: texto, imagens e CTA principal continuam disponíveis.
- Contraste calculado dos pares de texto usados nos dois temas; resultados em `checks-contrast.json`.
- Bios contadas por código; abaixo de 150 caracteres cada, incluindo quebras de linha.

Scripts reproduzíveis: `node reference/links/docs/verify.cjs` e `node reference/links/docs/finish-assets.cjs`, a partir da raiz do repositório. Resultados detalhados em `checks.json`, `checks-contrast.json` e `bio-counts.json`.

## Limites

Não foi testado em Safari/iOS, aparelho Android físico ou navegador interno do Instagram. O diálogo nativo de compartilhamento e a importação final do vCard dependem desses dispositivos. Foi validado o endereço do WhatsApp no HTML/JS, sem enviar mensagem nem comprovar entrega. Nenhum teste automatizado determina qual tema converte mais; a decisão atual é visual e a conversão deve ser avaliada após publicação, com dados reais.

Não houve publicação nem alteração na conta do Instagram. Metadados nesta etapa são de prévia; a configuração de indexação e compartilhamento público será finalizada depois da escolha.
