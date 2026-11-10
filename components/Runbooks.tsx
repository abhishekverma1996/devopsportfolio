const RUNBOOKS = [
  {
    k: 'deploy',
    title: 'How I deploy',
    sub: 'Promotion path from commit to production.',
    steps: ['Build & unit tests', 'Security / SAST scan', 'Deploy to staging', 'Release + smoke verify', 'Monitor & alert'],
  },
  {
    k: 'incident',
    title: 'Incident checklist',
    sub: 'What I do when something breaks.',
    steps: ['Acknowledge & triage', 'Isolate impact', 'Apply fix / rollback', 'Verify recovery', 'Postmortem notes'],
  },
  {
    k: 'rollback',
    title: 'Rollback guide',
    sub: 'Safe undo when a release misbehaves.',
    steps: ['Freeze new releases', 'Redeploy previous artifact', 'Roll back DB migrations if needed', 'Verify golden signals', 'Document & follow-up'],
  },
];

export default function Runbooks() {
  return (
    <section className="section" id="runbooks">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>
            <span className="idx">RB</span> — runbooks
          </span>
          <span className="logline" data-reveal>## playbooks.sh</span>
          <h2 data-reveal>Ops playbooks.</h2>
        </div>

        <div className="rb-grid" data-stagger>
          {RUNBOOKS.map((rb) => (
            <article key={rb.k} className="rb-card">
              <span className="rb-card__k">{rb.k}</span>
              <h3 className="rb-card__title">{rb.title}</h3>
              <p className="rb-card__sub">{rb.sub}</p>
              <ol className="rb-card__steps">
                {rb.steps.map((step, i) => (
                  <li key={step}>
                    <span className="rb-card__n">{String(i + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
