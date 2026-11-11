'use client';

import { useEffect, useState } from 'react';

export default function ScrollFab() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < window.innerHeight * 0.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const onClick = () => {
    if (atTop) {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      className={`scrollfab${atTop ? ' scrollfab--down' : ''}`}
      onClick={onClick}
      aria-label={atTop ? 'Scroll to bottom' : 'Back to top'}
      data-cursor="scroll"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {atTop ? (
          <path d="M12 5v14M5 12l7 7 7-7" />
        ) : (
          <path d="M12 19V5M5 12l7-7 7 7" />
        )}
      </svg>
    </button>
  );
}
