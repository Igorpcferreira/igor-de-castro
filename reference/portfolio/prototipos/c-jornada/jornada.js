// Direção C · Jornada: a trajetória como uma trilha da rede neural.
// Um pulso de luz desce pela trilha com a rolagem, os nós acendem e as conquistas aparecem.
// A fase final é o "Monte seu projeto" da direção A: o visitante monta o projeto, vê a prévia
// num celular e destrava a fase; a mensagem do WhatsApp sai pronta. O dock embaixo leva o WhatsApp.
import { profile, proof, projects, services, process, offer, faq, timeline, socials, kyber, model, tools } from '../shared/content.js';
import { boot, mountBackground, reveal, icon, ext, waLink, projectMessage, joinList, $, $$, openWhatsApp, createVideo, disposeVideo, modal, dragToClose, reducedMotion } from '../shared/kit.js';

boot();
mountBackground({ mobile: 0.46, desktop: 0.52 });

const groups = [
  { title: 'Clientes', items: projects.filter(item => item.kind === 'cliente') },
  { title: 'Marca e atleta', items: projects.filter(item => item.kind === 'marca' || item.kind === 'atleta') },
  { title: 'Conceitos', items: projects.filter(item => item.kind === 'conceito'), note: 'Marcas fictícias criadas pela Kyber. Não são clientes.' },
];
const caseOrder = groups.flatMap(group => group.items);
const [puc, suporte, docnix, minsait, kyberStep] = timeline;
const stops = [
  { id: 'base', phase: 'Base', step: puc },
  { id: 'suporte', phase: 'Base', step: suporte, achievement: 'Primeiro emprego em tecnologia' },
  { id: 'produto', phase: 'Produto', step: docnix, achievement: 'Duas promoções' },
  { id: 'escala', phase: 'Escala', step: minsait, achievement: 'Sistemas de grande porte' },
  { id: 'estudio', phase: 'Estúdio', step: kyberStep, achievement: 'Cofundador' },
  { id: 'projetos', phase: 'Projetos', kind: 'projects', icon: 'grid', achievement: `${projects.length} projetos no ar` },
  { id: 'servicos', phase: 'Serviços', kind: 'services', icon: 'layers' },
  { id: 'como-funciona', phase: 'Como funciona', kind: 'process', icon: 'flag', achievement: 'Você vê antes de pagar' },
  { id: 'seu-projeto', phase: 'Seu projeto', kind: 'final', icon: 'lock', achievement: 'Próximo nível: seu projeto', manual: true },
];
const phases = [...new Set(stops.map(stop => stop.phase))];
const phaseNumber = name => phases.indexOf(name) + 1;
const achievements = stops.filter(stop => stop.achievement);

// Dock: o WhatsApp sempre embaixo; no celular aparecem Projetos e Montar, no computador todos.
const dockItems = [
  { id: 'projetos', target: 'projetos', icon: 'grid', label: 'Projetos' },
  { id: 'montar', target: 'seu-projeto', icon: 'widget', label: 'Montar' },
  { id: 'como-funciona', target: 'como-funciona', icon: 'flag', label: 'Como funciona', desk: true },
  { id: 'trajetoria', target: 'base', icon: 'user', label: 'Trajetória', desk: true },
  { id: 'duvidas', target: 'duvidas', icon: 'message', label: 'Dúvidas', desk: true },
];
const dockFor = { base: 'trajetoria', suporte: 'trajetoria', produto: 'trajetoria', escala: 'trajetoria', estudio: 'trajetoria', projetos: 'projetos', 'como-funciona': 'como-funciona', 'seu-projeto': 'montar' };

// Monte seu projeto (vem da direção A): o tipo de negócio muda a prévia; cada módulo entra na mensagem.
const businesses = [
  { id: 'barbearia', label: 'Barbearia', article: 'uma barbearia', name: 'Sua Barbearia', slug: 'suabarbearia', tint: '#ffc46b', items: ['Corte', 'Barba', 'Combo'] },
  { id: 'clinica', label: 'Clínica', article: 'uma clínica', name: 'Sua Clínica', slug: 'suaclinica', tint: '#35c8ff', items: ['Consulta', 'Retorno', 'Avaliação'] },
  { id: 'loja', label: 'Loja', article: 'uma loja', name: 'Sua Loja', slug: 'sualoja', tint: '#ff8ab3', items: ['Camiseta', 'Boné', 'Moletom'] },
  { id: 'restaurante', label: 'Restaurante', article: 'um restaurante', name: 'Seu Restaurante', slug: 'seurestaurante', tint: '#ff9f5a', items: ['Prato do dia', 'Combo', 'Sobremesa'] },
  { id: 'servicos', label: 'Serviços', article: 'uma empresa de serviços', name: 'Seu Negócio', slug: 'seunegocio', tint: '#52ff7d', items: ['Básico', 'Completo', 'Sob medida'] },
];
const modules = [
  { id: 'dominio', label: 'Domínio próprio', short: 'domínio próprio', icon: 'globe' },
  { id: 'catalogo', label: 'Catálogo', short: 'catálogo', icon: 'store' },
  { id: 'galeria', label: 'Galeria', short: 'galeria de fotos', icon: 'image' },
  { id: 'agenda', label: 'Agendamento', short: 'agendamento', icon: 'calendar' },
  { id: 'whats', label: 'Pedido no WhatsApp', short: 'pedido no WhatsApp', icon: 'whatsapp' },
  { id: 'planilha', label: 'Planilha automática', short: 'planilha automática', icon: 'bolt' },
  { id: 'ia', label: 'IA no atendimento', short: 'IA no atendimento', icon: 'sparkles' },
  { id: 'painel', label: 'Painel da equipe', short: 'painel da equipe', icon: 'layers' },
];
const whens = [
  { id: 'ja', label: 'Este mês', text: 'para este mês' },
  { id: 'breve', label: 'Nos próximos meses', text: 'para os próximos meses' },
  { id: 'pesquisa', label: 'Só pesquisando', text: 'e ainda estou pesquisando' },
];
const build = { biz: 'barbearia', on: new Set(['dominio', 'catalogo', 'whats']), when: null, unlocked: false };
const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const phoneBlock = {
  catalogo: biz => `<div class="m-block m-cat" data-block="catalogo"><p class="m-h">Serviços</p><div class="m-grid">${biz.items.map(item => `<span class="m-prod"><i></i><b>${item}</b><em></em></span>`).join('')}</div></div>`,
  galeria: () => '<div class="m-block m-gal" data-block="galeria"><i></i><i></i><i></i><i></i></div>',
  agenda: () => `<div class="m-block m-cal" data-block="agenda"><p class="m-h">Agendar horário</p><div class="m-days">${days.map((day, index) => `<span class="${index === 2 ? 'is-on' : ''}">${day}</span>`).join('')}</div><div class="m-times"><span>09:00</span><span class="is-on">10:30</span><span>14:00</span></div></div>`,
  whats: () => `<div class="m-block m-wa" data-block="whats">${icon('whatsapp')}<span>Pedir pelo WhatsApp</span></div>`,
  planilha: () => `<div class="m-block m-sheet" data-block="planilha"><p class="m-h">${icon('bolt')} Planilha</p><span><i></i>Novo contato registrado</span><span><i></i>Confirmação enviada</span></div>`,
  painel: () => '<div class="m-block m-dash" data-block="painel"><p class="m-h">Painel da equipe</p><div class="m-bars"><i style="--h:.5"></i><i style="--h:.82"></i><i style="--h:.36"></i><i style="--h:.66"></i><i style="--h:.92"></i></div></div>',
};

const careerCard = stop => `
  <p class="stop-meta"><span class="stop-year">${stop.step.year}</span><span>Fase ${phaseNumber(stop.phase)} · ${stop.phase}</span></p>
  <h3>${stop.step.title}</h3>
  <p class="stop-place">${stop.step.place}</p>
  <p class="stop-text">${stop.step.text}</p>`;

const bubble = item => `
  <li><a class="bubble ${item.kind === 'conceito' ? 'is-concept' : ''}" href="${item.site}" ${ext} data-case="${item.slug}">
    <span class="bubble-ring"><img src="${item.poster}" alt="" loading="lazy"></span>
    <span class="bubble-name">${item.name}</span>
  </a></li>`;

const projectsCard = () => `
  <p class="stop-meta"><span class="stop-year">2026</span><span>Fase ${phaseNumber('Projetos')} · Projetos</span></p>
  <h3>${projects.length} projetos no ar, todos com vídeo</h3>
  <p class="stop-text">Toque num círculo para ver o vídeo, o desafio, o que foi feito e o resultado.</p>
  ${groups.map(group => `<div class="bubbles-group"><p class="group-title">${group.title} <span>${group.items.length}</span></p><ul class="bubbles">${group.items.map(bubble).join('')}</ul>${group.note ? `<p class="group-note">${icon('info')} ${group.note}</p>` : ''}</div>`).join('')}`;

const servicesCard = () => `
  <p class="stop-meta"><span class="stop-year">hoje</span><span>Fase ${phaseNumber('Serviços')} · Serviços</span></p>
  <h3>O que eu construo para o seu negócio</h3>
  <ul class="skills">${services.map(service => `
    <li class="skill"><span class="skill-node">${icon(service.icon)}</span><div><b>${service.title}</b><p>${service.desc}</p></div></li>`).join('')}</ul>`;

const processCard = () => `
  <p class="stop-meta"><span class="stop-year">4 etapas</span><span>Fase ${phaseNumber('Como funciona')} · Como funciona</span></p>
  <h3>Do primeiro oi ao site no ar</h3>
  <ol class="mini-trail">${process.map((step, index) => `<li><span class="mini-node">${index + 1}</span><div><b>${step.title}</b><p>${step.text}</p></div></li>`).join('')}</ol>
  <div class="capsule">
    <div class="capsule-price"><span>${offer.name}</span><b>${offer.price}</b><small>${offer.badge} · ${offer.installments}</small></div>
    <p class="capsule-guarantee">${icon('shield')} ${offer.guarantee}</p>
    <p class="capsule-note">${offer.others} <a href="${offer.href}" ${ext}>Planos da Kyber ${icon('arrow-up-right')}</a></p>
  </div>`;

const finalCard = () => `
  <p class="stop-meta"><span class="stop-year">agora</span><span>Fase ${phaseNumber('Seu projeto')} · Seu projeto</span></p>
  <h3>Monte o seu projeto e destrave a última fase</h3>
  <p class="stop-text">Escolha o tipo de negócio, ligue o que ele precisa ter e diga para quando. A prévia é ilustrativa: o projeto de verdade a gente desenha junto.</p>
  <div class="build">
    <p class="build-label"><span>1</span>Qual é o seu negócio?</p>
    <div class="build-chips" role="radiogroup" aria-label="Tipo de negócio" data-biz-group>
      ${businesses.map(biz => `<button type="button" role="radio" aria-checked="${biz.id === build.biz}" data-biz="${biz.id}">${biz.label}</button>`).join('')}
    </div>
    <p class="build-label"><span>2</span>O que ele precisa ter?</p>
    <div class="build-grid">
      <div class="build-phone-col">
        <div class="phone" aria-hidden="true" data-phone>
          <div class="phone-screen" data-screen>
            <p class="m-url">${icon('lock')}<span data-url></span></p>
            <div class="m-hero"><span class="m-logo"></span><p class="m-name" data-mname></p><span class="m-line"></span><span class="m-line is-short"></span><span class="m-cta">Agendar</span></div>
            <div class="m-blocks" data-blocks></div>
          </div>
          <span class="m-ia">Oi! Posso te ajudar com horários e valores.</span>
        </div>
        <p class="build-caption">Prévia ilustrativa</p>
      </div>
      <div class="build-tiles" role="group" aria-label="Módulos do projeto">
        ${modules.map(item => `<button class="tile" type="button" aria-pressed="${build.on.has(item.id)}" data-mod="${item.id}"><span class="tile-icon">${icon(item.icon)}</span><span class="tile-copy"><b>${item.label}</b><small data-tile-state>${build.on.has(item.id) ? 'Ligado' : 'Desligado'}</small></span></button>`).join('')}
      </div>
    </div>
    <p class="build-label"><span>3</span>Para quando?</p>
    <div class="build-chips" role="radiogroup" aria-label="Prazo" data-when-group>
      ${whens.map(when => `<button type="button" role="radio" aria-checked="false" data-when="${when.id}">${when.label}</button>`).join('')}
    </div>
    <div class="build-end" data-build-end>
      <p class="build-sum" data-build-sum aria-live="polite"></p>
      <button class="pill pill-neon pill-wide" type="button" data-unlock disabled>${icon('lock-open')} Destravar a fase</button>
    </div>
    <div class="build-done" data-build-done hidden>
      <p class="quiz-unlocked">${icon('lock-open')} Fase destravada</p>
      <blockquote class="quiz-summary" data-build-summary></blockquote>
      <a class="pill pill-neon pill-wide" data-build-wa ${ext}>${icon('whatsapp')} Enviar para o Igor</a>
      <p class="build-hint">Mudou de ideia? É só ajustar acima: a mensagem acompanha.</p>
    </div>
  </div>`;

const stopCard = stop => ({ projects: projectsCard, services: servicesCard, process: processCard, final: finalCard }[stop.kind] || (() => careerCard(stop)))();

$('#app').innerHTML = `
  <a class="skip" href="#seu-projeto">Pular para o seu projeto</a>
  <header class="bar" data-bar>
    <div class="xp" aria-hidden="true"><i data-xp></i></div>
    <div class="bar-row">
      <a class="me" href="#inicio"><img src="${profile.poster}" alt="" width="80" height="80"><span><b>${profile.name}</b><small data-phase>Início da trilha</small></span></a>
      <button class="trophy" type="button" data-trophies aria-label="Conquistas">${icon('trophy')}<span data-trophy-count>0/${achievements.length}</span></button>
    </div>
  </header>

  <div class="layout">
    <aside class="hud" aria-label="Progresso da trilha">
      <div class="hud-card">
        <p class="hud-label">Fase atual</p>
        <p class="hud-phase" data-hud-phase>Início</p>
        <div class="hud-meter" aria-hidden="true"><i data-hud-xp></i></div>
        <p class="hud-small" data-hud-progress>0% da trilha</p>
        <p class="hud-label is-gap">Conquistas</p>
        <ul class="ach-list" data-ach-list>${achievements.map(stop => `<li data-ach="${stop.id}">${icon('lock')}<span>${stop.achievement}</span></li>`).join('')}</ul>
        <a class="hud-skip" href="#seu-projeto">Pular para o seu projeto ${icon('arrow-down')}</a>
      </div>
    </aside>

    <main class="main">
      <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="start-node" aria-hidden="true">
          <span class="orbit"><i></i><i></i><i></i></span>
          <span class="start-ring"><img src="${profile.poster}" alt="" width="720" height="960" fetchpriority="high"></span>
        </div>
        <p class="kicker">${profile.studio}</p>
        <h1 class="hero-name" id="hero-title">Igor de Castro</h1>
        <p class="hero-lead">Sites, sistemas e automações <b>sob medida</b> para o seu negócio.</p>
        <p class="hero-text">De suporte técnico a cofundador de um estúdio em quatro anos. Siga a trilha: no fim, o próximo nível é o seu projeto.</p>
        <div class="hero-actions">
          <a class="pill pill-neon" href="#base">${icon('arrow-down')} Começar a trilha</a>
          <a class="pill pill-glass" href="#seu-projeto">${icon('widget')} Montar meu projeto</a>
        </div>
        <ul class="badges">${proof.map(item => `<li><b>${item.value}</b><span>${item.label}</span></li>`).join('')}</ul>
      </section>

      <section class="trail" data-trail aria-label="Trilha">
        <svg class="trail-svg" aria-hidden="true" data-svg><path class="trail-base" data-base/><path class="trail-lit" data-lit/><circle class="packet" r="7" data-packet/></svg>
        <ol class="stops">
          ${stops.map(stop => `
            <li class="stop ${stop.kind ? 'is-wide' : ''} ${stop.kind === 'final' ? 'is-final' : ''}" id="${stop.id}" data-stop="${stop.id}">
              <span class="node ${stop.kind === 'final' ? 'is-lock' : ''}" data-node>${icon(stop.kind ? stop.icon : stop.step.icon)}</span>
              <div class="stop-card rv">
                ${stopCard(stop)}
                ${stop.achievement && !stop.manual ? `<p class="badge" data-badge>${icon('trophy')} ${stop.achievement}</p>` : ''}
              </div>
            </li>`).join('')}
        </ol>
      </section>

      <section class="after rv" id="duvidas" aria-labelledby="duvidas-title">
        <h2 id="duvidas-title">Dúvidas pelo caminho</h2>
        <div class="faq">${faq.map(item => `<details><summary>${item.q}${icon('plus')}</summary><p>${item.a}</p></details>`).join('')}</div>
        <div class="end">
          <p class="end-title">Prefere ir direto?</p>
          <p class="end-text">${profile.note} ${profile.reach}.</p>
          <div class="end-actions">
            <a class="pill pill-neon" href="${waLink()}" ${ext}>${icon('whatsapp')} Conversar no WhatsApp</a>
            <a class="pill pill-glass" href="mailto:${profile.email}">${icon('envelope')} E-mail</a>
          </div>
          <ul class="links">
            ${socials.map(social => `<li><a href="${social.href}" ${ext}>${icon(social.id)}<span>${social.name}</span></a></li>`).join('')}
            <li><a href="${kyber.href}" ${ext}><img src="${kyber.mark}" alt="" width="53" height="120"><span>Kyber Tech</span></a></li>
            <li><a href="${profile.resume}" download>${icon('file')}<span>Currículo</span></a></li>
            <li><a href="${model.href}" ${ext}>${icon('camera')}<span>Modelo</span></a></li>
            ${tools.map(tool => `<li><a href="${tool.href}" ${ext}>${icon(tool.id === 'qr' ? 'qr' : 'image')}<span>${tool.name}</span></a></li>`).join('')}
          </ul>
          <p class="fine">© 2026 Igor de Castro</p>
        </div>
      </section>
    </main>
  </div>

  <nav class="dock" aria-label="Atalhos">
    <a class="dock-main" href="${waLink()}" ${ext}>${icon('whatsapp')}<span>Conversar</span></a>
    ${dockItems.map(item => `<a class="dock-btn ${item.desk ? 'is-desk' : ''}" href="#${item.target}" data-dock="${item.id}">${icon(item.icon)}<span>${item.label}</span></a>`).join('')}
  </nav>

  <div class="ach-toast" data-ach-toast role="status" aria-live="polite"></div>

  <dialog class="sheet" id="conquistas" aria-labelledby="conquistas-title">
    <div class="sheet-grab" data-grab><span></span></div>
    <div class="sheet-body">
      <h2 id="conquistas-title">Conquistas</h2>
      <p class="sheet-sub" data-sheet-sub></p>
      <ul class="ach-list is-sheet" data-ach-sheet></ul>
      <button class="pill pill-glass pill-wide" type="button" data-sheet-close>Voltar para a trilha</button>
    </div>
  </dialog>

  <dialog class="sheet case" id="case" aria-labelledby="case-title">
    <div class="sheet-grab" data-case-grab><span></span></div>
    <button class="round case-close" type="button" data-case-close aria-label="Fechar">${icon('x')}</button>
    <div class="case-media" data-case-media>
      <img class="case-bg" data-case-bg alt="">
      <img class="case-shot" data-case-shot alt="">
      <button class="pill pill-neon case-play" type="button" data-case-play>${icon('play')} Ver o vídeo · <span data-case-duration></span></button>
    </div>
    <div class="sheet-body">
      <p class="case-kind" data-case-kind></p>
      <h2 class="case-title" id="case-title"></h2>
      <ol class="case-path">
        <li><span class="mini-node">${icon('flag')}</span><div><b>O desafio</b><p data-case-problem></p></div></li>
        <li><span class="mini-node">${icon('bolt')}</span><div><b>O que foi feito</b><p data-case-solution></p></div></li>
        <li data-case-result-wrap><span class="mini-node is-done">${icon('check')}</span><div><b>Resultado</b><p data-case-result></p></div></li>
      </ol>
      <p class="case-note" data-case-note hidden></p>
      <ul class="chips" data-case-stack></ul>
      <div class="case-actions">
        <a class="pill pill-neon pill-wide" data-case-wa ${ext}>${icon('whatsapp')} Quero um projeto assim</a>
        <a class="pill pill-glass pill-wide" data-case-site ${ext}>Visitar o site ${icon('arrow-up-right')}</a>
      </div>
      <div class="case-nav">
        <button class="round" type="button" data-case-prev aria-label="Projeto anterior">${icon('chevron-left')}</button>
        <span class="case-count" data-case-count></span>
        <button class="round" type="button" data-case-next aria-label="Próximo projeto">${icon('chevron-right')}</button>
      </div>
    </div>
  </dialog>
`;
reveal();

/* Trilha: o caminho passa pelo centro de cada nó, com uma curva suave entre eles. */
const trail = $('[data-trail]');
const svg = $('[data-svg]');
const basePath = $('[data-base]');
const litPath = $('[data-lit]');
const packet = $('[data-packet]');
const stopEls = $$('[data-stop]');
const after = $('#duvidas');
let points = [];
let total = 0;
const unlocked = new Set();
const buildPath = () => {
  const box = trail.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
  svg.setAttribute('width', box.width);
  svg.setAttribute('height', box.height);
  points = stopEls.map(stop => {
    const node = $('[data-node]', stop).getBoundingClientRect();
    return { x: node.left - box.left + node.width / 2, y: node.top - box.top + node.height / 2 };
  });
  let d = `M ${points[0].x} 0 L ${points[0].x} ${points[0].y}`;
  points.slice(1).forEach((point, index) => {
    const from = points[index];
    const dy = point.y - from.y;
    // Na chegada ao nó final, que fica no centro, a curva sai da trilha e vai até ele.
    if (Math.abs(point.x - from.x) > 40) {
      d += ` C ${from.x} ${from.y + dy * 0.55}, ${point.x} ${point.y - dy * 0.55}, ${point.x} ${point.y}`;
      return;
    }
    const wiggle = (index % 2 ? -1 : 1) * Math.min(46, Math.max(box.width * 0.08, 22));
    d += ` C ${from.x + wiggle} ${from.y + dy * 0.45}, ${point.x + wiggle} ${point.y - dy * 0.45}, ${point.x} ${point.y}`;
  });
  basePath.setAttribute('d', d);
  litPath.setAttribute('d', d);
  total = basePath.getTotalLength();
  litPath.style.strokeDasharray = `${total} ${total}`;
  paintTrail();
};
// Comprimento do caminho em que a altura y é alcançada (o caminho só desce).
const lengthAtY = y => {
  let low = 0;
  let high = total;
  for (let step = 0; step < 22; step += 1) {
    const mid = (low + high) / 2;
    if (basePath.getPointAtLength(mid).y < y) low = mid; else high = mid;
  }
  return low;
};
// Conquistas que destravam juntas (ao pular pelo dock, por exemplo) viram um aviso só.
const toast = $('[data-ach-toast]');
const toastQueue = [];
let toastBusy = false;
let toastTimer;
const showToast = () => {
  if (toastBusy || !toastQueue.length) return;
  toastBusy = true;
  const items = toastQueue.splice(0);
  const label = items.length === 1 ? 'Conquista desbloqueada' : 'Conquistas desbloqueadas';
  const title = items.length === 1 ? items[0] : `${items.length} novas · ${items.at(-1)}`;
  toast.innerHTML = `<span class="ach-icon">${icon('trophy')}</span><span><small>${label}</small><b>${title}</b></span>`;
  toast.classList.add('is-on');
  setTimeout(() => { toast.classList.remove('is-on'); setTimeout(() => { toastBusy = false; showToast(); }, 350); }, 2400);
};
const unlock = stop => {
  if (unlocked.has(stop.id)) return;
  unlocked.add(stop.id);
  toastQueue.push(stop.achievement);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(showToast, 80);
  const item = $(`[data-ach="${stop.id}"]`);
  if (item) { item.classList.add('is-on'); $('svg use', item).setAttribute('href', '#i-trophy'); }
  $(`#${stop.id} [data-badge]`)?.classList.add('is-on');
  $('[data-trophy-count]').textContent = `${unlocked.size}/${achievements.length}`;
  $('[data-trophies]').setAttribute('aria-label', `Conquistas: ${unlocked.size} de ${achievements.length}`);
};
const setDock = id => $$('[data-dock]').forEach(link => link.toggleAttribute('aria-current', link.dataset.dock === id));
let paintQueued = false;
const paintTrail = () => {
  paintQueued = false;
  if (!total) return;
  const box = trail.getBoundingClientRect();
  const y = window.innerHeight * 0.58 - box.top;
  const length = y <= 0 ? 0 : y >= box.height ? total : lengthAtY(y);
  litPath.style.strokeDashoffset = `${total - length}`;
  const point = basePath.getPointAtLength(length);
  packet.setAttribute('cx', point.x);
  packet.setAttribute('cy', point.y);
  packet.classList.toggle('is-hidden', length <= 0 || length >= total - 1);
  let current = null;
  stopEls.forEach((element, index) => {
    const lit = points[index] && points[index].y <= y;
    element.classList.toggle('is-lit', Boolean(lit));
    if (lit) {
      current = stops[index];
      if (current.achievement && !current.manual) unlock(current);
    }
  });
  const progress = Math.max(0, Math.min(1, length / total));
  $('[data-xp]').style.transform = `scaleX(${progress.toFixed(4)})`;
  $('[data-hud-xp]').style.transform = `scaleX(${progress.toFixed(4)})`;
  $('[data-hud-progress]').textContent = `${Math.round(progress * 100)}% da trilha`;
  $('[data-phase]').textContent = current ? `Fase ${phaseNumber(current.phase)} de ${phases.length} · ${current.phase}` : 'Início da trilha';
  $('[data-hud-phase]').textContent = current ? current.phase : 'Início';
  setDock(after.getBoundingClientRect().top < window.innerHeight * 0.58 ? 'duvidas' : current ? dockFor[current.id] : '');
};
const requestPaint = () => { if (!paintQueued) { paintQueued = true; requestAnimationFrame(paintTrail); } };
window.addEventListener('scroll', requestPaint, { passive: true });
let resizeTimer;
const rebuild = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(buildPath, 120); };
window.addEventListener('resize', rebuild);
if (document.fonts) document.fonts.ready.then(buildPath);
new ResizeObserver(rebuild).observe(trail);
buildPath();

/* Conquistas (folha no celular) */
const sheet = $('#conquistas');
const sheetModal = modal(sheet);
dragToClose($('[data-grab]', sheet), sheet, () => sheetModal.close());
$('[data-trophies]').addEventListener('click', () => {
  $('[data-sheet-sub]').textContent = `${unlocked.size} de ${achievements.length} desbloqueadas. Continue a trilha para ver as outras.`;
  $('[data-ach-sheet]').innerHTML = achievements.map(stop => `<li class="${unlocked.has(stop.id) ? 'is-on' : ''}">${icon(unlocked.has(stop.id) ? 'trophy' : 'lock')}<span>${stop.achievement}</span></li>`).join('');
  sheetModal.show();
});
$('[data-sheet-close]').addEventListener('click', () => sheetModal.close());

/* Caso aberto: folha com vídeo, o caminho do projeto e as ações. */
const viewer = $('#case');
const caseMedia = $('[data-case-media]', viewer);
let current = 0;
let video = null;
const stopVideo = () => { if (video) { disposeVideo(video); video = null; caseMedia.classList.remove('is-playing'); } };
const caseModal = modal(viewer, { onClose: stopVideo });
dragToClose($('[data-case-grab]', viewer), viewer, () => caseModal.close());
const fillCase = index => {
  current = (index + caseOrder.length) % caseOrder.length;
  const item = caseOrder[current];
  stopVideo();
  $('[data-case-bg]', viewer).src = item.poster;
  const shot = $('[data-case-shot]', viewer);
  shot.src = item.poster;
  shot.alt = `Página inicial do site ${item.name}`;
  $('[data-case-duration]', viewer).textContent = item.duration;
  $('[data-case-kind]', viewer).textContent = item.label;
  $('#case-title').textContent = item.name;
  $('[data-case-problem]', viewer).textContent = item.problem;
  $('[data-case-solution]', viewer).textContent = item.solution;
  $('[data-case-result-wrap]', viewer).hidden = !item.result;
  $('[data-case-result]', viewer).textContent = item.result || '';
  const note = $('[data-case-note]', viewer);
  const notes = [];
  if (item.kind === 'conceito') notes.push('Projeto conceitual da Kyber: marca fictícia, não é cliente.');
  if (item.kind === 'atleta') notes.push('Site feito para um familiar, sem relação comercial.');
  if (item.note) notes.push(item.note);
  note.hidden = !notes.length;
  note.textContent = notes.join(' ');
  $('[data-case-stack]', viewer).innerHTML = item.stack.map(tech => `<li>${tech}</li>`).join('');
  $('[data-case-wa]', viewer).href = waLink(projectMessage(item.name));
  const site = $('[data-case-site]', viewer);
  site.href = item.site;
  site.classList.toggle('is-desktop-only', Boolean(item.desktopOnly));
  $('[data-case-count]', viewer).textContent = `${current + 1} de ${caseOrder.length}`;
  viewer.scrollTop = 0;
};
document.addEventListener('click', event => {
  const link = event.target.closest('.main [data-case]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || typeof viewer.showModal !== 'function') return;
  event.preventDefault();
  fillCase(caseOrder.findIndex(item => item.slug === link.dataset.case));
  caseModal.show();
});
$('[data-case-play]', viewer).addEventListener('click', () => {
  if (video) return;
  video = createVideo(caseOrder[current]);
  caseMedia.classList.add('is-playing');
  caseMedia.append(video);
});
$('[data-case-close]', viewer).addEventListener('click', () => caseModal.close());
$('[data-case-prev]', viewer).addEventListener('click', () => fillCase(current - 1));
$('[data-case-next]', viewer).addEventListener('click', () => fillCase(current + 1));
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') fillCase(current + 1);
  if (event.key === 'ArrowLeft') fillCase(current - 1);
});

/* Fase final: montar o projeto destrava o nó e a mensagem sai pronta. */
const finalStop = stops.at(-1);
const phone = $('[data-phone]');
const screen = $('[data-screen]');
const blocks = $('[data-blocks]');
const urlEl = $('[data-url]');
const buildMessage = () => {
  const biz = businesses.find(item => item.id === build.biz);
  const chosen = modules.filter(item => build.on.has(item.id)).map(item => item.short);
  const when = whens.find(item => item.id === build.when);
  const what = chosen.length ? `, com ${joinList(chosen)}` : '';
  return `Oi, Igor! Cheguei ao fim da trilha no seu site. Montei um projeto para ${biz.article}${what}, ${when ? when.text : 'sem prazo definido'}. Podemos conversar?`;
};
const updateBuild = () => {
  const biz = businesses.find(item => item.id === build.biz);
  const when = whens.find(item => item.id === build.when);
  const count = build.on.size;
  $('[data-build-sum]').innerHTML = `<b>${biz.label}</b> · ${count} ${count === 1 ? 'módulo' : 'módulos'} · ${when ? when.label.toLowerCase() : 'falta escolher o prazo'}`;
  $('[data-unlock]').disabled = !when || !count;
  const message = buildMessage();
  $('[data-build-summary]').textContent = message.replace('Oi, Igor! Cheguei ao fim da trilha no seu site. ', '').replace(' Podemos conversar?', '');
  $('[data-build-wa]').href = waLink(message);
};
const renderPhone = added => {
  const biz = businesses.find(item => item.id === build.biz);
  phone.style.setProperty('--tint', biz.tint);
  $('[data-mname]', phone).textContent = biz.name;
  const ownDomain = build.on.has('dominio');
  urlEl.textContent = ownDomain ? `${biz.slug}.com.br` : `instagram.com/${biz.slug}`;
  phone.classList.toggle('has-domain', ownDomain);
  phone.classList.toggle('has-ia', build.on.has('ia'));
  blocks.innerHTML = Object.keys(phoneBlock).filter(id => build.on.has(id)).map(id => phoneBlock[id](biz)).join('');
  const fresh = added && $(`[data-block="${added}"]`, blocks);
  if (fresh && !reducedMotion.matches) {
    fresh.classList.add('is-new');
    screen.scrollTo({ top: Math.max(0, fresh.offsetTop - 70), behavior: 'smooth' });
  }
  if (added === 'dominio' && !reducedMotion.matches) urlEl.parentElement.animate([{ transform: 'scale(1.08)', background: 'rgba(82,255,125,.35)' }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  updateBuild();
};
// Grupos de opção única com setas do teclado, como rádios.
const radios = (group, attr, onPick) => {
  group.addEventListener('click', event => {
    const button = event.target.closest(`[${attr}]`);
    if (!button) return;
    $$(`[${attr}]`, group).forEach(item => item.setAttribute('aria-checked', String(item === button)));
    onPick(button.getAttribute(attr));
  });
  group.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    const items = $$(`[${attr}]`, group);
    const index = Math.max(0, items.findIndex(item => item.getAttribute('aria-checked') === 'true'));
    const next = items[(index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length];
    next.focus();
    next.click();
  });
};
radios($('[data-biz-group]'), 'data-biz', id => {
  build.biz = id;
  renderPhone();
  if (!reducedMotion.matches) phone.animate([{ transform: 'rotate(-2deg) scale(.97)' }, { transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.34,1.56,.64,1)' });
});
radios($('[data-when-group]'), 'data-when', id => { build.when = id; updateBuild(); });
$('.build-tiles').addEventListener('click', event => {
  const tile = event.target.closest('[data-mod]');
  if (!tile) return;
  const id = tile.dataset.mod;
  const on = !build.on.has(id);
  if (on) build.on.add(id); else build.on.delete(id);
  tile.setAttribute('aria-pressed', String(on));
  $('[data-tile-state]', tile).textContent = on ? 'Ligado' : 'Desligado';
  renderPhone(on ? id : null);
});
$('[data-unlock]').addEventListener('click', () => {
  if (build.unlocked) return;
  build.unlocked = true;
  const node = $('#seu-projeto [data-node]');
  node.classList.remove('is-lock');
  node.classList.add('is-open');
  $('use', node).setAttribute('href', '#i-lock-open');
  if (!reducedMotion.matches) {
    node.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 700, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    for (let spark = 0; spark < 12; spark += 1) {
      const dot = document.createElement('i');
      dot.className = 'spark';
      node.append(dot);
      const angle = (spark / 12) * Math.PI * 2;
      dot.animate([{ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(angle) * 70}px), calc(-50% + ${Math.sin(angle) * 70}px)) scale(.3)`, opacity: 0 }], { duration: 800 + spark * 20, easing: 'cubic-bezier(.22,1,.36,1)' }).onfinish = () => dot.remove();
    }
  }
  unlock(finalStop);
  updateBuild();
  $('[data-build-end]').hidden = true;
  const done = $('[data-build-done]');
  done.hidden = false;
  if (!reducedMotion.matches) done.animate([{ opacity: 0, transform: 'translateY(14px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  $('[data-build-wa]').focus({ preventScroll: true });
});
renderPhone();

/* Dock: no computador, os ícones crescem perto do ponteiro, como na direção A. */
const dock = $('.dock');
const dockButtons = $$('.dock-btn', dock);
const desktop = matchMedia('(min-width: 960px)');
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
  dock.addEventListener('pointermove', event => {
    if (!desktop.matches) return;
    dockButtons.forEach(item => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
      item.style.setProperty('--s', (1 + Math.max(0, 1 - distance / 150) * 0.42).toFixed(3));
    });
  });
  dock.addEventListener('pointerleave', () => dockButtons.forEach(item => item.style.setProperty('--s', '1')));
}
