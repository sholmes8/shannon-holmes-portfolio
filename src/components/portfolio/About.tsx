import { motion } from "motion/react";
import { useState } from "react";
import { Award, Cpu, Download, FileText, GraduationCap, GitBranch, LineChart, Workflow, X } from "lucide-react";
import { Section } from "./Section";

const focusAreas = [
  { icon: Cpu, title: "Software Development", desc: "Full-stack systems built with React, Node, Python." },
  { icon: Workflow, title: "Systems Design", desc: "Workflows that connect data, logic, and action." },
  { icon: LineChart, title: "Data & Analytics", desc: "Dashboards and pipelines that drive decisions." },
  { icon: GitBranch, title: "Applied AI", desc: "Practical LLM and API integration for automation." },
];

const education = {
  degree: "B.S. Computer Information Systems",
  school: "Florida A&M University",
  focus: ["Software Development", "Data Analytics", "Information Systems", "Workflow Systems"],
};

const certifications = [
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI — Data Visualization",
  "OpenAI API & Prompt Engineering",
];

const skillsByCategory = {
  Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  Frontend: ["React", "Vite", "Tailwind"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Data: ["Power BI", "PostgreSQL", "Excel"],
  "AI & Deployment": ["OpenAI API", "Vercel", "Render", "GitHub"],
};

export function About() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>A developer with <span className="text-gradient italic">systems thinking.</span></>}
      description="Computer Information Systems graduate from Florida A&M University focused on full-stack development, AI integration, and workflow systems. My work combines 
      technical development, systems thinking and user-focused design to create software, dashboards, and operational tools that are intuitive to use, visually thoughtful, and built to solve real business problems."
    >
      <div className="space-y-8">
        {/* SECTION 1: Intro + Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:shadow-amber transition-all"
          >
            <FileText className="h-4 w-4" /> Preview Resume
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/5 transition-all"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>

        {/* SECTION 2: Foundation Grid — Education + Tech */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Education + Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card/40 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Foundation</span>
            </div>

            <div className="mb-8">
              <div className="font-display text-lg mb-1">{education.degree}</div>
              <div className="text-sm text-muted-foreground mb-3">{education.school}</div>
              <div className="flex flex-wrap gap-2">
                {education.focus.map((focus) => (
                  <span
                    key={focus}
                    className="inline-block text-[11px] uppercase tracking-wider rounded-full border border-border/50 bg-background/40 px-3 py-1"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border/30 pt-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">Certifications</div>
              <ul className="space-y-2 text-sm text-foreground/80">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Technical Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-border bg-card/40 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Technical Skills</span>
            </div>

            <div className="grid gap-5 text-sm text-foreground/80">
              {Object.entries(skillsByCategory).map(([category, items]) => (
                <div key={category}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{category}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="inline-block text-[9px] uppercase tracking-wider rounded-full border border-border/50 bg-background/40 px-2.5 py-0.5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: Areas of Focus — Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-border bg-card/40 p-6"
        >
          <div className="mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Areas of Focus</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border/40 bg-background/20 p-5 hover:border-primary/40 hover:bg-background/40 transition-all"
              >
                <div className="absolute -inset-1 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur" />

                <div className="flex gap-3">
                  <area.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="font-display text-lg">{area.title}</div>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-60 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
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
                  CIS graduate building full-stack, AI-integrated, and workflow-driven software. Operational depth from regulated enterprise environments; product taste shaped by modern SaaS aesthetics.
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Education
                </div>
                <div className="font-display text-xl">{education.degree}</div>
                <div className="text-xs text-muted-foreground">{education.school} · 2020 — 2024</div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Core Stack
                </div>
                <p className="text-foreground/80">
                  React · TypeScript · Node.js · Python · SQL · Power BI · OpenAI · Git · Vercel
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
                  Certifications
                </div>
                <ul className="space-y-2 text-foreground/80">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm">— {cert}</li>
                  ))}
                </ul>
              </div>

              <a
                href="/resume.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:shadow-amber transition-all"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
