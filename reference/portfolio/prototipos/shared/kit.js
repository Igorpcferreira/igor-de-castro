// Comportamentos comuns às três direções: WhatsApp, vídeo, relógio, folhas com "voltar" e o fundo neural.
import { SPRITE } from './icons.js';
import { WHATSAPP, MESSAGE, PAGE_URL } from './content.js';
import { mountNeural } from '../../../links/prototipos/shared/neural.js';

export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
export const waLink = (text = MESSAGE) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const projectMessage = name => `Oi, Igor! Vi o projeto ${name} no seu site e quero algo nessa linha.`;
export const serviceMessage = topics => `Oi, Igor! Vi seu site e quero conversar sobre ${topics} para o meu negócio.`;
export const icon = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
export const ext = 'target="_blank" rel="noopener"';
export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Junta itens numa frase: "a, b e c".
export const joinList = items => items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} e ${items.at(-1)}`;

export function boot() {
  document.documentElement.classList.add('js');
  document.body.insertAdjacentHTML('afterbegin', SPRITE);
}

export function mountBackground({ mobile = 0.36, desktop = 0.5 } = {}) {
  const canvas = $('.neural');
  if (canvas) mountNeural(canvas);
  const veil = $('.neural-veil');
  if (!veil) return;
  let queued = false;
  const update = () => {
    queued = false;
    const progress = Math.min(window.scrollY / window.innerHeight, 1);
    veil.style.opacity = (progress * (window.innerWidth < 700 ? mobile : desktop)).toFixed(3);
  };
  const request = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  update();
}

// Entrada dos blocos quando chegam na tela (uma vez).
export function reveal(root = document) {
  const items = $$('.rv', root);
  if (!('IntersectionObserver' in window) || reducedMotion.matches) { items.forEach(item => item.classList.add('is-in')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    observer.unobserve(entry.target);
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(item => observer.observe(item));
}

// Hora de Goiânia (sem horário de verão desde 2019).
const clockFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
const dateFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', day: 'numeric', month: 'long' });
export const goianiaTime = () => clockFormat.format(new Date());
export const goianiaDate = () => dateFormat.format(new Date());
export function startClock(selector, format = goianiaTime) {
  const tick = () => $$(selector).forEach(element => { element.textContent = format(); });
  tick();
  return setInterval(tick, 20000);
}

export function openWhatsApp(text) {
  const opened = window.open(waLink(text), '_blank', 'noopener');
  if (!opened) window.location.href = waLink(text);
}

export function createVideo(project) {
  const video = document.createElement('video');
  const saveData = navigator.connection?.saveData === true;
  video.muted = true;
  video.loop = true;
  video.controls = true;
  video.playsInline = true;
  video.preload = saveData ? 'none' : 'auto';
  video.poster = project.poster;
  video.src = project.video;
  video.setAttribute('aria-label', `Demonstração de ${project.name}`);
  if (!saveData) video.play().catch(() => {});
  return video;
}
export function disposeVideo(video) {
  if (!video) return;
  video.pause();
  video.removeAttribute('src');
  video.load();
  video.remove();
}

let toastTimer;
export function toast(message) {
  let element = $('.kit-toast');
  if (!element) {
    element = document.createElement('p');
    element.className = 'kit-toast';
    element.setAttribute('role', 'status');
    document.body.append(element);
  }
  element.textContent = message;
  element.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('is-visible'), 3000);
}
export async function sharePage() {
  const data = { title: 'Igor de Castro — Sites, sistemas e automações', text: 'Sites, sistemas e automações sob medida.', url: PAGE_URL };
  if (navigator.share) {
    try { await navigator.share(data); return; } catch (error) { if (error.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(PAGE_URL); toast('Link copiado.'); } catch { toast(PAGE_URL); }
}

// Dialog modal com animação de saída, trava de rolagem e entrada no histórico (o "voltar" fecha).
// A limpeza roda direto em close(): o evento "close" do dialog pode atrasar até o próximo quadro.
export function modal(dialog, { onClose } = {}) {
  let inHistory = false;
  let active = false;
  let opener = null;
  const finish = () => {
    if (!active) return;
    active = false;
    document.documentElement.classList.remove('is-locked');
    onClose?.();
    if (inHistory) { inHistory = false; history.back(); }
    opener?.focus?.({ preventScroll: true });
  };
  const close = () => {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    const done = () => { dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); finish(); };
    if (reducedMotion.matches) return done();
    dialog.classList.add('is-closing');
    setTimeout(done, 230);
  };
  const show = () => {
    if (dialog.open) return;
    opener = document.activeElement;
    history.pushState({ modal: dialog.id }, '');
    inHistory = true;
    active = true;
    document.documentElement.classList.add('is-locked');
    dialog.showModal();
  };
  window.addEventListener('popstate', () => { if (dialog.open) { inHistory = false; close(); } });
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('close', finish);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
  });
  return { show, close, get open() { return dialog.open; } };
}

// Arraste para baixo fecha uma folha (celular).
export function dragToClose(handle, sheet, close) {
  let start = null;
  let distance = 0;
  handle.addEventListener('pointerdown', event => {
    if (event.target.closest('button, a, video, input')) return;
    start = event.clientY;
    distance = 0;
    sheet.style.transition = 'none';
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (start === null) return;
    distance = Math.max(0, event.clientY - start);
    sheet.style.transform = `translateY(${distance}px)`;
  });
  const end = () => {
    if (start === null) return;
    start = null;
    sheet.style.transition = 'transform .25s cubic-bezier(.22,1,.36,1)';
    sheet.style.transform = '';
    if (distance > 90) close();
  };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
}
