# Igor de Castro — /links

**Verde assinatura escolhida e implementada.** A página final está em `public/links/`; esta pasta reúne referências e documentação, como acontece com `/modelo`.

## Abrir

- Prévia do export local: `http://127.0.0.1:8931/links/` enquanto o servidor estiver ativo.
- Arquivo final: `../../public/links/index.html`.
- `index.html` nesta pasta abre a versão final.
- `comparacao.html` preserva as opções originais; `preview.html` é apenas o protótipo histórico.
- Guia do Instagram: `INSTAGRAM.md`.
- Capturas e estados da versão final: `docs/pranchas-final.html`.

## Arquivos de implementação

| Arquivo | Responsabilidade |
| --- | --- |
| `public/links/index.html` | Conteúdo estático, links, metadados e dialogs |
| `public/links/styles.css` | Identidade verde, layout e animação IC |
| `public/links/projects.css` | Projetos, ferramentas, galeria mobile e player |
| `public/links/app.js` | WhatsApp, vCard, compartilhar, controles e vídeo |
| `public/links/assets/` | Fontes licenciadas, imagens WebP, favicon e OG |

HTML, CSS e JavaScript puros. Sem dependências de runtime ou build próprio. O export do Next copia a pasta para `out/links/`. Em `next dev`, abra `/links/index.html`; em um servidor estático com índice de diretório, `/links/`.

## Projetos e vídeos

| Projeto | Identificação | Vídeo | Site |
| --- | --- | --- | --- |
| Manu’s Barbearia | Cliente / barbearia | 56 s | manusbarbearia.com.br |
| Gabriela Camargo | Cliente / fotografia | 35 s | gabrielacamargofoto.com.br |
| André Mei | Cliente / atleta, conforme o pedido atual de Igor | 61 s | www.andremei.com.br |
| Kounting Streetwear | Marca fundada por Igor | 53 s | www.kountingstreetwear.com.br |
| Casa Umbra | Projeto conceitual da Kyber | 48 s | casa-umbra-portfolio.vercel.app |
| BRUMA | Projeto conceitual da Kyber | 52 s | bruma-portfolio.vercel.app |

Os endereços de vídeo vêm de `kyber-tech/components/content.jsx`, usando a infraestrutura já documentada em `kyber-tech/docs/videos-portfolio.md` e `vps/kyber-media/`. A base é `https://media.somoskyber.com.br/portfolio/`. Não foi necessário alterar a VPS, enviar vídeos ou copiar MP4 para este repositório.

Cada projeto tem dois links independentes: vídeo e site. Com JavaScript, o vídeo abre num dialog nativo; sem ele, o link abre o MP4 diretamente. Nenhum MP4 é carregado antes do clique. O player tem controles, reprodução inline, estado de erro e nova tentativa; ao fechar, pausa, remove o src, descarrega o elemento e devolve o foco. O IC pausa durante o dialog e quando não está visível.

Casa Umbra mantém acesso ao site e à gravação, conforme o pedido atual, com uma indicação de que a experiência do site é para computador. Casa Umbra e BRUMA são identificadas como conceitos; não são apresentados como clientes.

No desktop, seis cartões em grade. No celular, uma galeria nativa deslizante com encaixe dos cartões, contador e setas, sem autoplay. Todos os projetos continuam no HTML e acessíveis sem JavaScript.

## Ferramentas e modelo

QR Code Studio (`https://qr-code-studio-free.vercel.app`) e Compressify (`https://compressify-free.vercel.app`) têm seção própria de ferramentas gratuitas, com imagem e acesso direto. Sem botões de vídeo, conforme solicitado.

O portfólio de modelo usa `igor-de-castro-modelo.png`, da pasta de imagens fornecida, como capa. Igor confirmou que não há vídeo de modelo; o cartão tem imagem e link para o site.

As nove capas de `C:/Users/user/Downloads/lixo` foram convertidas/redimensionadas para WebP local, preservando os originais. Total aproximado das nove capas: 235 KiB. A foto pessoal e fontes da proposta aprovada foram mantidas.

## Contatos e metadados

WhatsApp confirmado por Igor: **556284196646**, sem o 9 adicional. A constante está em `app.js`; os href estáticos repetem o número para funcionar sem JavaScript. Se ele mudar, sincronize os dois lugares e execute a verificação.

Canonical e Open Graph apontam para `https://igordecastro.com.br/links/`, com imagem local via URL absoluta pública. Nenhuma marcação noindex na página final. Sem pixel, cookies, formulário ou analytics. Os atributos `data-link` identificam destinos; UTM opcional não instala rastreamento.

## Verificação e publicação

`npm run lint` e `npm run build` passaram. Testes Chromium em 320/390/834/1440 px, reprodução real dos seis vídeos, avanço na linha do tempo, interação mobile, recuperação de erro, descarregamento do player, foco, movimento reduzido, compartilhamento e download do contato passaram. Detalhes em `docs/VALIDACAO-FINAL.md`.

O build encontrou inicialmente um servidor Python na porta 8931 cujo diretório de trabalho era `out/`. Ele foi reiniciado na mesma porta, a partir da raiz do projeto e com `--directory out`, para continuar servindo o export sem bloquear a pasta durante novos builds.

**Não houve deploy.** Na consulta externa, todos os sites dos seis projetos e das duas ferramentas responderam 200; os vídeos responderam 206 com suporte a Range. O domínio público `/modelo` ainda respondeu 404: os arquivos existem e a rota funciona no export local. Publicar o export completo disponibilizará `/links` e a versão local de `/modelo`; conferir ambas após o deploy.
