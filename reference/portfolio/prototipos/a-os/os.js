// Direção A · IgorOS: o site principal como um sistema operacional, continuação da /links.
// Ilha que vira menu, notificações como provas, projetos no estilo "Hoje" da App Store,
// central de controle para montar o projeto, rastreio das etapas, passe da Wallet com o preço,
// Ajustes com a trajetória e as dúvidas numa conversa.
import { profile, projects, process, offer, faq, timeline, stack, about, tools, model, socials, kyber } from '../shared/content.js';
import { boot, mountBackground, reveal, icon, ext, waLink, projectMessage, joinList, $, $$, startClock, goianiaDate, openWhatsApp, createVideo, disposeVideo, reducedMotion } from '../shared/kit.js';

boot();
mountBackground({ mobile: 0.42, desktop: 0.5 });

const logo = '<svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="18" fill="#031008"/><rect x=".75" y=".75" width="62.5" height="62.5" rx="17.25" fill="none" stroke="rgba(82,255,125,.4)" stroke-width="1.5"/><path d="M13 15h8v34h-8z" fill="#f4fff8"/><path d="M52 19H37l-6 6v14l6 6h15" fill="none" stroke="#52ff7d" stroke-width="8"/></svg>';
const clients = projects.filter(item => item.kind === 'cliente');
const others = projects.filter(item => item.kind === 'marca' || item.kind === 'atleta');
const concepts = projects.filter(item => item.kind === 'conceito');
const caseOrder = [...clients, ...others, ...concepts];

const sections = [
  { id: 'inicio', island: 'Disponível' },
  { id: 'projetos', island: `${projects.length} projetos no ar`, label: 'Projetos', icon: 'grid', hint: `${projects.length} no ar` },
  { id: 'montar', island: 'Monte seu projeto', label: 'Monte seu projeto', icon: 'widget', hint: 'Central de controle' },
  { id: 'como-funciona', island: 'Como funciona', label: 'Como funciona', icon: 'rocket', hint: 'Etapas e preço' },
  { id: 'sobre', island: 'Sobre o Igor', label: 'Sobre o Igor', icon: 'user', hint: 'Trajetória' },
  { id: 'duvidas', island: 'Dúvidas', label: 'Dúvidas', icon: 'message', hint: 'Respostas rápidas' },
  { id: 'contato', island: 'Vamos conversar', label: 'Contato', icon: 'user-plus', hint: 'WhatsApp e redes' },
];

const slide = () => `
  <div class="slide" data-slide>
    <span class="slide-fill" aria-hidden="true"></span>
    <span class="slide-label" aria-hidden="true">deslize para conversar</span>
    <a class="slide-thumb" href="${waLink()}" ${ext} aria-label="Conversar no WhatsApp">${icon('whatsapp')}</a>
  </div>`;

const winHead = (app, appIcon, title, sub = '', id = '') => `
  <header class="win-head">
    <p class="win-app"><span class="win-icon">${icon(appIcon)}</span>${app}</p>
    <h2 ${id ? `id="${id}"` : ''}>${title}</h2>
    ${sub ? `<p class="win-sub">${sub}</p>` : ''}
  </header>`;

// Notificações: cada uma é uma prova que leva a uma parte do site.
const notes = [
  { href: waLink(), external: true, app: 'WhatsApp', appClass: 'is-wa', glyph: icon('whatsapp'), time: 'agora', title: 'Igor de Castro', text: 'Me conta o que você precisa. Eu respondo pessoalmente.' },
  { href: '#projetos', app: 'Kyber Tech', appClass: 'is-kyber', glyph: `<img src="${kyber.mark}" alt="" width="53" height="120">`, time: 'cofundador', title: `${projects.length} projetos no ar`, text: 'Clientes reais, estudos e a minha marca, todos com vídeo.' },
  { href: '#sobre', app: 'Trajetória', appClass: 'is-igor', glyph: logo, time: 'desde 2022', title: '4+ anos em tecnologia', text: 'Hoje desenvolvo sistemas de grande porte na Minsait (Grupo Indra).' },
];

const todayCard = item => `
  <li class="today-item">
    <a class="today-card" href="${item.site}" ${ext} data-case="${item.slug}">
      <span class="today-media" data-flip>
        <img class="today-bg" src="${item.poster}" alt="" loading="lazy">
        <span class="today-top"><span class="today-eyebrow">${item.label}</span><span class="today-play">${icon('play')} ${item.duration}</span></span>
        <img class="today-shot" src="${item.poster}" alt="" loading="lazy">
      </span>
      <span class="today-copy"><span class="today-title">${item.name}</span><span class="today-text">${item.short}</span></span>
    </a>
  </li>`;

const row = item => `
  <li><a class="row" href="${item.site}" ${ext} data-case="${item.slug}">
    <img class="row-thumb" data-flip src="${item.poster}" alt="" width="128" height="128" loading="lazy">
    <span class="row-copy"><span class="row-title">${item.name}</span><span class="row-label">${item.label}</span></span>
    <span class="row-get">Ver</span>
  </a></li>`;

const toolRow = item => `
  <li><a class="row" href="${item.href}" ${ext}>
    <img class="row-thumb" src="${item.image}" alt="" width="128" height="128" loading="lazy">
    <span class="row-copy"><span class="row-title">${item.name}</span><span class="row-label">Grátis · no navegador</span></span>
    <span class="row-get">Abrir</span>
  </a></li>`;

// Central de controle: o tipo de negócio muda a prévia; cada módulo entra na mensagem.
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
const state = { biz: 'barbearia', on: new Set(['dominio', 'catalogo', 'whats']) };
const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const phoneBlock = {
  catalogo: biz => `<div class="m-block m-cat" data-block="catalogo"><p class="m-h">Serviços</p><div class="m-grid">${biz.items.map(item => `<span class="m-prod"><i></i><b>${item}</b><em></em></span>`).join('')}</div></div>`,
  galeria: () => '<div class="m-block m-gal" data-block="galeria"><i></i><i></i><i></i><i></i></div>',
  agenda: () => `<div class="m-block m-cal" data-block="agenda"><p class="m-h">Agendar horário</p><div class="m-days">${days.map((day, index) => `<span class="${index === 2 ? 'is-on' : ''}">${day}</span>`).join('')}</div><div class="m-times"><span>09:00</span><span class="is-on">10:30</span><span>14:00</span></div></div>`,
  whats: () => `<div class="m-block m-wa" data-block="whats">${icon('whatsapp')}<span>Pedir pelo WhatsApp</span></div>`,
  planilha: () => `<div class="m-block m-sheet" data-block="planilha"><p class="m-h">${icon('bolt')} Planilha</p><span><i></i>Novo contato registrado</span><span><i></i>Confirmação enviada</span></div>`,
  painel: () => '<div class="m-block m-dash" data-block="painel"><p class="m-h">Painel da equipe</p><div class="m-bars"><i style="--h:.5"></i><i style="--h:.82"></i><i style="--h:.36"></i><i style="--h:.66"></i><i style="--h:.92"></i></div></div>',
};
const stepIcons = ['message', 'file', 'mobile', 'rocket'];

$('#app').innerHTML = `
  <a class="skip" href="#projetos">Pular para os projetos</a>
  <header class="bar" data-bar>
    <a class="bar-brand" href="#inicio">${logo}<span>Igor de Castro</span></a>
    <span class="bar-time" data-clock>--:--</span>
    <div class="island-wrap">
      <button class="island" type="button" aria-expanded="false" aria-controls="island-menu" data-island>
        <span class="island-dot" aria-hidden="true"></span><span class="island-text" data-island-text>Disponível</span>${icon('chevron-down', 'island-chev')}
      </button>
      <nav class="island-menu" id="island-menu" aria-label="Seções do site" hidden>
        <p class="menu-top"><span class="island-dot" aria-hidden="true"></span>Navegar</p>
        <ul>
          ${sections.slice(1).map(section => `<li><a class="menu-item" href="#${section.id}" data-nav="${section.id}"><span class="menu-icon">${icon(section.icon)}</span><span><b>${section.label}</b><small>${section.hint}</small></span></a></li>`).join('')}
        </ul>
        <a class="pill pill-neon pill-wide menu-item" href="${waLink()}" ${ext}>${icon('whatsapp')} Conversar no WhatsApp</a>
      </nav>
    </div>
    <span class="bar-right">
      <span class="bar-status"><span class="island-dot" aria-hidden="true"></span>${profile.status}</span>
      <span class="bar-clock" data-clock>--:--</span>
      <span class="bar-icons" aria-hidden="true"><i class="sig"><b></b><b></b><b></b><b></b></i><i class="bat"><b></b></i></span>
    </span>
  </header>

  <main class="os">
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="stage">
        <figure class="poster">
          <img class="poster-photo" src="${profile.poster}" alt="Igor de Castro, de terno bege" width="720" height="960" fetchpriority="high">
          <figcaption class="poster-top"><span class="chip">${profile.role}</span><span class="chip chip-dim">${icon('location')} ${profile.city}</span></figcaption>
          ${slide()}
        </figure>
        <div class="hero-copy">
          <p class="kicker">${profile.studio}</p>
          <h1 class="hero-name" id="hero-title"><span>Igor</span> <span>de Castro</span></h1>
          <p class="hero-lead">Sites, sistemas e automações <b>sob medida</b> para o seu negócio.</p>
          <p class="hero-pitch">${profile.pitch}</p>
          <div class="hero-actions">
            <a class="pill pill-neon" href="${waLink()}" ${ext}>${icon('whatsapp')} Conversar no WhatsApp</a>
            <a class="pill pill-glass" href="#projetos">Ver projetos ${icon('arrow-down')}</a>
          </div>
        </div>
      </div>
      <div class="notes" data-notes>
        <div class="notes-head"><h2>Notificações</h2><button type="button" aria-expanded="false" data-notes-toggle><span>Mostrar tudo</span>${icon('chevron-down')}</button></div>
        <ol class="notes-list">
          ${notes.map((note, index) => `
            <li class="note" style="--i:${index}">
              <a href="${note.href}" ${note.external ? ext : ''}>
                <span class="note-app ${note.appClass}">${note.glyph}</span>
                <span class="note-body">
                  <span class="note-top"><b>${note.app}</b><time>${note.time}</time></span>
                  <span class="note-title">${note.title}</span>
                  <span class="note-text">${note.text}</span>
                </span>
              </a>
            </li>`).join('')}
        </ol>
      </div>
    </section>

    <section class="win today rv" id="projetos" aria-labelledby="projetos-title">
      <header class="today-head">
        <p class="today-date" data-date></p>
        <h2 id="projetos-title">Projetos</h2>
        <a class="today-avatar" href="#sobre" aria-label="Sobre o Igor"><img src="${profile.poster}" alt="" width="80" height="80"></a>
      </header>
      <p class="win-sub">Clientes reais primeiro. Toque num cartão para ver o vídeo, o desafio e o que foi feito.</p>
      <div class="rail-wrap">
        <ul class="today-rail" data-rail>${clients.map(todayCard).join('')}</ul>
        <button class="round rail-btn is-prev" type="button" data-rail-prev aria-label="Projeto anterior">${icon('chevron-left')}</button>
        <button class="round rail-btn is-next" type="button" data-rail-next aria-label="Próximo projeto">${icon('chevron-right')}</button>
      </div>
      <div class="dots" data-dots aria-hidden="true"></div>
      <div class="shelves">
        <div class="shelf"><h3>Marca própria e atleta</h3><ul class="rows">${others.map(row).join('')}</ul></div>
        <div class="shelf"><h3>Estudos e conceitos</h3><ul class="rows">${concepts.map(row).join('')}</ul><p class="shelf-note">${icon('info')} Marcas fictícias que a Kyber criou para mostrar o que dá para fazer. Não são clientes.</p></div>
        <div class="shelf"><h3>Ferramentas grátis que publiquei</h3><ul class="rows">${tools.map(toolRow).join('')}</ul></div>
      </div>
    </section>

    <section class="win cc rv" id="montar" aria-labelledby="montar-title">
      ${winHead('Central de controle', 'widget', 'Monte seu projeto', 'Escolha o tipo de negócio e ligue o que você precisa. A prévia é ilustrativa: o projeto de verdade a gente desenha junto.', 'montar-title')}
      <div class="cc-biz" role="radiogroup" aria-label="Tipo de negócio">
        ${businesses.map(biz => `<button type="button" role="radio" aria-checked="${biz.id === state.biz}" data-biz="${biz.id}">${biz.label}</button>`).join('')}
      </div>
      <div class="cc-grid">
        <div class="cc-phone-col">
          <div class="phone" aria-hidden="true" data-phone>
            <div class="phone-screen" data-screen>
              <p class="m-url">${icon('lock')}<span data-url></span></p>
              <div class="m-hero"><span class="m-logo"></span><p class="m-name" data-mname></p><span class="m-line"></span><span class="m-line is-short"></span><span class="m-cta">Agendar</span></div>
              <div class="m-blocks" data-blocks></div>
            </div>
            <span class="m-ia" data-mia>Oi! Posso te ajudar com horários e valores.</span>
          </div>
          <p class="cc-caption">Prévia ilustrativa</p>
        </div>
        <div class="cc-tiles" role="group" aria-label="Módulos do projeto">
          ${modules.map(item => `<button class="tile" type="button" aria-pressed="${state.on.has(item.id)}" data-mod="${item.id}"><span class="tile-icon">${icon(item.icon)}</span><span class="tile-copy"><b>${item.label}</b><small data-tile-state>${state.on.has(item.id) ? 'Ligado' : 'Desligado'}</small></span></button>`).join('')}
        </div>
      </div>
      <div class="cc-send">
        <p class="cc-sum" data-sum aria-live="polite"></p>
        <button class="pill pill-neon" type="button" data-send>${icon('send')} Enviar para o Igor</button>
      </div>
    </section>

    <section class="win flow rv" id="como-funciona" aria-labelledby="flow-title">
      ${winHead('Como funciona', 'rocket', 'Do primeiro oi ao site no ar', 'Sem surpresa no meio do caminho: você vê antes de pagar.', 'flow-title')}
      <div class="flow-grid">
        <ol class="tracker" data-tracker>
          ${process.map((step, index) => `
            <li class="track" style="--i:${index}">
              <span class="track-dot">${icon(stepIcons[index])}</span>
              <div class="track-copy"><p class="track-step">Etapa ${index + 1}</p><h3>${step.title}</h3><p>${step.text}</p></div>
            </li>`).join('')}
        </ol>
        <div class="pass-col">
          <div class="pass" data-pass>
            <div class="pass-face pass-front">
              <div class="pass-top"><span class="pass-brand"><span class="pass-mark"><img src="${kyber.mark}" alt="" width="53" height="120"></span>Kyber Tech</span><button class="pass-flip" type="button" data-flip-pass aria-label="Ver o que inclui">${icon('info')}</button></div>
              <p class="pass-label">${offer.name}</p>
              <p class="pass-price">${offer.price}</p>
              <p class="pass-badge">${offer.badge}</p>
              <p class="pass-inst">${offer.installments}</p>
              <p class="pass-strip">${icon('shield')}<span>${offer.guarantee}</span></p>
            </div>
            <div class="pass-face pass-back" inert>
              <div class="pass-top"><span class="pass-brand">O que inclui</span><button class="pass-flip" type="button" data-flip-pass aria-label="Voltar para a frente do passe">${icon('x')}</button></div>
              <ul class="pass-list">${offer.includes.map(item => `<li>${icon('check')}${item}</li>`).join('')}</ul>
              <a class="pass-link" href="${offer.href}" ${ext}>Ver todos os planos da Kyber ${icon('arrow-up-right')}</a>
            </div>
          </div>
          <p class="pass-note">${offer.others}</p>
        </div>
      </div>
    </section>

    <section class="win settings rv" id="sobre" aria-labelledby="sobre-title">
      ${winHead('Ajustes', 'cog', 'Sobre o Igor', '', 'sobre-title')}
      <div class="set-grid">
        <div class="set-col">
          <a class="id-row" href="${socials[0].href}" ${ext}>
            <img class="id-avatar" src="${profile.poster}" alt="" width="120" height="120">
            <span class="id-copy"><b>${profile.name}</b><span>${profile.role} · ${profile.studio}</span></span>
            ${icon('chevron-right')}
          </a>
          <p class="set-story">${about.story}</p>
          <dl class="group specs">${about.rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl>
          <ul class="group links">
            <li><a href="${profile.resume}" download><span class="gl-icon">${icon('file')}</span><span>Currículo em PDF</span>${icon('download')}</a></li>
            <li><a href="${profile.vcard}" download="igor-de-castro.vcf"><span class="gl-icon">${icon('user-plus')}</span><span>Salvar contato</span>${icon('download')}</a></li>
            ${socials.map(social => `<li><a href="${social.href}" ${ext}><span class="gl-icon">${icon(social.id)}</span><span>${social.name}<small>${social.handle}</small></span>${icon('arrow-up-right')}</a></li>`).join('')}
          </ul>
        </div>
        <div class="set-col">
          <div class="group updates">
            <div class="upd-now">
              <span class="upd-badge">${logo}</span>
              <div><p class="upd-version">IgorOS 26</p><p class="upd-meta">Kyber Tech · cofundador</p><p class="upd-status">${icon('check-circle')} Atualizado</p></div>
            </div>
            <p class="upd-text">${timeline.at(-1).text}</p>
            <details class="upd-more">
              <summary>Versões anteriores ${icon('chevron-down')}</summary>
              <ol class="upd-list">${timeline.slice(0, -1).reverse().map(step => `<li><span class="upd-year">${step.year}</span><div><b>${step.place}</b><span>${step.title}</span><p>${step.text}</p></div></li>`).join('')}</ol>
            </details>
          </div>
          <dl class="group specs stack">${stack.map(group => `<div><dt>${group.title}</dt><dd>${group.items.join(' · ')}</dd></div>`).join('')}</dl>
          <a class="photos" href="${model.href}" ${ext} data-photos>
            ${model.photos.map((photo, index) => `<img src="${photo}" alt="" width="360" height="480" loading="lazy" class="${index === 0 ? 'is-on' : ''}">`).join('')}
            <span class="photos-copy"><span class="win-app">${icon('camera')} Fotos</span><span class="photos-title">${model.title}</span><span class="photos-text">${model.desc}</span></span>
            <span class="photos-go">${icon('arrow-up-right')}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="win chat rv" id="duvidas" aria-labelledby="duvidas-title">
      ${winHead('Mensagens', 'message', 'Dúvidas comuns', '', 'duvidas-title')}
      <div class="thread">
        <div class="thread-head">
          <img src="${profile.poster}" alt="" width="80" height="80">
          <span><b>${profile.name}</b><small>Respondo pessoalmente</small></span>
          <a class="round" href="${waLink()}" ${ext} aria-label="Abrir a conversa no WhatsApp">${icon('whatsapp')}</a>
        </div>
        <ol class="bubbles" data-bubbles aria-live="polite">
          <li class="bubble from-igor">Oi! Separei as dúvidas que mais recebo. Toque numa delas.</li>
        </ol>
        <div class="replies" data-replies>${faq.map((item, index) => `<button type="button" data-q="${index}">${item.q}</button>`).join('')}</div>
      </div>
    </section>

    <section class="win contact rv" id="contato" aria-labelledby="contato-title">
      <h2 id="contato-title">Seu projeto começa com uma conversa.</h2>
      <p class="contact-text">${profile.note} ${profile.reach}.</p>
      ${slide()}
      <ul class="apps">
        <li><a class="app" href="mailto:${profile.email}"><span class="app-icon">${icon('envelope')}</span><span class="app-label">E-mail</span></a></li>
        ${socials.map(social => `<li><a class="app" href="${social.href}" ${ext}><span class="app-icon">${icon(social.id)}</span><span class="app-label">${social.name}</span></a></li>`).join('')}
        <li><a class="app" href="${kyber.href}" ${ext}><span class="app-icon is-kyber"><img src="${kyber.mark}" alt="" width="53" height="120"></span><span class="app-label">Kyber</span></a></li>
        <li><a class="app" href="${profile.vcard}" download="igor-de-castro.vcf"><span class="app-icon">${icon('user-plus')}</span><span class="app-label">Contato</span></a></li>
      </ul>
      <p class="fine">© 2026 Igor de Castro</p>
    </section>
  </main>

  <nav class="dock" aria-label="Atalhos">
    <a class="dock-main" href="${waLink()}" ${ext}>${icon('whatsapp')}<span>Conversar</span></a>
    ${sections.slice(1, 6).map((section, index) => `<a class="dock-btn ${index > 1 ? 'is-desk' : ''}" href="#${section.id}" data-nav="${section.id}">${icon(section.icon)}<span>${section.label.replace(' o Igor', '').replace('Monte seu projeto', 'Montar')}</span></a>`).join('')}
  </nav>

  <dialog class="case" id="case" aria-labelledby="case-title">
    <div class="case-sheet" data-sheet>
      <button class="round case-close" type="button" data-close aria-label="Fechar">${icon('x')}</button>
      <div class="case-scroll" data-scroll>
      <div class="case-media" data-media>
        <img class="today-bg" data-case-img alt="">
        <span class="today-top"><span class="today-eyebrow" data-case-eyebrow></span></span>
        <img class="today-shot" data-case-shot alt="">
        <button class="case-play" type="button" data-play>${icon('play')}<span>Ver o vídeo · <span data-case-duration></span></span></button>
      </div>
      <div class="case-body">
        <p class="case-kind" data-case-kind></p>
        <h2 class="case-title" id="case-title"></h2>
        <p class="case-short" data-case-short></p>
        <div class="case-steps">
          <section><h3>${icon('flag')} O desafio</h3><p data-case-problem></p></section>
          <section><h3>${icon('bolt')} O que foi feito</h3><p data-case-solution></p></section>
          <section data-case-result-wrap><h3>${icon('check-circle')} Resultado</h3><p data-case-result></p></section>
        </div>
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
      </div>
    </div>
  </dialog>
`;

startClock('[data-clock]');
startClock('[data-date]', goianiaDate);
reveal();
const desktop = matchMedia('(min-width: 960px)');

/* Deslize para conversar: arrastar até o fim abre o WhatsApp; um toque simples também abre. */
$$('[data-slide]').forEach(slideEl => {
  const thumb = $('.slide-thumb', slideEl);
  let start = null;
  let x = 0;
  let dragged = false;
  const maxX = () => slideEl.clientWidth - thumb.offsetWidth - 12;
  const setX = value => { x = value; slideEl.style.setProperty('--x', `${value}px`); };
  thumb.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    start = event.clientX - x;
    dragged = false;
    thumb.setPointerCapture(event.pointerId);
    slideEl.classList.add('is-dragging');
  });
  thumb.addEventListener('pointermove', event => {
    if (start === null) return;
    const next = Math.min(maxX(), Math.max(0, event.clientX - start));
    if (Math.abs(next) > 6) dragged = true;
    setX(next);
  });
  const release = () => {
    if (start === null) return;
    start = null;
    slideEl.classList.remove('is-dragging');
    if (dragged && x > maxX() * 0.72) {
      setX(maxX());
      slideEl.classList.add('is-done');
      openWhatsApp();
      setTimeout(() => { slideEl.classList.remove('is-done'); setX(0); }, 1200);
    } else setX(0);
  };
  thumb.addEventListener('pointerup', release);
  thumb.addEventListener('pointercancel', release);
  thumb.addEventListener('click', event => { if (dragged) event.preventDefault(); });
});

/* Ilha dinâmica: mostra a seção atual e, ao toque, vira o menu. */
const bar = $('[data-bar]');
const island = $('[data-island]');
const islandText = $('[data-island-text]');
const menu = $('#island-menu');
const setIsland = text => {
  if (islandText.textContent === text) return;
  islandText.textContent = text;
  island.style.width = `${islandText.scrollWidth + 70}px`;
};
const setActive = id => $$('[data-nav]').forEach(link => link.toggleAttribute('aria-current', link.dataset.nav === id));
if ('IntersectionObserver' in window) {
  sections.forEach(section => new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    setIsland(section.island);
    setActive(section.id);
  }, { rootMargin: '-45% 0px -50% 0px' }).observe($(`#${section.id}`)));
}
window.addEventListener('scroll', () => { if (window.scrollY < 80) { setIsland('Disponível'); setActive(''); } }, { passive: true });
setIsland('Disponível');
island.style.width = `${islandText.scrollWidth + 70}px`;

const clipFrom = () => {
  const from = island.getBoundingClientRect();
  const to = menu.getBoundingClientRect();
  return `inset(${from.top - to.top}px ${to.right - from.right}px ${to.bottom - from.bottom}px ${from.left - to.left}px round ${from.height / 2}px)`;
};
let menuOpen = false;
const openMenu = () => {
  if (menuOpen) return;
  menuOpen = true;
  menu.hidden = false;
  island.setAttribute('aria-expanded', 'true');
  bar.classList.add('is-menu');
  if (!reducedMotion.matches) {
    menu.animate([{ clipPath: clipFrom() }, { clipPath: 'inset(0 0 0 0 round 30px)' }], { duration: 520, easing: 'cubic-bezier(.32,.72,0,1)' });
    $$('.menu-item, .menu-top', menu).forEach((item, index) => item.animate([{ opacity: 0, transform: 'translateY(-8px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: 110 + index * 28, easing: 'ease-out', fill: 'backwards' }));
  }
  $('a', menu).focus({ preventScroll: true });
};
const closeMenu = (focusIsland = true) => {
  if (!menuOpen) return;
  menuOpen = false;
  island.setAttribute('aria-expanded', 'false');
  const done = () => { menu.hidden = true; bar.classList.remove('is-menu'); };
  if (reducedMotion.matches) done();
  else menu.animate([{ clipPath: 'inset(0 0 0 0 round 30px)' }, { clipPath: clipFrom() }], { duration: 300, easing: 'cubic-bezier(.4,0,.2,1)' }).onfinish = done;
  if (focusIsland) island.focus({ preventScroll: true });
};
island.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(false); });
document.addEventListener('click', event => { if (menuOpen && !event.target.closest('.island-wrap')) closeMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuOpen) closeMenu(); });

/* Notificações empilhadas: um toque abre a pilha, como no celular. */
const notesEl = $('[data-notes]');
const notesToggle = $('[data-notes-toggle]');
const noteLinks = $$('.note a', notesEl);
// Cada notificação guarda a própria altura em --h: fechada, ela sobe por baixo da anterior e só a borda aparece.
const measureNotes = () => $$('.note', notesEl).forEach(item => item.style.setProperty('--h', `${$('a', item).offsetHeight}px`));
const setNotes = open => {
  measureNotes();
  notesEl.classList.toggle('is-open', open);
  notesToggle.setAttribute('aria-expanded', String(open));
  $('span', notesToggle).textContent = open ? 'Mostrar menos' : 'Mostrar tudo';
  noteLinks.forEach((link, index) => { if (index) link.tabIndex = open ? 0 : -1; });
};
setNotes(desktop.matches);
window.addEventListener('resize', measureNotes);
if (document.fonts) document.fonts.ready.then(measureNotes);
notesToggle.addEventListener('click', () => setNotes(!notesEl.classList.contains('is-open')));
$('.notes-list', notesEl).addEventListener('click', event => {
  if (notesEl.classList.contains('is-open')) return;
  event.preventDefault();
  setNotes(true);
}, true);

/* Projetos: o cartão do centro fica inteiro, os vizinhos recuam. */
const rail = $('[data-rail]');
const railCards = $$('.today-card', rail);
const dots = $('[data-dots]');
dots.innerHTML = railCards.map(() => '<i></i>').join('');
let paintQueued = false;
const paint = () => {
  paintQueued = false;
  const box = rail.getBoundingClientRect();
  const center = box.left + box.width / 2;
  let nearest = 0;
  let best = Infinity;
  railCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs(rect.left + rect.width / 2 - center);
    card.style.setProperty('--d', Math.min(distance / rect.width, 1).toFixed(3));
    if (distance < best) { best = distance; nearest = index; }
  });
  $$('i', dots).forEach((dot, index) => dot.classList.toggle('is-on', index === nearest));
};
const requestPaint = () => { if (!paintQueued) { paintQueued = true; requestAnimationFrame(paint); } };
rail.addEventListener('scroll', requestPaint, { passive: true });
window.addEventListener('resize', requestPaint);
requestPaint();
const step = direction => rail.scrollBy({ left: direction * (railCards[0].offsetWidth + 14), behavior: reducedMotion.matches ? 'auto' : 'smooth' });
$('[data-rail-prev]').addEventListener('click', () => step(-1));
$('[data-rail-next]').addEventListener('click', () => step(1));

/* Caso aberto: o cartão cresce até virar a página do projeto, como no "Hoje" da App Store. */
const viewer = $('#case');
const sheet = $('[data-sheet]', viewer);
const media = $('[data-media]', viewer);
const scroller = $('[data-scroll]', viewer);
const playButton = $('[data-play]', viewer);
let current = 0;
let video = null;
let flipSource = null;
let inHistory = false;
let closing = false;
let opener = null;
const sourceFor = slug => {
  const link = $(`.os [data-case="${slug}"]`);
  return link ? $('[data-flip]', link) || link : null;
};
const visible = element => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth && rect.width > 0;
};
// Antes de voltar para um cartão do carrossel, centraliza esse cartão (sem animação).
const centerInRail = element => {
  const item = element?.closest('.today-item');
  if (!item) return;
  rail.style.scrollBehavior = 'auto';
  rail.scrollLeft = item.offsetLeft - (rail.clientWidth - item.offsetWidth) / 2;
  rail.style.scrollBehavior = '';
  paint();
};
const stopVideo = () => {
  if (!video) return;
  disposeVideo(video);
  video = null;
  media.classList.remove('is-playing');
};
const fillCase = index => {
  current = (index + caseOrder.length) % caseOrder.length;
  const item = caseOrder[current];
  stopVideo();
  $('[data-case-img]', viewer).src = item.poster;
  const shot = $('[data-case-shot]', viewer);
  shot.src = item.poster;
  shot.alt = `Página inicial do site ${item.name}`;
  $('[data-case-eyebrow]', viewer).textContent = item.label;
  $('[data-case-duration]', viewer).textContent = item.duration;
  $('[data-case-kind]', viewer).textContent = item.segment;
  $('#case-title').textContent = item.name;
  $('[data-case-short]', viewer).textContent = item.short;
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
  const wa = $('[data-case-wa]', viewer);
  wa.href = waLink(projectMessage(item.name));
  const site = $('[data-case-site]', viewer);
  site.href = item.site;
  site.classList.toggle('is-desktop-only', Boolean(item.desktopOnly));
  $('[data-case-count]', viewer).textContent = `${current + 1} de ${caseOrder.length}`;
  scroller.scrollTop = 0;
};
const flipFrames = (element, reverse = false) => {
  const s = element.getBoundingClientRect();
  const m = sheet.getBoundingClientRect();
  const k = s.width / m.width;
  const radius = parseFloat(getComputedStyle(element).borderRadius) || 24;
  const finalRadius = parseFloat(getComputedStyle(sheet).borderRadius) || 0;
  const small = { transform: `translate(${s.left - m.left}px, ${s.top - m.top}px) scale(${k})`, clipPath: `inset(0px 0px ${Math.max(0, m.height - s.height / k)}px 0px round ${radius / k}px)` };
  const big = { transform: 'translate(0px, 0px) scale(1)', clipPath: `inset(0px 0px 0px 0px round ${finalRadius}px)` };
  return reverse ? [big, small] : [small, big];
};
const openCase = (index, from) => {
  fillCase(index);
  if (viewer.open) return;
  opener = document.activeElement;
  history.pushState({ case: true }, '');
  inHistory = true;
  document.documentElement.classList.add('is-locked');
  viewer.showModal();
  scroller.scrollTop = 0;
  if (reducedMotion.matches) return;
  if (from && visible(from)) {
    flipSource = from;
    from.style.visibility = 'hidden';
    sheet.animate(flipFrames(from), { duration: 560, easing: 'cubic-bezier(.32,.72,0,1)' }).onfinish = () => { from.style.visibility = ''; };
    $('.case-body', viewer).animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 170, easing: 'ease-out', fill: 'backwards' });
  } else sheet.animate([{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'none' }], { duration: 360, easing: 'cubic-bezier(.22,1,.36,1)' });
};
const finishClose = () => {
  if (flipSource) flipSource.style.visibility = '';
  flipSource = null;
  if (viewer.open) viewer.close();
  document.documentElement.classList.remove('is-locked');
  closing = false;
  if (inHistory) { inHistory = false; history.back(); }
  opener?.focus?.({ preventScroll: true });
};
const closeCase = () => {
  if (!viewer.open || closing) return;
  closing = true;
  stopVideo();
  if (reducedMotion.matches) return finishClose();
  const target = sourceFor(caseOrder[current].slug);
  centerInRail(target);
  if (target && visible(target)) {
    scroller.scrollTop = 0;
    flipSource = target;
    target.style.visibility = 'hidden';
    viewer.classList.add('is-closing');
    const animation = sheet.animate(flipFrames(target, true), { duration: 420, easing: 'cubic-bezier(.32,.72,0,1)', fill: 'forwards' });
    animation.onfinish = () => { finishClose(); viewer.classList.remove('is-closing'); animation.cancel(); };
  } else {
    const animation = sheet.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(40px)' }], { duration: 220, easing: 'ease-in', fill: 'forwards' });
    animation.onfinish = () => { finishClose(); animation.cancel(); };
  }
};
document.addEventListener('click', event => {
  const link = event.target.closest('.os [data-case]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
  event.preventDefault();
  const index = caseOrder.findIndex(item => item.slug === link.dataset.case);
  openCase(index, $('[data-flip]', link) || link);
});
playButton.addEventListener('click', () => {
  if (video) return;
  video = createVideo(caseOrder[current]);
  video.addEventListener('error', () => { if (video) video.replaceWith(Object.assign(document.createElement('p'), { className: 'case-error', textContent: 'Não foi possível carregar o vídeo agora. O site continua no botão abaixo.' })); }, { once: true });
  media.classList.add('is-playing');
  media.append(video);
});
$('[data-close]', viewer).addEventListener('click', closeCase);
$('[data-case-prev]', viewer).addEventListener('click', () => fillCase(current - 1));
$('[data-case-next]', viewer).addEventListener('click', () => fillCase(current + 1));
viewer.addEventListener('cancel', event => { event.preventDefault(); closeCase(); });
viewer.addEventListener('click', event => { if (event.target === viewer) closeCase(); });
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') fillCase(current + 1);
  if (event.key === 'ArrowLeft') fillCase(current - 1);
});
window.addEventListener('popstate', () => { if (viewer.open && !closing) { inHistory = false; closeCase(); } });

// No celular, arrastar a imagem do topo para baixo fecha o caso.
let dragStart = null;
let dragDistance = 0;
media.addEventListener('pointerdown', event => {
  if (desktop.matches || event.target.closest('button, video')) return;
  dragStart = event.clientY;
  dragDistance = 0;
  media.setPointerCapture(event.pointerId);
});
media.addEventListener('pointermove', event => {
  if (dragStart === null) return;
  dragDistance = Math.max(0, event.clientY - dragStart);
  sheet.style.transform = `translateY(${dragDistance * 0.6}px) scale(${1 - Math.min(dragDistance, 240) / 2400})`;
});
const dragEnd = () => {
  if (dragStart === null) return;
  dragStart = null;
  sheet.style.transform = '';
  if (dragDistance > 90) closeCase();
};
media.addEventListener('pointerup', dragEnd);
media.addEventListener('pointercancel', dragEnd);

/* Central de controle */
const phone = $('[data-phone]');
const screen = $('[data-screen]');
const blocks = $('[data-blocks]');
const sum = $('[data-sum]');
const urlEl = $('[data-url]');
const ccMessage = () => {
  const biz = businesses.find(item => item.id === state.biz);
  const chosen = modules.filter(item => state.on.has(item.id)).map(item => item.short);
  if (!chosen.length) return `Oi, Igor! Tenho ${biz.article} e quero conversar sobre um projeto.`;
  return `Oi, Igor! Montei um projeto no seu site para ${biz.article}, com ${joinList(chosen)}. Podemos conversar?`;
};
const renderPhone = added => {
  const biz = businesses.find(item => item.id === state.biz);
  phone.style.setProperty('--tint', biz.tint);
  $('[data-mname]', phone).textContent = biz.name;
  const ownDomain = state.on.has('dominio');
  urlEl.textContent = ownDomain ? `${biz.slug}.com.br` : `instagram.com/${biz.slug}`;
  phone.classList.toggle('has-domain', ownDomain);
  phone.classList.toggle('has-ia', state.on.has('ia'));
  blocks.innerHTML = Object.keys(phoneBlock).filter(id => state.on.has(id)).map(id => phoneBlock[id](biz)).join('');
  const fresh = added && $(`[data-block="${added}"]`, blocks);
  if (fresh && !reducedMotion.matches) {
    fresh.classList.add('is-new');
    screen.scrollTo({ top: Math.max(0, fresh.offsetTop - 70), behavior: 'smooth' });
  }
  if (added === 'dominio' && !reducedMotion.matches) urlEl.parentElement.animate([{ transform: 'scale(1.08)', background: 'rgba(82,255,125,.35)' }, { transform: 'none' }], { duration: 600, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  const count = state.on.size;
  sum.innerHTML = `<b>${biz.label}</b> · ${count} ${count === 1 ? 'módulo ligado' : 'módulos ligados'}`;
};
$('.cc-biz').addEventListener('click', event => {
  const button = event.target.closest('[data-biz]');
  if (!button) return;
  state.biz = button.dataset.biz;
  $$('[data-biz]').forEach(item => item.setAttribute('aria-checked', String(item === button)));
  renderPhone();
  if (!reducedMotion.matches) phone.animate([{ transform: 'rotate(-2deg) scale(.97)' }, { transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.34,1.56,.64,1)' });
});
$('.cc-biz').addEventListener('keydown', event => {
  if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
  const items = $$('[data-biz]');
  const index = items.findIndex(item => item.getAttribute('aria-checked') === 'true');
  const next = items[(index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length];
  next.focus();
  next.click();
});
$('.cc-tiles').addEventListener('click', event => {
  const tile = event.target.closest('[data-mod]');
  if (!tile) return;
  const id = tile.dataset.mod;
  const on = !state.on.has(id);
  if (on) state.on.add(id); else state.on.delete(id);
  tile.setAttribute('aria-pressed', String(on));
  $('[data-tile-state]', tile).textContent = on ? 'Ligado' : 'Desligado';
  renderPhone(on ? id : null);
});
$('[data-send]').addEventListener('click', () => openWhatsApp(ccMessage()));
renderPhone();

/* Rastreio das etapas: acende uma por vez quando aparece na tela. */
const tracker = $('[data-tracker]');
// A linha vai do centro da primeira bolinha ao centro da última.
const measureTracker = () => tracker.style.setProperty('--end', `${$('.track:last-child', tracker).offsetHeight - 23}px`);
measureTracker();
window.addEventListener('resize', measureTracker);
const runTracker = () => $$('.track', tracker).forEach((track, index, all) => setTimeout(() => {
  track.classList.add('is-done');
  tracker.style.setProperty('--p', (index / (all.length - 1)).toFixed(3));
}, reducedMotion.matches ? 0 : 300 + index * 620));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { observer.disconnect(); runTracker(); } }, { threshold: 0.35 });
  observer.observe(tracker);
} else runTracker();

/* Passe da Wallet: vira para mostrar o que inclui. */
const pass = $('[data-pass]');
$$('[data-flip-pass]', pass).forEach(button => button.addEventListener('click', () => {
  const flipped = pass.classList.toggle('is-flipped');
  $('.pass-front', pass).inert = flipped;
  $('.pass-back', pass).inert = !flipped;
  $(flipped ? '.pass-back [data-flip-pass]' : '.pass-front [data-flip-pass]', pass).focus({ preventScroll: true });
}));

/* Fotos do portfólio de modelo: troca suave só enquanto o widget está na tela. */
const photos = $$('[data-photos] img');
let photoTimer = null;
let photoIndex = 0;
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    clearInterval(photoTimer);
    if (!entry.isIntersecting) return;
    photoTimer = setInterval(() => {
      photos[photoIndex].classList.remove('is-on');
      photoIndex = (photoIndex + 1) % photos.length;
      photos[photoIndex].classList.add('is-on');
    }, 2600);
  }).observe($('[data-photos]'));
}

/* Dúvidas como conversa: a pergunta vira a sua mensagem e a resposta chega digitando. */
const bubbles = $('[data-bubbles]');
const replies = $('[data-replies]');
let typing = false;
const bubble = (html, cls) => {
  const item = document.createElement('li');
  item.className = `bubble ${cls}`;
  item.innerHTML = html;
  bubbles.append(item);
  if (!reducedMotion.matches) item.animate([{ opacity: 0, transform: 'translateY(10px) scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.34,1.56,.64,1)' });
  return item;
};
replies.addEventListener('click', event => {
  const button = event.target.closest('[data-q]');
  if (!button || typing) return;
  typing = true;
  const item = faq[button.dataset.q];
  button.remove();
  bubble(item.q, 'from-me');
  const dotsBubble = bubble('<span class="typing" aria-label="Igor está digitando"><i></i><i></i><i></i></span>', 'from-igor is-typing');
  setTimeout(() => {
    dotsBubble.remove();
    bubble(item.a, 'from-igor');
    typing = false;
    if (!$('[data-q]', replies)) {
      bubble(`Ficou alguma outra dúvida? <a href="${waLink()}" ${ext}>Me chama no WhatsApp</a>.`, 'from-igor');
      replies.remove();
    }
  }, reducedMotion.matches ? 0 : 850);
});

/* Dock: no computador, os ícones crescem perto do ponteiro. */
const dock = $('.dock');
const dockItems = $$('.dock-btn', dock);
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
  dock.addEventListener('pointermove', event => {
    if (!desktop.matches) return;
    dockItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
      item.style.setProperty('--s', (1 + Math.max(0, 1 - distance / 150) * 0.42).toFixed(3));
    });
  });
  dock.addEventListener('pointerleave', () => dockItems.forEach(item => item.style.setProperty('--s', '1')));
}
