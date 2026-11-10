import {
  PROJECTS,
  STACK_CARDS,
  YAML_LINES,
  EDUCATION,
  CERTS,
  REFERENCES,
  SOCIALS,
  CONTACT,
} from '@/data/site';

/* ─────────────────────────── Projects ─────────────────────────── */

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            <span className="idx">03</span> — ls projects/
          </span>
          <span className="logline" data-reveal>## builds.sh</span>
          <h2 data-reveal>Selected builds.</h2>
        </div>

        <div className="projects-grid" data-stagger>
          {PROJECTS.map((proj) => (
            <article key={proj.title} className="pcard">
              {proj.href ? (
                <a className="pcard__media" href={proj.href} target="_blank" rel="noopener" data-cursor="open">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={proj.img} alt={proj.title} />
                </a>
              ) : (
                <div className="pcard__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={proj.img} alt={proj.title} />
                </div>
              )}
              <div className="pcard__body">
                <span className="pcard__k">{proj.tag}</span>
                <h3 className="pcard__t">{proj.title}</h3>
                <p className="pcard__d">{proj.desc}</p>
                <div className="pcard__links">
                  {proj.href ? (
                    <a href={proj.href} target="_blank" rel="noopener" className="pcard__go" data-cursor="open">
                      GitHub{' '}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                    </a>
                  ) : proj.soon ? (
                    <span className="pcard__soon">in progress</span>
                  ) : (
                    <span className="pcard__soon">private source</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Stack ─────────────────────────── */

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal><span className="idx">04</span> — cat stack.yaml</span>
          <span className="logline" data-reveal>## toolbox.sh</span>
          <h2 data-reveal>The toolchain, declared.</h2>
        </div>

        <div className="stack-stage" data-reveal>
          <div className="stack-stage__copy">
            <span className="stack-stage__label">production toolkit</span>
            <p>Built over seven years of solving delivery, cloud, and automation challenges across production environments.</p>
          </div>

          <div className="stack-stage__surface">
            <figure className="spec spec--peek">
              <figcaption>
                <span className="d"></span>
                <span className="path">infra/</span>stack.yaml
                <span className="path">· tracked · drift checked</span>
                <span className="spec__hint">hover a card ↓</span>
              </figcaption>
              <span className="spec__scan" aria-hidden="true"></span>
              <div className="spec__mask">
                <pre data-stagger>
                  {YAML_LINES.map((line, i) => (
                    <span key={i} className="ln">
                      <span className="no">{i + 1}</span>
                      <span>
                        {line.map((tok, j) =>
                          tok.c ? (
                            <span key={j} className={tok.c}>{tok.t}</span>
                          ) : (
                            <span key={j}>{tok.t}</span>
                          )
                        )}
                      </span>
                    </span>
                  ))}
                </pre>
              </div>
            </figure>

            <div className="stack-cards" data-stagger>
              {STACK_CARDS.map((card) => (
                <article key={card.k} className="stack-card" data-keys={card.keys}>
                  <span className="stack-card__k">{card.k}</span>
                  <strong>{card.strong}</strong>
                  <p>{card.p}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Credentials ─────────────────────────── */

export function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal><span className="idx">05</span> — ls -la credentials/</span>
          <span className="logline" data-reveal>## audit.sh</span>
          <h2 data-reveal>Proof, not promises.</h2>
        </div>

        <div className="credgroup">
          <div className="credgroup__label" data-reveal>education</div>
          <div data-stagger>
            {EDUCATION.map((e) => (
              <div key={e.dates} className="crow">
                <span className="crow__issuer">{e.issuer}</span>
                <span className="crow__name">{e.name}</span>
                <span className="crow__dates">{e.dates}</span>
                <span className="crow__go">verified</span>
              </div>
            ))}
          </div>
        </div>

        <div className="credgroup">
          <div className="credgroup__label" data-reveal>certifications</div>
          <div data-stagger>
            {CERTS.map((c) => (
              <div key={c.name} className="crow">
                <span className="crow__issuer">{c.issuer}</span>
                <span className="crow__name">{c.name}</span>
                <span className="crow__dates">verified</span>
                <span className="crow__go">✓</span>
              </div>
            ))}
          </div>
        </div>

        <div className="credgroup" style={{ marginBottom: 0 }}>
          <div className="credgroup__label" data-reveal>references</div>
          <div className="refs" data-stagger>
            {REFERENCES.map((ref) => (
              <article key={ref.name} className="ref">
                <span className="ref__mark">“</span>
                <p className="ref__d">{ref.quote}</p>
                <span className="ref__name">{ref.name}</span>
                <span className="ref__tag">colleague</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <span className="eyebrow" data-reveal><span className="idx">06</span> — ping abhishek</span>
        <span className="logline" data-reveal>## ping.sh</span>
        <h2 className="contact__title" data-reveal>Ready to build<br /><span className="grad">something reliable?</span></h2>
        <p className="contact__sub" data-reveal>One conversation about your pipelines, cloud infrastructure, or release challenges — and how to make delivery more predictable.</p>

        <div className="contact__actions" data-reveal>
          <a className="btn btn--primary btn--lg magnetic" href={`mailto:${CONTACT.email}`} data-cursor="send">
            Email me
            <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="btn btn--ghost btn--lg" href={CONTACT.resume} download="Abhishek_Verma_Resume.pdf" data-cursor="open">
            <svg className="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            Download CV
          </a>
          <a className="btn btn--ghost btn--lg" href={CONTACT.whatsappUrl} target="_blank" rel="noopener" data-cursor="open">
            <svg className="btn__ico" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
            WhatsApp
          </a>
        </div>

        <div data-reveal>
          <button className="copyline" id="copyEmail" data-copy={CONTACT.email} data-cursor="copy" type="button" aria-live="polite">
            <span className="p">$</span>
            <span className="addr">echo {CONTACT.email} | clip</span>
            <span className="ok">✓ copied to clipboard</span>
          </button>
        </div>

        <div className="contact__meta" data-reveal style={{ marginTop: '2.2rem' }}>
          <span>{CONTACT.base}</span>
          <a href={CONTACT.mapHref} target="_blank" rel="noopener" data-cursor="map">{CONTACT.mapLabel}</a>
          <span>{CONTACT.tz}</span>
          <a href={CONTACT.tel} data-cursor="call">{CONTACT.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__row">
        <a className="footer__brand" href="#hero" data-cursor="top">
          <span className="brand__mark">AV</span> Abhishek Verma
        </a>
        <span className="footer__mono">© 2026 · deployed from Kanpur · status: <span className="text-accent">operational</span></span>
        <div className="footer__links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" data-cursor="open">{s.label}</a>
          ))}
          <a href="#oneview" data-cursor="open">OneView</a>
          <a href={`mailto:${CONTACT.email}`} data-cursor="send">Email</a>
          <a href="#hero" data-cursor="top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
