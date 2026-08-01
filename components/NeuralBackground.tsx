"use client";

import { useEffect, useRef } from "react";

/**
 * Background "rede neural viva", portado do artifact do Claude Design
 * (reference/design-system/prototypes/Neural Background.dc.html).
 *
 * A matemática do canvas (setup/frame/updateFirings/updatePackets/pickNext/
 * drawPackets/mulberry) foi transcrita sem alterações — é ela que define a
 * identidade visual. Só o formato mudou: a classe DCLogic virou o NeuralEngine
 * (canvas puro) e o componente React cuida apenas do ciclo de vida.
 */
export interface NeuralBackgroundProps {
  /** Quantidade de nós na malha (multiplicador). */
  density?: number;
  /** Proporção de nós verdes vs. azuis, concentrados à esquerda/topo. */
  greenAmount?: number;
  /** Força e raio da atração magnética do cursor. */
  interaction?: number;
  /** Frequência de pacotes de dados viajando pela malha (0 desliga). */
  packets?: number;
  /** Frequência dos disparos neurais em cascata (0 desliga). */
  firingRate?: number;
}

interface EngineOptions {
  density: number;
  greenAmount: number;
  interaction: number;
  packets: number;
  firingRate: number;
}

interface NeuralNode {
  x: number;
  y: number;
  hx: number;
  hy: number;
  z: number;
  vx: number;
  vy: number;
  ph: number;
  ps: number;
  wob: number;
  r: number;
  green: boolean;
  ox: number;
  oy: number;
  glow: number;
  fire: number;
}

interface BokehBlob {
  x: number;
  y: number;
  r: number;
  a: number;
  vx: number;
  vy: number;
  ph: number;
  green: boolean;
}

interface DataPacket {
  from: number;
  to: number;
  p: number;
  speed: number;
  hops: number;
  green: boolean;
  trail: [number, number][];
  dead: boolean;
  fade: number;
  x?: number;
  y?: number;
}

interface Firing {
  node: number;
  at: number;
  gen: number;
  maxGen: number;
}

type Neighbors = Map<number, Set<number>>;

function mulberry(seed: number): () => number {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class NeuralEngine {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly opts: EngineOptions;
  private readonly mouse = { x: -9999, y: -9999, sx: -9999, sy: -9999, active: false };
  private raf = 0;
  private t = 0;
  private packets: DataPacket[] = [];
  private firings: Firing[] = [];
  private anyFire = false;
  private nodes: NeuralNode[] = [];
  private bokeh: BokehBlob[] = [];
  private linkDist = 0;
  private w = 0;
  private h = 0;
  private dpr = 1;
  private isMobile = false;
  private reduced!: MediaQueryList;
  private cleanup: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement, opts: EngineOptions) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas 2D não suportado");
    this.ctx = ctx;
    this.opts = opts;
  }

  mount() {
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onReduced = () => this.restart();
    this.reduced.addEventListener("change", onReduced);

    const onResize = () => this.setup();
    window.addEventListener("resize", onResize);
    // Pinch-zoom no celular muda o visualViewport sem disparar "resize" de forma
    // confiável. Sem isso o canvas fica com a dimensão antiga, o fillRect cobre
    // só parte da tela e o resto aparece preto.
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", onResize);
      vv.addEventListener("scroll", onResize);
    }

    const onMove = (e: PointerEvent) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    };
    const onDown = (e: PointerEvent) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    };
    const onLeave = () => {
      this.mouse.active = false;
    };
    const onTouch = (e: TouchEvent) => {
      // Dois dedos é pinch-zoom, não interação com a malha. Seguir o primeiro
      // dedo aqui arrasta os nós para fora da tela enquanto a pessoa dá zoom.
      if (e.touches.length > 1) {
        this.mouse.active = false;
        return;
      }
      if (e.touches.length) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
        this.mouse.active = true;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    // pointercancel: o navegador tomou o gesto para si (zoom, scroll nativo,
    // toque longo). Sem tratar isso, mouse.active fica preso em true e a malha
    // continua grudada na última posição do dedo.
    window.addEventListener("pointercancel", onLeave);
    window.addEventListener("pointerup", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    window.addEventListener("touchcancel", onLeave);

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(this.raf);
      else this.loop();
    };
    document.addEventListener("visibilitychange", onVis);

    this.cleanup = () => {
      cancelAnimationFrame(this.raf);
      window.removeEventListener("resize", onResize);
      if (vv) {
        vv.removeEventListener("resize", onResize);
        vv.removeEventListener("scroll", onResize);
      }
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("pointerup", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      window.removeEventListener("touchcancel", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      this.reduced.removeEventListener("change", onReduced);
    };

    this.setup();
    this.loop();
  }

  destroy() {
    this.cleanup?.();
    this.cleanup = null;
  }

  private restart() {
    this.setup();
    cancelAnimationFrame(this.raf);
    this.loop();
  }

  /**
   * Dimensão em CSS px que o canvas precisa cobrir, e o dpr efetivo.
   *
   * Durante o pinch-zoom o visualViewport encolhe (é a área realmente visível),
   * mas o canvas é `position: fixed` e continua ocupando o layout viewport
   * inteiro. Por isso a medida vem de innerWidth/innerHeight, e do
   * visualViewport aproveitamos só a escala, para o canvas não perder nitidez
   * quando a pessoa dá zoom.
   */
  private viewport() {
    const vv = window.visualViewport;
    const scale = vv ? vv.scale : 1;
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      dpr: Math.min((window.devicePixelRatio || 1) * Math.max(scale, 1), 3),
    };
  }

  private setup() {
    const canvas = this.canvas;
    const { w, h, dpr } = this.viewport();
    // Um resize de 1px de altura (barra de endereço do celular aparecendo ou
    // sumindo durante o scroll) não justifica reconstruir a malha inteira.
    const sameSize = this.w === w && this.h === h;
    const samePixels = canvas.width === Math.round(w * dpr);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    this.dpr = dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (sameSize && samePixels && this.nodes.length) return;
    this.w = w;
    this.h = h;
    const density = this.opts.density;
    const isMobile = w < 700;
    this.isMobile = isMobile;
    // O cálculo anterior deixava apenas ~30 nós em celulares comuns. O piso
    // e o teto abaixo entregam uma malha perceptível sem se aproximar do custo
    // do desktop (190 nós).
    const rawCount = Math.round(((w * h) / (isMobile ? 5200 : 9000)) * density);
    const count = isMobile
      ? Math.min(105, Math.max(62, rawCount))
      : Math.min(190, rawCount);
    const greenAmt = this.opts.greenAmount;
    const rnd = mulberry(42);
    this.nodes = [];
    for (let i = 0; i < count; i++) {
      // assimétrico: mais denso à esquerda, dissipando pra direita
      // No mobile a malha ocupa toda a largura; no desktop preserva a
      // assimetria original, mais densa à esquerda.
      const x = Math.pow(rnd(), isMobile ? 1.12 : 1.45) * w * 1.05;
      const y = rnd() * h;
      const z = rnd(); // profundidade: 0 = longe, 1 = perto
      // acento verde concentrado à esquerda/topo, azul no resto
      const greenP = Math.max(0, 0.72 - (x / w) * 0.95 - (y / h) * 0.3) * greenAmt;
      const green = rnd() < greenP;
      this.nodes.push({
        x,
        y,
        hx: x,
        hy: y,
        z,
        vx: (rnd() - 0.5) * (isMobile ? 0.3 : 0.14),
        vy: (rnd() - 0.5) * (isMobile ? 0.3 : 0.14),
        ph: rnd() * Math.PI * 2,
        ps: 0.4 + rnd() * 0.9,
        wob: rnd() * Math.PI * 2,
        r: (green ? 1.4 : 1.2) + z * 2.2 + rnd() * 0.8,
        green,
        ox: 0,
        oy: 0,
        glow: 0,
        fire: 0,
      });
    }
    this.bokeh = [];
    for (let i = 0; i < (isMobile ? 8 : 11); i++) {
      const green = rnd() < 0.45;
      this.bokeh.push({
        x: rnd() * w,
        y: rnd() * h,
        r: 14 + rnd() * 46,
        a: 0.025 + rnd() * 0.05,
        vx: (rnd() - 0.5) * 0.06,
        vy: (rnd() - 0.5) * 0.06,
        ph: rnd() * Math.PI * 2,
        green,
      });
    }
    this.linkDist = isMobile
      ? Math.min(148, Math.max(124, Math.sqrt(w * h) / 4.6))
      : Math.min(210, Math.max(140, Math.sqrt(w * h) / 6));
  }

  private loop() {
    // Um loop de cada vez. Sem isso, um visibilitychange durante o pinch-zoom
    // agenda um segundo requestAnimationFrame e o primeiro fica órfão.
    cancelAnimationFrame(this.raf);
    const step = () => {
      this.t += 1;
      // Se um frame quebrar, o rAF não é reagendado e o fundo congela preto.
      // Melhor perder um frame do que perder a animação inteira.
      try {
        this.frame(this.reduced.matches);
      } catch {
        // ignorado de propósito: o próximo frame tenta de novo
      }
      if (!this.reduced.matches) this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }

  private frame(still: boolean) {
    const { ctx, w, h, nodes } = this;
    const t = this.t * 0.016;
    const m = this.mouse;
    // cursor suavizado (lag/trilha)
    if (m.sx < -999) {
      m.sx = m.x;
      m.sy = m.y;
    }
    m.sx += (m.x - m.sx) * 0.09;
    m.sy += (m.y - m.sy) * 0.09;
    const strength = this.opts.interaction;
    const iRad = 190 * strength;

    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#020409";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";

    // bokeh (ao fundo)
    for (const b of this.bokeh) {
      if (!still) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -60) b.x = w + 60;
        if (b.x > w + 60) b.x = -60;
        if (b.y < -60) b.y = h + 60;
        if (b.y > h + 60) b.y = -60;
      }
      const pulse = 0.75 + 0.25 * Math.sin(t * 0.5 + b.ph);
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      const c = b.green ? "110,255,140" : "60,170,255";
      g.addColorStop(0, "rgba(" + c + "," + b.a * pulse + ")");
      g.addColorStop(1, "rgba(" + c + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, 6.2832);
      ctx.fill();
    }

    // movimento dos nós
    for (const n of nodes) {
      if (!still) {
        n.hx += n.vx + Math.sin(t * 0.3 + n.wob) * 0.08;
        n.hy += n.vy + Math.cos(t * 0.26 + n.wob * 1.7) * 0.08;
        if (n.hx < -40) n.hx = w + 40;
        if (n.hx > w + 40) n.hx = -40;
        if (n.hy < -40) n.hy = h + 40;
        if (n.hy > h + 40) n.hy = -40;
      }
      // atração magnética do cursor
      let tx = 0;
      let ty = 0;
      if (m.active) {
        const dx = m.sx - n.hx;
        const dy = m.sy - n.hy;
        const d = Math.hypot(dx, dy);
        if (d < iRad && d > 0.001) {
          const f = 1 - d / iRad;
          tx = (dx / d) * f * 26 * strength * n.z;
          ty = (dy / d) * f * 26 * strength * n.z;
        }
      }
      n.ox += (tx - n.ox) * 0.06;
      n.oy += (ty - n.oy) * 0.06;
      n.x = n.hx + n.ox;
      n.y = n.hy + n.oy;
      n.glow = 0;
      if (m.active) {
        const d = Math.hypot(m.sx - n.x, m.sy - n.y);
        if (d < iRad) n.glow = 1 - d / iRad;
      }
    }

    // grid espacial pras conexões (O(n) em vez de O(n²))
    const cell = this.linkDist;
    const grid = new Map<string, number[]>();
    nodes.forEach((n, i) => {
      const k = ((n.x / cell) | 0) + "," + ((n.y / cell) | 0);
      const bucket = grid.get(k);
      if (bucket) bucket.push(i);
      else grid.set(k, [i]);
    });
    const maxD = this.linkDist;
    const adj: [number, number, number][] = [];
    ctx.lineCap = "round";
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const cx = (a.x / cell) | 0;
      const cy = (a.y / cell) | 0;
      for (let gx = cx - 1; gx <= cx + 1; gx++)
        for (let gy = cy - 1; gy <= cy + 1; gy++) {
          const bucket = grid.get(gx + "," + gy);
          if (!bucket) continue;
          for (const j of bucket) {
            if (j <= i) continue;
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 > maxD * maxD) continue;
            const d = Math.sqrt(d2);
            const depth = (a.z + b.z) / 2;
            let alpha = (1 - d / maxD) * (0.16 + depth * 0.34);
            const glow = Math.max(a.glow, b.glow);
            alpha *= 1 + glow * 1.6;
            const greenish = a.green && b.green;
            const mixed = a.green !== b.green;
            const col = greenish ? "110,255,140" : mixed ? "120,230,200" : "70,180,255";
            ctx.strokeStyle = "rgba(" + col + "," + Math.min(alpha, 0.55) + ")";
            ctx.lineWidth = 0.4 + depth * 0.9 + glow * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            adj.push([i, j, d]);
          }
        }
    }

    // triângulos tênues entre nós próximos em primeiro plano
    ctx.globalCompositeOperation = "lighter";
    const nbr: Neighbors = new Map();
    for (const [i, j] of adj) {
      const si = nbr.get(i);
      if (si) si.add(j);
      else nbr.set(i, new Set([j]));
      const sj = nbr.get(j);
      if (sj) sj.add(i);
      else nbr.set(j, new Set([i]));
    }
    let tris = 0;
    for (const [i, j] of adj) {
      if (tris > 26) break;
      const si = nbr.get(i);
      const sj = nbr.get(j);
      if (!si || !sj) continue;
      for (const k of si) {
        if (k > j && sj.has(k)) {
          const a = nodes[i];
          const b = nodes[j];
          const c = nodes[k];
          const depth = (a.z + b.z + c.z) / 3;
          if (depth < 0.55) continue;
          const col = a.green || b.green || c.green ? "90,220,160" : "60,160,255";
          ctx.fillStyle = "rgba(" + col + "," + (0.018 + depth * 0.025) + ")";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.lineTo(c.x, c.y);
          ctx.closePath();
          ctx.fill();
          tris++;
          break;
        }
      }
    }

    // cascatas de disparos neurais
    this.updateFirings(nbr, still, t);
    // redesenha mais brilhante as conexões entre nós disparando (pulso elétrico)
    if (this.anyFire) {
      for (const [i, j] of adj) {
        const a = nodes[i];
        const b = nodes[j];
        const f = Math.max(a.fire || 0, b.fire || 0);
        if (f < 0.05) continue;
        const both = Math.min(a.fire || 0, b.fire || 0);
        const col =
          a.green && b.green ? "130,255,160" : a.green !== b.green ? "130,240,210" : "100,210,255";
        ctx.strokeStyle = "rgba(" + col + "," + Math.min(0.6, f * 0.3 + both * 0.35) + ")";
        ctx.lineWidth = 0.6 + f * 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    // pacotes de dados viajando pelas conexões reais
    this.updatePackets(nbr, still);

    // cursor como nó temporário da malha
    if (m.active && !still) {
      for (const n of nodes) {
        const d = Math.hypot(m.sx - n.x, m.sy - n.y);
        if (d < iRad * 0.85) {
          const f = 1 - d / (iRad * 0.85);
          const col = n.green ? "130,255,160" : "90,210,255";
          ctx.strokeStyle = "rgba(" + col + "," + f * 0.4 + ")";
          ctx.lineWidth = 0.6 + f * 0.8;
          ctx.beginPath();
          ctx.moveTo(m.sx, m.sy);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }
      const cg = ctx.createRadialGradient(m.sx, m.sy, 0, m.sx, m.sy, 26);
      cg.addColorStop(0, "rgba(140,225,255,0.28)");
      cg.addColorStop(1, "rgba(140,225,255,0)");
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(m.sx, m.sy, 26, 0, 6.2832);
      ctx.fill();
    }

    this.drawPackets();

    // nós com glow de respiração
    for (const n of nodes) {
      const pulse = still ? 0.8 : 0.65 + 0.35 * Math.sin(t * n.ps + n.ph);
      const bright = Math.min(
        1,
        (0.35 + n.z * 0.5) * pulse * (n.green ? 1.35 : 1) + n.glow * 0.8 + (n.fire || 0) * 0.9
      );
      const c = n.green ? "120,255,150" : "70,190,255";
      const cc = n.green ? "210,255,220" : "200,240,255";
      const R = n.r * (2.6 + n.glow * 1.6 + (n.fire || 0) * 2.4);
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, R);
      g.addColorStop(0, "rgba(" + c + "," + bright * 0.5 + ")");
      g.addColorStop(1, "rgba(" + c + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(n.x, n.y, R, 0, 6.2832);
      ctx.fill();
      ctx.fillStyle = "rgba(" + cc + "," + bright + ")";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * (0.55 + n.z * 0.45), 0, 6.2832);
      ctx.fill();
    }
  }

  private updateFirings(nbr: Neighbors, still: boolean, t: number) {
    const { nodes } = this;
    const rate = this.opts.firingRate;
    // decai a intensidade de disparo em todos os nós
    this.anyFire = false;
    for (const n of nodes) {
      if (n.fire) {
        n.fire *= 0.9;
        if (n.fire < 0.02) n.fire = 0;
        else this.anyFire = true;
      }
    }
    if (still) {
      this.firings.length = 0;
      return;
    }
    // faísca espontânea: um nó aleatório dispara sozinho
    const sparkChance = this.isMobile ? 0.01 : 0.006;
    if (rate > 0 && Math.random() < sparkChance * rate && this.firings.length < 60) {
      this.firings.push({
        node: Math.floor(Math.random() * nodes.length),
        at: t,
        gen: 0,
        maxGen: 2 + Math.floor(Math.random() * 3),
      });
    }
    // processa os disparos agendados
    const remaining: Firing[] = [];
    for (const f of this.firings) {
      if (f.at > t) {
        remaining.push(f);
        continue;
      }
      const n = nodes[f.node];
      const power = 1 - f.gen / (f.maxGen + 1);
      if ((n.fire || 0) < power) n.fire = power;
      this.anyFire = true;
      if (f.gen < f.maxGen && this.firings.length + remaining.length < 60) {
        const opts = nbr.get(f.node);
        if (opts) {
          for (const j of opts) {
            if ((nodes[j].fire || 0) > 0.25) continue; // já aceso — não redispara (evita loops)
            remaining.push({
              node: j,
              at: t + 0.06 + Math.random() * 0.06,
              gen: f.gen + 1,
              maxGen: f.maxGen,
            });
          }
        }
      }
    }
    this.firings = remaining;
  }

  private updatePackets(nbr: Neighbors, still: boolean) {
    const { nodes } = this;
    const rate = this.opts.packets;
    // nascimento: intervalo moderado aleatório; nada nasce com reduced motion
    if (!still && rate > 0 && this.packets.length < Math.ceil(3 * rate)) {
      if (Math.random() < (this.isMobile ? 0.012 : 0.008) * rate) {
        const from = Math.floor(Math.random() * nodes.length);
        const opts = nbr.get(from);
        if (opts && opts.size) {
          const to = this.pickNext(from, -1, opts);
          this.packets.push({
            from,
            to,
            p: 0,
            speed: 0.01 + Math.random() * 0.008,
            hops: 1 + Math.floor(Math.random() * 3), // 2-4 saltos no total
            green: nodes[from].green,
            trail: [],
            dead: false,
            fade: 1,
          });
        }
      }
    }
    for (const pk of this.packets) {
      if (still) continue;
      if (pk.dead) {
        pk.fade -= 0.05;
        continue;
      }
      const a = nodes[pk.from];
      const b = nodes[pk.to];
      // se a conexão quebrou (nós se afastaram), o pacote termina o salto atual
      pk.p += pk.speed;
      pk.x = a.x + (b.x - a.x) * pk.p;
      pk.y = a.y + (b.y - a.y) * pk.p;
      pk.trail.push([pk.x, pk.y]);
      if (pk.trail.length > 14) pk.trail.shift();
      if (pk.p >= 1) {
        if (pk.hops > 0) {
          const opts = nbr.get(pk.to);
          if (opts && opts.size) {
            const next = this.pickNext(pk.to, pk.from, opts);
            pk.from = pk.to;
            pk.to = next;
            pk.p = 0;
            pk.hops--;
            continue;
          }
        }
        pk.dead = true;
      }
    }
    this.packets = this.packets.filter((pk) => pk.fade > 0);
  }

  // escolhe o próximo nó: evita voltar direto; com cursor ativo, tende a ir na direção dele
  private pickNext(from: number, prev: number, opts: Set<number>): number {
    const { nodes } = this;
    const m = this.mouse;
    const arr = [...opts].filter((i) => i !== prev);
    const pool = arr.length ? arr : [...opts];
    if (m.active && Math.random() < 0.65) {
      let best = pool[0];
      let bd = Infinity;
      for (const i of pool) {
        const d = Math.hypot(nodes[i].x - m.sx, nodes[i].y - m.sy);
        if (d < bd) {
          bd = d;
          best = i;
        }
      }
      return best;
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  private drawPackets() {
    const ctx = this.ctx;
    for (const pk of this.packets) {
      if (pk.x === undefined || pk.y === undefined) continue;
      const col = pk.green ? "130,255,160" : "110,220,255";
      // rastro que dissipa
      ctx.lineCap = "round";
      for (let i = 1; i < pk.trail.length; i++) {
        const f = (i / pk.trail.length) * pk.fade;
        ctx.strokeStyle = "rgba(" + col + "," + f * 0.35 + ")";
        ctx.lineWidth = 0.6 + f * 1.6;
        ctx.beginPath();
        ctx.moveTo(pk.trail[i - 1][0], pk.trail[i - 1][1]);
        ctx.lineTo(pk.trail[i][0], pk.trail[i][1]);
        ctx.stroke();
      }
      // cabeça brilhante
      const g = ctx.createRadialGradient(pk.x, pk.y, 0, pk.x, pk.y, 9);
      g.addColorStop(0, "rgba(" + col + "," + 0.85 * pk.fade + ")");
      g.addColorStop(1, "rgba(" + col + ",0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pk.x, pk.y, 9, 0, 6.2832);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255," + 0.9 * pk.fade + ")";
      ctx.beginPath();
      ctx.arc(pk.x, pk.y, 1.4, 0, 6.2832);
      ctx.fill();
    }
  }
}

export default function NeuralBackground({
  density = 1.3,
  greenAmount = 1.9,
  interaction = 2,
  packets = 1,
  firingRate = 1,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new NeuralEngine(canvas, {
      density,
      greenAmount,
      interaction,
      packets,
      firingRate,
    });
    engine.mount();
    return () => engine.destroy();
  }, [density, greenAmount, interaction, packets, firingRate]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        // touch-action: none impede o navegador de tratar o gesto sobre o canvas
        // como pinch-zoom/pan, que era o que interrompia a animação. O conteúdo
        // fica em <main>, acima, então o scroll da página segue normal.
        className="fixed inset-0 z-0 block h-full w-full touch-none bg-[#020409]"
      />
      {/* Overlay de gradiente escuro: garante a legibilidade do texto sobre a malha */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(2,4,9,0.5) 0%, rgba(2,4,9,0.26) 34%, rgba(2,4,9,0) 58%), linear-gradient(to top, rgba(2,4,9,0.45) 0%, rgba(2,4,9,0) 28%)",
        }}
      />
    </>
  );
}
