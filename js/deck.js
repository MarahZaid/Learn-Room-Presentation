/* Learn+ Room — presentation engine
   Keys: → Space PageDown Enter = next · ← Shift+Space PageUp Backspace = back
         Home / End = first / last · 1–7 = jump · F = full screen
   Click: right three-quarters of the screen = next, left quarter = back. Swipe on touch screens. */
(function () {
  'use strict';

  /* ---------- Editable settings ---------- */
  const CONFIG = {
    // Shown under "Thank you" on the last slide. Leave empty to hide it.
    // Example: 'learnplusroom@example.com'
    contact: '',
  };

  /* ---------- Icons (24 × 24, stroked) ---------- */
  const ICONS = {
    door: '<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21M3 21h18M14.5 12.5h.01"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>',
    fan: '<circle cx="12" cy="12" r="1.6"/><path d="M12 10.4C11 6 12.5 3 15 3c2 0 2.4 3.4-3 7.4zM13.6 12c4.4-1 7.4.5 7.4 3 0 2-3.4 2.4-7.4-3zM12 13.6c1 4.4-.5 7.4-3 7.4-2 0-2.4-3.4 3-7.4zM10.4 12C6 13 3 11.5 3 9c0-2 3.4-2.4 7.4 3z"/>',
    thermo: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0zM12 9v7"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>',
    chair: '<path d="M7 3h10v8H7zM5 11h14M7 11v10M17 11v10M7 16h10"/>',
    camera: '<path d="M3 8V6a2 2 0 0 1 2-2h2M17 4h2a2 2 0 0 1 2 2v2M21 16v2a2 2 0 0 1-2 2h-2M7 20H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3.5"/>',
    face: '<path d="M3 8V6a2 2 0 0 1 2-2h2M17 4h2a2 2 0 0 1 2 2v2M21 16v2a2 2 0 0 1-2 2h-2M7 20H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="10" r="3"/><path d="M7.5 17.5c1-2 2.6-3 4.5-3s3.5 1 4.5 3"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18h2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11M12 15v2"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    chip: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    cloud: '<path d="M17.5 19H7a5 5 0 1 1 1.1-9.9A6 6 0 0 1 19.6 11a4 4 0 0 1-2.1 8z"/>',
    speaker: '<path d="M4 9.5v5h3.5L12 19V5L7.5 9.5zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bolt: '<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z"/>',
    leaf: '<path d="M5 19C5 10 10.5 5 20 4c-.5 9.5-5.5 15-14 15zM5 19l7-7"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    school: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9.5 21v-5h5v5M12 10.5h.01"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.4-3.6 3-5.5 6.5-5.5s6.1 1.9 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.8c1.8.7 2.8 2.4 3 5.2"/>',
    network: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="5.5" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4M8.2 13.2l7.6 4"/>',
    tune: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    plusc: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  };
  document.querySelectorAll('i[data-icon]').forEach((el) => {
    const d = ICONS[el.dataset.icon];
    if (d) el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  });

  const contactEl = document.querySelector('[data-contact]');
  if (contactEl) contactEl.textContent = CONFIG.contact || '';

  /* ---------- Scale the 1600 × 900 stage to the window ---------- */
  const stage = document.getElementById('stage');
  function fit() {
    const s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    stage.style.setProperty('--scale', s.toFixed(4));
  }
  window.addEventListener('resize', fit);
  fit();

  /* ---------- Slide 3: place the seven capabilities on a ring ---------- */
  (function layoutHub() {
    const hub = document.querySelector('.hub');
    if (!hub) return;
    const nodes = [...hub.querySelectorAll('.hub-nodes li')];
    const spokes = hub.querySelector('.spokes');
    const R = 250;
    const C = 350;
    let lines = '';
    nodes.forEach((li, i) => {
      const a = -Math.PI / 2 + (i / nodes.length) * Math.PI * 2;
      const x = C + Math.cos(a) * R;
      const y = C + Math.sin(a) * R;
      const delay = 500 + i * 140;
      li.style.setProperty('--x', `${(x / 700) * 100}%`);
      li.style.setProperty('--y', `${(y / 700) * 100}%`);
      li.style.setProperty('--d', delay);
      const x1 = C + Math.cos(a) * 118;
      const y1 = C + Math.sin(a) * 118;
      const x2 = C + Math.cos(a) * (R - 42);
      const y2 = C + Math.sin(a) * (R - 42);
      lines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" style="--d:${delay + 300}"/>`;
    });
    spokes.innerHTML = lines;
  })();

  /* ---------- Deck state ---------- */
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  let index = -1;
  let step = 0;

  const progress = document.querySelector('.progress');
  progress.innerHTML = slides
    .map((s, i) => `<button type="button" data-go="${i}" aria-label="Slide ${i + 1}: ${s.getAttribute('aria-label')}"></button>`)
    .join('');
  const bars = [...progress.children];
  const countN = document.querySelector('.count b');
  document.querySelector('.count').lastChild.textContent = ` / ${String(total).padStart(2, '0')}`;

  const stepsOf = (i) => +(slides[i].dataset.steps || 0);

  function setSvgClock(slide, run) {
    slide.querySelectorAll('svg').forEach((svg) => {
      if (!svg.pauseAnimations) return;
      if (run) {
        try { svg.setCurrentTime(0); } catch (e) { /* ignore */ }
        svg.unpauseAnimations();
      } else {
        svg.pauseAnimations();
      }
    });
  }

  function go(target, targetStep = 0) {
    target = Math.max(0, Math.min(total - 1, target));
    if (target === index) {
      setStep(targetStep);
      return;
    }
    slides.forEach((s, i) => {
      const active = i === target;
      s.classList.toggle('is-active', active);
      s.classList.toggle('is-past', i < target);
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      if (i === index && !active) setSvgClock(s, false);
    });
    index = target;
    setSvgClock(slides[index], true);
    setStep(Math.min(targetStep, stepsOf(index)));
    document.body.dataset.tone = slides[index].dataset.tone || 'dark';
    bg.setTone(document.body.dataset.tone);
  }

  function setStep(n) {
    step = n;
    slides[index].dataset.at = String(step);
    bars.forEach((b, i) => {
      b.classList.toggle('is-here', i === index);
      b.classList.toggle('is-done', i < index);
      if (i === index) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    countN.textContent = String(index + 1).padStart(2, '0');
    try {
      history.replaceState(null, '', `#${index + 1}${step ? '.' + (step + 1) : ''}`);
    } catch (e) { /* file:// in some browsers */ }
  }

  function next() {
    if (step < stepsOf(index)) setStep(step + 1);
    else if (index < total - 1) go(index + 1, 0);
  }
  function prev() {
    if (step > 0) setStep(step - 1);
    else if (index > 0) go(index - 1, stepsOf(index - 1));
  }

  function toggleFull() {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }

  /* ---------- Input ---------- */
  window.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case 'Enter':
        e.preventDefault(); next(); break;
      case ' ':
        e.preventDefault(); e.shiftKey ? prev() : next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace':
        e.preventDefault(); prev(); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(total - 1); break;
      case 'f': case 'F': toggleFull(); break;
      default:
        if (/^[1-9]$/.test(e.key) && +e.key <= total) go(+e.key - 1);
    }
  });

  document.querySelector('.fs').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFull();
    e.currentTarget.blur();
  });
  progress.addEventListener('click', (e) => {
    e.stopPropagation();
    const b = e.target.closest('[data-go]');
    if (b) { go(+b.dataset.go); b.blur(); }
  });

  let touchMoved = false;
  window.addEventListener('click', (e) => {
    if (touchMoved) return;
    if (e.button !== 0) return;
    if (e.clientX < window.innerWidth * 0.25) prev();
    else next();
  });

  let sx = 0, sy = 0;
  window.addEventListener('touchstart', (e) => {
    touchMoved = false;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (!touchMoved) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - sx;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(t.clientY - sy) * 1.3) (dx < 0 ? next : prev)();
    setTimeout(() => { touchMoved = false; }, 50);
  }, { passive: true });

  // Hide the cursor and dim the controls when the mouse is still.
  let idleTimer;
  function wake() {
    document.body.classList.remove('is-idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.body.classList.add('is-idle'), 2500);
  }
  window.addEventListener('pointermove', wake, { passive: true });
  wake();

  /* ---------- Background: a calm field of connected nodes ---------- */
  const bg = (function () {
    const canvas = document.getElementById('bg');
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tones = {
      dark: { dot: [127, 227, 255], line: [56, 198, 232], a: 1, g1: [12, 40, 92], g2: [6, 18, 48] },
      light: { dot: [42, 116, 224], line: [42, 116, 224], a: .55, g1: [222, 234, 250], g2: [243, 246, 251] },
    };
    let cur = { ...tones.dark, dot: [...tones.dark.dot], line: [...tones.dark.line], g1: [...tones.dark.g1], g2: [...tones.dark.g2] };
    let goal = tones.dark;
    let W = 0, H = 0, dpr = 1, pts = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (W * H) / 26000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * 0.12, vy: (Math.random() - .5) * 0.12,
        r: 1 + Math.random() * 1.6, p: Math.random() * Math.PI * 2,
      }));
    }
    window.addEventListener('resize', resize);
    resize();

    const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
    const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
    let last = 0;
    function frame(t) {
      requestAnimationFrame(frame);
      if (document.hidden || t - last < 33) return; // ~30 fps is plenty for a backdrop
      const dt = Math.min(60, t - last || 33);
      last = t;
      const k = 1 - Math.exp(-dt / 350);
      cur.dot = mix(cur.dot, goal.dot, k); cur.line = mix(cur.line, goal.line, k);
      cur.g1 = mix(cur.g1, goal.g1, k); cur.g2 = mix(cur.g2, goal.g2, k);
      cur.a += (goal.a - cur.a) * k;

      const g = ctx.createRadialGradient(W * .78, H * .12, 0, W * .6, H * .4, Math.max(W, H) * .95);
      g.addColorStop(0, rgba(cur.g1, 1)); g.addColorStop(1, rgba(cur.g2, 1));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      const maxD = Math.min(220, Math.max(W, H) * .14);
      for (const p of pts) {
        if (!reduce) { p.x += p.vx * dt * .06; p.y += p.vy * dt * .06; }
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD * maxD) {
            const o = (1 - Math.sqrt(d2) / maxD) * .16 * cur.a;
            ctx.strokeStyle = rgba(cur.line, o.toFixed(3));
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const tw = .35 + .3 * Math.sin(t * .0012 + p.p);
        ctx.fillStyle = rgba(cur.dot, (tw * cur.a).toFixed(3));
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    requestAnimationFrame(frame);
    return { setTone(name) { goal = tones[name] || tones.dark; } };
  })();

  /* ---------- Start ---------- */
  const m = /^#(\d+)(?:\.(\d+))?$/.exec(location.hash);
  const startAt = m ? Math.min(total, Math.max(1, +m[1])) - 1 : 0;
  const startStep = m && m[2] ? +m[2] - 1 : 0;
  // Wait for the fonts so the first slide animates in with its final typography.
  const begin = () => requestAnimationFrame(() => go(startAt, startStep));
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))]).then(begin);
  } else begin();
})();
