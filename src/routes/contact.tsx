import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shannon Holmes" },
      {
        name: "description",
        content:
          "Get in touch with Shannon Holmes. Open to Associate Software Engineer and Full-Stack Developer roles.",
      },
      { property: "og:title", content: "Contact — Shannon Holmes" },
      {
        property: "og:description",
        content: "Reach out about roles, projects, or collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
