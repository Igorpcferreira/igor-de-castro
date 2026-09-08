'use strict';
// WhatsApp confirmado por Igor nesta conversa: sem o 9 adicional.
const WHATSAPP = '556284196646';
const PAGE_URL = 'https://igordecastro.com.br/links';
const MESSAGE = 'Oi, Igor! Vim do Instagram e quero conversar sobre um projeto.';
const UTM = {}; // Opcional: utm_source, utm_medium, utm_campaign. Não instala rastreamento.

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;
});
document.querySelectorAll('a[data-link]:not([data-wa]):not(.video-link)').forEach(a => {
  if (!Object.keys(UTM).length) return;
  const url = new URL(a.href);
  Object.entries(UTM).forEach(([key, value]) => url.searchParams.set(key, value));
  url.searchParams.set('utm_content', a.dataset.link);
  a.href = url.href;
});

let toastTimer;
const say = message => {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.dataset.show = '';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => delete toast.dataset.show, 3500);
};

document.querySelector('#save-contact').addEventListener('click', () => {
  // vCard escapa pontuação e usa CRLF. E-mail omitido até confirmação.
  const escape = value => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
  const vcf = ['BEGIN:VCARD', 'VERSION:3.0', 'N:de Castro;Igor;;;', 'FN:Igor de Castro', 'ORG:Kyber Tech', 'TITLE:Software sob medida', `TEL;TYPE=CELL:+${WHATSAPP}`, `URL:${PAGE_URL}`, `NOTE:${escape('Sites, sistemas, automações e IA aplicada. Goiânia — Brasil.')}`, 'END:VCARD', ''].join('\r\n');
  const url = URL.createObjectURL(new Blob([vcf], {type:'text/vcard;charset=utf-8'}));
  const a = document.createElement('a');
  a.href = url; a.download = 'igor-de-castro.vcf';
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  say('Contato baixado. Abra o arquivo para salvar.');
});

const shareDialog = document.querySelector('#share-dialog');
document.querySelector('#share-page').addEventListener('click', async () => {
  const data = {title:'Igor de Castro — Software sob medida', text:'Sites, sistemas, automações e IA aplicada.', url:PAGE_URL};
  if (navigator.share) {
    try { await navigator.share(data); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(PAGE_URL); say('Link copiado.'); }
  catch {
    const input = document.querySelector('#share-url');
    input.value = PAGE_URL; shareDialog.showModal(); input.focus(); input.select();
  }
});
document.querySelector('#close-share').addEventListener('click', () => shareDialog.close());

const motionButton = document.querySelector('#toggle-motion');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const syncMotion = () => {
  motionButton.disabled = reducedMotion.matches;
  motionButton.textContent = reducedMotion.matches ? 'Movimento reduzido' : document.documentElement.hasAttribute('data-paused') ? 'Retomar animação' : 'Pausar animação';
};
motionButton.addEventListener('click', () => {
  const paused = document.documentElement.toggleAttribute('data-paused');
  motionButton.setAttribute('aria-pressed', String(paused)); syncMotion();
});
reducedMotion.addEventListener('change', syncMotion); syncMotion();
let brandVisible = true;
const syncVisibility = () => document.documentElement.toggleAttribute('data-away', document.hidden || !brandVisible || document.querySelector('#video-dialog').open);
document.addEventListener('visibilitychange', syncVisibility);
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => { brandVisible = entry.isIntersecting; syncVisibility(); }).observe(document.querySelector('.brand'));
  new IntersectionObserver(([entry]) => {
    document.querySelector('.mobile-dock').hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
  }).observe(document.querySelector('.primary-cta'));
}

// Galeria nativa: a página funciona sem JS; os controles complementam o gesto de deslizar.
const gallery = document.querySelector('#project-gallery');
const cards = [...gallery.querySelectorAll('.project')];
const galleryControls = document.querySelector('.gallery-controls');
const previousProject = document.querySelector('#gallery-prev');
const nextProject = document.querySelector('#gallery-next');
let galleryIndex = 0;
const updateGallery = () => {
  const first = cards[0].getBoundingClientRect();
  galleryIndex = cards.reduce((closest, card, index) => {
    const distance = Math.abs(card.getBoundingClientRect().left - gallery.getBoundingClientRect().left);
    const previousDistance = Math.abs(cards[closest].getBoundingClientRect().left - gallery.getBoundingClientRect().left);
    return distance < previousDistance ? index : closest;
  }, 0);
  if (first.width === 0) return;
  document.querySelector('#gallery-position').textContent = `${galleryIndex + 1} / ${cards.length}`;
  previousProject.disabled = galleryIndex === 0;
  nextProject.disabled = galleryIndex === cards.length - 1;
};
const goToProject = direction => {
  const index = Math.max(0, Math.min(cards.length - 1, galleryIndex + direction));
  const left = cards[index].getBoundingClientRect().left - gallery.getBoundingClientRect().left + gallery.scrollLeft;
  gallery.scrollTo({left, behavior:reducedMotion.matches ? 'instant' : 'smooth'});
};
previousProject.addEventListener('click', () => goToProject(-1));
nextProject.addEventListener('click', () => goToProject(1));
gallery.addEventListener('keydown', event => {
  if (event.target !== gallery || !matchMedia('(max-width:760px)').matches) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault(); goToProject(event.key === 'ArrowRight' ? 1 : -1);
  }
});
gallery.addEventListener('scroll', updateGallery, {passive:true});
window.addEventListener('resize', updateGallery);
galleryControls.hidden = false;
updateGallery();

// Os MP4 já são públicos na VPS da Kyber. Nenhum vídeo é solicitado antes do clique.
const videoDialog = document.querySelector('#video-dialog');
const videoStage = document.querySelector('#video-stage');
const videoError = document.querySelector('#video-error');
let videoTrigger;
let overflowBeforeVideo = '';
let activeVideo;
const disposeVideo = () => {
  if (!activeVideo) return;
  activeVideo.onerror = null;
  activeVideo.pause();
  activeVideo.removeAttribute('src');
  activeVideo.load();
  activeVideo.remove();
  activeVideo = null;
};
const loadVideo = () => {
  disposeVideo();
  videoError.hidden = true;
  videoStage.hidden = false;
  const video = document.createElement('video');
  activeVideo = video;
  video.controls = true;
  video.playsInline = true;
  video.muted = true;
  video.preload = 'metadata';
  video.poster = videoTrigger.dataset.videoPoster;
  video.setAttribute('aria-label', `Demonstração de ${videoTrigger.dataset.videoTitle}`);
  video.onerror = () => { videoStage.hidden = true; videoError.hidden = false; };
  video.src = videoTrigger.href;
  videoStage.replaceChildren(video);
  video.play().catch(() => { /* Se o navegador bloquear o play, os controles continuam disponíveis. */ });
};
document.querySelectorAll('.video-link').forEach(link => {
  link.addEventListener('click', event => {
    // Ctrl/Cmd/clique do meio preservam a abertura direta do MP4.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || !videoDialog.showModal) return;
    event.preventDefault();
    videoTrigger = link;
    document.querySelector('#video-title').textContent = link.dataset.videoTitle;
    document.querySelector('#video-direct').href = link.href;
    const site = link.closest('.project').querySelector('.project-actions a:not(.video-link)');
    const modalSite = document.querySelector('#video-site');
    modalSite.href = site.href;
    modalSite.textContent = link.closest('[data-project="casa-umbra"]') ? 'Visitar site (computador) ↗' : 'Visitar site ↗';
    overflowBeforeVideo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    videoDialog.showModal();
    syncVisibility();
    loadVideo();
  });
});
document.querySelector('#close-video').addEventListener('click', () => videoDialog.close());
document.querySelector('#retry-video').addEventListener('click', loadVideo);
videoDialog.addEventListener('click', event => {
  if (event.target !== videoDialog) return;
  const rect = videoDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) videoDialog.close();
});
videoDialog.addEventListener('close', () => {
  disposeVideo();
  videoError.hidden = true;
  document.body.style.overflow = overflowBeforeVideo;
  syncVisibility();
  videoTrigger?.focus({preventScroll:true});
});
document.addEventListener('visibilitychange', () => { if (document.hidden) activeVideo?.pause(); });
