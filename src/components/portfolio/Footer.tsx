import { Github, Linkedin, Mail, FileText } from "lucide-react";

const socials = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: FileText, label: "Resume" },
  { href: "mailto:hello@shannonholmes.dev", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-display text-lg">
            Shannon <span className="text-gradient">Holmes</span>
          </span>
          <span className="font-mono text-xs text-muted-foreground ml-4">
            © {new Date().getFullYear()} · Built with React & systems thinking.
          </span>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary/40 hover:text-primary transition-all"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
