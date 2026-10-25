// Direção C · Stories: fala a língua de quem chega pelo Instagram.
import { profile, work, projects, services, about, tools, model, socials, MESSAGE } from '../shared/content.js';
import { mountNeural } from '../shared/neural.js';
import { icon, ext, waLink, projectMessage, serviceMessage, injectSprite, $, $$, startClock, sharePage, modal, mountVeil, reducedMotion } from '../shared/kit.js';

injectSprite();
mountNeural($('.neural'));
mountVeil($('.neural-veil'), { mobile: 0.32, desktop: 0.42 });

const mark = '<svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="32" fill="#031008"/><path d="M15 17h7.5v30H15z" fill="#f4fff8"/><path d="M49 21H36l-5.5 5.5v11L36 43h13" fill="none" stroke="#52ff7d" stroke-width="7.5"/></svg>';
const segment = p => (p.kind === 'conceito' ? `Conceito · ${p.segment}` : p.segment);
const projectStory = p => ({ kind: 'video', p, reply: projectMessage(p.name), replyLabel: `Responder sobre ${p.name}` });
const sets = {
  projetos: { label: 'Projetos', cover: projects[0].poster, stories: projects.map(projectStory) },
  clientes: { label: 'Clientes', cover: projects[5].poster, stories: projects.filter(p => p.kind !== 'conceito').map(projectStory) },
  conceitos: { label: 'Conceitos', cover: projects[1].poster, stories: projects.filter(p => p.kind === 'conceito').map(projectStory) },
  servicos: { label: 'Serviços', glyph: 'sparkles', stories: services.map(s => ({ kind: 'service', s, reply: serviceMessage(s.topic), replyLabel: `Quero ${s.title.toLowerCase()}` })) },
  sobre: { label: 'Sobre', cover: profile.portrait, stories: [{ kind: 'intro' }, { kind: 'timeline' }, { kind: 'specs' }] },
  kyber: { label: 'Kyber', mark: work[1].mark, stories: [{ kind: 'kyber' }] },
  modelo: { label: 'Modelo', cover: model.photos[0], stories: model.photos.map(src => ({ kind: 'photo', src })) },
  gratis: { label: 'Grátis', glyph: 'qr', stories: tools.map(t => ({ kind: 'tool', t })) },
};
const words = ['sites', 'sistemas', 'automações', 'catálogos'];

$('#app').innerHTML = `
  <header class="top">
    <a class="top-id" href="#inicio">${mark}<span>igor de castro</span></a>
    <button class="top-btn" type="button" data-share aria-label="Compartilhar esta página">${icon('share')}</button>
  </header>

  <main class="profile" id="inicio">
    <section class="head" aria-labelledby="nome">
      <button class="avatar" type="button" data-set="projetos" aria-label="Ver os projetos em stories">
        <span class="ring"><img src="${profile.portrait}" alt="Igor de Castro" width="480" height="480" fetchpriority="high"></span>
        <span class="avatar-badge" aria-hidden="true">${icon('play')}</span>
      </button>
      <ul class="stats" aria-label="Resumo">
        <li><strong>${projects.length}</strong><span>projetos</span></li>
        <li><strong>4+</strong><span>anos</span></li>
        <li><strong>${services.length}</strong><span>serviços</span></li>
      </ul>
    </section>

    <section class="bio">
      <h1 class="bio-name" id="nome">${profile.name}</h1>
      <p class="bio-cat">${profile.role} · ${profile.studio}</p>
      <p class="bio-lead">Construo <span class="roll" aria-hidden="true">${words.map((word, index) => `<span class="${index === 0 ? 'is-on' : ''}">${word}</span>`).join('')}</span><span class="sr-only">sites, sistemas e automações</span> <b>sob medida</b> para o seu negócio.</p>
      <p class="bio-proof">Hoje na Minsait (Grupo Indra).</p>
      <p class="bio-loc">${icon('map')} ${profile.city} · atendo todo o Brasil</p>
    </section>

    <div class="actions" data-actions>
      <a class="btn btn-neon" href="${waLink()}" ${ext}>${icon('whatsapp')}Conversar</a>
      <a class="btn btn-glass" href="${work[0].href}" ${ext}>Portfólio</a>
      <a class="btn btn-glass" href="${work[1].href}" ${ext}>Kyber</a>
      <a class="btn btn-round" href="${profile.vcard}" download aria-label="Salvar contato">${icon('user-plus')}</a>
    </div>

    <ul class="highlights" aria-label="Destaques">
      ${Object.entries(sets).map(([id, set]) => `
        <li><button class="hl" type="button" data-set="${id}">
          <span class="hl-ring"><span class="hl-cover ${set.glyph ? 'is-glyph' : ''} ${set.mark ? 'is-kyber' : ''}">${set.cover ? `<img src="${set.cover}" alt="" loading="lazy">` : set.mark ? `<img src="${set.mark}" alt="" class="hl-mark">` : icon(set.glyph)}</span></span>
          <span class="hl-label">${set.label}</span>
        </button></li>`).join('')}
    </ul>

    <div class="tabs" role="tablist" aria-label="Conteúdo">
      <button role="tab" type="button" aria-selected="true" data-tab="grid">${icon('grid')}<span>Projetos</span></button>
      <button role="tab" type="button" aria-selected="false" data-tab="servicos">${icon('sparkles')}<span>Serviços</span></button>
      <button role="tab" type="button" aria-selected="false" data-tab="sobre">${icon('user')}<span>Sobre</span></button>
      <span class="tabs-line" aria-hidden="true"></span>
    </div>

    <section class="panel" data-panel="grid" role="tabpanel" aria-label="Projetos">
      <ul class="grid">
        ${projects.map((p, index) => `
          <li><button class="tile" type="button" data-project="${index}" aria-label="Ver ${p.name} em stories">
            <img src="${p.poster}" alt="" loading="lazy" decoding="async">
            <span class="tile-play" aria-hidden="true">${icon('play')}</span>
            <span class="tile-copy"><span class="tile-seg ${p.kind === 'conceito' ? 'is-concept' : ''}">${segment(p)}</span><span class="tile-name">${p.name}</span></span>
          </button></li>`).join('')}
        <li><a class="tile tile-cta" href="${waLink()}" ${ext}>${icon('plus')}<span>Seu projeto aqui</span></a></li>
      </ul>
      <p class="note">Lume, Aura, BRUMA e Casa Umbra são estudos conceituais da Kyber, com marcas fictícias.</p>
    </section>

    <section class="panel" data-panel="servicos" role="tabpanel" aria-label="Serviços" hidden>
      ${services.map(s => `
        <article class="svc">
          <span class="svc-index">${s.index}</span>
          <h2>${s.title}</h2>
          <p>${s.desc}</p>
          <ul class="svc-items">${s.items.map(item => `<li>${item}</li>`).join('')}</ul>
          <a class="btn btn-neon btn-sm" href="${waLink(serviceMessage(s.topic))}" ${ext}>${icon('whatsapp')}${s.cta}</a>
        </article>`).join('')}
    </section>

    <section class="panel" data-panel="sobre" role="tabpanel" aria-label="Sobre" hidden>
      <ol class="timeline">${about.timeline.map(item => `<li><span class="tl-when">${item.when}</span><span class="tl-title">${item.title}</span><span class="tl-text">${item.text}</span></li>`).join('')}</ol>
      <p class="story">${about.story}</p>
      <div class="rows">
        <a class="row" href="${profile.resume}" ${ext}>${icon('book')}<span>Currículo em PDF</span>${icon('arrow-up-right')}</a>
        <a class="row" href="${model.href}" ${ext}>${icon('camera')}<span>Portfólio de modelo</span>${icon('arrow-up-right')}</a>
        ${tools.map(t => `<a class="row" href="${t.href}" ${ext}>${icon(t.id === 'qr' ? 'qr' : 'image')}<span>${t.name} <small>grátis</small></span>${icon('arrow-up-right')}</a>`).join('')}
      </div>
    </section>

    <footer class="foot">
      <div class="socials">${socials.map(s => `<a class="btn btn-round" href="${s.href}" ${ext} aria-label="${s.name}">${icon(s.id)}</a>`).join('')}</div>
      <p>${profile.city} · <span data-clock>--:--</span> agora em Goiânia</p>
    </footer>
  </main>

  <div class="composer" data-composer inert>
    <a class="composer-pill" href="${waLink()}" ${ext}><img src="${profile.portrait}" alt=""><span>Mande uma mensagem para o Igor…</span>${icon('send')}</a>
  </div>

  <dialog class="stories" id="stories" aria-label="Stories">
    <div class="st-bg" data-bg></div>
    <div class="st-top">
      <div class="st-bars" data-bars></div>
      <div class="st-head">
        <img class="st-avatar" src="${profile.portrait}" alt="">
        <span class="st-who">igor de castro</span>
        <span class="st-meta" data-meta></span>
        <button class="st-icon" type="button" data-pause aria-label="Pausar">${icon('pause')}</button>
        <button class="st-icon" type="button" data-close aria-label="Fechar">${icon('x')}</button>
      </div>
    </div>
    <div class="st-stage" data-stage></div>
    <button class="st-zone st-prev" type="button" data-prev aria-label="Story anterior"></button>
    <button class="st-zone st-next" type="button" data-next aria-label="Próximo story"></button>
    <div class="st-bottom"><a class="st-reply" data-reply ${ext}><span data-reply-label>Responder</span>${icon('send')}</a></div>
  </dialog>
`;

startClock('[data-clock]');
$('[data-share]').addEventListener('click', sharePage);

// Palavra que rola na bio, só enquanto está na tela.
const roll = $('.roll');
const rollWords = $$('span', roll);
let rollIndex = 0;
let rollTimer;
const fitRoll = () => roll.style.setProperty('--w', `${rollWords[rollIndex].offsetWidth}px`);
fitRoll();
document.fonts?.ready.then(fitRoll);
new IntersectionObserver(([entry]) => {
  clearInterval(rollTimer);
  if (!entry.isIntersecting || reducedMotion.matches) return;
  rollTimer = setInterval(() => {
    const previous = rollWords[rollIndex];
    previous.classList.replace('is-on', 'is-off');
    setTimeout(() => previous.classList.remove('is-off'), 600);
    rollIndex = (rollIndex + 1) % rollWords.length;
    rollWords[rollIndex].classList.add('is-on');
    fitRoll();
  }, 2200);
}).observe(roll);

// Abas do perfil.
const tabs = $$('[role="tab"]');
const line = $('.tabs-line');
const moveLine = () => {
  const active = $('[aria-selected="true"]');
  line.style.setProperty('--x', `${active.offsetLeft}px`);
  line.style.setProperty('--w', `${active.offsetWidth}px`);
};
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
  $$('[data-panel]').forEach(panel => { panel.hidden = panel.dataset.panel !== tab.dataset.tab; });
  moveLine();
}));
moveLine();
document.fonts?.ready.then(moveLine);
window.addEventListener('resize', moveLine);

// Compositor fixo de mensagem depois que os botões do perfil saem da tela.
const composer = $('[data-composer]');
new IntersectionObserver(([entry]) => {
  const show = !entry.isIntersecting && entry.boundingClientRect.top < 0;
  composer.classList.toggle('is-visible', show);
  composer.inert = !show;
}).observe($('[data-actions]'));

// Stories.
const viewer = $('#stories');
const stage = $('[data-stage]', viewer);
const bars = $('[data-bars]', viewer);
const bg = $('[data-bg]', viewer);
const reply = $('[data-reply]', viewer);
const replyLabel = $('[data-reply-label]', viewer);
const meta = $('[data-meta]', viewer);
const pauseButton = $('[data-pause]', viewer);
const IMAGE_TIME = 6500;
let active = null;
let index = 0;
let video = null;
let started = 0;
let elapsed = 0;
let paused = false;
let raf = 0;
let currentSet = '';
const stopVideo = () => { if (video) { video.pause(); video.removeAttribute('src'); video.load(); video = null; } };
const sticker = (href, label, glyph = 'link') => `<a class="sticker" href="${href}" ${ext}>${icon(glyph)}<span>${label}</span></a>`;
const storyHTML = story => {
  if (story.kind === 'video') {
    const p = story.p;
    return `<div class="st-card st-project">
      <p class="st-kicker ${p.kind === 'conceito' ? 'is-concept' : ''}">${p.label}</p>
      <h2 class="st-title">${p.name}</h2>
      <div class="st-video" data-video></div>
      <p class="st-text">${p.short}</p>
      ${p.desktopOnly ? `<p class="st-note">${p.note}</p>` : sticker(p.site, p.domain)}
    </div>`;
  }
  if (story.kind === 'service') {
    const s = story.s;
    return `<div class="st-card st-service">
      <span class="st-index">${s.index}</span>
      <h2 class="st-title">${s.title}</h2>
      <p class="st-text">${s.desc}</p>
      <ul class="st-chips">${s.items.map(item => `<li>${item}</li>`).join('')}</ul>
      <div class="poll"><p>Precisa disso no seu negócio?</p><a href="${waLink(story.reply)}" ${ext}>Sim, quero conversar</a><button type="button" data-skip>Ver o próximo</button></div>
    </div>`;
  }
  if (story.kind === 'intro') return `<div class="st-card st-intro"><p class="st-kicker">Prazer,</p><h2 class="st-title st-huge">Igor.</h2><p class="st-text">${profile.role} e cofundador da Kyber Tech. ${profile.proof}</p></div>`;
  if (story.kind === 'timeline') return `<div class="st-card st-panel"><p class="st-kicker">Trajetória</p><ol class="st-timeline">${about.timeline.map(item => `<li><b>${item.when}</b><span>${item.title}</span><small>${item.text}</small></li>`).join('')}</ol></div>`;
  if (story.kind === 'specs') return `<div class="st-card st-panel"><p class="st-kicker">Ficha técnica</p><dl class="st-specs">${about.rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl>${sticker(profile.resume, 'Currículo em PDF', 'book')}</div>`;
  if (story.kind === 'kyber') return `<div class="st-card st-kyber"><img src="${work[1].mark}" alt="" class="st-mark"><p class="st-kicker">Cofundador</p><h2 class="st-title">Kyber Tech</h2><p class="st-text">${work[1].desc} Contato direto com quem desenvolve.</p>${sticker(work[1].href, work[1].domain)}</div>`;
  if (story.kind === 'photo') return `<div class="st-card st-photo"><p class="st-kicker">${model.label}</p><h2 class="st-title">${model.title}</h2><p class="st-text">${model.desc}</p>${sticker(model.href, 'igordecastro.com.br/modelo')}</div>`;
  if (story.kind === 'tool') return `<div class="st-card st-tool"><p class="st-kicker">Ferramenta grátis</p><h2 class="st-title">${story.t.name}</h2><img class="st-shot" src="${story.t.image}" alt=""><p class="st-text">${story.t.desc}</p>${sticker(story.t.href, new URL(story.t.href).hostname)}</div>`;
  return '';
};
const background = story => {
  if (story.kind === 'video') return story.p.poster;
  if (story.kind === 'photo') return story.src;
  if (story.kind === 'intro') return profile.body;
  if (story.kind === 'tool') return story.t.image;
  return '';
};
const drawBars = () => {
  bars.innerHTML = active.stories.map((_, i) => `<span class="${i < index ? 'is-done' : ''}"><i></i></span>`).join('');
};
const progress = () => {
  const fill = $$('i', bars)[index];
  if (!fill) return;
  let value;
  if (video) value = video.duration ? video.currentTime / video.duration : 0;
  else value = Math.min(1, (elapsed + (paused ? 0 : performance.now() - started)) / IMAGE_TIME);
  fill.style.transform = `scaleX(${value})`;
  if (!video && value >= 1) return next();
  raf = requestAnimationFrame(progress);
};
const show = () => {
  cancelAnimationFrame(raf);
  stopVideo();
  const story = active.stories[index];
  const image = background(story);
  bg.style.backgroundImage = image ? `url("${image}")` : '';
  bg.classList.toggle('is-photo', story.kind === 'photo' || story.kind === 'intro');
  stage.innerHTML = storyHTML(story);
  stage.dataset.kind = story.kind;
  reply.href = waLink(story.reply || MESSAGE);
  replyLabel.textContent = story.replyLabel || 'Mandar mensagem para o Igor';
  meta.textContent = story.kind === 'video' ? story.p.duration : active.label.toLowerCase();
  drawBars();
  elapsed = 0;
  started = performance.now();
  paused = false;
  viewer.classList.remove('is-paused');
  if (story.kind === 'video') {
    video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.poster = story.p.poster;
    video.src = story.p.video;
    video.setAttribute('aria-label', `Demonstração de ${story.p.name}`);
    video.addEventListener('ended', next);
    $('[data-video]', stage).append(video);
    video.play().catch(() => {});
  }
  $('[data-skip]', stage)?.addEventListener('click', next);
  raf = requestAnimationFrame(progress);
};
const next = () => { if (index < active.stories.length - 1) { index += 1; show(); } else storiesModal.close(); };
const prev = () => { if (index > 0) { index -= 1; show(); } else show(); };
const setPaused = value => {
  if (!active || paused === value) return;
  paused = value;
  viewer.classList.toggle('is-paused', value);
  pauseButton.innerHTML = icon(value ? 'play' : 'pause');
  if (value) { elapsed += performance.now() - started; video?.pause(); }
  else { started = performance.now(); video?.play().catch(() => {}); }
};
const storiesModal = modal(viewer, {
  onClose: () => {
    cancelAnimationFrame(raf);
    stopVideo();
    stage.replaceChildren();
    $(`.hl[data-set="${currentSet}"]`)?.classList.add('is-seen');
    active = null;
  },
});
const openSet = (id, start = 0) => {
  currentSet = id;
  active = sets[id];
  index = start;
  storiesModal.show();
  show();
};
$$('[data-set]').forEach(button => button.addEventListener('click', () => openSet(button.dataset.set)));
$$('[data-project]').forEach(tile => tile.addEventListener('click', () => openSet('projetos', Number(tile.dataset.project))));

// Toque à esquerda volta, à direita avança; segurar pausa, como no Instagram.
let holdTimer;
let held = false;
$$('.st-zone', viewer).forEach(zone => {
  zone.addEventListener('pointerdown', () => { held = false; holdTimer = setTimeout(() => { held = true; setPaused(true); }, 220); });
  zone.addEventListener('pointerup', () => {
    clearTimeout(holdTimer);
    if (held) { setPaused(false); return; }
    if (zone.dataset.prev !== undefined) prev(); else next();
  });
  zone.addEventListener('pointerleave', () => { clearTimeout(holdTimer); if (held) setPaused(false); });
  zone.addEventListener('click', event => event.preventDefault());
});
pauseButton.addEventListener('click', () => setPaused(!paused));
$('[data-close]', viewer).addEventListener('click', storiesModal.close);
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') next();
  if (event.key === 'ArrowLeft') prev();
  if (event.key === ' ') { event.preventDefault(); setPaused(!paused); }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) setPaused(true); });

// Arrastar para baixo fecha os stories.
let swipeStart = null;
viewer.addEventListener('pointerdown', event => { swipeStart = { x: event.clientX, y: event.clientY }; });
viewer.addEventListener('pointerup', event => {
  if (!swipeStart) return;
  const dy = event.clientY - swipeStart.y;
  const dx = Math.abs(event.clientX - swipeStart.x);
  swipeStart = null;
  if (dy > 110 && dx < 80) storiesModal.close();
});
