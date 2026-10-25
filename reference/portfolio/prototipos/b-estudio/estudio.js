// Direção B · Estúdio: editorial, vídeo em formato de story e conversa.
// Caixa de mensagem que vai direto para o WhatsApp, projetos como reels que abrem em stories,
// destaques em círculo, o teste de arrastar cartas "Isso acontece no seu negócio?" e a barra de mensagem fixa.
import { profile, proof, projects, kinds, kindOf, services, process, offer, faq, timeline, stack, about, tools, model, socials, kyber, MESSAGE } from '../shared/content.js';
import { boot, mountBackground, reveal, icon, ext, waLink, projectMessage, serviceMessage, joinList, $, $$, openWhatsApp, createVideo, disposeVideo, modal, reducedMotion } from '../shared/kit.js';

boot();
mountBackground({ mobile: 0.5, desktop: 0.6 });

const bySlug = Object.fromEntries(projects.map(item => [item.slug, item]));
const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'teste', label: 'Teste rápido' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'duvidas', label: 'Dúvidas' },
  { id: 'contato', label: 'Contato' },
];
const suggestions = [
  ['Quero um site', 'Quero um site para o meu negócio de '],
  ['Automatizar o WhatsApp', 'Quero automatizar o atendimento no WhatsApp do meu negócio de '],
  ['Sistema para a equipe', 'Preciso de um sistema para a minha equipe organizar '],
  ['IA no atendimento', 'Quero uma IA respondendo as perguntas frequentes do meu negócio de '],
];
const fromSite = text => (text.trim() ? `Oi, Igor! Vi seu site. ${text.trim()}` : MESSAGE);

const composer = (id, { title = 'Me conta o que você precisa', big = false } = {}) => `
  <form class="composer ${big ? 'is-big' : ''}" data-composer>
    <label class="composer-label" for="${id}">${title}</label>
    <div class="composer-box">
      <textarea id="${id}" rows="2" maxlength="400" placeholder="Ex.: quero um site para a minha barbearia, com agendamento"></textarea>
      <button class="composer-send" type="submit" aria-label="Enviar pelo WhatsApp">${icon('send')}</button>
    </div>
    <div class="composer-chips">${suggestions.map(([label, text]) => `<button type="button" data-suggest="${text}">${label}</button>`).join('')}</div>
    <p class="composer-hint">${icon('whatsapp')} Abre o WhatsApp com a sua mensagem. Eu respondo pessoalmente.</p>
  </form>`;

const reel = item => `
  <li data-kind="${kindOf(item)}">
    <a class="reel" href="${item.site}" ${ext} data-story="${item.slug}">
      <span class="reel-media">
        <img class="reel-bg" src="${item.poster}" alt="" loading="lazy">
        <img class="reel-shot" src="${item.poster}" alt="" loading="lazy">
        <span class="reel-time">${icon('play')} ${item.duration}</span>
      </span>
      <span class="reel-copy"><span class="reel-kind">${item.label}</span><span class="reel-name">${item.name}</span></span>
    </a>
  </li>`;

// Destaques: cada círculo abre uma sequência de stories.
const highlights = [
  { id: 'clientes', label: 'Clientes', cover: bySlug['manus-barbearia'].poster },
  { id: 'conceitos', label: 'Conceitos', cover: bySlug.aura.poster },
  { id: 'marca', label: 'Minha marca', cover: bySlug['kounting-streetwear'].poster },
  { id: 'processo', label: 'Processo', cover: null, glyph: 'rocket' },
  { id: 'sobre', label: 'Sobre mim', cover: profile.poster },
  { id: 'modelo', label: 'Modelo', cover: model.photos[1] },
];

// O teste: seis situações comuns. Cada "acontece" aponta para um serviço.
const situations = [
  { text: 'Cliente pergunta o preço no Direct e some.', icon: 'message', service: 'site', fix: 'Um site com serviços e valores claros responde antes da pergunta.', example: 'gabriela-camargo' },
  { text: 'Eu respondo as mesmas perguntas o dia inteiro.', icon: 'sparkles', service: 'ia', fix: 'Uma IA com as respostas que você aprovou atende o básico e chama você quando precisa.' },
  { text: 'Meu negócio só existe no Instagram.', icon: 'globe', service: 'site', fix: 'Um endereço próprio, no Google, que continua seu mesmo se a rede mudar.', example: 'infinita-saude' },
  { text: 'A agenda vive no caderno ou no WhatsApp.', icon: 'calendar', service: 'automacao', fix: 'Agendamento online, com confirmação que sai sozinha.', example: 'manus-barbearia' },
  { text: 'Copio dados de um lugar para outro na mão.', icon: 'bolt', service: 'automacao', fix: 'Uma automação que registra, confirma e atualiza a planilha por você.' },
  { text: 'Minha equipe não tem um lugar para ver tudo.', icon: 'layers', service: 'sistema', fix: 'Um painel sob medida com o que importa para a operação.' },
];
const serviceById = Object.fromEntries(services.map(item => [item.id, item]));

$('#app').innerHTML = `
  <a class="skip" href="#projetos">Pular para os projetos</a>
  <header class="top" data-top>
    <nav class="segs" aria-label="Seções do site">
      ${sections.map(section => `<a class="seg" href="#${section.id}" data-seg="${section.id}" aria-label="${section.label}"><i></i></a>`).join('')}
    </nav>
    <div class="top-row">
      <a class="me" href="#inicio">
        <span class="ring"><img src="${profile.poster}" alt="" width="80" height="80"></span>
        <span class="me-copy"><b>${profile.name}</b><small><i class="live" aria-hidden="true"></i>Disponível para projetos</small></span>
      </a>
      <span class="top-links">${sections.slice(1, 6).map(section => `<a href="#${section.id}" data-link="${section.id}">${section.label}</a>`).join('')}</span>
      <a class="top-cta" href="${waLink()}" ${ext} aria-label="Conversar no WhatsApp">${icon('whatsapp')}<span>Conversar</span></a>
    </div>
  </header>

  <main class="page">
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <p class="hero-tag"><span>${profile.role}</span><span>${profile.studio}</span></p>
      <h1 class="hero-name" id="hero-title"><span>Igor</span> <span>de Castro</span></h1>
      <figure class="arch">
        <img src="${profile.poster}" alt="Igor de Castro, de terno bege" width="720" height="960" fetchpriority="high">
        <span class="sticker is-place">${icon('location')} ${profile.city}</span>
        <span class="sticker is-years">4+ anos em tecnologia</span>
        <span class="sticker is-live"><i class="live" aria-hidden="true"></i>${profile.status}</span>
      </figure>
      <div class="hero-side">
        <p class="hero-lead">Sites, sistemas e automações <b>sob medida</b> para o seu negócio.</p>
        <p class="hero-pitch">${profile.pitch}</p>
        <div data-hero-composer>${composer('hero-text')}</div>
        <dl class="proof">${proof.map(item => `<div><dt>${item.label}</dt><dd>${item.value}</dd></div>`).join('')}</dl>
      </div>
    </section>

    <section class="block rv" aria-label="Destaques">
      <ul class="highlights">
        ${highlights.map(item => `<li><button class="hl" type="button" data-highlight="${item.id}"><span class="hl-ring">${item.cover ? `<img src="${item.cover}" alt="" loading="lazy">` : `<span class="hl-glyph">${icon(item.glyph)}</span>`}</span><span class="hl-label">${item.label}</span></button></li>`).join('')}
      </ul>
    </section>

    <section class="block rv" id="projetos" aria-labelledby="projetos-title">
      <div class="block-head">
        <p class="eyebrow">${projects.length} projetos no ar</p>
        <h2 id="projetos-title">Trabalho que dá para abrir, assistir e visitar</h2>
        <p class="block-sub">Toque num projeto para ver o vídeo e a história: o desafio, o que foi feito e o resultado.</p>
      </div>
      <div class="filters" role="group" aria-label="Filtrar projetos">
        ${kinds.map((kind, index) => `<button type="button" data-filter="${kind.id}" aria-pressed="${index === 0}">${kind.label}</button>`).join('')}
      </div>
      <ul class="reels" data-reels>${projects.map(reel).join('')}</ul>
      <p class="reels-note">${icon('info')} Conceitos são marcas fictícias que a Kyber criou para mostrar o que dá para fazer. Não são clientes.</p>
    </section>

    <section class="block test rv" id="teste" aria-labelledby="teste-title">
      <div class="block-head">
        <p class="eyebrow">Teste rápido · 1 minuto</p>
        <h2 id="teste-title">Isso acontece no seu negócio?</h2>
        <p class="block-sub">Arraste para a direita se acontece, para a esquerda se não. No fim, eu te digo por onde começar.</p>
      </div>
      <div class="deck-wrap">
        <div class="deck" data-deck tabindex="0" aria-label="Cartas do teste. Use as setas para responder.">
          ${situations.map((item, index) => `
            <article class="swipe" data-card="${index}" aria-hidden="${index ? 'true' : 'false'}">
              <span class="stamp is-yes">Acontece</span><span class="stamp is-no">Não</span>
              <span class="swipe-icon">${icon(item.icon)}</span>
              <p class="swipe-count">${index + 1} de ${situations.length}</p>
              <p class="swipe-text">${item.text}</p>
              ${index === 0 ? `<p class="swipe-hint">${icon('swipe')} Arraste ou use os botões</p>` : ''}
            </article>`).join('')}
        </div>
        <div class="deck-actions">
          <button class="deck-btn is-no" type="button" data-answer="no"><span class="deck-circle">${icon('x')}</span><span>Não acontece</span></button>
          <button class="deck-btn is-yes" type="button" data-answer="yes"><span class="deck-circle">${icon('check')}</span><span>Acontece</span></button>
        </div>
        <div class="result" data-result hidden aria-live="polite"></div>
      </div>
    </section>

    <section class="block rv" id="servicos" aria-labelledby="servicos-title">
      <div class="block-head">
        <p class="eyebrow">Serviços</p>
        <h2 id="servicos-title">O que eu construo para você</h2>
      </div>
      <ul class="services">
        ${services.map((service, index) => `
          <li class="svc">
            <details ${index === 0 ? 'open' : ''}>
              <summary><span class="svc-num">0${index + 1}</span><span class="svc-title">${service.title}</span><span class="svc-toggle">${icon('plus')}</span></summary>
              <div class="svc-body">
                <p>${service.desc}</p>
                <ul class="svc-items">${service.items.map(item => `<li>${item}</li>`).join('')}</ul>
                <div class="svc-actions">
                  <a class="pill pill-neon" href="${waLink(serviceMessage(service.short))}" ${ext}>${icon('whatsapp')} Conversar sobre isso</a>
                  ${service.example ? `<button class="svc-example" type="button" data-story="${service.example}"><img src="${bySlug[service.example].poster}" alt="" loading="lazy"><span>Exemplo no ar<b>${bySlug[service.example].name}</b></span></button>` : ''}
                </div>
              </div>
            </details>
          </li>`).join('')}
      </ul>
    </section>

    <section class="block rv" id="como-funciona" aria-labelledby="flow-title">
      <div class="block-head">
        <p class="eyebrow">Como funciona</p>
        <h2 id="flow-title">Do primeiro oi ao site no ar</h2>
      </div>
      <ol class="frames">
        ${process.map((step, index) => `
          <li class="frame" data-frame>
            <span class="frame-bar"><i></i></span>
            <span class="frame-num">0${index + 1}</span>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </li>`).join('')}
      </ol>
      <div class="price">
        <div class="price-main">
          <p class="price-name">${offer.name} · ${offer.badge.toLowerCase()}</p>
          <p class="price-value">${offer.price}</p>
          <p class="price-inst">${offer.installments}</p>
        </div>
        <div class="price-side">
          <p class="price-guarantee">${icon('shield')} ${offer.guarantee}</p>
          <ul class="price-list">${offer.includes.map(item => `<li>${icon('check')}${item}</li>`).join('')}</ul>
          <p class="price-note">${offer.others} <a href="${offer.href}" ${ext}>Ver os planos da Kyber ${icon('arrow-up-right')}</a></p>
        </div>
      </div>
    </section>

    <section class="block rv" id="sobre" aria-labelledby="sobre-title">
      <div class="about">
        <figure class="arch is-small"><img src="${profile.body}" alt="Igor de Castro de corpo inteiro" width="720" height="1082" loading="lazy"></figure>
        <div class="about-copy">
          <p class="eyebrow">Sobre mim</p>
          <h2 id="sobre-title" class="quote">“${profile.quote}”</h2>
          <p class="about-story">${about.story}</p>
          <div class="about-links">
            <a class="pill pill-glass" href="${profile.resume}" download>${icon('file')} Currículo em PDF</a>
            <a class="pill pill-glass" href="${socials[0].href}" ${ext}>${icon('linkedin')} LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="strip-wrap">
        <ol class="strip">
          ${timeline.map(step => `<li class="strip-card"><span class="strip-year">${step.year}</span><span class="strip-icon">${icon(step.icon)}</span><b>${step.place}</b><span class="strip-title">${step.title}</span><p>${step.text}</p></li>`).join('')}
        </ol>
      </div>
      <div class="about-grid">
        <dl class="stack">${stack.map(group => `<div><dt>${group.title}</dt><dd>${group.items.join(' · ')}</dd></div>`).join('')}</dl>
        <div class="extras">
          <a class="extra" href="${model.href}" ${ext}><img src="${model.photos[0]}" alt="" loading="lazy"><span><b>${model.title}</b>${model.desc}</span>${icon('arrow-up-right')}</a>
          ${tools.map(tool => `<a class="extra" href="${tool.href}" ${ext}><img src="${tool.image}" alt="" loading="lazy"><span><b>${tool.name}</b>Ferramenta grátis</span>${icon('arrow-up-right')}</a>`).join('')}
        </div>
      </div>
    </section>

    <section class="block rv" id="duvidas" aria-labelledby="duvidas-title">
      <div class="block-head"><p class="eyebrow">Dúvidas</p><h2 id="duvidas-title">Antes de você perguntar</h2></div>
      <div class="faq">${faq.map(item => `<details><summary>${item.q}${icon('plus')}</summary><p>${item.a}</p></details>`).join('')}</div>
    </section>

    <section class="block final rv" id="contato" aria-labelledby="contato-title">
      <h2 id="contato-title">Vamos conversar?</h2>
      <p class="block-sub">${profile.note} ${profile.reach}.</p>
      <div data-final-composer>${composer('final-text', { title: 'Escreva do seu jeito', big: true })}</div>
      <ul class="contacts">
        <li><a href="mailto:${profile.email}">${icon('envelope')}<span>E-mail</span></a></li>
        ${socials.map(social => `<li><a href="${social.href}" ${ext}>${icon(social.id)}<span>${social.name}</span></a></li>`).join('')}
        <li><a href="${kyber.href}" ${ext}><img src="${kyber.mark}" alt="" width="53" height="120"><span>Kyber Tech</span></a></li>
        <li><a href="${profile.vcard}" download="igor-de-castro.vcf">${icon('user-plus')}<span>Salvar contato</span></a></li>
      </ul>
      <p class="fine">© 2026 Igor de Castro</p>
    </section>
  </main>

  <form class="msgbar" data-composer data-msgbar aria-label="Mandar mensagem para o Igor">
    <span class="ring is-mini"><img src="${profile.poster}" alt="" width="64" height="64"></span>
    <label class="sr-only" for="bar-text">Mensagem para o Igor</label>
    <input id="bar-text" type="text" maxlength="400" placeholder="Mensagem para o Igor…" autocomplete="off">
    <button class="composer-send" type="submit" aria-label="Enviar pelo WhatsApp">${icon('send')}</button>
  </form>

  <dialog class="story" id="story" aria-label="Stories">
    <div class="story-frame" data-frame-root>
      <div class="story-bars" data-bars></div>
      <div class="story-head">
        <span class="story-avatar" data-story-avatar></span>
        <span class="story-who"><b data-story-title></b><small data-story-sub></small></span>
        <button class="story-icon" type="button" data-story-pause aria-label="Pausar">${icon('pause')}</button>
        <button class="story-icon" type="button" data-story-close aria-label="Fechar">${icon('x')}</button>
      </div>
      <div class="story-stage" data-stage aria-live="polite"></div>
      <button class="story-tap is-prev" type="button" data-tap="-1" aria-label="Anterior"></button>
      <button class="story-tap is-next" type="button" data-tap="1" aria-label="Próximo"></button>
      <form class="story-reply" data-reply>
        <label class="sr-only" for="reply-text">Responder</label>
        <input id="reply-text" type="text" maxlength="300" autocomplete="off" placeholder="Responder ao Igor…">
        <button class="composer-send" type="submit" aria-label="Enviar pelo WhatsApp">${icon('send')}</button>
      </form>
    </div>
    <button class="story-side is-prev" type="button" data-jump="-1" aria-label="Story anterior">${icon('chevron-left')}</button>
    <button class="story-side is-next" type="button" data-jump="1" aria-label="Próximo story">${icon('chevron-right')}</button>
  </dialog>
`;
reveal();

/* Barra de progresso no topo, como nos stories: cada seção enche a sua parte. */
const segs = $$('[data-seg]');
const sectionEls = sections.map(section => $(`#${section.id}`));
let segQueued = false;
const paintSegs = () => {
  segQueued = false;
  const mid = window.scrollY + window.innerHeight * 0.5;
  let active = 0;
  sectionEls.forEach((element, index) => {
    const box = element.getBoundingClientRect();
    const top = box.top + window.scrollY;
    const progress = Math.min(1, Math.max(0, (mid - top) / Math.max(box.height, 1)));
    segs[index].style.setProperty('--p', progress.toFixed(3));
    if (mid >= top) active = index;
  });
  $$('[data-link]').forEach(link => link.toggleAttribute('aria-current', link.dataset.link === sections[active].id));
  $('[data-top]').classList.toggle('is-scrolled', window.scrollY > 24);
};
const requestSegs = () => { if (!segQueued) { segQueued = true; requestAnimationFrame(paintSegs); } };
window.addEventListener('scroll', requestSegs, { passive: true });
window.addEventListener('resize', requestSegs);
paintSegs();

/* Caixas de mensagem: o que a pessoa escreve vai direto para o WhatsApp. */
$$('[data-composer]').forEach(form => {
  const field = $('textarea, input', form);
  form.addEventListener('submit', event => {
    event.preventDefault();
    openWhatsApp(fromSite(field.value));
  });
  if (field.tagName === 'TEXTAREA') {
    field.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
    });
    const grow = () => { field.style.height = 'auto'; field.style.height = `${Math.min(field.scrollHeight, 180)}px`; };
    field.addEventListener('input', grow);
  }
  $$('[data-suggest]', form).forEach(chip => chip.addEventListener('click', () => {
    field.value = chip.dataset.suggest;
    field.dispatchEvent(new Event('input'));
    field.focus();
    field.setSelectionRange(field.value.length, field.value.length);
  }));
});

// A barra fixa aparece quando a caixa da abertura sai da tela e some perto da caixa final.
const msgbar = $('[data-msgbar]');
if ('IntersectionObserver' in window) {
  const watched = new Map();
  const update = () => msgbar.classList.toggle('is-on', !watched.get('hero') && !watched.get('final'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => watched.set(entry.target.dataset.heroComposer !== undefined ? 'hero' : 'final', entry.isIntersecting));
    update();
  }, { rootMargin: '0px 0px -10% 0px' });
  observer.observe($('[data-hero-composer]'));
  observer.observe($('[data-final-composer]'));
}

/* Filtro dos projetos */
const filters = $$('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  $$('[data-reels] > li').forEach(item => { item.hidden = !(button.dataset.filter === 'todos' || item.dataset.kind === button.dataset.filter); });
}));

/* Etapas: a barrinha de cada quadro enche quando ele aparece. */
if ('IntersectionObserver' in window) {
  const frameObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-played');
    frameObserver.unobserve(entry.target);
  }), { threshold: 0.6 });
  $$('[data-frame]').forEach(frame => frameObserver.observe(frame));
} else $$('[data-frame]').forEach(frame => frame.classList.add('is-played'));

/* Teste "Isso acontece no seu negócio?": cartas para arrastar, com botões como alternativa. */
const deck = $('[data-deck]');
const cards = $$('.swipe', deck);
const result = $('[data-result]');
const deckActions = $('.deck-actions');
let position = 0;
const answers = [];
const layoutDeck = () => cards.forEach((card, index) => {
  const depth = index - position;
  card.style.setProperty('--depth', Math.max(depth, 0));
  card.classList.toggle('is-top', depth === 0);
  card.classList.toggle('is-gone', depth < 0);
  card.classList.toggle('is-hidden', depth > 2);
  card.setAttribute('aria-hidden', String(depth !== 0));
});
const showResult = () => {
  deck.hidden = true;
  deckActions.hidden = true;
  const yes = answers.map((answer, index) => (answer ? situations[index] : null)).filter(Boolean);
  const picked = [...new Set(yes.map(item => item.service))].map(id => serviceById[id]);
  const message = yes.length
    ? `Oi, Igor! Fiz o teste no seu site. No meu negócio acontece: ${yes.map(item => item.text.charAt(0).toLowerCase() + item.text.slice(1).replace(/\.$/, '')).join('; ')}. Quero conversar sobre ${joinList(picked.map(item => item.short))}.`
    : 'Oi, Igor! Fiz o teste no seu site e quero conversar sobre uma ideia para o meu negócio.';
  result.innerHTML = yes.length ? `
    <p class="eyebrow">Seu resultado</p>
    <h3>${picked.length === 1 ? 'Eu começaria por aqui' : `Eu começaria por estas ${picked.length} frentes`}</h3>
    <ul class="result-list">${picked.map(service => `
      <li><span class="result-icon">${icon(service.icon)}</span><div><b>${service.title}</b><p>${yes.filter(item => item.service === service.id).map(item => item.fix).join(' ')}</p></div></li>`).join('')}</ul>
    <div class="result-actions">
      <a class="pill pill-neon pill-wide" href="${waLink(message)}" ${ext}>${icon('whatsapp')} Mandar meu resultado para o Igor</a>
      <button class="pill pill-glass pill-wide" type="button" data-restart>${icon('refresh')} Refazer o teste</button>
    </div>` : `
    <p class="eyebrow">Seu resultado</p>
    <h3>O básico já está redondo</h3>
    <p class="block-sub">Se você quer ir além, me conta a ideia: às vezes o próximo passo é um sistema que ninguém pensou ainda.</p>
    <div class="result-actions">
      <a class="pill pill-neon pill-wide" href="${waLink(message)}" ${ext}>${icon('whatsapp')} Conversar sobre uma ideia</a>
      <button class="pill pill-glass pill-wide" type="button" data-restart>${icon('refresh')} Refazer o teste</button>
    </div>`;
  result.hidden = false;
  if (!reducedMotion.matches) result.animate([{ opacity: 0, transform: 'translateY(20px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  $('[data-restart]', result).addEventListener('click', () => {
    answers.length = 0;
    position = 0;
    cards.forEach(card => { card.getAnimations().forEach(animation => animation.cancel()); card.style.transform = ''; });
    result.hidden = true;
    deck.hidden = false;
    deckActions.hidden = false;
    layoutDeck();
    deck.focus({ preventScroll: true });
  });
};
// A resposta conta na hora; a carta voa por conta própria, sem segurar a próxima.
const answer = (yes, fromDrag = 0) => {
  const card = cards[position];
  if (!card) return;
  answers[position] = yes;
  position += 1;
  const direction = yes ? 1 : -1;
  if (!reducedMotion.matches) {
    card.animate([
      { transform: card.style.transform || 'none', opacity: 1 },
      { transform: `translate(${direction * 520}px, ${fromDrag ? 40 : -30}px) rotate(${direction * 24}deg)`, opacity: 0 },
    ], { duration: 360, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
  }
  layoutDeck();
  if (position >= cards.length) setTimeout(showResult, reducedMotion.matches ? 0 : 380);
};
$$('[data-answer]').forEach(button => button.addEventListener('click', () => answer(button.dataset.answer === 'yes')));
deck.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); answer(true); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); answer(false); }
});
let drag = null;
deck.addEventListener('pointerdown', event => {
  const card = event.target.closest('.swipe.is-top');
  if (!card) return;
  drag = { card, x: event.clientX, y: event.clientY, dx: 0, dy: 0 };
  card.setPointerCapture(event.pointerId);
  card.classList.add('is-dragging');
});
deck.addEventListener('pointermove', event => {
  if (!drag) return;
  drag.dx = event.clientX - drag.x;
  drag.dy = event.clientY - drag.y;
  drag.card.style.transform = `translate(${drag.dx}px, ${drag.dy * 0.25}px) rotate(${drag.dx * 0.06}deg)`;
  drag.card.style.setProperty('--yes', Math.max(0, Math.min(1, drag.dx / 110)).toFixed(2));
  drag.card.style.setProperty('--no', Math.max(0, Math.min(1, -drag.dx / 110)).toFixed(2));
});
const endDrag = () => {
  if (!drag) return;
  const { card, dx } = drag;
  drag = null;
  card.classList.remove('is-dragging');
  card.style.setProperty('--yes', 0);
  card.style.setProperty('--no', 0);
  if (Math.abs(dx) > 100) answer(dx > 0, 1);
  else card.style.transform = '';
};
deck.addEventListener('pointerup', endDrag);
deck.addEventListener('pointercancel', endDrag);
layoutDeck();

/* Stories: casos, processo, sobre e modelo em telas que avançam sozinhas. */
const caseStory = item => ({
  title: item.name,
  sub: item.label,
  avatar: item.poster,
  site: item.site,
  reply: projectMessage(item.name),
  slides: [
    { type: 'cover', item },
    { type: 'text', kicker: 'O desafio', icon: 'flag', text: item.problem },
    { type: 'text', kicker: 'O que foi feito', icon: 'bolt', text: item.solution, chips: item.stack },
    item.result
      ? { type: 'result', kicker: 'Resultado', text: item.result, item }
      : { type: 'result', kicker: 'Por que existe', text: item.kind === 'conceito' ? 'Projeto conceitual da Kyber: uma marca fictícia, feita para mostrar o que dá para construir. Não é cliente.' : '', item },
  ],
});
const playlists = {
  clientes: () => projects.filter(item => item.kind === 'cliente').map(caseStory),
  conceitos: () => projects.filter(item => item.kind === 'conceito').map(caseStory),
  marca: () => [caseStory(bySlug['kounting-streetwear'])],
  processo: () => [{
    title: 'Como funciona', sub: 'Do primeiro oi ao site no ar', glyph: 'rocket', reply: 'Oi, Igor! Vi como funciona no seu site e quero começar.',
    slides: [...process.map((step, index) => ({ type: 'step', index, step })), { type: 'price' }],
  }],
  sobre: () => [{
    title: profile.name, sub: profile.studio, avatar: profile.poster, reply: 'Oi, Igor! Conheci a sua história no site e quero conversar.',
    slides: [
      { type: 'photo', src: profile.poster, caption: profile.pitch },
      ...timeline.map(step => ({ type: 'text', kicker: `${step.year} · ${step.place}`, icon: step.icon, text: `${step.title}. ${step.text}` })),
    ],
  }],
  modelo: () => [{
    title: 'Igor · Modelo', sub: model.title, avatar: model.photos[0], site: model.href, reply: 'Oi, Igor! Vi seu portfólio de modelo e quero conversar sobre um trabalho.',
    slides: model.photos.map((src, index) => ({ type: 'photo', src, caption: index === model.photos.length - 1 ? model.desc : '', link: index === model.photos.length - 1 ? { href: model.href, label: 'Ver o portfólio' } : null })),
  }],
};
const dialog = $('#story');
const stage = $('[data-stage]', dialog);
const bars = $('[data-bars]', dialog);
const pauseButton = $('[data-story-pause]', dialog);
let list = [];
let storyIndex = 0;
let slideIndex = 0;
let elapsed = 0;
let last = 0;
let paused = false;
let holding = false;
let raf = 0;
let video = null;
const slideDuration = slide => (slide.type === 'cover' ? 7000 : slide.type === 'photo' ? 5000 : 6500);
const stopVideo = () => { if (video) { disposeVideo(video); video = null; } };
const stopTimer = () => { cancelAnimationFrame(raf); raf = 0; };
const storyModal = modal(dialog, { onClose: () => { stopTimer(); stopVideo(); } });

const renderSlide = () => {
  stopVideo();
  const story = list[storyIndex];
  const slide = story.slides[slideIndex];
  $('[data-story-title]', dialog).textContent = story.title;
  $('[data-story-sub]', dialog).textContent = story.sub;
  $('[data-story-avatar]', dialog).innerHTML = story.avatar ? `<img src="${story.avatar}" alt="">` : icon(story.glyph);
  bars.innerHTML = story.slides.map((_, index) => `<i class="${index < slideIndex ? 'is-done' : ''}"><b></b></i>`).join('');
  $('#reply-text').placeholder = `Responder sobre ${story.title}…`;
  let html = '';
  if (slide.type === 'cover') {
    const { item } = slide;
    html = `<div class="s-cover"><img class="s-bg" src="${item.poster}" alt=""><img class="s-shot" src="${item.poster}" alt="Página inicial do site ${item.name}">
      <div class="s-cover-copy"><p class="s-kicker">${item.label}</p><h2>${item.name}</h2><p>${item.short}</p>
      <button class="pill pill-neon" type="button" data-play>${icon('play')} Ver o vídeo · ${item.duration}</button></div></div>`;
  } else if (slide.type === 'text') {
    html = `<div class="s-text">${slide.icon ? `<span class="s-icon">${icon(slide.icon)}</span>` : ''}<p class="s-kicker">${slide.kicker}</p><p class="s-big">${slide.text}</p>${slide.chips ? `<ul class="s-chips">${slide.chips.map(chip => `<li>${chip}</li>`).join('')}</ul>` : ''}</div>`;
  } else if (slide.type === 'result') {
    const { item } = slide;
    const note = item.kind === 'atleta' ? '<p class="s-note">Site feito para um familiar, sem relação comercial.</p>' : item.note ? `<p class="s-note">${item.note}</p>` : '';
    html = `<div class="s-text is-result"><span class="s-icon">${icon(item.result ? 'check-circle' : 'info')}</span><p class="s-kicker">${slide.kicker}</p>${slide.text ? `<p class="s-big">${slide.text}</p>` : ''}${note}
      <a class="link-sticker ${item.desktopOnly ? 'is-desktop-only' : ''}" href="${item.site}" ${ext}>${icon('link')} ${item.domain}</a></div>`;
  } else if (slide.type === 'step') {
    html = `<div class="s-text is-step"><p class="s-step">0${slide.index + 1}</p><p class="s-kicker">Etapa ${slide.index + 1} de ${process.length}</p><p class="s-big">${slide.step.title}</p><p class="s-small">${slide.step.text}</p></div>`;
  } else if (slide.type === 'price') {
    html = `<div class="s-text is-price"><p class="s-kicker">${offer.name} · ${offer.badge.toLowerCase()}</p><p class="s-price">${offer.price}</p><p class="s-small">${offer.installments}</p><p class="s-guarantee">${icon('shield')} ${offer.guarantee}</p><a class="link-sticker" href="${offer.href}" ${ext}>${icon('link')} Planos da Kyber</a></div>`;
  } else if (slide.type === 'photo') {
    html = `<div class="s-photo"><img src="${slide.src}" alt="">${slide.caption ? `<p class="s-caption">${slide.caption}</p>` : ''}${slide.link ? `<a class="link-sticker" href="${slide.link.href}" ${ext}>${icon('link')} ${slide.link.label}</a>` : ''}</div>`;
  }
  stage.innerHTML = html;
  if (!reducedMotion.matches) stage.firstElementChild?.animate([{ opacity: 0, transform: 'scale(1.02)' }, { opacity: 1, transform: 'none' }], { duration: 260, easing: 'ease-out' });
  $('[data-play]', stage)?.addEventListener('click', event => {
    event.stopPropagation();
    video = createVideo(slide.item);
    $('.s-cover', stage).append(video);
    $('.s-cover', stage).classList.add('is-playing');
    setPaused(true);
  });
  elapsed = 0;
  last = performance.now();
  $('[data-jump="-1"]', dialog).disabled = storyIndex === 0;
  $('[data-jump="1"]', dialog).disabled = storyIndex === list.length - 1;
};
const setPaused = value => {
  paused = value;
  pauseButton.innerHTML = icon(value ? 'play' : 'pause');
  pauseButton.setAttribute('aria-label', value ? 'Continuar' : 'Pausar');
  last = performance.now();
};
const tick = now => {
  const story = list[storyIndex];
  if (!paused && !holding) elapsed += now - last;
  last = now;
  const duration = slideDuration(story.slides[slideIndex]);
  const fill = $(`i:nth-child(${slideIndex + 1}) b`, bars);
  if (fill) fill.style.transform = `scaleX(${Math.min(elapsed / duration, 1)})`;
  if (elapsed >= duration) { go(1); return; }
  raf = requestAnimationFrame(tick);
};
const startTimer = () => {
  stopTimer();
  last = performance.now();
  if (reducedMotion.matches) {
    const fill = $(`i:nth-child(${slideIndex + 1}) b`, bars);
    if (fill) fill.style.transform = 'scaleX(1)';
    return;
  }
  raf = requestAnimationFrame(tick);
};
const go = direction => {
  const story = list[storyIndex];
  const next = slideIndex + direction;
  if (next >= story.slides.length) return jump(1, true);
  if (next < 0) return jump(-1, true, true);
  slideIndex = next;
  setPaused(false);
  renderSlide();
  startTimer();
};
const jump = (direction, fromEdge = false, toLastSlide = false) => {
  const target = storyIndex + direction;
  if (target >= list.length) { if (fromEdge) storyModal.close(); return; }
  if (target < 0) { slideIndex = 0; renderSlide(); startTimer(); return; }
  storyIndex = target;
  slideIndex = toLastSlide ? list[target].slides.length - 1 : 0;
  setPaused(false);
  renderSlide();
  startTimer();
  if (!reducedMotion.matches) $('[data-frame-root]', dialog).animate([{ transform: `translateX(${direction * 30}px)`, opacity: 0.4 }, { transform: 'none', opacity: 1 }], { duration: 300, easing: 'cubic-bezier(.22,1,.36,1)' });
};
const openStories = (stories, index = 0) => {
  list = stories;
  storyIndex = index;
  slideIndex = 0;
  setPaused(false);
  renderSlide();
  storyModal.show();
  startTimer();
};

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-story], [data-highlight]');
  if (!trigger || dialog.contains(trigger) || event.metaKey || event.ctrlKey || event.shiftKey || typeof dialog.showModal !== 'function') return;
  event.preventDefault();
  if (trigger.dataset.highlight) return openStories(playlists[trigger.dataset.highlight]());
  const slug = trigger.dataset.story;
  if (trigger.closest('[data-reels]')) {
    const visibleItems = $$('[data-reels] > li:not([hidden]) [data-story]').map(link => bySlug[link.dataset.story]);
    return openStories(visibleItems.map(caseStory), visibleItems.findIndex(item => item.slug === slug));
  }
  openStories([caseStory(bySlug[slug])]);
});
// Depois de segurar (pausa) ou arrastar, soltar o dedo não avança o story.
let suppressTap = false;
$$('[data-tap]', dialog).forEach(button => button.addEventListener('click', () => {
  if (suppressTap) { suppressTap = false; return; }
  go(Number(button.dataset.tap));
}));
$$('[data-jump]', dialog).forEach(button => button.addEventListener('click', () => jump(Number(button.dataset.jump))));
$('[data-story-close]', dialog).addEventListener('click', () => storyModal.close());
pauseButton.addEventListener('click', () => setPaused(!paused));
dialog.addEventListener('keydown', event => {
  if (event.target.closest('input')) return;
  if (event.key === 'ArrowRight') go(1);
  if (event.key === 'ArrowLeft') go(-1);
  if (event.key === ' ') { event.preventDefault(); setPaused(!paused); }
});
// Segurar pausa; arrastar para baixo fecha; para os lados troca de story.
const frameRoot = $('[data-frame-root]', dialog);
let press = null;
frameRoot.addEventListener('pointerdown', event => {
  if (event.target.closest('a, input, button:not([data-tap]), video')) return;
  press = { x: event.clientX, y: event.clientY, t: performance.now() };
  holding = true;
});
frameRoot.addEventListener('pointerup', event => {
  if (!press) return;
  const dx = event.clientX - press.x;
  const dy = event.clientY - press.y;
  const long = performance.now() - press.t > 280;
  holding = false;
  press = null;
  if (long || Math.abs(dx) > 12 || Math.abs(dy) > 12) suppressTap = true;
  if (dy > 90 && Math.abs(dy) > Math.abs(dx)) storyModal.close();
  else if (Math.abs(dx) > 70) jump(dx < 0 ? 1 : -1);
  if (suppressTap) setTimeout(() => { suppressTap = false; }, 0);
});
frameRoot.addEventListener('pointercancel', () => { holding = false; press = null; });
$('[data-reply]', dialog).addEventListener('submit', event => {
  event.preventDefault();
  const text = $('#reply-text').value.trim();
  const story = list[storyIndex];
  openWhatsApp(text ? `${story.reply} ${text}` : story.reply);
});
$('#reply-text').addEventListener('focus', () => setPaused(true));
