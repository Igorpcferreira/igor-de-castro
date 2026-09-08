# Validação — Verde assinatura integrada

## Testes executados

- `npm run lint`: passou.
- `npm run build`: passou, gerando `out/links/` junto do site principal e de `out/modelo/`.
- Chromium / Playwright em 320, 390, 834 e 1440 px: sem overflow horizontal da página, sem erros JS, imagens locais carregadas e alvos interativos com pelo menos 44 px.
- Galeria mobile: navegação pelos seis projetos, setas, limites e teclado. Rolagem horizontal restrita à galeria, com encaixe por cartão.
- Capas das ferramentas com proporção horizontal, sem esticar os cartões.
- CTA fixo mobile após a saída do botão principal; ausente no desktop.
- Zero requisições MP4 antes de abrir uma demonstração.
- Reprodução real dos seis vídeos da VPS e avanço para o meio de cada um: passou. Durações obtidas do player: 56,4 / 35,4 / 61,2 / 53,7 / 48,2 / 52,4 segundos.
- Player em viewport mobile com controles inline; testado em emulação Chromium.
- Falha de mídia simulada, feedback de erro e tentativa posterior com reprodução real: passou.
- Escape e botão de fechar; retorno do foco; liberação de overflow; pausa, remoção do src e descarregamento do elemento: passou.
- Movimento reduzido, pausa manual do IC, vCard com telefone confirmado, cópia de link e fallback de compartilhamento: passaram.
- Abertura local offline e sem JavaScript: imagens, textos, links e projetos acessíveis. Vídeos e destinos externos naturalmente precisam de rede.
- Os seis MP4 responderam HTTP 206 a `Range: bytes=0-1023`, com Content-Range e Content-Type de vídeo. Sites dos seis projetos e duas ferramentas responderam HTTP 200.

Evidências: `final/checks.json`, `final/*.png`, `live-destinations.json` e `final-assets.json`. Pares de contraste da identidade aprovada em `checks-contrast.json`; nenhum novo token de texto foi introduzido.

## Reprodução

Na raiz do projeto:

```powershell
node reference/links/docs/verify-final.cjs
node reference/links/docs/check-live-destinations.cjs
npm run lint
npm run build
```

Para testar o export servido, defina `LINKS_TEST_URL` como `http://127.0.0.1:8931/links/` antes de executar `verify-final.cjs`. O script usa Playwright disponível no ambiente de desenvolvimento e não é necessário para executar a página.

## Limites e publicação

Não foi testado em Safari/iOS ou aparelho físico nem no navegador interno do Instagram. Nenhuma mensagem de WhatsApp foi enviada. O teste de mídia comprova a entrega e reprodução observadas nesta sessão, sem prometer disponibilidade futura da VPS.

`https://igordecastro.com.br/modelo` respondeu 404 no site atualmente publicado. Os arquivos existem em `public/modelo/` e são incluídos no export; a rota `/modelo/` foi conferida no servidor local. O deploy do export completo e a conferência dos dois caminhos públicos ainda precisam ocorrer.

Nenhuma infraestrutura, DNS, arquivo da VPS, conta de Instagram ou site de terceiro foi modificado. A implementação e o export foram concluídos localmente.
