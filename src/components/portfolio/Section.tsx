import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary/60" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
