import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | Axion Systems",
  description:
    "Axion Systems provides embedded systems development, legacy PCB redesign, hardware bring-up, technical software, AI tools, and engineering documentation.",
};

const services = [
  {
    title: "Embedded Systems Development",
    text: "Firmware, board-level interfaces, sensor integration, communication links, and hardware-aware software for technical products and prototypes.",
    image: "/images/services/embedded-systems-service.jpg",
    points: ["Firmware", "Sensor interfaces", "Control logic"],
  },
  {
    title: "Legacy PCB Redesign",
    text: "Modernization of aging electronics through schematic review, component replacement, PCB layout updates, and practical redesign paths.",
    image: "/images/services/legacy-pcb-redesign-service.jpg",
    points: ["Schematic review", "Board updates", "Manufacturing handoff"],
  },
  {
    title: "Hardware Bring-Up & Debugging",
    text: "Prototype validation, bench testing, signal checks, power verification, board diagnostics, and clear troubleshooting notes.",
    image: "/images/services/hardware-bringup-service.jpg",
    points: ["Power validation", "Signal debugging", "Bench testing"],
  },
  {
    title: "Technical Software & AI Tools",
    text: "Focused software for engineering workflows, data display, hardware communication, technical automation, and practical AI-assisted tooling.",
    image: "/images/services/technical-software-service.jpg",
    points: ["Dashboards", "Automation", "AI workflows"],
  },
  {
    title: "Product Electronics & Integration",
    text: "Electronics packaging, enclosure-aware PCB design, connector planning, internal layout, and field product integration.",
    image: "/images/services/product-integration-service.jpg",
    points: ["Enclosure fit", "Connector planning", "Packaging"],
  },
  {
    title: "Technical Documentation",
    text: "Engineering artifacts for review, manufacturing, debugging, maintenance, and technical handoff across hardware and software teams.",
    image: "/images/services/documentation-service.jpg",
    points: ["Schematics", "Test notes", "Design handoff"],
  },
];

const workflow = [
  "Clarify the hardware, software, or documentation gap.",
  "Define a practical engineering path with visible tradeoffs.",
  "Build, test, document, and hand off in usable increments.",
];

export default function ServicesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-950">
      <div aria-hidden className="engineering-fixed-backdrop" />
      <SiteHeader />

      <section className="relative z-10 border-b border-slate-200 bg-white/88 px-5 py-16 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Services
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Practical engineering support from board to software.
            </h1>
          </div>
          <div className="grid gap-5">
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
              Axion Systems helps teams move from technical uncertainty to
              working hardware, cleaner electronics, better embedded systems,
              and clearer engineering handoffs.
            </p>
            <div className="grid gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3">
              {workflow.map((item, index) => (
                <div className="rounded-2xl bg-white p-4" key={item}>
                  <p className="font-mono text-xs text-blue-700">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/95 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              key={service.title}
            >
              <div className="relative min-h-[255px] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>

              <div className="p-6">
                <p className="font-mono text-sm text-blue-700">
                  0{index + 1}
                </p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      key={point}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-7 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Engineering-first
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Support where technical details actually matter.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Start with the hardware, the failure mode, the product goal, or
              the workflow that needs to improve. Axion can help shape a
              realistic next step and execute it cleanly.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              Contact Axion
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
