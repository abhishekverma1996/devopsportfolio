'use client';

import { useEffect, useRef } from 'react';

/**
 * Vanilla behavior scripts from the reference UI (cursor, preloader,
 * main interactions). They are injected after React hydrates the DOM,
 * once, so they always see the full markup.
 */
const BEHAVIOR_SCRIPTS = [
  '/req/js/cursor.js',
  '/req/js/preloader.js',
  '/req/js/main.js',
];

const PRE_RAN = 'av_pre_ran';

export default function Behaviors() {
  const injected = useRef(false);

  useEffect(() => {
    // Collect runtime errors for diagnostics (__pageErrors).
    const w = window as any;
    if (!w.__pageErrors) w.__pageErrors = [];
    const onErr = (e: ErrorEvent) => {
      w.__pageErrors.push(String(e.message || e.error || 'unknown'));
    };
    window.addEventListener('error', onErr);

    // Skip the preloader on repeat visits within the same session
    // (otherwise every return-navigation to "/" replays the 2.5s intro
    // and feels like the page is stuck).
    let preRan = false;
    try { preRan = sessionStorage.getItem(PRE_RAN) === '1'; } catch (e) {}
    const markRan = () => {
      try { sessionStorage.setItem(PRE_RAN, '1'); } catch (e) {}
    };
    window.addEventListener('preloader:done', markRan);

    if (preRan) {
      const p = document.getElementById('preloader');
      if (p) p.classList.add('is-done');
      document.body.classList.remove('is-loading');
    }

    if (injected.current) return;
    injected.current = true;
    BEHAVIOR_SCRIPTS.forEach((src) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
    });

    return () => {
      window.removeEventListener('preloader:done', markRan);
      window.removeEventListener('error', onErr);
    };
  }, []);

  // Fallback: never let reveal animations hide content indefinitely.
  useEffect(() => {
    const revealTimer = setTimeout(() => {
      document
        .querySelectorAll('[data-reveal], [data-stagger]')
        .forEach((el) => el.classList.add('is-visible'));
    }, 4500);
    return () => clearTimeout(revealTimer);
  }, []);

  return null;
}
