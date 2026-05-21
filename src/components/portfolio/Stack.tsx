import { motion } from "motion/react";
import { Section } from "./Section";

const groups = [
  {
    label: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    label: "Data",
    items: ["SQL", "Power BI", "Excel", "ETL"],
  },
  {
    label: "Platform",
    items: ["Git / GitHub", "Vercel", "Render", "Firebase"],
  },
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={<>Tools I reach for, <span className="text-gradient italic">again and again.</span></>}
      description="A working stack — chosen for shipping speed, technical depth, and the ability to scale from prototype to production."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="relative rounded-2xl border border-border bg-card/40 p-6 overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity warm-glow" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                  {g.label}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{gi + 1}
                </span>
              </div>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center justify-between text-sm border-b border-border/50 pb-2 last:border-0"
                  >
                    <span className="text-foreground/90">{it}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
