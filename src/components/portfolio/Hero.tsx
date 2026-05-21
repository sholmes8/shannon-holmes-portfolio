import { motion } from "motion/react";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Background layers */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 warm-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:block absolute top-32 right-12 glass rounded-2xl p-5 w-64 animate-float"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          status: shipping
        </div>
        <div className="font-display text-2xl text-gradient">AI Systems</div>
        <div className="text-xs text-muted-foreground mt-1">resume optimization · live</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="hidden lg:block absolute bottom-32 left-10 glass rounded-2xl p-5 w-72 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="font-mono text-[11px] text-muted-foreground mb-2">~/portfolio/build.ts</div>
        <pre className="font-mono text-xs leading-relaxed text-foreground/80">
{`const engineer = {
  focus: ["full-stack",
    "AI", "workflow"],
  status: "associate-ready"
}`}
        </pre>
      </motion.div>

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for Associate / Full-Stack roles · 2026
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-6">
            Shannon
            <br />
            <span className="text-gradient italic">Holmes</span>
          </h1>

          <div className="font-mono text-sm md:text-base text-muted-foreground mb-8 tracking-wide">
            Software Engineer &nbsp;/&nbsp; Full-Stack Developer &nbsp;/&nbsp; AI &amp; Workflow Systems
          </div>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mb-12">
            I build modern software systems, AI-driven applications, and workflow-focused
            digital experiences that combine technical precision with intuitive design.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition-all"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary/40 transition-all"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary/40 transition-all"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70 uppercase">
        scroll
      </div>
    </section>
  );
}
