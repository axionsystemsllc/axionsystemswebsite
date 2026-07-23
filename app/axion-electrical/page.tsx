import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Axion Electrical | Axion Systems",
  description:
    "PCB design, electrical systems, hardware integration, bring-up, wiring, and electronics troubleshooting from Axion Electrical.",
};

export default function AxionElectricalPage() {
  return (
    <DivisionPage
      accent="bg-slate-950"
      capabilities={[
        "PCB and schematic design",
        "Legacy board redesign",
        "Power and signal planning",
        "Electronics bring-up and debug",
        "Harnesses, wiring, and integration",
        "Hardware documentation and review",
      ]}
      division="Axion Electrical"
      heroImage="/images/generated/clean-hardware-bench.png"
      intro="Electrical design for boards, systems, and field-ready hardware."
      overview="Axion Electrical supports PCB work, electronics integration, wiring, troubleshooting, and hardware decisions that need a clean path from bench testing to usable product behavior."
      projects={[
        {
          title: "Flight computer PCB",
          text: "Compact embedded electronics with sensor interfaces, power regulation, telemetry support, and review-ready schematic artifacts.",
          image: "/images/real-projects/flight-computer-pcb.jpg",
        },
        {
          title: "Industrial product electronics",
          text: "Board-level design, Ethernet-facing hardware, connector access, and enclosure-aware electronics packaging.",
          image: "/images/generated/clean-hardware-bench.png",
        },
        {
          title: "Schematic and hardware review",
          text: "Electrical documentation that supports debugging, manufacturing, maintenance, and long-term system clarity.",
          image: "/images/real-projects/flight-computer-schematic.jpg",
        },
      ]}
      shortName="Electrical"
    />
  );
}
