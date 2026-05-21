import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import stylz from "@/assets/project-stylz.jpg";
import filing from "@/assets/project-filing.jpg";
import ehr from "@/assets/project-ehr.jpg";
import stemsync from "@/assets/project-stemsync.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Case Studies by Shannon Holmes" },
      {
        name: "description",
        content:
          "Selected case studies: STYLZ Career AI, Business Filing Workflow System, EHR Data Migration & Analytics, and STEMSync Mobile.",
      },
      { property: "og:title", content: "Work — Shannon Holmes" },
      {
        property: "og:description",
        content:
          "Full-stack, AI, workflow, and data engineering case studies built with recruiter-grade rigor.",
      },
    ],
  }),
  component: WorkPage,
});

type Project = {
  index: string;
  title: string;
  tag: string;
  description: string;
  problem: string;
  impact: string;
  features: string[];
  stack: string[];
  image: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "STYLZ Career AI",
    tag: "Flagship · AI Platform",
    description:
      "AI-powered resume optimization platform pairing OpenAI with a clean full-stack architecture — built for job seekers who need recruiter-grade output in minutes.",
    problem:
      "Job seekers spend hours rewriting resumes for each role and still get filtered out by ATS systems. Existing tools are generic, expensive, or paywalled behind subscriptions.",
    impact:
      "Reduces resume tailoring time from ~2 hours to under 3 minutes per role. Demonstrated end-to-end LLM product thinking — from prompt design to deployed UX — in a portfolio piece recruiters can actually use.",
    features: [
      "Structured LLM output parsing with role-targeted prompt engineering",
      "Auth, rate-limiting, and graceful API error handling",
      "Deployed production environment with environment-scoped secrets",
      "Responsive React UI with optimistic loading states",
    ],
    stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind", "Vercel"],
    image: stylz,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    index: "02",
    title: "Business Filing Workflow System",
    tag: "Enterprise · Workflow",
    description:
      "Workflow-oriented compliance and filing management system inspired by real enterprise operations at Cogency Global — modeled around throughput, audit trails, and SLA visibility.",
    problem:
      "Compliance teams juggle filings across states, agents, and deadlines with spreadsheets and email chains, leading to missed SLAs and zero audit visibility.",
    impact:
      "Models a real enterprise workflow into a single pipeline with role-based access, exception handling, and an operational KPI dashboard — translating my Cogency Global operations experience into a software product.",
    features: [
      "Stage-based pipeline with role permissions and full audit log",
      "Operational KPI dashboard for filings, SLAs, and exceptions",
      "Normalized PostgreSQL schema modeled on real compliance workflows",
      "Recharts-powered analytics with drill-down by jurisdiction",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST", "Recharts"],
    image: filing,
    links: [{ label: "Case Study", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    index: "03",
    title: "EHR Data Migration & Analytics",
    tag: "Healthcare · Data",
    description:
      "Simulated healthcare data migration pipeline with reporting layer — mapping legacy EHR records into a clean analytical model with Power BI dashboards.",
    problem:
      "Healthcare orgs migrating off legacy EHR systems lose data fidelity and reporting continuity, putting clinical and compliance reporting at risk.",
    impact:
      "Demonstrates an end-to-end ETL pattern — source-to-target mapping, validation, reconciliation, and an analytics layer — with HIPAA-aware data handling documentation suitable for healthcare hiring tracks.",
    features: [
      "Source-to-target mapping with validation and reconciliation",
      "Power BI dashboards on patient volume, throughput, and quality",
      "Python-based ETL with row-level error reporting",
      "Documented HIPAA-aware data handling patterns",
    ],
    stack: ["SQL", "Python", "Power BI", "Excel", "ETL"],
    image: ehr,
    links: [{ label: "Case Study", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    index: "04",
    title: "STEMSync Mobile",
    tag: "Mobile · Education",
    description:
      "STEM mentorship and resource platform connecting students with educational opportunities and mentors — built mobile-first with clean component architecture.",
    problem:
      "Students from underrepresented backgrounds lack consistent access to STEM mentors and curated learning resources, especially outside of major metro areas.",
    impact:
      "Designed and shipped a mobile-first mentorship product from research through prototype to build — showcasing product thinking, cross-platform engineering, and a community impact angle for mission-driven employers.",
    features: [
      "Mentor / mentee matching flow with real-time messaging",
      "Curated resource feed and onboarding for new students",
      "Push notifications and persisted auth via Firebase",
      "Figma-driven design system with reusable components",
    ],
    stack: ["React Native", "Firebase", "Node.js", "Figma"],
    image: stemsync,
    links: [{ label: "GitHub", href: "#" }],
  },
];

function WorkPage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Selected Work"
        title={<>Case studies, not <span className="text-gradient italic">school projects.</span></>}
        description="Each project below is shipped, deployed, or production-modeled — engineered with the same rigor I'd bring to associate-level work at a real product team."
      >
        <div className="space-y-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-12 gap-10 items-start ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6 lg:sticky lg:top-28">
                <div className="group relative overflow-hidden rounded-2xl border border-border shadow-card">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-60 mix-blend-overlay z-10" />
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 z-20 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/80">
                    {p.tag}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-primary mb-3">PROJECT — {p.index}</div>
                <h3 className="font-display text-4xl md:text-5xl leading-tight mb-5">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{p.description}</p>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-2">
                      Problem
                    </div>
                    <p className="text-foreground/85 text-sm leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-2">
                      Impact
                    </div>
                    <p className="text-foreground/85 text-sm leading-relaxed">{p.impact}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm text-foreground/85">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-wider rounded-full border border-border bg-card/50 px-3 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-champagne transition-colors"
                    >
                      {l.label.toLowerCase().includes("github") ? (
                        <Github className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}
