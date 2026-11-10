'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/data/site';

export default function HeaderClient() {
  return (
    <header className="site-header" id="siteHeader">
      <nav className="nav" id="nav" aria-label="Primary">
        <Link className="brand" href="/" aria-label="Abhishek Verma — home">
          <span className="brand__mark">AV</span>
          <span className="brand__name">Abhishek&nbsp;Verma <span className="role">— DevOps Engineer</span></span>
        </Link>
        <div className="nav__links" id="navLinks">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} className="nav__link" href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="nav__right">
          <span className="nav__status" title="Local time · Kanpur (IST)">
            <span className="live"></span>available
            <span className="clock tnum" data-clock>00:00:00</span>
          </span>
          <button className="theme-toggle" id="themeToggle" type="button" aria-label="Switch to light theme" data-cursor="theme">
            <svg className="tt-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
            <svg className="tt-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          </button>
          <Link className="btn btn--primary nav__cta magnetic" href="#contact" data-cursor="connect">Let's talk</Link>
          <button className="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
