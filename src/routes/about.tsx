import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shannon Holmes" },
      {
        name: "description",
        content:
          "Computer Information Systems graduate from Florida A&M University. Software engineering, AI, workflow systems, and analytics — with a leadership mindset.",
      },
      { property: "og:title", content: "About — Shannon Holmes" },
      {
        property: "og:description",
        content:
          "FAMU CIS background, full-stack and AI focus, workflow systems and analytics experience.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <Experience />
    </div>
  );
}
