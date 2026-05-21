import { motion } from "motion/react";
import { Section } from "./Section";

const timeline = [
  {
    period: "2024 — Present",
    role: "Operations & Workflow Coordinator",
    org: "Cogency Global · Enterprise Compliance Services",
    body:
      "Embedded inside a high-volume, regulated enterprise environment that processes thousands of corporate filings and compliance workflows. I coordinate cross-team operations across deadline-driven SLAs — the same surface area enterprise workflow software is built for.",
    bullets: [
      "Manage high-volume document and compliance workflows across multiple jurisdictions.",
      "Coordinate cross-functional operations between client, legal, and processing teams.",
      "Identify process gaps and translate them into structured workflow improvements.",
      "Operate inside the kind of regulated, auditable environment SaaS workflow tools serve.",
    ],
    tags: ["Workflow Ops", "Compliance Systems", "Process Design", "Cross-team Coord."],
  },
  {
    period: "2023 — 2024",
    role: "Independent Software & Data Engineering",
    org: "Self-Directed Projects",
    body:
      "Shipped a portfolio of full-stack, AI-integrated, and data-driven builds — each scoped like a real product: defined problem, modeled architecture, deployed to production.",
    bullets: [
      "STYLZ Career AI — React/Node + OpenAI, deployed end-to-end.",
      "Business Filing Workflow System — modeled on enterprise compliance ops.",
      "EHR Migration & Analytics — Python ETL + Power BI dashboards.",
      "STEMSync — mobile mentorship platform (Java/Android + Firebase).",
    ],
    tags: ["Full-Stack", "AI Integration", "ETL & Analytics", "Mobile"],
  },
  {
    period: "2020 — 2024",
    role: "B.S. Computer Information Systems",
    org: "Florida A&M University",
    body:
      "Coursework spanning systems analysis, database design, software engineering, and networks — directly aligned with how I now think about workflow systems and applied software.",
    bullets: [
      "Systems Analysis & Design · Database Management (SQL).",
      "Software Engineering · Object-Oriented Programming (Java).",
      "Networking · Information Systems Architecture.",
    ],
    tags: ["CIS", "Systems Analysis", "Databases", "Software Eng."],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A path through <span className="text-gradient italic">systems and software.</span></>}
      description="The same instincts that run a regulated compliance workflow show up in how I architect software — workflow first, audit by default, operators as users."
    >
      <div className="relative max-w-5xl">
        <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
        <div className="space-y-14">
          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
            >
              <div className="absolute left-2 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary shadow-amber" />

              <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
                <div className="font-mono text-xs uppercase tracking-wider text-primary mb-2">
                  {t.period}
                </div>
                <div className="font-display text-2xl md:text-3xl leading-tight">{t.role}</div>
                <div className="text-muted-foreground text-sm mt-1">{t.org}</div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-12 mt-3 md:mt-0" : "md:pr-12 md:text-right mt-3 md:mt-0"}>
                <p className="text-foreground/80 leading-relaxed mb-4">{t.body}</p>
                <ul className={`space-y-1.5 mb-4 ${i % 2 === 0 ? "" : "md:text-left"}`}>
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/75">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-border px-2.5 py-1 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
