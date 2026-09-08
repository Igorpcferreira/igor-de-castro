'use strict';

/* -------------------------------------------------------------------------
   CONTATO — trocar aqui e em nenhum outro lugar.

   WHATSAPP: número confirmado por você em 07/09/2026 como
   https://wa.me/556284196646  (55 + 62 + 84196646).
   ⚠ PENDENTE DE VALIDAÇÃO: celular brasileiro tem 9 dígitos depois do DDD e
   este tem 8. Se o link não abrir a conversa, o correto é '5562984196646'
   (com o 9 na frente). Basta trocar a linha abaixo — o HTML é reescrito por
   este arquivo no carregamento, e os href estáticos são só fallback sem JS.
   ------------------------------------------------------------------------- */
const WHATSAPP = '556284196646';
const WHATSAPP_MSG = 'Oi, Igor! Vim pela sua página de links e queria um orçamento.';
const EMAIL = 'igorpcferreiradev@gmail.com';

/* UTM: deixe vazio para não marcar nada. Preencha para medir de onde vem a
   conversa — os parâmetros são aplicados em todo <a data-link> externo, e o
   valor de data-link entra como utm_content. Ex.:
   const UTM = { utm_source: 'instagram', utm_medium: 'bio', utm_campaign: 'links' }; */
const UTM = {};

document.addEventListener('DOMContentLoaded', () => {
  const waHref = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(WHATSAPP_MSG);
  document.querySelectorAll('a[data-wa]').forEach(a => { a.href = waHref; });

  if (Object.keys(UTM).length) {
    document.querySelectorAll('a[data-link][href^="http"]').forEach(a => {
      const url = new URL(a.href);
      Object.entries(UTM).forEach(([k, v]) => url.searchParams.set(k, v));
      url.searchParams.set('utm_content', a.dataset.link);
      a.href = url.toString();
    });
  }

  const toast = document.getElementById('toast');
  let toastTimer;
  const say = msg => {
    toast.textContent = msg;
    toast.setAttribute('data-show', '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.removeAttribute('data-show'), 2600);
  };

  document.getElementById('save-contact').addEventListener('click', () => {
    const vcf = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:de Castro;Igor;;;',
      'FN:Igor de Castro',
      'TITLE:Desenvolvedor Full Stack',
      'ORG:Kyber Tech',
      'TEL;TYPE=CELL,VOICE:+' + WHATSAPP,
      'EMAIL;TYPE=INTERNET,PREF:' + EMAIL,
      'URL:https://igordecastro.com.br',
      'URL:https://somoskyber.com.br',
      'ADR;TYPE=WORK:;;;Goiânia;GO;;Brasil',
      'NOTE:Sites, sistemas e automações sob medida. Contato preferencial pelo WhatsApp.',
      'END:VCARD'
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([vcf], { type: 'text/vcard;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'igor-de-castro.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    say('Contato baixado.');
  });

  document.getElementById('share-page').addEventListener('click', async () => {
    const data = {
      title: 'Igor de Castro — Desenvolvedor Full Stack',
      text: 'Sites, sistemas e automações sob medida.',
      url: location.href
    };
    if (navigator.share) {
      try { await navigator.share(data); return; } catch (err) { if (err && err.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(location.href);
      say('Link copiado.');
    } catch (err) {
      say(location.href);
    }
  });
});
