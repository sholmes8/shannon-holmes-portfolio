import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

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
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
