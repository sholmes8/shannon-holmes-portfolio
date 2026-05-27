import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";

const timeline = [
  {
    period: "Oct 2025 — Present",
    role: "Fulfillment Specialist",
    org: "Cogency Global Inc. · Enterprise Compliance Services",
    body: "Drive operational accuracy across regulated corporate filing workflows, compliance processing, and structured business documentation systems.",
    bullets: [
      "Process high-volume corporate filings and compliance records while maintaining strict data accuracy standards.",
      "Identify filing inconsistencies and workflow bottlenecks across multi-step operational processes.",
      "Analyze workflow trends and operational discrepancies to improve reporting visibility and processing efficiency.",
    ],
    tags: ["Compliance", "Workflow Operations", "Structured Data", "Process Improvement"],
  },
  {
    period: "Apr 2025 — Dec 2025",
    role: "Front Desk Associate",
    org: "Reston Radiology Consultants · Healthcare Operations",
    body: "Managed patient workflow coordination, healthcare records, and EMR-driven front-office operations in a fast-paced clinical environment.",
    bullets: [
      "Coordinated patient scheduling, EMR documentation, and healthcare data entry across daily operations.",
      "Maintained secure insurance and patient records with strong attention to compliance and accuracy.",
      "Improved workflow organization through structured documentation management and operational support.",
    ],
    tags: ["Healthcare Systems", "EMR", "Scheduling", "Records Management"],
  },

  {
    period: "Jun 2024 – Dec 2024",
    role: "IT Assistant",
    org: "Florida State University · Information Technology Services",
    body: "Delivered technical support and workstation troubleshooting across university systems, software environments, and end-user operations.",
    bullets: [
      "Resolved hardware, software, and workstation issues for students, faculty, and staff in a high-volume IT environment.",
      "Configured desktops, peripherals, and software applications to improve system reliability and usability.",
      "Documented troubleshooting procedures and ticket resolutions to streamline future technical support workflows.",
    ],
    tags: ["IT Support", "Troubleshooting", "System Configuration", "End-User Support"],
  },

  {
    period: "May 2024 – Nov 2024",
    role: "Customer Service & Compliance Analyst",
    org: "Delvepoint / IRB Search · Compliance & Verification Operations",
    body: "Performed structured compliance analysis, operational reporting, and large-scale data validation within regulated verification workflows.",
    bullets: [
      "Validated and analyzed compliance data across 700+ client records while maintaining reporting accuracy.",
      "Improved workflow efficiency through automated validation and integrity-checking processes.",
      "Generated operational reports and resolved compliance-related workflow discrepancies.",
    ],
    tags: ["Compliance Analytics", "Structured Data", "Reporting", "Workflow Analysis"],
  },

  {
    period: "Jun 2020 – May 2024",
    role: "Healthcare & Data Operations Specialist",
    org: "Heritage Family Practice · Healthcare Information Systems",
    body: "Oversaw healthcare workflow operations, EMR data management, scheduling coordination, and patient information systems.",
    bullets: [
      "Managed and migrated 2,000+ patient records within NextGen EMR systems while ensuring HIPAA compliance.",
      "Optimized scheduling, insurance verification, and workflow operations for 50+ daily patients.",
      "Reduced documentation errors through structured data validation and operational process improvements.",
    ],
    tags: ["EMR", "Healthcare Data", "HIPAA", "Workflow Operations"],
  },

  {
    period: "May 2022 — Sep 2022",
    role: "Customer Service Representative",
    org: "Avis / Budget Group, Inc. · Customer Operations",
    body: "Handled enterprise reservation systems, customer database operations, and service coordination within a high-volume transportation environment.",
    bullets: [
      "Operated enterprise reservation and customer management systems to support daily business operations.",
      "Maintained accurate customer records while resolving service and scheduling issues efficiently.",
      "Delivered operational and customer support within a fast-paced service environment.",
    ],
    tags: ["Customer Systems", "Databases", "Operations", "Service Support"],
  },
  {
    period: "Jan 2021 — May 2022",
    role: "Mobile Expert",
    org: "Boost Mobile · Consumer Technology Support",
    body: "Provided technical troubleshooting, mobile device configuration, and customer-facing technology support services.",
    bullets: [
      "Diagnosed and resolved mobile hardware, software, and connectivity issues for customers.",
      "Configured smartphones, applications, and account settings to improve usability and device performance.",
      "Delivered technical assistance and product support across mobile services and consumer technology systems.",
    ],
    tags: ["Mobile Tech", "Technical Support", "Troubleshooting", "Device Configuration"],
  },
  {
    period: "2023 — Present",
    role: "Independent Software & Data Projects",
    org: "Self-Directed Development",
    body:
      "Built full-stack, analytics, and AI-integrated applications focused on workflow systems, operational tooling, and data-driven decision making.",
    bullets: [
      "Developed AI-powered and full-stack applications using React, Node.js, and APIs.",
      "Built workflow analysis, ETL, and reporting projects using SQL, Python, and Power BI.",
      "Designed systems focused on operational efficiency, analytics, and scalable workflows.",
    ],
    tags: ["Full-Stack", "AI Integration", "Analytics", "Workflow Systems"],
  },
  {
    period: "2021 — 2026",
    role: "B.S. Computer Information Systems",
    org: "Florida A&M University",
    body:
      "Built a foundation in systems analysis, databases, software development, networking, and applied business technology.",
    bullets: [
      "Studied systems analysis, database management, and software development.",
      "Built technical projects connecting analytics, workflows, and operational systems.",
      "Developed applied knowledge in networking, programming, and enterprise systems.",
    ],
    tags: ["CIS", "Systems Analysis", "Databases", "Software Development"],
  },
];

export function Experience() {
  const [current, setCurrent] = useState(0);
  const item = timeline[current];

  const next = () => {
    setCurrent((prev) => (prev + 1) % timeline.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A path through{" "}
          <span className="text-gradient italic">systems and software.</span>
        </>
      }
      description="The same instincts that run a regulated compliance workflow show up in how I architect software — workflow first, audit by default, operators as users."
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full border border-border bg-background/60 text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            ←
          </button>

          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {current + 1} / {timeline.length}
          </div>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full border border-border bg-background/60 text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            →
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.96 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-[2rem] border border-border bg-card/60 backdrop-blur-sm p-6 md:p-10 shadow-amber"
          >
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-primary mb-3">
                  {item.period}
                </div>

                <h3 className="font-display text-3xl md:text-5xl leading-tight mb-3">
                  {item.role}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base">
                  {item.org}
                </p>
              </div>

              <div>
                <p className="text-foreground/80 leading-relaxed mb-5">
                  {item.body}
                </p>

                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm md:text-base text-foreground/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-border px-3 py-1.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {timeline.map((t, index) => (
            <button
              key={t.role}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}