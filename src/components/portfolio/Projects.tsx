import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
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
  stack: string[];
  image: string;
  highlights: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "STYLZ Career AI",
    tag: "Flagship · AI Platform",
    description:
      "AI-powered resume optimization platform pairing OpenAI with a clean full-stack architecture — built for job seekers who need recruiter-grade output in minutes.",
    stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind", "Vercel"],
    image: stylz,
    highlights: [
      "End-to-end full-stack architecture with deployed production environment",
      "Prompt engineering + structured LLM output parsing",
      "Auth, rate-limiting and graceful API error handling",
    ],
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
      "Workflow-oriented compliance and filing management system inspired by real-world enterprise operations at Cogency Global — modeled around throughput, audit trails, and SLA visibility.",
    stack: ["React", "Node.js", "PostgreSQL", "REST", "Recharts"],
    image: filing,
    highlights: [
      "Stage-based pipeline with role permissions and audit log",
      "Operational KPI dashboard for filings, SLAs, and exceptions",
      "Normalized schema designed around real compliance workflows",
    ],
    links: [{ label: "Case Study", href: "#" }],
  },
  {
    index: "03",
    title: "EHR Data Migration & Analytics",
    tag: "Healthcare · Data",
    description:
      "Simulated healthcare data migration pipeline with reporting layer — mapping legacy EHR records into a clean analytical model with Power BI dashboards.",
    stack: ["SQL", "Excel", "Power BI", "Python", "ETL"],
    image: ehr,
    highlights: [
      "Source-to-target mapping with validation and reconciliation",
      "Power BI dashboards on patient volume, throughput, and quality",
      "Documentation of HIPAA-aware data handling patterns",
    ],
    links: [{ label: "Case Study", href: "#" }],
  },
  {
    index: "04",
    title: "STEMSync Mobile",
    tag: "Mobile · Education",
    description:
      "STEM mentorship and resource platform connecting students with educational opportunities and mentors — built mobile-first with clean component architecture.",
    stack: ["React Native", "Firebase", "Node.js", "Figma"],
    image: stemsync,
    highlights: [
      "Mentor/mentee matching flow with real-time messaging",
      "Curated resource feed and onboarding for new students",
      "Designed and shipped from research → prototype → build",
    ],
    links: [{ label: "GitHub", href: "#" }],
  },
];

export function Projects() {
  return (
    <Section
      id="work"
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
            className={`grid lg:grid-cols-12 gap-10 items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-60 mix-blend-overlay z-10" />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 z-20 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/80">
                  {p.tag}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="font-mono text-xs text-primary mb-3">PROJECT — {p.index}</div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-5">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-2 mb-6">
                {p.highlights.map((h) => (
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
  );
}
