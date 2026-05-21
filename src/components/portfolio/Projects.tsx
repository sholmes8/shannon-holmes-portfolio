import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Layers, Server, Database, Cloud } from "lucide-react";
import { Section } from "./Section";
import stylz from "@/assets/project-stylz.jpg";
import filing from "@/assets/project-filing.jpg";
import ehr from "@/assets/project-ehr.jpg";
import stemsync from "@/assets/project-stemsync.jpg";

type Project = {
  index: string;
  title: string;
  tag: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  frontend: string[];
  backend: string[];
  data: string[];
  deploy: string[];
  features: string[];
  architecture: { from: string; to: string; via: string }[];
  image: string;
  links: { label: string; href: string; type: "demo" | "github" | "case" }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "STYLZ Career AI",
    tag: "Flagship · AI SaaS",
    summary:
      "AI-powered resume optimization platform pairing OpenAI with a clean full-stack architecture — built for job seekers who need recruiter-grade output in minutes.",
    problem:
      "Job seekers spend hours rewriting resumes for every role with no guarantee of ATS or recruiter alignment.",
    solution:
      "A React client posts resume + JD to a Node/Express API, which orchestrates a structured OpenAI prompt, validates the JSON response, and streams the rewritten resume back to the UI.",
    impact:
      "Cuts resume tailoring from hours to under two minutes with structured, recruiter-ready output.",
    frontend: ["React", "Tailwind", "Vite"],
    backend: ["Node.js", "Express", "OpenAI API"],
    data: ["JSON schema", "In-memory cache"],
    deploy: ["Vercel", "GitHub Actions"],
    features: [
      "Structured LLM output parsed against a strict JSON schema",
      "Rate-limited API with retry + graceful error handling",
      "Stateless architecture — horizontally scalable on edge",
    ],
    architecture: [
      { from: "Client", to: "API", via: "POST /optimize" },
      { from: "API", to: "OpenAI", via: "structured prompt" },
      { from: "OpenAI", to: "Client", via: "validated JSON" },
    ],
    image: stylz,
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "02",
    title: "Business Filing Workflow System",
    tag: "Enterprise · Workflow",
    summary:
      "Workflow-oriented compliance and filing management system modeled on real enterprise operations — built around throughput, audit trails, and SLA visibility.",
    problem:
      "Compliance teams juggle filings across spreadsheets and email, losing audit trails and missing SLA windows.",
    solution:
      "Stage-based pipeline backed by a normalized PostgreSQL schema. Role-based REST endpoints write to an append-only audit log; a Recharts dashboard surfaces SLA risk in real time.",
    impact:
      "Centralizes pipeline visibility, surfaces SLA risk early, and produces an auditable record by default.",
    frontend: ["React", "TypeScript", "Recharts"],
    backend: ["Node.js", "Express", "REST"],
    data: ["PostgreSQL", "Audit log table"],
    deploy: ["Render", "GitHub"],
    features: [
      "Stage-based filing pipeline with role permissions",
      "Append-only audit log for full compliance traceability",
      "Operational KPI dashboard for filings, SLAs, exceptions",
    ],
    architecture: [
      { from: "Operator UI", to: "REST API", via: "auth + RBAC" },
      { from: "REST API", to: "Postgres", via: "transactional writes" },
      { from: "Postgres", to: "Dashboard", via: "SLA aggregates" },
    ],
    image: filing,
    links: [
      { label: "Case Study", href: "#", type: "case" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "03",
    title: "EHR Data Migration & Analytics",
    tag: "Healthcare · Data",
    summary:
      "Simulated healthcare data migration pipeline with reporting layer — mapping legacy EHR records into a clean analytical model with Power BI dashboards.",
    problem:
      "Legacy EHR exports arrive inconsistent and unreconciled, blocking analytics and clinical reporting.",
    solution:
      "Python ETL extracts raw exports, validates against a target schema, loads into SQL, and feeds Power BI semantic models for leadership-ready dashboards.",
    impact:
      "Delivers a validated source-to-target pipeline and dashboards leadership can act on day one.",
    frontend: ["Power BI"],
    backend: ["Python", "Pandas"],
    data: ["SQL", "Star schema", "Validation rules"],
    deploy: ["Local + scheduled jobs"],
    features: [
      "Source-to-target mapping with validation and reconciliation",
      "Dashboards on patient volume, throughput, and data quality",
      "HIPAA-aware handling patterns and runbook documentation",
    ],
    architecture: [
      { from: "Legacy EHR", to: "Python ETL", via: "extract + clean" },
      { from: "Python ETL", to: "SQL Warehouse", via: "validated load" },
      { from: "SQL", to: "Power BI", via: "semantic model" },
    ],
    image: ehr,
    links: [
      { label: "Case Study", href: "#", type: "case" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "04",
    title: "STEMSync Mobile",
    tag: "Mobile · Education",
    summary:
      "STEM mentorship and resource platform connecting students with mentors and curated opportunities — built mobile-first with a clean component architecture.",
    problem:
      "Underrepresented STEM students lack structured access to mentors and curated learning resources.",
    solution:
      "Android client (Java) backed by Firebase for auth, Firestore for matching, and Cloud Messaging for realtime mentor/mentee notifications.",
    impact:
      "Creates a low-friction matching flow and curated feed that gets students into mentorship faster.",
    frontend: ["Java", "Android SDK", "XML layouts"],
    backend: ["Firebase Auth", "Cloud Functions"],
    data: ["Firestore", "Realtime DB"],
    deploy: ["Google Play (internal)"],
    features: [
      "Mentor/mentee matching flow with realtime messaging",
      "Curated resource feed and structured onboarding",
      "Shipped from research → prototype → build",
    ],
    architecture: [
      { from: "Android Client", to: "Firebase Auth", via: "OAuth flow" },
      { from: "Client", to: "Firestore", via: "match queries" },
      { from: "Cloud Fn", to: "Client", via: "FCM push" },
    ],
    image: stemsync,
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
];

function LinkIcon({ type }: { type: "demo" | "github" | "case" }) {
  if (type === "github") return <Github className="h-4 w-4" />;
  if (type === "demo") return <ExternalLink className="h-4 w-4" />;
  return <ArrowUpRight className="h-4 w-4" />;
}

const stackRows = [
  { label: "Frontend", icon: Layers, key: "frontend" as const },
  { label: "Backend", icon: Server, key: "backend" as const },
  { label: "Data", icon: Database, key: "data" as const },
  { label: "Deploy", icon: Cloud, key: "deploy" as const },
];

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Engineering Case Studies"
      title={<>Shipped systems, not <span className="text-gradient italic">school projects.</span></>}
      description="Each project below is scoped like a real product — problem, architecture, stack, and impact. Built with the same rigor I'd bring to associate-level engineering work."
    >
      <div className="space-y-28 md:space-y-36">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* LEFT — Visual + Architecture */}
            <div className={`lg:col-span-7 space-y-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-card">
                <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-2 px-4 py-2.5 bg-background/70 backdrop-blur-md border-b border-border/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="ml-3 font-mono text-[10px] text-muted-foreground truncate">
                    ~/projects/{p.title.toLowerCase().replace(/[^a-z]+/g, "-")}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-primary/80">main</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-60 mix-blend-overlay z-10" />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-auto pt-8 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-12 left-4 z-20 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/80">
                  {p.tag}
                </div>
              </div>

              {/* Architecture flow */}
              <div className="rounded-2xl border border-border bg-card/30 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    System Flow
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    request lifecycle
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-1 overflow-x-auto">
                  {p.architecture.map((a, idx) => (
                    <div key={idx} className="flex sm:flex-col gap-2 sm:items-stretch items-center shrink-0">
                      <div className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 min-w-[120px]">
                        <div className="font-mono text-[10px] text-muted-foreground">node</div>
                        <div className="text-xs text-foreground">{a.from}</div>
                        <div className="font-mono text-[9px] text-primary/80 mt-1 truncate">
                          → {a.via}
                        </div>
                        <div className="text-xs text-foreground mt-0.5">{a.to}</div>
                      </div>
                      {idx < p.architecture.length - 1 && (
                        <span className="font-mono text-primary/60 text-xs self-center hidden sm:inline">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Narrative + Stack breakdown */}
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="font-mono text-xs text-primary mb-3">
                CASE STUDY — {p.index} / 04
              </div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.summary}</p>

              {/* Problem / Solution / Impact */}
              <div className="space-y-3 mb-6">
                {[
                  { k: "Problem", v: p.problem },
                  { k: "Solution", v: p.solution },
                  { k: "Impact", v: p.impact },
                ].map((b) => (
                  <div key={b.k} className="rounded-xl border border-border/60 bg-card/30 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1.5">
                      {b.k}
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed">{b.v}</p>
                  </div>
                ))}
              </div>

              {/* Stack breakdown */}
              <div className="rounded-xl border border-border/60 bg-card/20 p-4 mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Technical Stack
                </div>
                <div className="space-y-2.5">
                  {stackRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[80px_1fr] gap-3 items-start">
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <row.icon className="h-3 w-3 text-primary" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {row.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p[row.key].map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[10px] rounded border border-border/60 bg-background/40 px-2 py-0.5 text-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Key Engineering
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      l.type === "demo"
                        ? "bg-primary text-primary-foreground hover:shadow-amber"
                        : "border border-border hover:border-primary/40 text-foreground/90 hover:text-primary"
                    }`}
                  >
                    <LinkIcon type={l.type} />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
