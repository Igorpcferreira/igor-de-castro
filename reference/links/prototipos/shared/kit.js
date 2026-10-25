// Comportamentos comuns às três direções: WhatsApp, vídeo, relógio, modal com "voltar" e retrato ASCII.
import { SPRITE } from './icons.js';
import { WHATSAPP, MESSAGE, PAGE_URL } from './content.js';

export const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
export const waLink = (text = MESSAGE) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const projectMessage = name => `Oi, Igor! Vim do Instagram, vi o projeto ${name} e quero conversar sobre algo nessa linha.`;
export const serviceMessage = topics => `Oi, Igor! Vim do Instagram e quero conversar sobre ${topics}.`;
export const icon = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
export const ext = 'target="_blank" rel="noopener"';
export const injectSprite = () => document.body.insertAdjacentHTML('afterbegin', SPRITE);
export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Hora de Goiânia (sem horário de verão desde 2019).
const clockFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
export const goianiaTime = () => clockFormat.format(new Date());
export function startClock(selector) {
  const tick = () => $$(selector).forEach(element => { element.textContent = goianiaTime(); });
  tick();
  return setInterval(tick, 20000);
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
  const data = { title: 'Igor de Castro — Software sob medida', text: 'Sites, sistemas e automações sob medida.', url: PAGE_URL };
  if (navigator.share) {
    try { await navigator.share(data); return; } catch (error) { if (error.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(PAGE_URL); toast('Link copiado.'); } catch { toast(PAGE_URL); }
}

// Dialog modal com animação de saída, trava de rolagem e entrada no histórico (o "voltar" fecha).
export function modal(dialog, { onClose } = {}) {
  let inHistory = false;
  let active = false;
  const finish = () => {
    if (!active) return;
    active = false;
    document.documentElement.classList.remove('is-locked');
    onClose?.();
    if (inHistory) { inHistory = false; history.back(); }
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
  return { show, close, finish, get open() { return dialog.open; } };
}

// Arraste para baixo fecha uma folha (celular).
export function dragToClose(handle, dialog, close) {
  let start = null;
  let distance = 0;
  handle.addEventListener('pointerdown', event => {
    if (event.target.closest('button, a')) return;
    start = event.clientY;
    distance = 0;
    dialog.style.transition = 'none';
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (start === null) return;
    distance = Math.max(0, event.clientY - start);
    dialog.style.transform = `translateY(${distance}px)`;
  });
  const end = () => {
    if (start === null) return;
    start = null;
    dialog.style.transition = 'transform .25s cubic-bezier(.22,1,.36,1)';
    dialog.style.transform = '';
    if (distance > 90) close();
  };
  handle.addEventListener('pointerup', end);
  handle.addEventListener('pointercancel', end);
}

// Véu que escurece o fundo neural conforme a rolagem, como no portfólio (BackgroundVeil).
export function mountVeil(element, { mobile = 0.34, desktop = 0.55 } = {}) {
  let queued = false;
  const update = () => {
    queued = false;
    const progress = Math.min(window.scrollY / window.innerHeight, 1);
    element.style.opacity = (progress * (window.innerWidth < 700 ? mobile : desktop)).toFixed(3);
  };
  const request = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  update();
}

// Retrato montado em caracteres que se resolve na foto (uma vez).
export function decodePortrait(image, canvas, { columns = 30, onDone } = {}) {
  const finish = () => onDone?.();
  if (reducedMotion.matches) return finish();
  const run = () => {
    const box = canvas.getBoundingClientRect();
    const context = canvas.getContext('2d');
    if (!box.width || !context) return finish();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(box.width * ratio);
    canvas.height = Math.round(box.height * ratio);
    const cellWidth = box.width / columns;
    const cellHeight = cellWidth * 1.7;
    const rows = Math.floor(box.height / cellHeight);
    const sample = document.createElement('canvas');
    sample.width = columns;
    sample.height = rows;
    const sampleContext = sample.getContext('2d', { willReadFrequently: true });
    let pixels;
    try {
      const scale = Math.max(columns / image.naturalWidth, rows / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      sampleContext.drawImage(image, (columns - width) / 2, 0, width, height);
      pixels = sampleContext.getImageData(0, 0, columns, rows).data;
    } catch { return finish(); }
    const ramp = ' .:-=+*#%@';
    const noise = '01<>/{}[];=+*#$%';
    const light = [];
    for (let index = 0; index < columns * rows; index += 1) {
      const offset = index * 4;
      light.push((0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2]) / 255);
    }
    context.scale(ratio, ratio);
    context.font = `600 ${cellHeight}px "JetBrains Mono", monospace`;
    context.textBaseline = 'top';
    const start = performance.now();
    const duration = 800;
    const frame = now => {
      const progress = Math.min((now - start) / duration, 1);
      const scanRow = progress * (rows + 2);
      context.clearRect(0, 0, box.width, box.height);
      for (let row = 0; row < rows && row <= scanRow; row += 1) {
        const edge = scanRow - row < 2.5;
        for (let column = 0; column < columns; column += 1) {
          const value = light[row * columns + column];
          const glyph = edge ? noise[(Math.random() * noise.length) | 0] : ramp[Math.min(ramp.length - 1, (value * ramp.length) | 0)];
          if (glyph === ' ') continue;
          context.fillStyle = edge ? 'rgba(165,255,190,.95)' : `rgba(82,255,125,${(0.3 + value * 0.7).toFixed(2)})`;
          context.fillText(glyph, column * cellWidth, row * cellHeight);
        }
      }
      if (progress < 1) {
        context.fillStyle = 'rgba(165,255,190,.85)';
        context.fillRect(0, Math.min(scanRow, rows) * cellHeight, box.width, 1.5);
        requestAnimationFrame(frame);
      } else finish();
    };
    requestAnimationFrame(frame);
  };
  const fontReady = document.fonts ? Promise.race([document.fonts.load('600 8px "JetBrains Mono"'), new Promise(resolve => setTimeout(resolve, 400))]) : Promise.resolve();
  const imageReady = image.complete && image.naturalWidth ? Promise.resolve() : new Promise((resolve, reject) => {
    image.addEventListener('load', resolve, { once: true });
    image.addEventListener('error', reject, { once: true });
  });
  Promise.all([imageReady, fontReady]).then(run, finish);
}
