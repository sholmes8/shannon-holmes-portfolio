import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Section } from "@/components/portfolio/Section";
import { Stack } from "@/components/portfolio/Stack";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Shannon Holmes" },
      {
        name: "description",
        content:
          "Resume of Shannon Holmes — Associate Software Engineer. Skills, experience, education, and certifications.",
      },
      { property: "og:title", content: "Resume — Shannon Holmes" },
      {
        property: "og:description",
        content: "Skills, experience, and education for full-stack and AI engineering roles.",
      },
    ],
  }),
  component: ResumePage,
});

const experience = [
  {
    period: "2024 — Present",
    role: "Operations & Workflow Coordinator",
    org: "Cogency Global",
    bullets: [
      "Coordinate regulated compliance filings inside a deadline-driven enterprise workflow.",
      "Translate operational pipelines into software-modeled processes — direct inspiration for the Business Filing System project.",
      "Cross-team collaboration across legal, finance, and operations.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Independent Software & Data Projects",
    org: "Self-directed",
    bullets: [
      "Shipped full-stack and AI builds — STYLZ Career AI, EHR migration analytics, and STEMSync mobile.",
      "End-to-end ownership: design, architecture, build, and deploy.",
    ],
  },
];

const education = [
  {
    period: "2020 — 2024",
    title: "B.S. Computer Information Systems",
    org: "Florida A&M University (FAMU)",
    body: "Coursework in systems analysis, databases, networks, and software engineering — paired with independent work in modern web, data, and AI.",
  },
];

const certifications = [
  "Google Data Analytics — Coursera",
  "Microsoft Power BI — Self-directed",
  "OpenAI API & Prompt Engineering — Self-directed",
];

function ResumePage() {
  return (
    <div className="pt-24">
      <Section
        eyebrow="Resume"
        title={<>Engineering <span className="text-gradient italic">résumé.</span></>}
        description="A concise, recruiter-facing snapshot. Download the PDF or browse the highlights below."
      >
        <div className="mb-12">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all"
          >
            <Download className="h-4 w-4" /> Download Resume (PDF)
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="font-display text-3xl mb-6">Experience</h3>
              <div className="space-y-8">
                {experience.map((e) => (
                  <div key={e.role} className="border-l border-border pl-6 relative">
                    <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary shadow-amber" />
                    <div className="font-mono text-xs uppercase tracking-wider text-primary mb-1">
                      {e.period}
                    </div>
                    <div className="font-display text-2xl">{e.role}</div>
                    <div className="text-sm text-muted-foreground mb-3">{e.org}</div>
                    <ul className="space-y-2">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-foreground/85">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((e) => (
                  <div key={e.title} className="glass-strong rounded-2xl p-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-primary mb-1">
                      {e.period}
                    </div>
                    <div className="font-display text-2xl">{e.title}</div>
                    <div className="text-sm text-muted-foreground mb-3">{e.org}</div>
                    <p className="text-sm text-foreground/85 leading-relaxed">{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="glass-strong rounded-2xl p-6">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
                Technical Skills
              </h4>
              <ul className="space-y-2 text-sm text-foreground/85">
                <li><strong>Languages:</strong> JavaScript, TypeScript, Python, SQL</li>
                <li><strong>Frontend:</strong> React, Tailwind CSS, Framer Motion</li>
                <li><strong>Backend:</strong> Node.js, Express, REST APIs</li>
                <li><strong>Data:</strong> SQL, Power BI, Excel, ETL</li>
                <li><strong>AI:</strong> OpenAI API, Prompt Engineering</li>
                <li><strong>Platform:</strong> Git/GitHub, Vercel, Firebase, Render</li>
              </ul>
            </div>

            <div className="glass-strong rounded-2xl p-6">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
                Certifications
              </h4>
              <ul className="space-y-2 text-sm text-foreground/85">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Stack />
    </div>
  );
}
