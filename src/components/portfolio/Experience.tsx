import { motion } from "motion/react";
import { Section } from "./Section";

const timeline = [
  {
    period: "2024 — Present",
    role: "Operations & Workflow Coordinator",
    org: "Cogency Global",
    body:
      "Operate inside a regulated, deadline-driven enterprise — coordinating compliance filings, business workflows, and cross-team systems. Translating that operational depth into software that mirrors how teams actually work.",
    tags: ["Workflow", "Operations", "Process Design"],
  },
  {
    period: "2023 — 2024",
    role: "Software & Data Projects",
    org: "Independent",
    body:
      "Shipped full-stack and AI-integrated builds: STYLZ Career AI, EHR migration analytics, mobile mentorship platform. Designed for portfolio depth and recruiter credibility.",
    tags: ["Full-Stack", "AI", "Analytics"],
  },
  {
    period: "2020 — 2024",
    role: "B.S. Computer Information Systems",
    org: "Florida A&M University",
    body:
      "Coursework spanning systems analysis, databases, networks, and software engineering — paired with self-driven work in modern web, data, and AI.",
    tags: ["CIS", "Systems", "Databases"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A path through <span className="text-gradient italic">systems and software.</span></>}
    >
      <div className="relative max-w-4xl">
        <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
        <div className="space-y-12">
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
                <div className="font-display text-2xl md:text-3xl">{t.role}</div>
                <div className="text-muted-foreground text-sm mt-1">{t.org}</div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-12 mt-3 md:mt-0" : "md:pr-12 md:text-right mt-3 md:mt-0"}>
                <p className="text-foreground/80 leading-relaxed">{t.body}</p>
                <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
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
