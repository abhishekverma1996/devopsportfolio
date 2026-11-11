/* cursor.js - quiet signal cursor
 * Precise 1:1 dot + soft orbit ring + restrained action label.
 * Fine pointers only; disabled for touch and prefers-reduced-motion. */
(function () {
  'use strict';
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduce) return;

  var root = document.createElement('div');
  root.className = 'cursor';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML =
    '<div class="cursor__aura"></div>' +
    '<div class="cursor__ring"></div>' +
    '<div class="cursor__dot"></div>' +
    '<div class="cursor__label"></div>';
  document.body.appendChild(root);
  document.body.classList.add('has-cursor');

  /* Spark trail effect — tiny glowing particles that form and fade away
     behind the cursor (no persistent line). */
  var cv = document.createElement('canvas');
  cv.className = 'cursor__trail';
  document.body.appendChild(cv);
  var tctx = cv.getContext('2d');
  var parts = [];
  var CW = innerWidth, CH = innerHeight;
  var DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  function tsize() {
    CW = innerWidth; CH = innerHeight;
    cv.width = Math.floor(CW * DPR); cv.height = Math.floor(CH * DPR);
    tctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    tctx.shadowColor = 'rgba(56,189,248,0.9)';
    tctx.shadowBlur = 6;
  }
  addEventListener('resize', tsize); tsize();
  function spawn(x, y) {
    for (var i = 0; i < 1; i++) {
      var ang = Math.random() * Math.PI * 2;
      var sp = 0.8 + Math.random() * 2.2;
      parts.push({
        x: x, y: y,
        vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
        life: 0, max: 10 + Math.floor(Math.random() * 6),
        r: 2 + Math.random() * 2.6
      });
    }
  }
  function drawFX() {
    tctx.clearRect(0, 0, CW, CH);
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      p.x += p.vx; p.y += p.vy; p.life++;
      if (p.life >= p.max) { parts.splice(i, 1); continue; }
      var k = 1 - p.life / p.max;
      var rad = p.r * k + 0.6;
      // dark outline so sparks read on light backgrounds too
      tctx.globalAlpha = 0.45 * k;
      tctx.beginPath();
      tctx.arc(p.x, p.y, rad + 1.2, 0, 6.2832);
      tctx.strokeStyle = 'rgba(12,10,28,0.5)';
      tctx.lineWidth = 1.4;
      tctx.stroke();
      // bright core
      tctx.globalAlpha = 0.25 + 0.75 * k;
      tctx.beginPath();
      tctx.arc(p.x, p.y, rad, 0, 6.2832);
      tctx.fillStyle = 'rgba(171,160,255,1)';
      tctx.fill();
    }
    tctx.globalAlpha = 1;
  }

  var dot = root.querySelector('.cursor__dot');
  var ring = root.querySelector('.cursor__ring');
  var label = root.querySelector('.cursor__label');
  var aura = root.querySelector('.cursor__aura');

  var tx = innerWidth / 2, ty = innerHeight / 2;
  var rx = tx, ry = ty;
  var ax = tx, ay = ty;
  var idleTimer = null, raf = null;
  var visible = false;
  var currentTarget = null;

  function setLabel(text) {
    if (!text) {
      root.classList.remove('has-label');
      label.textContent = '';
      return;
    }
    label.textContent = text;
    root.classList.add('has-label');
  }

  function move(e) {
    tx = e.clientX; ty = e.clientY;
    if (!visible) {
      rx = tx; ry = ty;
      visible = true;
      root.classList.add('is-visible');
    }
    // Dot pins to the real pointer 1:1 so clicks feel native.
    dot.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0) translate(-50%,-50%)';
    spawn(tx, ty);
    root.classList.remove('is-idle', 'is-out');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () { root.classList.add('is-idle'); }, 2200);
  }

  function frame() {
    rx += (tx - rx) * 0.32; ry += (ty - ry) * 0.32;
    ax += (tx - ax) * 0.13; ay += (ty - ay) * 0.13;
    drawFX();
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) translate(-50%,-50%)';
    aura.style.transform = 'translate3d(' + ax + 'px,' + ay + 'px,0) translate(-50%,-50%)';
    label.style.transform = 'translate3d(' + (rx + 18) + 'px,' + (ry + 20) + 'px,0)';
    raf = requestAnimationFrame(frame);
  }

  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerdown', function () { root.classList.add('is-down'); });
  document.addEventListener('pointerup', function () { root.classList.remove('is-down'); });
  document.addEventListener('pointerleave', function () { root.classList.add('is-out'); });
  document.addEventListener('pointerenter', function () { root.classList.remove('is-out'); });

  // Hover intent: enlarge softly on commands, label from data-cursor.
  document.addEventListener('pointerover', function (e) {
    var t = e.target.closest('a, button, [data-cursor], input, textarea, select, .marquee__item');
    if (!t) {
      currentTarget = null;
      root.classList.remove('is-hover', 'is-text');
      setLabel('');
      return;
    }
    if (t.matches('input, textarea, select')) {
      currentTarget = null;
      root.classList.remove('is-hover');
      root.classList.add('is-text');
      setLabel('');
      return;
    }
    currentTarget = t;
    root.classList.add('is-hover');
    root.classList.remove('is-text');
    setLabel(t.getAttribute('data-cursor'));
  }, { passive: true });

  document.addEventListener('pointerout', function (e) {
    if (!currentTarget) return;
    if (e.relatedTarget && currentTarget.contains(e.relatedTarget)) return;
    currentTarget = null;
    root.classList.remove('is-hover', 'is-text');
    setLabel('');
  }, { passive: true });

  frame();
})();
