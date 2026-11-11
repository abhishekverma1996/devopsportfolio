/**
 * Site data — sourced from Abhishek Verma's original portfolio repo.
 * UI/reference structure comes from the design system; these values are
 * the only thing that describes him.
 */

export type NavLink = { name: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#stack' },
  { name: 'Proof', href: '#credentials' },
  { name: 'Contact', href: '#contact' },
  { name: 'OneView', href: '#oneview' },
];

export const MARQUEE_ITEMS: string[] = [
  'terraform init',
  'terraform plan',
  'terraform apply -auto-approve',
  'ansible-playbook deploy.yml',
  'docker build -t app:latest',
  'docker push acr/app:latest',
  'kubectl apply -f ./k8s',
  'kubectl rollout status deploy/app',
  'helm upgrade app ./charts',
  'az deployment group create',
  'az acr build',
  'gh workflow run deploy.yml',
  'git push origin main',
  'kubectl get pods -n prod',
  'systemctl status nginx',
  'promtool check rules',
  'grafana dashboard import',
  'curl -f https://api/healthz',
  'ss -tulpn | grep :443',
  'tail -f /var/log/app.log',
];

export type SummaryToken = { t: string; hl?: boolean };

export type Release = {
  tag: string;
  co: string;
  period: string;
  role: string;
  now?: boolean;
  past?: boolean;
  summary: SummaryToken[];
  chips: string[];
};

export const RELEASES: Release[] = [
  {
    tag: 'release/2019.10 — HEAD',
    co: 'Softbeads Private Limited',
    period: 'Oct 2019 → present',
    role: 'Software Implementation & Automation Engineer',
    now: true,
    summary: [
      { t: 'Spearheaded the transition from manual ' },
      { t: '"Click-Ops" provisioning', hl: true },
      { t: ' to declarative patterns — IaC with Terraform & Ansible, secure CI/CD via Azure DevOps / GitHub Actions, and DevSecOps scanning (Tfsec, TruffleHog). Full-stack observability (Datadog / ELK, Prometheus, Grafana) improved resolution speed by ' },
      { t: '25%', hl: true },
      { t: '; process engineering cut manual operational overhead by 30%.' },
    ],
    chips: ['Terraform', 'Ansible', 'Azure DevOps', 'GitHub Actions', 'DevSecOps / Tfsec', 'Datadog · ELK'],
  },
  {
    tag: 'release/2018.04',
    co: 'Mrianso Software Creation',
    period: 'Apr 2018 → Oct 2019',
    role: 'Technical Support Engineer',
    past: true,
    summary: [
      { t: 'Gained foundational SDLC experience and managed ' },
      { t: 'SQL operations', hl: true },
      { t: ' — complex database customizations, client reporting, and backend logic for enterprise transport ERP systems; bridged client operations and development teams to resolve high-priority bottlenecks.' },
    ],
    chips: ['SQL', 'SDLC', 'ERP Support', 'Client Ops'],
  },
];

export type Impact = { n: string; suffix: string; label: string };

export const IMPACT: Impact[] = [
  { n: '7', suffix: '+', label: 'Years in Infrastructure & Cloud' },
  { n: '99.9', suffix: '%', label: 'Uptime maintained' },
  { n: '25', suffix: '%', label: 'Faster issue resolution' },
  { n: '30', suffix: '%', label: 'Less manual overhead' },
];

export type Project = {
  img: string;
  tag: string;
  title: string;
  desc: string;
  href?: string;
  soon?: boolean;
};

export const PROJECTS: Project[] = [
  {
    img: '/req/img/work1.webp',
    tag: 'devops / pipeline',
    title: 'Azure DevOps CI/CD Pipeline',
    desc: 'End-to-end build and release automation on Azure Pipelines.',
    href: 'https://github.com/abhishekverma1996/azure-devops-cicd',
  },
  {
    img: '/req/img/work2.webp',
    tag: 'devops / cloud',
    title: 'Microsoft Azure Infrastructure',
    desc: 'Infrastructure as Code for Azure environments with Terraform.',
    href: 'https://github.com/abhishekverma1996/azure-infrastructure',
  },
  {
    img: '/req/img/work3.webp',
    tag: 'devops / containers',
    title: 'Azure Kubernetes Service (AKS) Cluster',
    desc: 'Managed Kubernetes cluster provisioning and workload deployment.',
    href: 'https://github.com/abhishekverma1996/aks-cluster',
  },
  {
    img: '/req/img/work4.webp',
    tag: 'devops / release',
    title: 'Azure DevOps Release Pipeline',
    desc: 'Multi-stage release pipeline with approvals and gates.',
    href: 'https://github.com/abhishekverma1996/azure-release-pipeline',
  },
  {
    img: '/req/img/work5.webp',
    tag: 'devops / observability',
    title: 'Azure Monitor & Alerting',
    desc: 'Telemetry, dashboards, and proactive alerting for Azure workloads.',
    soon: true,
  },
  {
    img: '/req/img/work6.webp',
    tag: 'devops / delivery',
    title: 'Azure DevOps Boards & Repos',
    desc: 'Work item tracking and source control workflows on Azure DevOps.',
    soon: true,
  },
  {
    img: '/req/img/work3.webp',
    tag: 'development / chat',
    title: 'Talk Chat App',
    desc: 'Real-time chat system — React.js, Node.js, Socket.io, and JWT authentication.',
  },
  {
    img: '/req/img/work4.webp',
    tag: 'development / saas',
    title: 'JobSkills SaaS Platform',
    desc: 'Skill-matching platform built with n8n workflows on a modern JavaScript stack.',
  },
];

export type StackCard = { k: string; keys: string; strong: string; p: string };

export const STACK_CARDS: StackCard[] = [
  {
    k: 'ship',
    keys: 'delivery,ci',
    strong: 'CI/CD & Pipelines',
    p: 'Azure DevOps, GitHub Actions, Jenkins, GitLab CI',
  },
  {
    k: 'run',
    keys: 'containers,cloud',
    strong: 'Containers & Cloud',
    p: 'Docker, Kubernetes, Helm, Azure / AKS',
  },
  {
    k: 'guard',
    keys: 'iac,observability',
    strong: 'IaC & Observability',
    p: 'Terraform, Ansible, Bash, Azure Monitor / Prometheus',
  },
];

export type YamlToken = { c?: 'k' | 'v' | 'p'; t: string };
type YamlLine = YamlToken[];

const k = (t: string): YamlToken => ({ c: 'k', t });
const v = (t: string): YamlToken => ({ c: 'v', t });
const p = (t: string): YamlToken => ({ c: 'p', t });
const w = (t: string): YamlToken => ({ t });

const list = (...items: string[]): YamlToken[] => [
  p('['),
  ...items.flatMap((it, i) =>
    i === items.length - 1 ? [v(it)] : [v(it), p(','), w(' ')]
  ),
  p(']'),
];

export const YAML_LINES: YamlLine[] = [
  [k('stack'), p(':')],
  [w('  '), k('delivery'), p(':'), w('      '), ...list('azure-devops', 'github-actions', 'jenkins', 'gitlab-ci')],
  [w('  '), k('ci'), p(':'), w('             '), ...list('azure-pipelines', 'yaml-pipelines', 'release-pipelines')],
  [w('  '), k('containers'), p(':'), w('    '), ...list('docker', 'kubernetes', 'helm', 'aks')],
  [w('  '), k('cloud'), p(':'), w('          '), ...list('azure', 'azure-repos', 'azure-monitor')],
  [w('  '), k('iac'), p(':'), w('            '), ...list('terraform', 'ansible', 'bash', 'powershell')],
  [w('  '), k('observability'), p(':'), w(' '), ...list('azure-monitor', 'prometheus', 'alerting')],
];

export type Education = { issuer: string; name: string; dates: string };

export const EDUCATION: Education[] = [
  { issuer: 'AKTU University', name: 'Bachelor of Technology (B.Tech)', dates: '2013 → 2018' },
  { issuer: 'UP Board', name: 'Higher Secondary (12th)', dates: '2011 → 2013' },
];

export type Cert = { issuer: string; name: string };

export const CERTS: Cert[] = [
  { issuer: 'AWS', name: 'Solutions Architecture (Job Simulation)' },
  { issuer: 'HackerRank', name: 'SQL (Advanced)' },
  { issuer: 'HackerRank', name: 'JavaScript (Intermediate)' },
];

export type Reference = { quote: string; name: string };

export const REFERENCES: Reference[] = [
  {
    quote:
      'Abhishek is a highly dependable Technical Support Engineer. He consistently solves issues efficiently and communicates clearly with both clients and internal teams. His strong technical background and calm approach under pressure make him a reliable asset.',
    name: 'Anil Sanghavi',
  },
  {
    quote:
      "Abhishek quickly grasps complex systems and is always ready to take ownership of challenging support tickets. His dedication and problem-solving abilities have had a positive impact on our support team's performance.",
    name: 'Pawan Dubey',
  },
  {
    quote:
      "Abhishek worked with us in a support and technical operations role. He showed great initiative in resolving critical issues and often went the extra mile to ensure customer satisfaction. With his growing knowledge in development and automation, he's ready to take on bigger responsibilities.",
    name: 'Gopal Singh',
  },
];

export type Social = { label: string; href: string };

export const SOCIALS: Social[] = [
  { label: 'GitHub', href: 'https://github.com/abhishekverma1996' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abhishekverma1996' },
  { label: 'Twitter', href: 'https://twitter.com/abhishekverma495' },
  { label: 'Instagram', href: 'https://instagram.com/abhivermacs1996' },
];

export const CONTACT = {
  email: 'abhishekverma495@gmail.com',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=917236027172',
  phoneDisplay: '(+91) 72360 27172',
  tel: 'tel:+917236027172',
  base: 'base: Kanpur, Uttar Pradesh, IN',
  mapHref: 'https://www.google.com/maps?q=Kanpur,UttarPradesh,India',
  mapLabel: '26.8467° N · 80.9462° E ↗',
  tz: 'tz: IST · UTC+05:30',
  resume: '/req/pdf/Resume_AbhishekVerma.pdf',
};
