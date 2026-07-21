import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | Axion Systems",
  description:
    "Axion Systems services across manufacturing, electrical design, business AI, embedded AI, robotics, prototyping, and engineering software.",
};

const divisions = [
  {
    title: "Axion Manufacturing",
    href: "/axion-manufacturing",
    image: "/images/services/product-integration-service.jpg",
    text: "Prototype fabrication, modeling, short-run production support, fixtures, housings, and design-for-manufacturing review.",
    points: ["Prototypes", "Modeling", "Short-run support"],
  },
  {
    title: "Axion Electrical",
    href: "/axion-electrical",
    image: "/images/services/hardware-bringup-service.jpg",
    text: "PCB design, hardware redesign, electronics integration, power planning, wiring, bring-up, and electrical troubleshooting.",
    points: ["PCB design", "Hardware debug", "Integration"],
  },
  {
    title: "Axion AI",
    href: "/axion-ai",
    image: "/images/services/technical-software-service.jpg",
    text: "Business AI tools, embedded AI, robotics support, workflow automation, technical software, and Enginuity Workspace.",
    points: ["Business AI", "Embedded AI", "Robotics"],
  },
];

const workflow = [
  "Clarify the prototype, system, workflow, or production need.",
  "Choose the right Axion division or blended technical team.",
  "Design, review, build, test, and hand off in fast usable increments.",
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
              Three divisions for fast technical execution.
            </h1>
          </div>
          <div className="grid gap-5">
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
              Axion Systems brings manufacturing, electrical design, and AI
              together for customers who need prototypes, systems, automation,
              and hardware-aware problem solving without slow handoffs.
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
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {divisions.map((division) => (
            <Link
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/95 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.13)]"
              href={division.href}
              key={division.title}
            >
              <div className="relative min-h-[275px] overflow-hidden bg-slate-100">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {division.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {division.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {division.points.map((point) => (
                    <span
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      key={point}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-7 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Free quote
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Not sure which division fits? Start with the problem.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Describe what you are trying to build, automate, repair,
              redesign, or prototype. We will route it to the right Axion team
              and respond with a practical next step.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              Ask for a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
