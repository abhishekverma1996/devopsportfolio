'use client';

import { useEffect, useState } from 'react';
import { PROJECTS, REFERENCES, EDUCATION, CONTACT } from '@/data/site';

type Capability = {
  name: string;
  status: string;
  overview: string;
  health: { cpu: string; mem: string; uptime: string };
  tools: string[];
  realworld: { text: string; bullets: string[] };
};

const CAPABILITIES: Capability[] = [
  {
    name: 'Microsoft Azure',
    status: 'Production Experience',
    overview: 'Architecting high-scale Azure platforms — compute, networking, storage, identity, and monitoring.',
    health: { cpu: '0.08s', mem: '192MB / 768MB', uptime: '99.9%' },
    tools: ['Virtual Machines', 'Virtual Network', 'Azure Storage', 'Entra ID (IAM)', 'Load Balancer', 'App Service', 'Functions', 'Monitor'],
    realworld: {
      text: 'Delivered production-ready Azure environments with secure configuration and recovery alignment.',
      bullets: ['Secure network design', 'IAM & RBAC governance', 'Backup & DR alignment'],
    },
  },
  {
    name: 'AWS',
    status: 'Hands-on Experience',
    overview: 'Working knowledge of AWS infrastructure operations — compute, storage, networking, and IAM.',
    health: { cpu: '0.09s', mem: '256MB / 1024MB', uptime: '99.9%' },
    tools: ['EC2', 'S3', 'VPC', 'IAM', 'ELB', 'Lambda', 'EKS', 'RDS', 'DynamoDB'],
    realworld: {
      text: 'Supported cloud environments with access control, secure design, and disaster-recovery alignment.',
      bullets: ['Secure VPC design', 'IAM governance', 'Backup strategy'],
    },
  },
  {
    name: 'Azure DevOps',
    status: 'Production Experience',
    overview: 'CI/CD pipeline architecture and release automation on Azure DevOps with YAML pipelines.',
    health: { cpu: '0.06s', mem: '128MB / 512MB', uptime: '99.9%' },
    tools: ['Azure Pipelines', 'Azure Repos', 'Azure Boards', 'Azure Artifacts', 'YAML Pipelines', 'Deployment Gates'],
    realworld: {
      text: 'Automated build-test-deploy flows with gated releases across environments.',
      bullets: ['Multi-stage pipeline design', 'Approvals & gates', 'Environment-based rollout'],
    },
  },
  {
    name: 'Terraform',
    status: 'Production Experience',
    overview: 'Infrastructure as Code with Terraform — declarative, versioned, reviewable environments.',
    health: { cpu: '0.05s', mem: '96MB / 384MB', uptime: '99.9%' },
    tools: ['Terraform', 'HCL', 'AzureRM Provider', 'AWS Provider', 'Remote State', 'Workspaces'],
    realworld: {
      text: 'Eliminated click-ops by encoding environments as code with state control.',
      bullets: ['Modular environment design', 'State management & locking', 'Drift detection & validate'],
    },
  },
  {
    name: 'Ansible',
    status: 'Production Experience',
    overview: 'Configuration management and automated provisioning with Ansible playbooks.',
    health: { cpu: '0.05s', mem: '96MB / 384MB', uptime: '99.9%' },
    tools: ['Ansible', 'Playbooks', 'Roles', 'Inventories', 'Ansible Vault'],
    realworld: {
      text: 'Automated server configuration with idempotent, auditable playbooks.',
      bullets: ['Idempotent playbook design', 'Secret encryption via Vault', 'Inventory-based targeting'],
    },
  },
  {
    name: 'Helm · YAML',
    status: 'Hands-on Experience',
    overview: 'Packaging Kubernetes applications with Helm charts and declarative YAML manifests.',
    health: { cpu: '0.04s', mem: '64MB / 256MB', uptime: '99.9%' },
    tools: ['Helm', 'Charts', 'Values', 'Releases', 'K8s Manifests'],
    realworld: {
      text: 'Delivered applications as versioned, parameterized chart releases.',
      bullets: ['Chart structure conventions', 'Parameterized releases', 'Upgrade / rollback discipline'],
    },
  },
  {
    name: 'Docker',
    status: 'Production Experience',
    overview: 'Containerization and image lifecycle management with Docker.',
    health: { cpu: '0.06s', mem: '128MB / 512MB', uptime: '99.9%' },
    tools: ['Docker Engine', 'Docker Compose', 'Dockerfile', 'Container Registry', 'BuildKit'],
    realworld: {
      text: 'Shipped containerized workloads with secure registries and scanning.',
      bullets: ['Multi-stage builds', 'Image tagging & versioning', 'Registry security scanning'],
    },
  },
  {
    name: 'Kubernetes (K8s)',
    status: 'Production Experience',
    overview: 'Cluster operations — workloads, scaling, upgrades, and day-2 management.',
    health: { cpu: '0.12s', mem: '320MB / 2048MB', uptime: '99.9%' },
    tools: ['Kubernetes', 'kubectl', 'Helm', 'Autoscaler', 'Managed Identity'],
    realworld: {
      text: 'Operated reliable clusters with secure configuration and recovery drills.',
      bullets: ['Production-grade cluster config', 'RBAC & network policies', 'Backup & DR drills'],
    },
  },
  {
    name: 'Datadog · ELK',
    status: 'Production Experience',
    overview: 'Full-stack observability — logs, metrics, traces, and alerting.',
    health: { cpu: '0.1s', mem: '384MB / 1536MB', uptime: '99.9%' },
    tools: ['Datadog', 'Elasticsearch', 'Logstash', 'Kibana', 'Alert Rules'],
    realworld: {
      text: 'Built observability that cut issue resolution time by 25%.',
      bullets: ['Log & metric baselines', 'Alert routing to on-call', 'Dashboards for ops review'],
    },
  },
  {
    name: 'Prometheus · Grafana',
    status: 'Production Experience',
    overview: 'Metrics collection, visualization, and alerting stacks.',
    health: { cpu: '0.08s', mem: '256MB / 1024MB', uptime: '99.9%' },
    tools: ['Prometheus', 'Grafana', 'Alertmanager', 'Exporters'],
    realworld: {
      text: 'Operated monitoring stacks that catch issues before users do.',
      bullets: ['Service-level metrics', 'Grafana dashboards', 'Alert thresholds & silence'],
    },
  },
  {
    name: 'Python · Bash · SQL',
    status: 'Production Experience',
    overview: 'Automation scripting and database operations across platforms.',
    health: { cpu: '0.03s', mem: '64MB / 256MB', uptime: '99.9%' },
    tools: ['Python', 'Bash', 'PowerShell', 'SQL Server', 'MongoDB', 'Node.js'],
    realworld: {
      text: 'Built scripts and automation that power deployments, checks, and reporting.',
      bullets: ['Reusable script libraries', 'SQL automation & reporting', 'Scheduled automation patterns'],
    },
  },
  {
    name: 'DevSecOps (Tfsec · TruffleHog)',
    status: 'Production Experience',
    overview: 'Security scanning baked into CI/CD — IaC linting and secret detection.',
    health: { cpu: '0.05s', mem: '96MB / 384MB', uptime: '99.9%' },
    tools: ['Tfsec', 'TruffleHog', 'TFLint', 'Super Linter', 'GitHub Actions'],
    realworld: {
      text: 'Shifted security left with automated gates in every pipeline.',
      bullets: ['IaC compliance scanning', 'Secret detection & prevention', 'Lint gates on PRs'],
    },
  },
];

const SYSTEM_STATUS: { k: string; v: string }[] = [
  { k: 'Multi-Env Operations', v: 'Dev · Staging · Prod' },
  { k: 'Uptime SLA', v: '99.9% maintained' },
  { k: 'Issue resolution', v: '+25% faster' },
  { k: 'Manual overhead', v: '−30%' },
  { k: 'Observability', v: 'Datadog · ELK · Prometheus · Grafana' },
];

const HEALTH_LINES = [
  '✓ Production ops active',
  '✓ CI/CD pipelines green',
  '✓ Infrastructure as Code tracked',
  '✓ Monitoring & alerting connected',
];

const TELEMETRY = [
  { n: '4', l: 'Active areas' },
  { n: '6', l: 'Impact logs' },
  { n: 'High', l: 'Priority' },
];

type GitHubEvent = {
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: { ref_type?: string };
};

type ActItem = { kind: string; repo: string; ts: string };

type Tab = 'overview' | 'tools' | 'realworld';

export default function OneViewPanel() {
  const [selected, setSelected] = useState<Capability | null>(null);
  const [tab, setTab] = useState<Tab>('overview');
  const [activity, setActivity] = useState<ActItem[] | null>(null);

  useEffect(() => {
    let on = true;
    fetch('https://api.github.com/users/abhishekverma1996/events/public?per_page=5')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad'))))
      .then((evts: GitHubEvent[]) => {
        const items: ActItem[] = evts.slice(0, 5).map((e) => {
          let kind = 'push';
          if (e.type === 'PullRequestEvent') kind = 'PR';
          else if (e.type === 'IssuesEvent') kind = 'issue';
          else if (e.type === 'CreateEvent' && e.payload?.ref_type === 'tag') kind = 'tag';
          else if (e.type === 'DeleteEvent') kind = 'del';
          return { kind, repo: e.repo.name.replace('abhishekverma1996/', ''), ts: e.created_at };
        });
        if (on) setActivity(items);
      })
      .catch(() => {
        if (on) setActivity([]);
      });
    return () => {
      on = false;
    };
  }, []);

  const open = (c: Capability) => {
    setTab('overview');
    setSelected(c);
  };

  return (
    <section id="oneview" className="dashboard dashboard--embedded">
      <div className="db-wrap">
        {/* Column A — Profile (present only) + System Status below */}
        <section className="db-col db-col--a">
          <div className="db-panel">
            <span className="db-label">Profile</span>
            <div className="db-profile">
              <div className="db-profile__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/req/img/profile.png" alt="Abhishek Verma" width={360} height={479} />
                <div className="db-profile__actions">
                  <a className="btn btn--primary magnetic" href={`mailto:${CONTACT.email}`} data-cursor="send">Email me</a>
                </div>
              </div>
              <div className="db-profile__info">
                <h1 className="db-profile__name">Abhishek Verma</h1>
                <p className="db-profile__role">Software Implementation & Automation Engineer</p>
                <p className="db-profile__meta">Softbeads Private Limited<br />Oct 2019 — Present</p>
                <p className="db-profile__loc">Kanpur, IND · IST (UTC+05:30)</p>
                <span className="db-status">Open to DevOps/SRE roles</span>
                <a className="btn btn--ghost db-dl" href={CONTACT.resume} download="Abhishek_Verma_Resume.pdf" data-cursor="open">Download CV</a>
              </div>
            </div>
          </div>

          <div className="db-panel">
            <span className="db-label">System Status</span>
            <div className="db-status">
              {SYSTEM_STATUS.map((s) => (
                <div key={s.k} className="db-status__row">
                  <span className="db-status__k">{s.k}</span>
                  <span className="db-status__v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Column B — Core Capabilities (right of profile) + Health Check */}
        <section className="db-col db-col--b">
          <div className="db-panel">
            <span className="db-label">Core Capabilities</span>
            <div className="db-cap db-cap--wide">
              {CAPABILITIES.map((c) => (
                <article
                  key={c.name}
                  className="db-cap__card"
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${c.name} details`}
                  onClick={() => open(c)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      open(c);
                    }
                  }}
                >
                  <strong className="db-cap__name">{c.name}</strong>
                  <span className="db-cap__status"><em>Status:</em> {c.status}</span>
                  <span className="db-cap__exec" aria-hidden="true">
                    <span className="p">$</span> root@kernel:~$ exec · <b>Describe</b>
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="db-panel">
            <span className="db-label">Health Check</span>
            <div className="db-term">
              <div className="db-term__bar">
                <span className="d"></span><span className="d"></span><span className="d"></span>
                <span className="db-term__title">check-health.sh</span>
              </div>
              <pre className="db-term__body">
                <span className="ln"><span className="p">$</span> check-health --all</span>
                {HEALTH_LINES.map((line) => (
                  <span key={line} className="ln ok">{line}</span>
                ))}
                <span className="ln"><span className="p">$</span> <span className="cursor-line"></span></span>
              </pre>
            </div>
          </div>
        </section>

        {/* Column C — Mission Logs (projects on right) + Knowledge/Telemetry */}
        <section className="db-col db-col--c">
          <div className="db-panel">
            <span className="db-label">Mission Logs</span>
            <div className="db-missions db-missions--split">
              <div className="db-mission-list">
                {PROJECTS.slice(0, 2).map((p) => (
                  <article key={p.title} className="db-mission">
                    <span className="db-mission__impact">Impact · High</span>
                    <h3 className="db-mission__title">{p.title}</h3>
                    <p className="db-mission__desc">{p.desc}</p>
                  </article>
                ))}
              </div>
              <div className="db-projs">
                <span className="db-projs__label">projects</span>
                {PROJECTS.map((p) => (
                  <a key={p.title} className="db-proj" href="/#projects" data-cursor="open">
                    <span className="db-proj__dot"></span>
                    <span className="db-proj__name">{p.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="db-panel">
            <span className="db-label">Knowledge Stream · Telemetry</span>
            <a className="db-know" href="/#work" data-cursor="open">
              <span className="db-know__k">engineering logs</span>
              <strong>Release log &amp; deployment history</strong>
              <span>Work timeline, impact stats, and selected builds.</span>
            </a>
            <div className="db-tele">
              {TELEMETRY.map((t) => (
                <div key={t.l} className="db-tele__cell">
                  <strong>{t.n}</strong>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>

            {activity !== null && (
              <div className="db-act">
                <span className="db-act__label">live · github</span>
                {activity.length === 0 ? (
                  <span className="db-act__empty">activity unavailable · offline</span>
                ) : (
                  activity.map((a) => (
                    <div key={a.repo + a.ts} className="db-act__row">
                      <span className="db-act__kind">{a.kind}</span>
                      <span className="db-act__repo">{a.repo}</span>
                      <span className="db-act__ts">
                        {new Date(a.ts).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Capability describe popup (Overview / Tools / RealWorld) */}
      {selected && (
        <div className="db-pop" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="db-pop__card" onClick={(e) => e.stopPropagation()}>
            <span className="db-pop__k">describe · {selected.name.toLowerCase().replace(/\s+/g, '-')}</span>
            <h3 className="db-pop__title">{selected.name}</h3>
            <div className="db-pop__term">
              <span className="p">$</span> root@kernel:~$ exec describe --tool {selected.name.toLowerCase().replace(/\s+/g, '-')}
            </div>

            <div className="db-pop__tabs" role="tablist">
              {(['overview', 'tools', 'realworld'] as Tab[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  className={`db-pop__tab${tab === t ? ' is-on' : ''}`}
                  onClick={() => setTab(t)}
                >
                  {t === 'overview' ? 'Overview' : t === 'tools' ? 'Tools' : 'RealWorld'}
                </button>
              ))}
            </div>

            {tab === 'overview' && (
              <div className="db-pop__sec">
                <p className="db-pop__body">{selected.overview}</p>
                <div className="db-health">
                  <span className="db-health__title">Node health status</span>
                  <div className="db-health__row"><span>CPU utilization:</span><span className="tnum">{selected.health.cpu}</span></div>
                  <div className="db-health__row"><span>Memory usage:</span><span className="tnum">{selected.health.mem}</span></div>
                  <div className="db-health__row"><span>Uptime:</span><span className="tnum">{selected.health.uptime}</span></div>
                </div>
              </div>
            )}

            {tab === 'tools' && (
              <div className="db-pop__sec">
                <div className="db-tools">
                  {selected.tools.map((tool) => (
                    <span key={tool} className="db-tools__chip">{tool}</span>
                  ))}
                </div>
              </div>
            )}

            {tab === 'realworld' && (
              <div className="db-pop__sec">
                <p className="db-pop__body">{selected.realworld.text}</p>
                <ul className="db-real">
                  {selected.realworld.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="db-pop__foot">
              <span className="db-pop__status"><em>Status:</em> {selected.status}</span>
              <button type="button" className="btn btn--primary" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
