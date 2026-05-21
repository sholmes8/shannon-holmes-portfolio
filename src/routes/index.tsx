import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import stylz from "@/assets/project-stylz.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shannon Holmes — Software Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shannon Holmes — Associate Software Engineer building full-stack, AI, and workflow-driven software with technical precision and design taste.",
      },
      { property: "og:title", content: "Shannon Holmes — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack, AI, and workflow systems portfolio. React · Node · Python · SQL · Power BI.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Featured Work"
        title={<>Flagship build — <span className="text-gradient italic">STYLZ Career AI.</span></>}
        description="AI-powered resume optimization platform pairing OpenAI with a clean full-stack architecture. A glimpse into how I ship — full case studies live on the Work page."
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl border border-border shadow-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-60 mix-blend-overlay z-10" />
              <img
                src={stylz}
                alt="STYLZ Career AI"
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 z-20 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/80">
                Flagship · AI Platform
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-primary mb-3">PROJECT — 01</div>
            <h3 className="font-display text-4xl md:text-5xl leading-tight mb-5">STYLZ Career AI</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              End-to-end full-stack platform pairing OpenAI with a deployed Node/React stack —
              built so job seekers get recruiter-grade resume output in minutes.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Node.js", "OpenAI API", "Tailwind", "Vercel"].map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] uppercase tracking-wider rounded-full border border-border bg-card/50 px-3 py-1 text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all"
            >
              See all case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
