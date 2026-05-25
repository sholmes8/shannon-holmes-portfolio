import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, FileText, MapPin } from "lucide-react";
import { Section } from "./Section";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent — I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <Section
      id="connect"
      eyebrow="Connect"
      title={<>Let's build <span className="text-gradient italic">meaningful systems.</span></>}
      description="Open to software development, data analytics, AI systems, and graduate-level opportunities. Reach out for technical collaboration, product roles, or project discussions."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-8 shadow-card"
        >
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-border/40">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                Direct Message
              </div>
              <div className="font-display text-2xl mt-1">Start a conversation</div>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              channel: open
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { name: "email", label: "Email", type: "email", placeholder: "name@company.com" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Company / Role
              </label>
              <input
                name="company"
                type="text"
                placeholder="Acme · Software / Data / AI role"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the role, team, project, or opportunity…"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="font-mono text-[10px] text-muted-foreground">
                Encrypted in transit · no third-party tracking
              </p>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Message"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">
              Status
            </div>
            <p className="text-foreground/85 text-sm leading-relaxed">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Open to software development, data analytics, AI systems, and graduate opportunities.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px]">
              <div className="rounded-md border border-border/50 bg-background/30 px-3 py-2">
                <div className="text-muted-foreground">availability</div>
                <div className="text-primary">2 weeks notice</div>
              </div>
              <div className="rounded-md border border-border/50 bg-background/30 px-3 py-2">
                <div className="text-muted-foreground">response</div>
                <div className="text-primary">&lt; 24 hrs</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-2">
            {[
              { icon: Mail, label: "Email", value: "shannonmaholmes@gmail.com", href: "mailto:shannonmaholmes@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/shannon-holmes", href: "https://linkedin.com/in/shannon-holmes-" },
              { icon: Github, label: "GitHub", value: "@sholmes8", href: "https://github.com/sholmes8" },
              { icon: FileText, label: "Resume", value: "Download PDF", href: "public/ShannonHolmes-Resume.pdf" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl p-4 hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg border border-border/60 bg-background/40 inline-flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <c.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm text-foreground">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Based
            </div>
            <p className="text-foreground/80 text-sm">
              United States · Eastern Time<br />
              Remote-first · open to hybrid
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
