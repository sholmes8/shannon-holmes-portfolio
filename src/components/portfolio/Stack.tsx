import { motion } from "motion/react";
import { Section } from "./Section";
import { Link } from "@tanstack/react-router";

type Tech = {
  name: string;
  appliedIn: string[];
};

const groups: { label: string; caption: string; items: Tech[] }[] = [
  {
    label: "Frontend",
    caption: "Interfaces I ship to production.",
    items: [
      { name: "React", appliedIn: ["STYLZ Career AI", "Filing Workflow UI", "This portfolio"] },
      { name: "TypeScript", appliedIn: ["Filing Workflow UI", "Portfolio (TanStack Start)"] },
      { name: "Tailwind CSS", appliedIn: ["All shipped frontends since 2023"] },
      { name: "Framer Motion", appliedIn: ["Cinematic UI · Portfolio · STYLZ landing"] },
    ],
  },
  {
    label: "Backend & APIs",
    caption: "Where business logic actually lives.",
    items: [
      { name: "Node.js / Express", appliedIn: ["STYLZ Career AI API", "Filing Workflow services"] },
      { name: "Python", appliedIn: ["EHR ETL scripts", "Data validation utilities"] },
      { name: "REST APIs", appliedIn: ["OpenAI integration", "Internal workflow endpoints"] },
      { name: "OpenAI API", appliedIn: ["STYLZ Career AI — structured LLM output"] },
    ],
  },
  {
    label: "Data & Analytics",
    caption: "From raw records to operating decisions.",
    items: [
      { name: "SQL / PostgreSQL", appliedIn: ["Filing Workflow schema", "EHR analytical model"] },
      { name: "Power BI", appliedIn: ["EHR throughput & quality dashboards"] },
      { name: "ETL Pipelines", appliedIn: ["EHR source-to-target migration"] },
      { name: "Excel (advanced)", appliedIn: ["Cogency Global — reconciliation & QA"] },
    ],
  },
  {
    label: "Mobile & Platform",
    caption: "Cross-platform delivery and ops.",
    items: [
      { name: "Java / Android", appliedIn: ["STEMSync mobile prototype"] },
      { name: "React Native", appliedIn: ["STEMSync mentorship app"] },
      { name: "Firebase", appliedIn: ["STEMSync auth & realtime messaging"] },
      { name: "Git · Vercel · Cloudflare", appliedIn: ["CI/CD for STYLZ & Portfolio"] },
    ],
  },
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Applied Stack"
      title={<>Tools mapped to <span className="text-gradient italic">real systems.</span></>}
      description="Not a skill wall — every tool below is tied to a shipped project, a workflow system, or an operational environment I've worked inside."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.06 }}
            className="relative rounded-2xl border border-border bg-card/40 p-7 overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity warm-glow" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                  {g.label}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{gi + 1} / 04
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-5">{g.caption}</p>

              <ul className="space-y-4">
                {g.items.map((it) => (
                  <li key={it.name} className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">{it.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {it.appliedIn.map((a) => (
                        <span
                          key={a}
                          className="font-mono text-[10px] text-muted-foreground bg-background/40 border border-border/40 rounded px-2 py-0.5"
                        >
                          → {a}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Applied in shipped work
        </span>
        <span className="opacity-50">·</span>
        <a
          href="#work"
          className="hover:text-primary transition-colors"
        >
          See projects ↗
        </a>
        <a
          href="#experience"
          className="hover:text-primary transition-colors"
        >
          See experience ↗
        </a>
      </div>
    </Section>
  );
}
