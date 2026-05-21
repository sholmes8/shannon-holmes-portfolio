import { motion } from "motion/react";
import { Section } from "./Section";
import { Cpu, GitBranch, LineChart, Workflow } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "Software Engineering", body: "Full-stack architecture across React, Node, and Python — built for scale and clarity." },
  { icon: Workflow, title: "Workflow Systems", body: "Designing operational pipelines that translate business logic into elegant software." },
  { icon: LineChart, title: "Data & Analytics", body: "SQL, Power BI, and ETL thinking to turn raw data into decisions and dashboards." },
  { icon: GitBranch, title: "AI Integration", body: "Practical applications of LLMs and APIs to solve real, recruiter-grade problems." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>An engineer with <span className="text-gradient italic">design sense.</span></>}
      description="Computer Information Systems graduate from Florida A&M University. I build at the intersection of software, business systems, and AI — with a bias toward shipping work that's technically rigorous and human to use."
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-strong rounded-2xl p-8 shadow-card"
        >
          <div className="font-mono text-xs text-muted-foreground mb-4">/profile.json</div>
          <dl className="space-y-4 text-sm">
            {[
              ["Education", "B.S. Computer Information Systems · FAMU"],
              ["Focus", "Full-stack · AI · Workflow Automation"],
              ["Stack", "React · Node · Python · SQL · Power BI"],
              ["Role", "Associate Software Engineer"],
              ["Location", "Remote · US Eastern"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-border/50 pb-3 last:border-0">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="text-foreground text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/30 transition-all"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <p.icon className="h-5 w-5 text-primary mb-4" />
              <div className="font-display text-2xl mb-2">{p.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
