import { motion } from "motion/react";
import { useState } from "react";
import { Download, FileText, X, Award, Briefcase, GraduationCap, Cpu } from "lucide-react";
import { Section } from "./Section";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  Frontend: ["React", "Tailwind", "Framer Motion", "Vite"],
  Backend: ["Node.js", "Express", "REST APIs", "Firebase"],
  Data: ["PostgreSQL", "Power BI", "Excel", "ETL Pipelines"],
  Platform: ["Git/GitHub", "Vercel", "Render", "Cloudflare"],
  AI: ["OpenAI API", "Prompt Engineering", "LLM Integration"],
};

const experience = [
  {
    role: "Operations & Workflow Coordinator",
    org: "Cogency Global",
    period: "2024 — Present",
    bullets: [
      "Coordinate compliance filings and operational workflows across regulated, deadline-driven systems.",
      "Translate enterprise process logic into software-modeled workflows and dashboards.",
    ],
  },
  {
    role: "Independent Software & Data Projects",
    org: "Self-Directed",
    period: "2023 — 2024",
    bullets: [
      "Shipped STYLZ Career AI — full-stack React/Node app with OpenAI integration.",
      "Built EHR data migration pipeline with Power BI analytics layer.",
      "Designed mobile-first STEM mentorship platform with real-time messaging.",
    ],
  },
];

const education = [
  {
    school: "Florida A&M University",
    degree: "B.S. Computer Information Systems",
    period: "2020 — 2024",
    notes: "Systems analysis · Databases · Software engineering · Networks",
  },
];

const certifications = [
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI — Data Visualization",
  "OpenAI API & Prompt Engineering",
];

export function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={<>The credentials behind <span className="text-gradient italic">the work.</span></>}
      description="A condensed view of my technical skills, experience, and education — exportable as a recruiter-ready PDF."
    >
      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href="/resume.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all"
        >
          <Download className="h-4 w-4" /> Download Resume
        </a>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition-all"
        >
          <FileText className="h-4 w-4" /> Preview Resume
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card/40 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Technical Skills
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <div className="font-mono text-xs text-muted-foreground mb-3">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-wider rounded-full border border-border bg-background/40 px-3 py-1 text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-2 rounded-2xl border border-border bg-card/40 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Experience
            </span>
          </div>
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role} className="border-l border-border/60 pl-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </div>
                <div className="font-display text-2xl mt-1">{e.role}</div>
                <div className="text-sm text-muted-foreground">{e.org}</div>
                <ul className="mt-3 space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/80">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education + Certs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Education
              </span>
            </div>
            {education.map((ed) => (
              <div key={ed.school}>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {ed.period}
                </div>
                <div className="font-display text-xl mt-1">{ed.degree}</div>
                <div className="text-sm text-muted-foreground">{ed.school}</div>
                <p className="mt-3 text-xs text-foreground/70 leading-relaxed">{ed.notes}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Certifications
              </span>
            </div>
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-foreground/80">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Preview modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl glass-strong shadow-card p-8 md:p-12"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary/40 transition-all"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="font-mono text-xs text-primary mb-2">/resume.pdf · preview</div>
            <h3 className="font-display text-4xl mb-1">Shannon Holmes</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Software Engineer · Full-Stack Developer · hello@shannonholmes.dev
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Summary
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  CIS graduate building full-stack, AI-integrated, and workflow-driven
                  software. Operational depth from regulated enterprise environments;
                  product taste shaped by modern SaaS aesthetics.
                </p>
              </div>

              {experience.map((e) => (
                <div key={e.role}>
                  <div className="flex justify-between items-baseline">
                    <div className="font-display text-xl">{e.role}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{e.period}</div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{e.org}</div>
                  <ul className="space-y-1">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-foreground/80 text-sm">— {b}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Education
                </div>
                <div className="font-display text-xl">B.S. Computer Information Systems</div>
                <div className="text-xs text-muted-foreground">Florida A&M University · 2020 — 2024</div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Core Stack
                </div>
                <p className="text-foreground/80">
                  React · TypeScript · Node.js · Python · SQL · Power BI · OpenAI · Git · Vercel
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:shadow-amber transition-all"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
