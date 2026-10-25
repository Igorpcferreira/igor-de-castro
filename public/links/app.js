'use strict';
(function () {
  // WhatsApp confirmado por Igor: sem o 9 adicional. Os href do HTML repetem o número para funcionar sem JavaScript.
  const WHATSAPP = '556284196646';
  const PAGE_URL = 'https://igordecastro.com.br/links/';
  const MESSAGE = 'Oi, Igor! Vim do Instagram e quero conversar sobre um projeto.';
  const UTM = {}; // Opcional: utm_source, utm_medium, utm_campaign. Não instala rastreamento.

  const root = document.documentElement;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const waLink = (text = MESSAGE) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  const projectMessage = name => `Oi, Igor! Vim do Instagram, vi o projeto ${name} e quero conversar sobre algo nessa linha.`;
  const serviceMessage = topic => `Oi, Igor! Vim do Instagram e quero conversar sobre ${topic}.`;

  if (Object.keys(UTM).length) {
    $$('a[data-link][href^="http"]').forEach(link => {
      if (link.hostname === 'wa.me') return;
      const url = new URL(link.href);
      Object.entries(UTM).forEach(([key, value]) => url.searchParams.set(key, value));
      url.searchParams.set('utm_content', link.dataset.link);
      link.href = url.href;
    });
  }

  // Fundo neural do portfólio e o véu que escurece com a rolagem (como o BackgroundVeil).
  if (window.mountNeural) window.mountNeural($('.neural'));
  const veil = $('.neural-veil');
  let veilQueued = false;
  const paintVeil = () => {
    veilQueued = false;
    const progress = Math.min(window.scrollY / window.innerHeight, 1);
    veil.style.opacity = (progress * (window.innerWidth < 700 ? 0.4 : 0.45)).toFixed(3);
  };
  const requestVeil = () => { if (!veilQueued) { veilQueued = true; requestAnimationFrame(paintVeil); } };
  window.addEventListener('scroll', requestVeil, { passive: true });
  window.addEventListener('resize', requestVeil, { passive: true });
  paintVeil();

  // Hora de Goiânia na barra de status e no IgorOS.
  try {
    const clock = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
    const tick = () => $$('[data-clock]').forEach(slot => { slot.textContent = clock.format(new Date()); });
    tick();
    setInterval(tick, 20000);
    $$('[data-clock-row]').forEach(row => { row.hidden = false; });
  } catch {
    // Sem fuso horário no Intl, a hora simplesmente não aparece.
  }

  // Aviso curto e compartilhar (Web Share, depois área de transferência).
  const toast = $('.toast');
  let toastTimer;
  const say = message => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3000);
  };
  const share = $('[data-share]');
  share.hidden = false;
  share.addEventListener('click', async () => {
    const data = { title: 'Igor de Castro — Software sob medida', text: 'Sites, sistemas e automações sob medida.', url: PAGE_URL };
    if (navigator.share) {
      try { await navigator.share(data); return; } catch (error) { if (error.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(PAGE_URL); say('Link copiado.'); } catch { say(PAGE_URL); }
  });

  // Abre o WhatsApp numa nova aba; se o navegador bloquear, segue na mesma.
  const openWhatsApp = url => {
    const opened = window.open(url, '_blank');
    if (opened) opened.opener = null;
    else window.location.href = url;
  };

  // Deslize para conversar: arrastar até o fim abre o WhatsApp; um toque simples também abre.
  const slide = $('[data-slide]');
  const thumb = $('.slide-thumb', slide);
  let dragStart = null;
  let dragX = 0;
  let dragged = false;
  const maxX = () => slide.clientWidth - thumb.offsetWidth - 12;
  const setX = x => { dragX = x; slide.style.setProperty('--x', `${x}px`); };
  thumb.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
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
      openWhatsApp(thumb.href);
      setTimeout(() => { slide.classList.remove('is-done'); setX(0); }, 1200);
    } else setX(0);
  };
  thumb.addEventListener('pointerup', release);
  thumb.addEventListener('pointercancel', release);
  thumb.addEventListener('click', event => { if (dragged) event.preventDefault(); });

  // Ilha dinâmica: acompanha a seção visível.
  const island = $('[data-island]');
  const islandText = $('[data-island-text]');
  const projectCount = $$('.card').length;
  const islandFor = { inicio: 'Disponível', projetos: `${projectCount} projetos no ar`, servicos: 'Monte seu pedido', sobre: 'Sobre o Igor' };
  const setIsland = text => {
    if (islandText.textContent === text) return;
    islandText.textContent = text;
    island.style.width = `${islandText.scrollWidth + 46}px`;
  };
  if ('IntersectionObserver' in window) {
    Object.keys(islandFor).forEach(id => new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsland(islandFor[id]);
    }, { rootMargin: '-45% 0px -50% 0px' }).observe($(`#${id}`)));
  }
  window.addEventListener('scroll', () => { if (window.scrollY < 80) setIsland('Disponível'); }, { passive: true });

  // Carrossel: o cartão do centro fica inteiro, os vizinhos recuam. Com filtro por tipo.
  const rail = $('[data-cards]');
  const cards = $$('.card', rail);
  const dots = $('[data-dots]');
  const visibleCards = () => cards.filter(card => !card.hidden);
  let paintQueued = false;
  const paint = () => {
    paintQueued = false;
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
  const requestPaint = () => { if (!paintQueued) { paintQueued = true; requestAnimationFrame(paint); } };
  const buildDots = () => { dots.innerHTML = visibleCards().map(() => '<i></i>').join(''); requestPaint(); };
  rail.addEventListener('scroll', requestPaint, { passive: true });
  window.addEventListener('resize', requestPaint);
  buildDots();

  const seg = $('.seg');
  seg.hidden = false;
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
  moveThumb();
  if (document.fonts) document.fonts.ready.then(moveThumb);
  window.addEventListener('resize', moveThumb);

  // Central de serviços: marque o que precisa e a mensagem do WhatsApp já sai pronta.
  const order = $('[data-order]');
  const orderLabel = $('[data-order-label]');
  const toggles = $$('.toggle');
  toggles.forEach(toggle => toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-pressed', String(toggle.getAttribute('aria-pressed') !== 'true'));
    const chosen = toggles.filter(item => item.getAttribute('aria-pressed') === 'true');
    if (!chosen.length) {
      orderLabel.textContent = 'Conversar sobre um projeto';
      order.href = waLink();
    } else if (chosen.length === 1) {
      orderLabel.textContent = `Conversar sobre ${$('.toggle-title', chosen[0]).textContent.toLowerCase()}`;
      order.href = waLink(serviceMessage(chosen[0].dataset.topic));
    } else {
      const names = chosen.map(item => item.dataset.short);
      orderLabel.textContent = `Conversar sobre os ${chosen.length} itens`;
      order.href = waLink(serviceMessage(`${names.slice(0, -1).join(', ')} e ${names[names.length - 1]} para o meu negócio`));
    }
    order.classList.toggle('is-ready', chosen.length > 0);
  }));

  // Fotos do portfólio de modelo: troca suave só enquanto o widget está na tela.
  const photos = $$('.photos img');
  let photoIndex = 0;
  let photoTimer;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      clearInterval(photoTimer);
      if (!entry.isIntersecting || reducedMotion.matches) return;
      photoTimer = setInterval(() => {
        photos[photoIndex].classList.remove('is-on');
        photoIndex = (photoIndex + 1) % photos.length;
        photos[photoIndex].classList.add('is-on');
      }, 2800);
    }).observe($('.photos'));
  }

  // Player: folha que sobe, com vídeo, ações e anterior/próximo. Nenhum MP4 é pedido antes do toque.
  const viewer = $('#viewer');
  const stage = $('[data-stage]', viewer);
  const errorBox = $('[data-error]', viewer);
  const saveData = navigator.connection && navigator.connection.saveData === true;
  let playlist = [];
  let current = 0;
  let video = null;
  let inHistory = false;
  let active = false;
  let lastCard = null;
  const disposeVideo = () => {
    if (!video) return;
    video.onerror = null;
    video.pause();
    video.removeAttribute('src');
    video.load();
    video.remove();
    video = null;
  };
  const loadVideo = card => {
    disposeVideo();
    errorBox.hidden = true;
    stage.hidden = false;
    video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.controls = true;
    video.playsInline = true;
    video.preload = saveData ? 'none' : 'auto';
    video.poster = $('img', card).currentSrc || $('img', card).src;
    video.setAttribute('aria-label', `Demonstração de ${card.dataset.name}`);
    video.onerror = () => { stage.hidden = true; errorBox.hidden = false; };
    video.src = card.dataset.video;
    stage.replaceChildren(video);
    if (!saveData) video.play().catch(() => {});
  };
  const render = () => {
    const card = playlist[current];
    lastCard = card;
    $('[data-kind]', viewer).textContent = card.dataset.label;
    $('[data-title]', viewer).textContent = card.dataset.name;
    $('[data-more]', viewer).textContent = card.dataset.more;
    const note = $('[data-note]', viewer);
    note.textContent = card.dataset.note || '';
    note.hidden = !card.dataset.note;
    $('[data-stack]', viewer).replaceChildren(...card.dataset.stack.split('|').map(item => Object.assign(document.createElement('li'), { textContent: item })));
    $('[data-wa]', viewer).href = waLink(projectMessage(card.dataset.name));
    const site = $('[data-site]', viewer);
    site.href = card.href;
    site.classList.toggle('is-desktop-only', card.hasAttribute('data-desktop-only'));
    $('[data-position]', viewer).textContent = `${current + 1} de ${playlist.length}`;
    loadVideo(card);
  };
  // A limpeza roda logo após fechar; o evento "close" do dialog fica de reserva, porque ele espera o próximo quadro.
  const finish = () => {
    if (!active) return;
    active = false;
    disposeVideo();
    viewer.style.transform = '';
    viewer.style.transition = '';
    root.classList.remove('is-locked');
    if (inHistory) { inHistory = false; history.back(); }
    if (lastCard) { lastCard.focus({ preventScroll: true }); lastCard.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reducedMotion.matches ? 'auto' : 'smooth' }); }
  };
  const closeViewer = () => {
    if (!viewer.open || viewer.classList.contains('is-closing')) return;
    const done = () => { viewer.classList.remove('is-closing'); if (viewer.open) viewer.close(); finish(); };
    if (reducedMotion.matches) return done();
    viewer.classList.add('is-closing');
    setTimeout(done, 230);
  };
  const openViewer = card => {
    playlist = visibleCards();
    current = Math.max(0, playlist.indexOf(card));
    render();
    if (viewer.open) return;
    // O player ganha uma entrada no histórico: o "voltar" do celular fecha o player em vez de sair da página.
    history.pushState({ viewer: true }, '');
    inHistory = true;
    active = true;
    root.classList.add('is-locked');
    viewer.showModal();
    viewer.scrollTop = 0;
  };
  cards.forEach(card => {
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `Ver demonstração de ${card.dataset.name}`);
  });
  rail.addEventListener('click', event => {
    const card = event.target.closest('.card');
    // Ctrl, Cmd e clique do meio continuam abrindo o site direto.
    if (!card || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    openViewer(card);
  });
  $('[data-prev]', viewer).addEventListener('click', () => { current = (current - 1 + playlist.length) % playlist.length; render(); });
  $('[data-next]', viewer).addEventListener('click', () => { current = (current + 1) % playlist.length; render(); });
  $('[data-close]', viewer).addEventListener('click', closeViewer);
  $('[data-retry]', viewer).addEventListener('click', () => loadVideo(playlist[current]));
  window.addEventListener('popstate', () => { if (viewer.open) { inHistory = false; closeViewer(); } });
  viewer.addEventListener('cancel', event => { event.preventDefault(); closeViewer(); });
  viewer.addEventListener('close', finish);
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const box = viewer.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeViewer();
  });
  viewer.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowRight') $('[data-next]', viewer).click();
    if (event.key === 'ArrowLeft') $('[data-prev]', viewer).click();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && video) video.pause(); });

  // No celular, a folha também fecha arrastando a alça para baixo.
  const grab = $('[data-grab]', viewer);
  let sheetStart = null;
  let sheetDistance = 0;
  grab.addEventListener('pointerdown', event => {
    sheetStart = event.clientY;
    sheetDistance = 0;
    viewer.style.transition = 'none';
    grab.setPointerCapture(event.pointerId);
  });
  grab.addEventListener('pointermove', event => {
    if (sheetStart === null) return;
    sheetDistance = Math.max(0, event.clientY - sheetStart);
    viewer.style.transform = `translateY(${sheetDistance}px)`;
  });
  const endSheetDrag = () => {
    if (sheetStart === null) return;
    sheetStart = null;
    viewer.style.transition = 'transform .25s cubic-bezier(.22,1,.36,1)';
    viewer.style.transform = '';
    if (sheetDistance > 90) closeViewer();
  };
  grab.addEventListener('pointerup', endSheetDrag);
  grab.addEventListener('pointercancel', endSheetDrag);
})();
