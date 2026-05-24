import { motion } from "motion/react";
import { Section } from "./Section";

export function Vision() {
  return (
    <Section
      id="vision"
      eyebrow="Vision"
      title={<>Where software, analytics, <span className="text-gradient italic">and people meet.</span></>}
      description="Long-term direction: AI-assisted operational tools, workflow automation, and scalable systems that center human decision-making and reproducible outcomes."
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6"
      >
        <p className="text-muted-foreground">
          I pursue engineering that reduces cognitive burden for operators, surfaces the right metrics at the right time, and combines software with analytics to drive measurable operational improvements.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">AI & Automation</div>
            <p className="text-sm text-foreground/85">Practical AI tooling that accelerates decision workflows and automates repetitive, error-prone tasks while preserving human control.</p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Systems & Scale</div>
            <p className="text-sm text-foreground/85">Scalable architectures that treat operators and auditability as first-class citizens — resilient, observable, and adapt to real-world operations.</p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Analytics-Driven</div>
            <p className="text-sm text-foreground/85">Data models and dashboards that align with operator workflows, delivering the right insights for rapid, confident action.</p>
          </div>

          <div className="rounded-xl border border-border bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Human-Centered</div>
            <p className="text-sm text-foreground/85">Designing tools that respect human context: explainable, auditable, and crafted to empower teams rather than replace them.</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
