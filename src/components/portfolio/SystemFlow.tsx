import { motion } from "motion/react";
import { Section } from "./Section";
import { Database, Workflow, LayoutDashboard, Cpu, GitBranch, Cloud } from "lucide-react";

const layers = [
  {
    label: "Input Layer",
    sub: "Operational reality",
    icon: Workflow,
    nodes: ["Compliance filings", "User uploads", "Legacy EHR exports", "Mentor sign-ups"],
  },
  {
    label: "Service Layer",
    sub: "Node · Python · APIs",
    icon: Cpu,
    nodes: ["Express endpoints", "OpenAI orchestration", "ETL & validation", "Auth & rate limiting"],
  },
  {
    label: "Data Layer",
    sub: "SQL · PostgreSQL · Firebase",
    icon: Database,
    nodes: ["Normalized schema", "Audit log", "Analytical model", "Realtime store"],
  },
  {
    label: "Surface Layer",
    sub: "React · Tailwind · Power BI",
    icon: LayoutDashboard,
    nodes: ["Workflow UI", "Operator dashboard", "Analytics report", "Mobile client"],
  },
];

const pipeline = [
  { label: "Local", icon: GitBranch, sub: "feature branch" },
  { label: "GitHub", icon: GitBranch, sub: "PR · review" },
  { label: "CI", icon: Cpu, sub: "build · type-check" },
  { label: "Vercel / CF", icon: Cloud, sub: "preview · prod" },
];

export function SystemFlow() {
  return (
    <Section
      id="systems"
      eyebrow="Systems Thinking"
      title={<>How I architect <span className="text-gradient italic">an application.</span></>}
      description="A consistent mental model behind every project — from compliance workflows to AI tools. Each layer maps to specific technologies and a clear operational responsibility."
    >
      {/* Architecture stack */}
      <div className="relative rounded-2xl border border-border bg-card/30 p-6 md:p-10 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-4 gap-4">
          {layers.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-border/60 bg-background/40 backdrop-blur-sm p-5"
            >
              <div className="absolute -top-2 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-primary bg-background px-2">
                Layer 0{i + 1}
              </div>
              <div className="flex items-center gap-2.5 mb-1 mt-1">
                <l.icon className="h-4 w-4 text-primary" />
                <span className="font-display text-xl">{l.label}</span>
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mb-4">{l.sub}</div>
              <ul className="space-y-1.5">
                {l.nodes.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-xs text-foreground/75">
                    <span className="h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>

              {i < layers.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 items-center">
                  <div className="h-px w-6 bg-gradient-to-r from-primary/60 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative mt-8 font-mono text-[10px] text-muted-foreground tracking-wider">
          ↳ Same pattern, scaled across STYLZ Career AI · Filing Workflow · EHR Analytics · STEMSync
        </div>
      </div>

      {/* Deployment pipeline */}
      <div className="mt-10 grid lg:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 rounded-2xl border border-border bg-card/40 p-7"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Deployment Pipeline
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              git → CI → edge
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {pipeline.map((p, i) => (
              <div key={p.label} className="flex items-center gap-2 shrink-0">
                <div className="rounded-lg border border-border/60 bg-background/40 px-4 py-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <p.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-sm text-foreground">{p.label}</span>
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">{p.sub}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <span className="font-mono text-primary/60 text-sm">→</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-[10px] font-mono">
            <div className="rounded-md border border-border/50 bg-background/30 px-3 py-2">
              <div className="text-muted-foreground">build</div>
              <div className="text-primary">passing</div>
            </div>
            <div className="rounded-md border border-border/50 bg-background/30 px-3 py-2">
              <div className="text-muted-foreground">deploys</div>
              <div className="text-primary">vercel · cloudflare</div>
            </div>
            <div className="rounded-md border border-border/50 bg-background/30 px-3 py-2">
              <div className="text-muted-foreground">uptime</div>
              <div className="text-primary">production-ready</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card/40 p-7"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
            Engineering Principles
          </div>
          <ul className="space-y-3 text-sm text-foreground/80">
            {[
              "Model the workflow before the schema.",
              "Audit trails by default, not as an afterthought.",
              "Ship behind feature flags; observe before scaling.",
              "Treat operators as primary users.",
            ].map((p) => (
              <li key={p} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
