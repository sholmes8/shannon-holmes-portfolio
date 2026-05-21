import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
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
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient italic">worth shipping.</span></>}
      description="Recruiters, hiring managers, and founders — I'm actively interviewing for associate / full-stack roles. The fastest path is the form below."
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-8 shadow-card space-y-5"
        >
          {[
            { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
            { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
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
          <div>
            <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the role or project…"
              className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:shadow-amber transition-all disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-5"
        >
          <a
            href="mailto:hello@shannonholmes.dev"
            className="group flex items-center justify-between glass rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-1">
                Email
              </div>
              <div className="font-display text-2xl">hello@shannonholmes.dev</div>
            </div>
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">
              Status
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">
              <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Open to <strong>Associate Software Engineer</strong> and{" "}
              <strong>Full-Stack Developer</strong> roles. Remote or US Eastern.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">
              Response
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Typically within 24 hours, Monday – Friday.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
