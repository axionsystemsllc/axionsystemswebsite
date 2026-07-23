import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Axion Manufacturing | Axion Systems",
  description:
    "Prototype manufacturing, modeling, design support, fixtures, and short-run production support from Axion Manufacturing.",
};

export default function AxionManufacturingPage() {
  return (
    <DivisionPage
      accent="bg-slate-950"
      capabilities={[
        "Prototype fabrication",
        "Design-for-manufacturing review",
        "CAD modeling and product iteration",
        "Fixtures, brackets, housings, and test articles",
        "Short-run production planning",
        "Manufacturing handoff documentation",
      ]}
      division="Axion Manufacturing"
      heroImage="/images/generated/shop-cnc-router.png"
      intro="Manufacturing support for prototypes, models, and short-run production."
      overview="Axion Manufacturing helps teams move from idea, sketch, CAD model, or early prototype into physical parts and production-ready thinking. The focus is fast communication, practical tradeoffs, and quick iteration."
      projects={[
        {
          title: "Prototype fixtures and housings",
          text: "Custom physical support for electronics, test setups, controls, and early product assemblies.",
          image: "/images/generated/shop-cnc-router.png",
        },
        {
          title: "Modeling and design refinement",
          text: "CAD-backed updates that help parts become easier to build, inspect, assemble, and revise.",
          image: "/images/real-projects/ground-station-cad.jpg",
        },
        {
          title: "Short-run production prep",
          text: "Manufacturing planning, practical documentation, and vendor-ready handoff for small batches.",
          image: "/images/generated/prototype-documentation-table.png",
        },
      ]}
      shortName="Manufacturing"
    />
  );
}
