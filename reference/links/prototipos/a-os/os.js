// Direção A · IgorOS: a página como a tela inicial de um sistema operacional.
import { profile, work, projects, services, about, tools, model, socials } from '../shared/content.js';
import { mountNeural } from '../shared/neural.js';
import { icon, ext, waLink, projectMessage, serviceMessage, injectSprite, $, $$, startClock, createVideo, disposeVideo, sharePage, modal, dragToClose, mountVeil, reducedMotion } from '../shared/kit.js';

injectSprite();
mountNeural($('.neural'));
mountVeil($('.neural-veil'), { mobile: 0.4, desktop: 0.45 });

const logo = '<svg class="about-logo" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="#031008"/><rect x=".75" y=".75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="rgba(82,255,125,.4)" stroke-width="1.5"/><path d="M13 15h8v34h-8z" fill="#f4fff8"/><path d="M52 19H37l-6 6v14l6 6h15" fill="none" stroke="#52ff7d" stroke-width="8"/></svg>';
const serviceIcons = { site: 'globe', automacao: 'bolt', ia: 'sparkles' };
const apps = [
  { label: 'LinkedIn', href: socials[0].href, glyph: icon('linkedin') },
  { label: 'Instagram', href: socials[1].href, glyph: icon('instagram') },
  { label: 'GitHub', href: socials[2].href, glyph: icon('github') },
  { label: 'Currículo', href: profile.resume, glyph: icon('book') },
  { label: 'QR Studio', href: tools[0].href, glyph: icon('qr') },
  { label: 'Compressify', href: tools[1].href, glyph: icon('image') },
  { label: 'Modelo', href: model.href, glyph: icon('camera') },
  { label: 'Contato', href: profile.vcard, glyph: icon('user-plus'), download: true },
];
const kindLabel = p => (p.kind === 'conceito' ? `Conceito · ${p.segment}` : p.segment);

$('#app').innerHTML = `
  <header class="status">
    <span class="status-time" data-clock>--:--</span>
    <a class="island" href="#inicio" data-island><span class="island-dot" aria-hidden="true"></span><span class="island-text" data-island-text>Disponível</span></a>
    <span class="status-icons" aria-hidden="true"><i class="sig"><b></b><b></b><b></b><b></b></i><i class="bat"><b></b></i></span>
  </header>

  <main class="home" id="inicio">
    <section class="poster" aria-labelledby="nome">
      <img class="poster-photo" src="${profile.poster}" alt="Igor de Castro, de terno bege" width="720" height="960" fetchpriority="high">
      <div class="poster-top"><span class="chip">${profile.role}</span><span class="chip chip-dim">${profile.city}</span></div>
      <div class="poster-copy">
        <p class="poster-kicker">${profile.studio}</p>
        <h1 class="poster-name" id="nome"><span>Igor</span><span>de Castro</span></h1>
        <p class="poster-lead">Sites, sistemas e automações <b>sob medida</b> para o seu negócio.</p>
      </div>
      <div class="slide" data-slide>
        <span class="slide-fill" aria-hidden="true"></span>
        <span class="slide-label" aria-hidden="true">deslize para conversar</span>
        <a class="slide-thumb" href="${waLink()}" ${ext} aria-label="Conversar no WhatsApp">${icon('whatsapp')}</a>
      </div>
    </section>

    <section class="row-2" aria-label="Credenciais">
      <article class="w w-stat"><p class="w-label">${icon('history')} Experiência</p><p class="w-big">4+</p><p class="w-small">anos em sistemas de grande porte</p></article>
      <article class="w w-stat"><p class="w-label">${icon('chip')} Hoje na</p><p class="w-mid">Minsait</p><p class="w-small">Grupo Indra</p></article>
    </section>

    <section class="stack" aria-label="Trabalho">
      ${work.map(item => `
        <a class="w w-link" href="${item.href}" ${ext}>
          <span class="w-link-icon ${item.mark ? 'is-kyber' : ''}">${item.mark ? `<img src="${item.mark}" alt="" width="53" height="120">` : icon('code')}</span>
          <span class="w-link-copy">
            <span class="w-link-title">${item.title}${item.badge ? `<em>${item.badge}</em>` : ''}</span>
            <span class="w-small">${item.desc}</span>
            <span class="w-domain">${item.domain}</span>
          </span>
          <span class="w-link-go">${icon('arrow-up-right')}</span>
        </a>`).join('')}
    </section>

    <section class="w w-projects" id="projetos" aria-labelledby="projetos-titulo">
      <div class="w-head"><h2 id="projetos-titulo">${icon('play')} Projetos no ar</h2><span class="w-count" data-count>${projects.length}</span></div>
      <div class="seg" role="group" aria-label="Filtrar projetos">
        <span class="seg-thumb" aria-hidden="true"></span>
        <button type="button" aria-pressed="true" data-filter="todos">Todos</button>
        <button type="button" aria-pressed="false" data-filter="reais">Reais</button>
        <button type="button" aria-pressed="false" data-filter="conceito">Conceitos</button>
      </div>
      <div class="cards" data-cards>
        ${projects.map((p, index) => `
          <button class="card" type="button" data-index="${index}" data-kind="${p.kind}" aria-label="Ver demonstração de ${p.name}">
            <img src="${p.poster}" alt="" loading="lazy" decoding="async">
            <span class="card-play">${icon('play')}${p.duration}</span>
            <span class="card-copy"><span class="card-kind ${p.kind === 'conceito' ? 'is-concept' : ''}">${kindLabel(p)}</span><span class="card-name">${p.name}</span><span class="card-text">${p.short}</span></span>
          </button>`).join('')}
      </div>
      <div class="dots" data-dots aria-hidden="true"></div>
    </section>

    <section class="w w-control" id="servicos" aria-labelledby="servicos-titulo">
      <div class="w-head"><h2 id="servicos-titulo">${icon('sparkles')} Do que você precisa?</h2></div>
      <p class="w-sub">Marque um ou mais e a mensagem já vai pronta.</p>
      <div class="toggles">
        ${services.map(s => `
          <button class="toggle" type="button" aria-pressed="false" data-service="${s.id}">
            <span class="toggle-icon">${icon(serviceIcons[s.id])}</span>
            <span class="toggle-copy"><span class="toggle-title">${s.title}</span><span class="toggle-desc">${s.desc}</span></span>
            <span class="toggle-check">${icon('check')}</span>
          </button>`).join('')}
      </div>
      <a class="pill pill-neon pill-wide" data-order href="${waLink()}" ${ext}>${icon('whatsapp')}<span data-order-label>Conversar sobre um projeto</span></a>
    </section>

    <section class="apps" aria-label="Atalhos">
      ${apps.map(app => `<a class="app" href="${app.href}" ${app.download ? 'download' : ext}><span class="app-icon">${app.glyph}</span><span class="app-label">${app.label}</span></a>`).join('')}
    </section>

    <section class="w w-about" id="sobre" aria-labelledby="sobre-titulo">
      <div class="about-head">${logo}<div><h2 id="sobre-titulo">IgorOS</h2><p>Versão 4+ · anos em tecnologia</p></div></div>
      <dl class="specs">
        ${about.rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}
        <div><dt>Hora</dt><dd><span data-clock>--:--</span> em Goiânia</dd></div>
      </dl>
      <details class="about-more"><summary>Mais informações ${icon('chevron-down')}</summary><p>${about.story}</p></details>
    </section>

    <section class="w w-photos" aria-labelledby="fotos-titulo">
      <a class="photos" href="${model.href}" ${ext}>
        ${model.photos.map((src, index) => `<img src="${src}" alt="" width="360" height="480" loading="lazy" decoding="async" class="${index === 0 ? 'is-on' : ''}">`).join('')}
        <span class="photos-copy"><span class="w-label">${icon('camera')} ${model.label}</span><span class="photos-title" id="fotos-titulo">${model.title}</span><span class="w-small">${model.desc}</span></span>
        <span class="photos-go">${icon('arrow-up-right')}</span>
      </a>
    </section>

    <p class="foot">IgorOS · ${profile.city} · HTML, CSS e JavaScript puros</p>
  </main>

  <nav class="dock" aria-label="Atalhos principais">
    <a class="dock-main" href="${waLink()}" ${ext}>${icon('whatsapp')}<span>Conversar</span></a>
    <a class="dock-btn" href="#projetos">${icon('play')}<span>Projetos</span></a>
    <button class="dock-btn" type="button" data-share>${icon('share')}<span>Enviar</span></button>
  </nav>

  <dialog class="sheet" id="viewer" aria-labelledby="viewer-title">
    <div class="sheet-grab" data-grab><span></span></div>
    <button class="round sheet-close" type="button" data-close aria-label="Fechar">${icon('x')}</button>
    <div class="sheet-media" data-stage></div>
    <div class="sheet-body">
      <p class="sheet-kind" data-kind></p>
      <h2 class="sheet-title" id="viewer-title" data-title></h2>
      <p class="sheet-text" data-more></p>
      <p class="sheet-note" data-note hidden></p>
      <ul class="chips" data-stack></ul>
      <div class="sheet-actions">
        <a class="pill pill-neon" data-wa ${ext}>${icon('whatsapp')}Quero um projeto assim</a>
        <a class="pill pill-glass" data-site ${ext}>${icon('arrow-up-right')}Visitar site</a>
      </div>
      <div class="sheet-nav">
        <button class="round" type="button" data-prev aria-label="Projeto anterior">${icon('chevron-left')}</button>
        <span class="sheet-count" data-position></span>
        <button class="round" type="button" data-next aria-label="Próximo projeto">${icon('chevron-right')}</button>
      </div>
    </div>
  </dialog>
`;

startClock('[data-clock]');
$('[data-share]').addEventListener('click', sharePage);

// Deslize para conversar: arrastar até o fim abre o WhatsApp; um toque simples também abre.
const slide = $('[data-slide]');
const thumb = $('.slide-thumb', slide);
let dragStart = null;
let dragX = 0;
let dragged = false;
const maxX = () => slide.clientWidth - thumb.offsetWidth - 12;
const setX = x => { dragX = x; slide.style.setProperty('--x', `${x}px`); };
thumb.addEventListener('pointerdown', event => {
  dragStart = event.clientX - dragX;
  dragged = false;
  thumb.setPointerCapture(event.pointerId);
  slide.classList.add('is-dragging');
});
thumb.addEventListener('pointermove', event => {
  if (dragStart === null) return;
  const x = Math.min(maxX(), Math.max(0, event.clientX - dragStart));
  if (Math.abs(x) > 6) dragged = true;
  setX(x);
});
const release = () => {
  if (dragStart === null) return;
  dragStart = null;
  slide.classList.remove('is-dragging');
  if (dragged && dragX > maxX() * 0.72) {
    setX(maxX());
    slide.classList.add('is-done');
    window.open(thumb.href, '_blank', 'noopener');
    setTimeout(() => { slide.classList.remove('is-done'); setX(0); }, 1200);
  } else setX(0);
};
thumb.addEventListener('pointerup', release);
thumb.addEventListener('pointercancel', release);
thumb.addEventListener('click', event => { if (dragged) event.preventDefault(); });

// Ilha dinâmica: acompanha a seção visível.
const island = $('[data-island]');
const islandText = $('[data-island-text]');
const islandFor = { inicio: 'Disponível', projetos: `${projects.length} projetos no ar`, servicos: 'Monte seu pedido', sobre: 'Sobre o Igor' };
const setIsland = text => {
  if (islandText.textContent === text) return;
  islandText.textContent = text;
  island.style.width = `${islandText.scrollWidth + 46}px`;
};
setIsland('Disponível');
new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) setIsland(islandFor[entry.target.id] || 'Disponível');
}), { rootMargin: '-45% 0px -50% 0px' }).observe($('#inicio'));
['projetos', 'servicos', 'sobre'].forEach(id => new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) setIsland(islandFor[id]);
}, { rootMargin: '-45% 0px -50% 0px' }).observe($(`#${id}`)));
window.addEventListener('scroll', () => { if (window.scrollY < 80) setIsland('Disponível'); }, { passive: true });

// Carrossel: o cartão do centro fica inteiro, os vizinhos recuam.
const rail = $('[data-cards]');
const cards = $$('.card', rail);
const dots = $('[data-dots]');
let queued = false;
const visibleCards = () => cards.filter(card => !card.hidden);
const paint = () => {
  queued = false;
  const box = rail.getBoundingClientRect();
  const center = box.left + box.width / 2;
  let nearest = 0;
  let best = Infinity;
  visibleCards().forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs(rect.left + rect.width / 2 - center);
    card.style.setProperty('--d', Math.min(distance / rect.width, 1).toFixed(3));
    if (distance < best) { best = distance; nearest = index; }
  });
  $$('i', dots).forEach((dot, index) => dot.classList.toggle('is-on', index === nearest));
};
const requestPaint = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
const buildDots = () => { dots.innerHTML = visibleCards().map(() => '<i></i>').join(''); requestPaint(); };
rail.addEventListener('scroll', requestPaint, { passive: true });
window.addEventListener('resize', requestPaint);
buildDots();

const seg = $('.seg');
const moveThumb = () => {
  const active = $('[aria-pressed="true"]', seg);
  seg.style.setProperty('--x', `${active.offsetLeft}px`);
  seg.style.setProperty('--w', `${active.offsetWidth}px`);
};
seg.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  $$('button', seg).forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  moveThumb();
  const filter = button.dataset.filter;
  cards.forEach(card => {
    const kind = card.dataset.kind;
    card.hidden = !(filter === 'todos' || (filter === 'conceito' ? kind === 'conceito' : kind !== 'conceito'));
  });
  $('[data-count]').textContent = visibleCards().length;
  rail.scrollTo({ left: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  buildDots();
});
document.fonts?.ready.then(moveThumb);
moveThumb();

// Central de serviços: marque o que precisa e a mensagem do WhatsApp já sai pronta.
const order = $('[data-order]');
const toggles = $$('.toggle');
toggles.forEach(toggle => toggle.addEventListener('click', () => {
  toggle.setAttribute('aria-pressed', String(toggle.getAttribute('aria-pressed') !== 'true'));
  const chosen = services.filter(s => $(`.toggle[data-service="${s.id}"]`).getAttribute('aria-pressed') === 'true');
  $('[data-order-label]').textContent = chosen.length ? (chosen.length === 1 ? `Conversar sobre ${chosen[0].title.toLowerCase()}` : `Conversar sobre os ${chosen.length} itens`) : 'Conversar sobre um projeto';
  const list = chosen.map(s => s.short);
  const joined = list.length > 1 ? `${list.slice(0, -1).join(', ')} e ${list.at(-1)}` : list[0];
  order.href = chosen.length === 1 ? waLink(serviceMessage(chosen[0].topic)) : chosen.length ? waLink(serviceMessage(`${joined} para o meu negócio`)) : waLink();
  order.classList.toggle('is-ready', chosen.length > 0);
}));

// Fotos: troca suave enquanto o widget está na tela.
const photos = $$('.photos img');
let photoIndex = 0;
let photoTimer;
new IntersectionObserver(([entry]) => {
  clearInterval(photoTimer);
  if (!entry.isIntersecting || reducedMotion.matches) return;
  photoTimer = setInterval(() => {
    photos[photoIndex].classList.remove('is-on');
    photoIndex = (photoIndex + 1) % photos.length;
    photos[photoIndex].classList.add('is-on');
  }, 2800);
}).observe($('.photos'));

// Player: folha que sobe, com vídeo, ações e anterior/próximo.
const viewer = $('#viewer');
const stage = $('[data-stage]', viewer);
let playlist = [];
let current = 0;
let video = null;
const sheet = modal(viewer, { onClose: () => { disposeVideo(video); video = null; } });
const render = () => {
  const p = projects[playlist[current]];
  disposeVideo(video);
  video = createVideo(p);
  stage.replaceChildren(video);
  $('[data-kind]', viewer).textContent = p.label;
  $('[data-title]', viewer).textContent = p.name;
  $('[data-more]', viewer).textContent = p.more;
  $('[data-note]', viewer).textContent = p.note || '';
  $('[data-note]', viewer).hidden = !p.note;
  $('[data-stack]', viewer).innerHTML = p.stack.map(item => `<li>${item}</li>`).join('');
  $('[data-wa]', viewer).href = waLink(projectMessage(p.name));
  $('[data-site]', viewer).href = p.site;
  $('[data-site]', viewer).classList.toggle('is-desktop-only', Boolean(p.desktopOnly));
  $('[data-position]', viewer).textContent = `${current + 1} de ${playlist.length}`;
};
rail.addEventListener('click', event => {
  const card = event.target.closest('.card');
  if (!card) return;
  playlist = visibleCards().map(item => Number(item.dataset.index));
  current = playlist.indexOf(Number(card.dataset.index));
  render();
  sheet.show();
  viewer.scrollTop = 0;
});
$('[data-prev]', viewer).addEventListener('click', () => { current = (current - 1 + playlist.length) % playlist.length; render(); });
$('[data-next]', viewer).addEventListener('click', () => { current = (current + 1) % playlist.length; render(); });
$('[data-close]', viewer).addEventListener('click', sheet.close);
dragToClose($('[data-grab]', viewer), viewer, sheet.close);
viewer.addEventListener('keydown', event => {
  if (event.target.closest('video')) return;
  if (event.key === 'ArrowRight') $('[data-next]', viewer).click();
  if (event.key === 'ArrowLeft') $('[data-prev]', viewer).click();
});
