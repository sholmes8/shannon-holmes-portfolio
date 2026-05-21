import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-primary shadow-amber" />
            <span className="font-display text-xl tracking-tight">
              Shannon <span className="text-gradient">Holmes</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase rounded-full border border-primary/30 bg-primary/10 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
