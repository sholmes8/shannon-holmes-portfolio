import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import stylz from "@/assets/project-stylz.jpg";
import filing from "@/assets/project-filing.jpg";
import ehr from "@/assets/project-ehr.jpg";
import stemsync from "@/assets/project-stemsync.jpg";

type Project = {
  index: string;
  title: string;
  tag: string;
  description: string;
  problem: string;
  impact: string;
  stack: string[];
  image: string;
  features: string[];
  links?: { label: string; href: string; type: "demo" | "github" | "case" }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "STYLZ Career AI",
    tag: "Flagship · AI Platform",
    description:
      "AI-powered resume optimization platform pairing OpenAI with a clean full-stack architecture — built for job seekers who need recruiter-grade output in minutes.",
    problem:
      "Job seekers spend hours rewriting resumes for each role with no guarantee of ATS or recruiter alignment.",
    impact:
      "Cuts resume tailoring from hours to under two minutes with structured, recruiter-ready output.",
    stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind", "Vercel"],
    image: stylz,
    features: [
      "End-to-end full-stack architecture deployed to production",
      "Prompt engineering with structured LLM output parsing",
      "Auth, rate-limiting, and graceful API error handling",
    ],
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "02",
    title: "Business Filing Workflow System",
    tag: "Enterprise · Workflow",
    description:
      "Workflow-oriented compliance and filing management system inspired by real-world enterprise operations — modeled around throughput, audit trails, and SLA visibility.",
    problem:
      "Compliance teams juggle filings across spreadsheets and email, losing audit trails and missing SLA windows.",
    impact:
      "Centralizes pipeline visibility, surfaces SLA risk early, and produces an auditable record by default.",
    stack: ["React", "Node.js", "PostgreSQL", "REST", "Recharts"],
    image: filing,
    features: [
      "Stage-based pipeline with role permissions and audit log",
      "Operational KPI dashboard for filings, SLAs, and exceptions",
      "Normalized schema modeled on real compliance workflows",
    ],
    links: [
      { label: "Case Study", href: "#", type: "case" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "03",
    title: "EHR Data Migration & Analytics",
    tag: "Healthcare · Data",
    description:
      "Simulated healthcare data migration pipeline with reporting layer — mapping legacy EHR records into a clean analytical model with Power BI dashboards.",
    problem:
      "Legacy EHR exports arrive inconsistent and unreconciled, blocking analytics and clinical reporting.",
    impact:
      "Delivers a validated source-to-target pipeline and dashboards leadership can act on day one.",
    stack: ["SQL", "Python", "Power BI", "Excel", "ETL"],
    image: ehr,
    features: [
      "Source-to-target mapping with validation and reconciliation",
      "Power BI dashboards on patient volume, throughput, and quality",
      "HIPAA-aware data handling patterns and documentation",
    ],
    links: [
      { label: "Case Study", href: "#", type: "case" },
      { label: "GitHub", href: "#", type: "github" },
    ],
  },
  {
    index: "04",
    title: "STEMSync Mobile",
    tag: "Mobile · Education",
    description:
      "STEM mentorship and resource platform connecting students with educational opportunities and mentors — built mobile-first with clean component architecture.",
    problem:
      "Underrepresented STEM students lack structured access to mentors and curated learning resources.",
    impact:
      "Creates a low-friction matching flow and curated feed that gets students into mentorship faster.",
    stack: ["React Native", "Firebase", "Node.js", "Figma"],
    image: stemsync,
    features: [
      "Mentor/mentee matching flow with real-time messaging",
      "Curated resource feed and onboarding for new students",
      "Designed and shipped from research → prototype → build",
    ],
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

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title={<>Case studies, not <span className="text-gradient italic">school projects.</span></>}
      description="Each project below is shipped, deployed, or production-modeled — engineered with the same rigor I'd bring to associate-level work at a real product team."
    >
      <div className="space-y-24 md:space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-card">
                {/* Editor chrome */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-2 px-4 py-2.5 bg-background/70 backdrop-blur-md border-b border-border/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="ml-3 font-mono text-[10px] text-muted-foreground truncate">
                    ~/projects/{p.title.toLowerCase().replace(/[^a-z]+/g, "-")}
                  </span>
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
            </div>

            <div className="lg:col-span-5">
              <div className="font-mono text-xs text-primary mb-3">
                PROJECT — {p.index} / 04
              </div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-5">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl border border-border/60 bg-card/30 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                    Problem
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed">{p.problem}</p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card/30 p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
                    Impact
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed">{p.impact}</p>
                </div>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Key Features
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-foreground/80">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

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

              <div className="flex flex-wrap gap-3">
                {p.links?.map((l) => (
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
