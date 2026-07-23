import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Axion AI | Axion Systems",
  description:
    "Business AI solutions, embedded AI systems, robotics, intelligent software, and Enginuity Workspace from Axion AI.",
};

export default function AxionAIPage() {
  return (
    <DivisionPage
      accent="bg-emerald-950"
      capabilities={[
        "Business AI workflow tools",
        "Embedded AI and edge intelligence",
        "Robotics and automation support",
        "Engineering software dashboards",
        "AI-assisted documentation and operations",
        "Enginuity Workspace development",
      ]}
      division="Axion AI"
      heroImage="/images/generated/prototype-robotics-bench.png"
      intro="AI systems for businesses, embedded products, and engineering teams."
      overview="Axion AI builds practical AI tools for operations, technical workflows, embedded systems, robotics, and engineering education. AI accelerates the work, but expert human review keeps the output grounded."
      projects={[
        {
          title: "Business AI solutions",
          text: "Internal assistants, workflow automation, data-aware tools, and practical AI systems that support daily business operations.",
          image: "/images/generated/office-ai-workflow.png",
        },
        {
          title: "Embedded AI and robotics",
          text: "Hardware-aware intelligence for sensors, controls, robotics prototypes, and connected technical products.",
          image: "/images/generated/prototype-robotics-bench.png",
        },
        {
          title: "Enginuity Workspace",
          text: "An AI-powered engineering education and technical workspace platform being developed under Axion AI.",
          image: "/images/riscv-computing.png",
        },
      ]}
      shortName="AI"
    />
  );
}
