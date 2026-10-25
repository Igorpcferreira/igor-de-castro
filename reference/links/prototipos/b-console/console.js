// Direção B · Console: um app de terminal moderno, com paleta de comandos e barra de status.
import { profile, work, projects, services, about, tools, model, socials } from '../shared/content.js';
import { mountNeural } from '../shared/neural.js';
import { icon, ext, waLink, projectMessage, serviceMessage, injectSprite, $, $$, startClock, createVideo, disposeVideo, sharePage, modal, mountVeil, decodePortrait, reducedMotion } from '../shared/kit.js';

injectSprite();
mountNeural($('.neural'), { density: 1.15 });
mountVeil($('.neural-veil'), { mobile: 0.5, desktop: 0.55 });

const prompt = icon('chevron-right', 'prompt');
const logo = '<svg class="neo-logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M13 15h8v34h-8z" fill="#f4fff8"/><path d="M52 19H37l-6 6v14l6 6h15" fill="none" stroke="#52ff7d" stroke-width="8"/></svg>';

$('#app').innerHTML = `
  <header class="bar">
    <div class="bar-inner">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <nav class="tabs" aria-label="Seções">
        <a href="#inicio" data-tab="inicio" class="is-on">~/links</a>
        <a href="#projetos" data-tab="projetos">projetos</a>
        <a href="#servicos" data-tab="servicos">serviços</a>
        <a href="#sobre" data-tab="sobre">sobre</a>
        <a href="#redes" data-tab="redes">redes</a>
      </nav>
      <button class="bar-search" type="button" data-palette aria-label="Buscar">${icon('search')}</button>
    </div>
  </header>

  <main class="term" id="inicio">
    <section class="block" aria-labelledby="nome">
      <p class="block-head">${prompt}<span class="cmd" data-type>whoami</span><span class="block-time">0,02s</span></p>
      <div class="hero">
        <figure class="portrait"><img src="${profile.portrait}" alt="Igor de Castro, de terno bege" width="480" height="480" fetchpriority="high"><canvas aria-hidden="true"></canvas></figure>
        <div class="hero-id">
          <h1 class="name" id="nome">Igor de Castro<span class="name-cursor" aria-hidden="true">_</span></h1>
          <p class="role"><span>${profile.role}</span><span>${profile.studio}</span></p>
        </div>
      </div>
      <p class="out"><span class="g" aria-hidden="true">&gt;</span> Sites, sistemas e automações <em>sob medida</em> para o seu negócio.</p>
      <p class="comment"><span aria-hidden="true">#</span> ${profile.proof}</p>
    </section>

    <a class="run" href="${waLink()}" ${ext} data-run>
      <span class="run-prompt" aria-hidden="true">${icon('chevron-right')}</span>
      <span class="run-cmd"><span data-run-text>conversar <b>--whatsapp</b></span><span class="run-caret" aria-hidden="true"></span></span>
      <span class="key" aria-hidden="true">${icon('enter')}</span>
    </a>
    <p class="hint"><span aria-hidden="true">#</span> ${profile.note}</p>

    <button class="search" type="button" data-palette>${icon('search')}<span>buscar: site, barbearia…</span><kbd>${icon('command')}K</kbd></button>

    <section class="pane" id="trabalho" aria-labelledby="t-trabalho">
      <h2 class="pane-title" id="t-trabalho">trabalho</h2>
      <ul class="ls">
        ${work.map((item, index) => `
          <li><a class="ls-row" href="${item.href}" ${ext}>
            <span class="key">${index + 1}</span>
            <span class="ls-main"><span class="ls-title">${item.title}${item.badge ? ` <em>${item.badge.toLowerCase()}</em>` : ''}</span><span class="ls-desc">${item.desc}</span><span class="ls-meta">${item.domain}</span></span>
            ${icon('arrow-up-right', 'ls-go')}
          </a></li>`).join('')}
      </ul>
    </section>

    <section class="pane" id="projetos" aria-labelledby="t-projetos">
      <h2 class="pane-title" id="t-projetos">projetos <span data-count>${projects.length} itens</span></h2>
      <div class="flags" role="group" aria-label="Filtrar projetos">
        <button type="button" aria-pressed="true" data-filter="todos">--todos</button>
        <button type="button" aria-pressed="false" data-filter="reais">--reais</button>
        <button type="button" aria-pressed="false" data-filter="conceito">--conceitos</button>
      </div>
      <div class="fm-head" aria-hidden="true"><span>nome</span><span>tipo</span><span>demo</span></div>
      <ul class="fm">
        ${projects.map((p, index) => `
          <li class="fm-item" data-index="${index}" data-kind="${p.kind}">
            <button class="fm-row" type="button" aria-expanded="false" aria-controls="pv-${index}">
              <span class="fm-caret" aria-hidden="true">${icon('chevron-right')}</span>
              <span class="fm-name">${p.slug}/</span>
              <span class="fm-kind is-${p.kind}">${p.kind}</span>
              <span class="fm-time">${p.duration}</span>
            </button>
            <div class="fm-preview" id="pv-${index}" hidden>
              <button class="fm-shot" type="button" data-play="${index}" aria-label="Ver demonstração de ${p.name}"><img src="${p.poster}" alt="" loading="lazy" decoding="async"><span class="fm-shot-play">${icon('play')}${p.duration}</span></button>
              <p class="fm-title">${p.name}<span>${p.label}</span></p>
              <p class="fm-text">${p.short}</p>
              <div class="fm-actions">
                <button class="chip-btn chip-neon" type="button" data-play="${index}">${icon('play')}ver demo</button>
                <a class="chip-btn" href="${p.site}" ${ext}>${icon('arrow-up-right')}site</a>
                <a class="chip-btn" href="${waLink(projectMessage(p.name))}" ${ext}>${icon('whatsapp')}quero assim</a>
              </div>
            </div>
          </li>`).join('')}
      </ul>
    </section>

    <section class="pane" id="servicos" aria-labelledby="t-servicos">
      <h2 class="pane-title" id="t-servicos">igor --help</h2>
      <p class="usage"><span class="g">uso:</span> igor <span class="cy">&lt;serviço&gt;</span> --whatsapp</p>
      <ul class="opts">
        ${services.map(s => `
          <li><a class="opt" href="${waLink(serviceMessage(s.topic))}" ${ext}>
            <span class="opt-flag">${s.id}</span>
            <span class="opt-body"><span class="opt-title">${s.title}</span><span class="opt-desc">${s.desc}</span><span class="opt-items">${s.items.join(' · ')}</span></span>
            <span class="key" aria-hidden="true">${icon('enter')}</span>
          </a></li>`).join('')}
      </ul>
    </section>

    <section class="pane" id="sobre" aria-labelledby="t-sobre">
      <h2 class="pane-title" id="t-sobre">neofetch</h2>
      <div class="neo">
        ${logo}
        <div class="neo-info">
          <p class="neo-host"><span>igor</span>@<span>dev</span></p>
          <p class="neo-rule" aria-hidden="true">------------</p>
          <dl class="neo-list">
            ${about.rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}
            <div><dt>Hora</dt><dd><span data-clock>--:--</span> em Goiânia</dd></div>
          </dl>
          <p class="neo-colors" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></p>
        </div>
      </div>
      <details class="more"><summary>${icon('chevron-right')}cat trajetoria.txt</summary><p>${about.story}</p></details>
      <a class="ls-row slim" href="${profile.resume}" ${ext}><span class="key">${icon('download')}</span><span class="ls-main"><span class="ls-title">curriculo-igor-de-castro.pdf</span></span>${icon('arrow-up-right', 'ls-go')}</a>
    </section>

    <section class="pane" id="ferramentas" aria-labelledby="t-ferramentas">
      <h2 class="pane-title" id="t-ferramentas">ferramentas <span>grátis</span></h2>
      <ul class="ls">
        ${tools.map(tool => `
          <li><a class="ls-row tool" href="${tool.href}" ${ext}>
            <img src="${tool.image}" alt="" loading="lazy" decoding="async">
            <span class="ls-main"><span class="ls-title">${tool.name}</span><span class="ls-desc">${tool.desc}</span></span>
            ${icon('arrow-up-right', 'ls-go')}
          </a></li>`).join('')}
      </ul>
    </section>

    <section class="pane" id="modelo" aria-labelledby="t-modelo">
      <h2 class="pane-title" id="t-modelo">fotos</h2>
      <a class="gallery" href="${model.href}" ${ext}>
        <span class="gallery-grid">${model.photos.map(src => `<img src="${src}" alt="" loading="lazy" decoding="async">`).join('')}</span>
        <span class="gallery-copy"><span class="ls-title">${model.title}</span><span class="ls-desc">${model.desc}</span></span>
        ${icon('arrow-up-right', 'ls-go')}
      </a>
    </section>

    <section class="pane" id="redes" aria-labelledby="t-redes">
      <h2 class="pane-title" id="t-redes">redes</h2>
      <ul class="ls">
        ${socials.map(s => `<li><a class="ls-row slim" href="${s.href}" ${ext}><span class="key">${icon(s.id)}</span><span class="ls-main"><span class="ls-title">${s.name}</span><span class="ls-meta">${s.handle}</span></span>${icon('arrow-up-right', 'ls-go')}</a></li>`).join('')}
      </ul>
    </section>

    <footer class="exit">
      <p class="comment"><span aria-hidden="true">#</span> fim da sessão · ${profile.city}</p>
      <div class="exit-actions">
        <a class="chip-btn" href="${profile.vcard}" download>${icon('user-plus')}salvar-contato</a>
        <button class="chip-btn" type="button" data-share>${icon('share')}compartilhar</button>
      </div>
    </footer>
  </main>

  <nav class="status" aria-label="Barra de status">
    <span class="seg seg-mode" data-mode>NORMAL</span>
    <span class="seg seg-path" data-path>~/links</span>
    <a class="seg seg-cta" href="${waLink()}" ${ext}>${icon('whatsapp')}<span>conversar</span>${icon('enter')}</a>
  </nav>

  <dialog class="palette" id="palette" aria-label="Paleta de comandos">
    <div class="pal-input">${icon('chevron-right', 'prompt')}<input type="search" placeholder="digite: site, barbearia, kyber…" aria-label="Buscar comando" autocomplete="off" spellcheck="false" enterkeyhint="go"><button type="button" class="pal-esc" data-close-palette>esc</button></div>
    <div class="pal-list" data-results></div>
  </dialog>

  <dialog class="player" id="player" aria-labelledby="player-title">
    <div class="player-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="player-file" data-file></span><button class="icon-btn" type="button" data-close aria-label="Fechar">${icon('x')}</button></div>
    <div class="player-stage" data-stage></div>
    <div class="player-info">
      <p class="player-kind" data-kind></p>
      <h2 class="player-title" id="player-title" data-title></h2>
      <p class="player-text" data-more></p>
      <p class="player-note" data-note hidden></p>
      <ul class="tags" data-stack></ul>
      <div class="player-actions">
        <a class="run run-sm" data-wa ${ext}><span class="run-prompt" aria-hidden="true">${icon('chevron-right')}</span><span class="run-cmd">quero <b>--um-assim</b></span><span class="key" aria-hidden="true">${icon('enter')}</span></a>
        <a class="chip-btn" data-site ${ext}>${icon('arrow-up-right')}visitar site</a>
      </div>
      <div class="player-nav"><button class="chip-btn" type="button" data-prev>${icon('chevron-left')}anterior</button><span data-position></span><button class="chip-btn" type="button" data-next>próximo${icon('chevron-right')}</button></div>
    </div>
  </dialog>
`;

startClock('[data-clock]');
$$('[data-share]').forEach(button => button.addEventListener('click', sharePage));

// whoami digitado e retrato montado em caracteres.
const portrait = $('.portrait');
const typed = $('[data-type]');
const fullCommand = typed.textContent;
if (!reducedMotion.matches) {
  typed.textContent = '';
  [...fullCommand].forEach((char, index) => setTimeout(() => { typed.textContent += char; }, 250 + index * 70));
}
decodePortrait($('img', portrait), $('canvas', portrait), { onDone: () => portrait.classList.add('is-ready') });

// O botão "executa": mostra a saída enquanto o WhatsApp abre em outra aba.
const run = $('[data-run]');
const runText = $('[data-run-text]', run);
run.addEventListener('click', () => {
  if (run.classList.contains('is-running')) return;
  run.classList.add('is-running');
  const frames = ['|', '/', '-', '\\'];
  let frame = 0;
  const spin = setInterval(() => { runText.textContent = `${frames[frame++ % 4]} abrindo whatsapp…`; }, 90);
  setTimeout(() => {
    clearInterval(spin);
    runText.innerHTML = 'conversar <b>--whatsapp</b>';
    run.classList.remove('is-running');
  }, 1400);
});

// Abas, caminho da barra de status e modo acompanham a seção visível.
const tabs = $$('.tabs a');
const pathSlot = $('[data-path]');
const modeSlot = $('[data-mode]');
const sectionNames = { inicio: '~/links', trabalho: '~/links/trabalho', projetos: '~/links/projetos', servicos: '~/links/serviços', sobre: '~/links/sobre', ferramentas: '~/links/ferramentas', modelo: '~/links/fotos', redes: '~/links/redes' };
const tabFor = { trabalho: 'inicio', ferramentas: 'sobre', modelo: 'sobre' };
const spy = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const id = entry.target.id;
  pathSlot.textContent = sectionNames[id] || '~/links';
  const tabId = tabFor[id] || id;
  tabs.forEach(tab => tab.classList.toggle('is-on', tab.dataset.tab === tabId));
  $('.tabs a.is-on')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}), { rootMargin: '-40% 0px -55% 0px' });
['inicio', 'trabalho', 'projetos', 'servicos', 'sobre', 'ferramentas', 'modelo', 'redes'].forEach(id => spy.observe($(`#${id}`)));
$('#inicio').dataset.section = 'inicio';

// Projetos: filtros como flags e linhas que abrem a prévia.
const items = $$('.fm-item');
const flags = $('.flags');
flags.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  $$('button', flags).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const filter = button.dataset.filter;
  items.forEach(item => {
    const kind = item.dataset.kind;
    item.hidden = !(filter === 'todos' || (filter === 'conceito' ? kind === 'conceito' : kind !== 'conceito'));
  });
  $('[data-count]').textContent = `${items.filter(item => !item.hidden).length} itens`;
});
$('.fm').addEventListener('click', event => {
  const row = event.target.closest('.fm-row');
  if (!row) return;
  const open = row.getAttribute('aria-expanded') !== 'true';
  items.forEach(item => {
    const other = $('.fm-row', item);
    if (other !== row) { other.setAttribute('aria-expanded', 'false'); $('.fm-preview', item).hidden = true; }
  });
  row.setAttribute('aria-expanded', String(open));
  $(`#${row.getAttribute('aria-controls')}`).hidden = !open;
  modeSlot.textContent = open ? 'PREVIEW' : 'NORMAL';
});

// Player.
const player = $('#player');
const stage = $('[data-stage]', player);
let playlist = [];
let current = 0;
let video = null;
const playerModal = modal(player, { onClose: () => { disposeVideo(video); video = null; modeSlot.textContent = 'NORMAL'; } });
const render = () => {
  const p = projects[playlist[current]];
  disposeVideo(video);
  video = createVideo(p);
  stage.replaceChildren(video);
  $('[data-file]', player).textContent = `${p.slug}-v1.mp4`;
  $('[data-kind]', player).textContent = p.label;
  $('[data-title]', player).textContent = p.name;
  $('[data-more]', player).textContent = p.more;
  $('[data-note]', player).textContent = p.note || '';
  $('[data-note]', player).hidden = !p.note;
  $('[data-stack]', player).innerHTML = p.stack.map(item => `<li>${item}</li>`).join('');
  $('[data-wa]', player).href = waLink(projectMessage(p.name));
  $('[data-site]', player).href = p.site;
  $('[data-site]', player).classList.toggle('is-desktop-only', Boolean(p.desktopOnly));
  $('[data-position]', player).textContent = `${current + 1}/${playlist.length}`;
};
const openPlayer = index => {
  playlist = items.filter(item => !item.hidden).map(item => Number(item.dataset.index));
  if (!playlist.includes(index)) playlist = projects.map((_, i) => i);
  current = playlist.indexOf(index);
  render();
  modeSlot.textContent = 'PLAY';
  playerModal.show();
  player.scrollTop = 0;
};
$('.fm').addEventListener('click', event => {
  const trigger = event.target.closest('[data-play]');
  if (trigger) openPlayer(Number(trigger.dataset.play));
});
$('[data-prev]', player).addEventListener('click', () => { current = (current - 1 + playlist.length) % playlist.length; render(); });
$('[data-next]', player).addEventListener('click', () => { current = (current + 1) % playlist.length; render(); });
$('[data-close]', player).addEventListener('click', playerModal.close);

// Paleta de comandos: acha qualquer destino digitando.
const normalize = text => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const commands = [
  { group: 'ações', label: 'Conversar no WhatsApp', hint: 'wa.me', glyph: 'whatsapp', href: waLink(), keys: 'whatsapp conversar orcamento contato mensagem projeto' },
  { group: 'ações', label: 'Salvar contato', hint: '.vcf', glyph: 'user-plus', href: profile.vcard, download: true, keys: 'vcard agenda telefone' },
  { group: 'ações', label: 'Compartilhar esta página', hint: 'link', glyph: 'share', run: sharePage, keys: 'enviar copiar' },
  { group: 'ações', label: 'Baixar currículo', hint: 'pdf', glyph: 'download', href: profile.resume, keys: 'cv recrutador vaga' },
  ...projects.map((p, index) => ({ group: 'projetos', label: p.name, hint: p.segment.toLowerCase(), glyph: 'play', run: () => openPlayer(index), keys: `${p.segment} ${p.kind} ${p.short} ${p.label}` })),
  ...services.map(s => ({ group: 'serviços', label: s.title, hint: 'pedir', glyph: 'sparkles', href: waLink(serviceMessage(s.topic)), keys: s.items.join(' ') })),
  ...work.map(w => ({ group: 'links', label: w.title, hint: w.domain, glyph: w.id === 'kyber' ? 'layers' : 'code', href: w.href, keys: w.desc })),
  { group: 'links', label: 'Portfólio de modelo', hint: 'fotos', glyph: 'camera', href: model.href, keys: 'modelo editorial streetwear retrato' },
  ...tools.map(t => ({ group: 'ferramentas', label: t.name, hint: 'grátis', glyph: t.id === 'qr' ? 'qr' : 'image', href: t.href, keys: t.desc })),
  ...socials.map(s => ({ group: 'redes', label: s.name, hint: s.handle, glyph: s.id, href: s.href, keys: s.sub })),
];
const palette = $('#palette');
const paletteModal = modal(palette);
const input = $('input', palette);
const results = $('[data-results]', palette);
const draw = () => {
  const query = normalize(input.value.trim());
  // Quem tem a busca no próprio nome vem antes de quem só tem nas palavras-chave.
  const found = commands
    .filter(c => !query || normalize(`${c.label} ${c.hint} ${c.group} ${c.keys || ''}`).includes(query))
    .sort((a, b) => Number(query && normalize(b.label).includes(query)) - Number(query && normalize(a.label).includes(query)));
  const groups = [...new Set(found.map(c => c.group))];
  results.innerHTML = found.length ? groups.map(group => `
    <p class="pal-group">${group}</p>
    ${found.filter(c => c.group === group).map(c => {
      const index = commands.indexOf(c);
      const inner = `${icon(c.glyph)}<span class="pal-label">${c.label}</span><span class="pal-hint">${c.hint}</span>`;
      return c.href ? `<a class="pal-item" href="${c.href}" ${c.download ? 'download' : ext} data-command="${index}">${inner}</a>` : `<button class="pal-item" type="button" data-command="${index}">${inner}</button>`;
    }).join('')}`).join('') : `<p class="pal-empty"># nada encontrado para "${input.value}". Tente: site, kyber, barbearia.</p>`;
};
const openPalette = () => { input.value = ''; draw(); paletteModal.show(); modeSlot.textContent = 'BUSCA'; setTimeout(() => input.focus(), 30); };
$$('[data-palette]').forEach(button => button.addEventListener('click', openPalette));
$('[data-close-palette]').addEventListener('click', paletteModal.close);
palette.addEventListener('close', () => { if (!player.open) modeSlot.textContent = 'NORMAL'; });
input.addEventListener('input', draw);
results.addEventListener('click', event => {
  const item = event.target.closest('[data-command]');
  if (!item) return;
  const command = commands[Number(item.dataset.command)];
  if (command.run) { paletteModal.close(); setTimeout(command.run, 240); }
  else setTimeout(paletteModal.close, 60);
});
palette.addEventListener('keydown', event => {
  const list = $$('.pal-item', results);
  const position = list.indexOf(document.activeElement);
  if (event.key === 'ArrowDown') { event.preventDefault(); (list[position + 1] || list[0])?.focus(); }
  if (event.key === 'ArrowUp') { event.preventDefault(); (position <= 0 ? input : list[position - 1]).focus(); }
  if (event.key === 'Enter' && document.activeElement === input && list[0]) { event.preventDefault(); list[0].click(); }
});

// Atalhos de teclado no computador.
document.addEventListener('keydown', event => {
  if (palette.open || player.open || event.target.closest('input')) return;
  if ((event.key === 'k' && (event.metaKey || event.ctrlKey)) || event.key === '/') { event.preventDefault(); openPalette(); }
  if (event.key === 'w') window.open(waLink(), '_blank', 'noopener');
  if (event.key === '1') window.open(work[0].href, '_blank', 'noopener');
  if (event.key === '2') window.open(work[1].href, '_blank', 'noopener');
  if (event.key === 'p') $('#projetos').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
});
