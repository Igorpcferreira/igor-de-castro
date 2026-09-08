'use strict';
// WhatsApp confirmado por Igor nesta conversa: sem o 9 adicional.
const WHATSAPP = '556284196646';
const PAGE_URL = 'https://igordecastro.com.br/links';
const MESSAGE = 'Oi, Igor! Vim do Instagram e quero conversar sobre um projeto.';
const UTM = {}; // Opcional: utm_source, utm_medium, utm_campaign. Não instala rastreamento.

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;
});
document.querySelectorAll('a[data-link]:not([data-wa])').forEach(a => {
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
const syncVisibility = () => document.documentElement.toggleAttribute('data-away', document.hidden || !brandVisible);
document.addEventListener('visibilitychange', syncVisibility);
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => { brandVisible = entry.isIntersecting; syncVisibility(); }).observe(document.querySelector('.brand'));
  new IntersectionObserver(([entry]) => {
    document.querySelector('.mobile-dock').hidden = entry.isIntersecting || entry.boundingClientRect.top > 0;
  }).observe(document.querySelector('.primary-cta'));
}
