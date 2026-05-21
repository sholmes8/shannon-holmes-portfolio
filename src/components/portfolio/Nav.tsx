import { useEffect, useState } from "react";
import { Menu, X, Github } from "lucide-react";

const links = [
  { href: "#top", label: "Home", id: "top" },
  { href: "#about", label: "About", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#systems", label: "Systems", id: "systems" },
  { href: "#stack", label: "Stack", id: "stack" },
  { href: "#resume", label: "Resume", id: "resume" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-5 py-3 transition-all ${
            scrolled || open ? "glass-strong shadow-card" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group shrink-0">
            <span className="h-2 w-2 rounded-full bg-primary shadow-amber" />
            <span className="font-display text-lg md:text-xl tracking-tight">
              Shannon <span className="text-gradient">Holmes</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative transition-colors ${
                    isActive ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-primary transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase rounded-full border border-primary/30 bg-primary/10 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get in touch
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 shadow-card animate-fade-in">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-2 border-b border-border/40 last:border-0 text-sm flex items-center justify-between ${
                    active === l.id ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{links.indexOf(l) + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
