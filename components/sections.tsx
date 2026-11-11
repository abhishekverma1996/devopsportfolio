import {
  NAV_LINKS,
  MARQUEE_ITEMS,
  RELEASES,
  IMPACT,
} from '@/data/site';

/* ─────────────────────────── Preloader ─────────────────────────── */

export function Preloader() {
  const Stage = ({ label }: { label: string }) => (
    <div className="stage">
      <div className="stage__dot">
        <svg className="default" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m8 3-6 9 6 9M16 3l6 9-6 9M14 3l-4 18" /></svg>
        <span className="spin"></span>
        <svg className="stage__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
      <span className="stage__label">{label}</span>
    </div>
  );

  return (
    <div className="preloader" id="preloader" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader__glow"></div>
      <div className="preloader__scan"></div>
      <div className="boot">
        <div className="boot__cmd">
          <span className="prompt">abhishek@prod</span> <span>:~$ deploy --env production --portfolio</span> <span className="caret"></span>
        </div>
        <div className="pipeline" aria-hidden="true">
          <div className="pipeline__track"><span className="pipeline__fill"></span></div>
          <Stage label="Build" />
          <Stage label="Test" />
          <Stage label="Deploy" />
          <Stage label="Release" />
        </div>
        <div className="boot__foot">
          <div className="boot__status"><span className="text-muted">›</span> initializing build environment<span className="text-muted">…</span></div>
          <div className="boot__pct"><span className="n tnum">0</span><span className="s">%</span></div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Header ─────────────────────────── */

export function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <nav className="nav" id="nav" aria-label="Primary">
        <a className="brand" href="/" aria-label="AV Abhishek Verma — DevOps Engineer">
          <span className="brand__mark">AV</span>
          <span className="brand__name">Abhishek&nbsp;Verma <span className="role">— DevOps Engineer</span></span>
        </a>
        <div className="nav__links" id="navLinks">
          {NAV_LINKS.map((link, i) => (
            <a key={link.name} className={`nav__link${i === 0 ? ' is-active' : ''}`} href={link.href}>
              {link.name}
            </a>
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
          <a className="btn btn--primary nav__cta magnetic" href="#contact" data-cursor="connect">Let's talk</a>
          <button className="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

export function Hero() {
  return (
    <section className="hero" id="hero">
      <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true"></canvas>
      <span className="hero-mark" aria-hidden="true">AV</span>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__intro">
            <span className="eyebrow hero__eyebrow">Cloud &amp; DevOps Engineer <span className="reg">&nbsp;· ap-south-1 / Kanpur</span></span>

            <h1 className="hero__title" aria-label="Abhishek Verma">
              <span className="line line--fill"><span data-decode="ABHISHEK">ABHISHEK</span></span>
              <span className="line line--grad"><span data-decode="VERMA">VERMA</span><span className="blink" aria-hidden="true"></span></span>
            </h1>

            <p className="lead hero__lead">
              I turn cloud &amp; delivery ops into
              <span className="em">automated pipelines</span> that let teams ship faster, safer, and at scale.
              <span className="lead__sub">Currently building release automation at Softbeads — 99.9% uptime, 25% faster fixes.</span>
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary btn--lg magnetic" href="#contact" data-cursor="connect">
                Let's connect
                <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a className="btn btn--ghost btn--lg" href="#work" data-cursor="open">
                <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10" /></svg>
                View the work
              </a>
            </div>

            <div className="status-strip" aria-label="Status">
              <div className="stat">
                <span className="stat__k">status</span>
                <span className="stat__v live"><span className="dot"></span>operational</span>
              </div>
              <div className="stat">
                <span className="stat__k">region</span>
                <span className="stat__v">ap-south-1 · Kanpur</span>
              </div>
              <div className="stat">
                <span className="stat__k">since</span>
                <span className="stat__v">2018 · 7y+ uptime</span>
              </div>
              <div className="stat">
                <span className="stat__k">local</span>
                <span className="stat__v tnum" data-clock>00:00:00</span>
              </div>
              <div className="stat">
                <span className="stat__k">gh</span>
                <a className="stat__v stat__link" href="https://github.com/abhishekverma1996" target="_blank" rel="noopener" data-cursor="open">github.com/abhishekverma1996</a>
              </div>
            </div>
          </div>

          {/* Git graph */}
          <div className="hero__graph" aria-hidden="true">
            <svg className="git" viewBox="0 0 420 560" fill="none">
              <path className="g-line g-main" d="M150 20 V 540" pathLength={1} />
              <path className="g-line g-branch" d="M150 120 C 150 168, 300 156, 300 204 V 356 C 300 404, 150 392, 150 440" pathLength={1} />
              <path className="g-flow" d="M150 120 C 150 168, 300 156, 300 204 V 356 C 300 404, 150 392, 150 440" pathLength={1} />

              <g className="g-commit" data-cursor="c0ffee1">
                <circle className="g-hit" cx={150} cy={60} r={22} />
                <circle className="g-c g-c--main d1" cx={150} cy={60} r={7} />
                <text className="g-t g-t--dim d1" x={130} y={64} textAnchor="end">main</text>
              </g>
              <g className="g-commit" data-cursor="fea7c1a">
                <circle className="g-hit" cx={150} cy={120} r={22} />
                <circle className="g-c g-c--acc d2" cx={150} cy={120} r={7} />
                <text className="g-t d2" x={130} y={124} textAnchor="end">checkout -b feat/cicd</text>
              </g>
              <g className="g-commit" data-cursor="add5afe">
                <circle className="g-hit" cx={300} cy={240} r={22} />
                <circle className="g-c g-c--acc d3" cx={300} cy={240} r={7} />
                <text className="g-t d3" x={320} y={244}>+ azure-pipelines.yml</text>
              </g>
              <g className="g-commit" data-cursor="5ecc0de">
                <circle className="g-hit" cx={300} cy={320} r={22} />
                <circle className="g-c g-c--acc d4" cx={300} cy={320} r={7} />
                <text className="g-t g-t--acc d4" x={320} y={324}>checks ✓ security</text>
              </g>
              <g className="g-commit" data-cursor="decade00">
                <circle className="g-hit" cx={150} cy={440} r={22} />
                <circle className="g-c g-c--acc d5" cx={150} cy={440} r={7} />
                <text className="g-t d5" x={130} y={444} textAnchor="end">merge → main</text>
              </g>

              <g className="g-commit g-head" data-cursor="HEAD → v1.0">
                <circle className="g-hit" cx={150} cy={505} r={26} />
                <circle className="g-c g-c--acc d5" cx={150} cy={505} r={8} />
                <circle className="g-ring" cx={150} cy={505} r={9} />
                <g className="g-tag">
                  <g className="g-tag__in">
                    <rect x={174} y={491} width={142} height={28} rx={14} />
                    <text x={245} y={509} textAnchor="middle">v1.0 · deployed</text>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll down" data-cursor="scroll">
        <span className="txt">scroll</span>
        <span className="rail"></span>
      </a>
    </section>
  );
}

/* ─────────────────────────── Marquee ─────────────────────────── */

export function Marquee() {
  return (
    <div className="marquee" aria-label="DevOps ecosystem">
      <div className="marquee__track">
        {MARQUEE_ITEMS.map((item) => (
          <span key={item} className="marquee__item"><span className="d"></span>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── About ─────────────────────────── */

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">

          <aside className="idcard" data-reveal="left">
            <div className="idcard__head">
              <span>identity.card</span>
              <span className="on">verified</span>
            </div>
            <div className="idcard__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/req/img/profile.png" alt="Abhishek Verma" width={900} height={1198} />
              <span className="idcard__scan"></span>
            </div>
            <div className="idcard__meta">
              <div className="idcard__row"><span className="k">uid</span><span className="v">abhishekverma1996</span></div>
              <div className="idcard__row"><span className="k">role</span><span className="v">devops engineer</span></div>
              <div className="idcard__row"><span className="k">base</span><span className="v">26.8467° N · 80.9462° E</span></div>
              <div className="idcard__row"><span className="k">tz</span><span className="v">IST · UTC+05:30</span></div>
              <div className="idcard__row"><span className="k">exp</span><span className="v">7y+ · since 2018</span></div>
              <div className="idcard__row"><span className="k">status</span><span className="v acc">● open to opportunities</span></div>
            </div>
          </aside>

          <div className="about__body">
            <div className="section-head">
              <span className="eyebrow" data-reveal><span className="idx">01</span> — whoami</span>
              <span className="logline" data-reveal>## whoami.sh</span>
              <h2 data-reveal>Reliability is a feature.<br />I build it in.</h2>
            </div>
            <p className="lead-big" data-reveal>
              Seven years making release day a non-event:
              <span className="dim">pipelines that just run, deploys nobody fears.</span>
            </p>
            <p data-reveal>
              I architect <span className="hl">secure, scalable software delivery platforms</span>
              {' '}using Azure DevOps, Microsoft Azure, Kubernetes, Terraform, and modern CI/CD practices.
            </p>
            <p data-reveal>
              The throughline: <span className="hl">automate the repetitive, secure the risky, document the rest.</span>{' '}
              From containerizing applications with Docker to managing production Azure infrastructure with
              99.9% uptime — the goal is always the same: make delivery predictable.
            </p>

            <div className="ops-principles" data-stagger>
              <article className="principle">
                <span className="principle__n">01</span>
                <h3>Release calm</h3>
                <p>Design pipelines so deploy day feels routine, observable, and reversible.</p>
              </article>
              <article className="principle">
                <span className="principle__n">02</span>
                <h3>Automate toil</h3>
                <p>Move repeated manual work into tested scripts, templates, and guardrails.</p>
              </article>
              <article className="principle">
                <span className="principle__n">03</span>
                <h3>Secure by default</h3>
                <p>Keep quality gates, secrets discipline, and compliance checks inside the path.</p>
              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Work ─────────────────────────── */

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow" data-reveal>
            <span className="idx">02</span> — git log --career
          </span>
          <span className="logline" data-reveal>## deploy.sh</span>
          <h2 data-reveal>Deployment history.</h2>
        </div>

        <div className="timeline" data-reveal>
          {RELEASES.map((r) => (
            <article key={r.tag} className={`release${r.past ? ' release--past' : ''}`} data-reveal>
              <div className="release__aside">
                <span className="release__tag">{r.tag}</span>
                <h3 className="release__co">{r.co}</h3>
                <p className="release__period">{r.period}</p>
              </div>
              <div className="release__main">
                <h4 className="release__role">
                  {r.role}
                  {r.now && <span className="now">now</span>}
                </h4>
                <p className="release__sum">
                  {r.summary.map((tok, i) =>
                    tok.hl ? (
                      <span key={i} className="hl">{tok.t}</span>
                    ) : (
                      <span key={i}>{tok.t}</span>
                    )
                  )}
                </p>
                <div className="release__chips" data-stagger>
                  {r.chips.map((chip) => (
                    <span key={chip} className="kchip"><span className="d"></span>{chip}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="impact-strip" data-reveal>
          <span className="eyebrow">
            <span className="idx">02a</span> — git diff --stat
          </span>
          <h3 className="impact-title">The years, diffed.</h3>
          <p className="impact-sub">Seven years of infrastructure work, squashed into numbers.</p>

          <div className="impact-grid" data-stagger>
            {IMPACT.map((s) => (
              <article key={s.label} className="impact-stat">
                <strong className="impact-stat__n">{s.n}<span>{s.suffix}</span></strong>
                <span className="impact-stat__l">{s.label}</span>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
