"use client";

import { useEffect } from 'react';

export default function ScrollReveals() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = 'visible';
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06 });

    for (const element of elements) {
      // Enhance offscreen content only: SSR, no-JS, and the first viewport stay visible.
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.reveal = 'pending';
        const delay = Math.min(Number(element.dataset.revealDelay) || 0, 3) * 70;
        element.style.setProperty('--reveal-delay', `${delay}ms`);
        observer.observe(element);
      }
    }

    const revealAll = () => {
      observer.disconnect();
      elements.forEach(element => { element.dataset.reveal = 'visible'; });
    };
    const onMotionChange = () => { if (reducedMotion.matches) revealAll(); };
    reducedMotion.addEventListener('change', onMotionChange);
    return () => {
      revealAll();
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return null;
}
