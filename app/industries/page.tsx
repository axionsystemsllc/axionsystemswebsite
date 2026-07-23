import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Industries | Axion Systems",
  description:
    "Industries and applications served by Axion Systems across manufacturing, AI, electronics, robotics, prototyping, and technical operations.",
};

const industries = [
  {
    title: "Manufacturing Teams",
    text: "Prototype fixtures, short-run planning, process support, tooling ideas, and practical design-for-manufacturing feedback.",
    image: "/images/projects-polished/tank-vision-product-spread.png",
  },
  {
    title: "Local Businesses",
    text: "Business AI tools, workflow automation, dashboards, quote support, document systems, and operational software.",
    image: "/images/services/technical-software-service.jpg",
  },
  {
    title: "Industrial Electronics",
    text: "Board updates, enclosure-aware electronics, wiring, integration, troubleshooting, and field-ready documentation.",
    image: "/images/projects-polished/tank-vision-pcb-lab.png",
  },
  {
    title: "Robotics and Automation",
    text: "Sensor integration, embedded control, autonomy concepts, robotic prototypes, and hardware-aware software.",
    image: "/images/projects-polished/sensor-turret-lab.png",
  },
  {
    title: "Startup Prototypes",
    text: "Early product builds, proof-of-concept systems, design iteration, technical validation, and fast customer feedback loops.",
    image: "/images/projects-polished/drone-field-wide.png",
  },
  {
    title: "Technical Product Teams",
    text: "PCB work, software tools, AI-enabled systems, hardware revisions, documentation, and focused short-term execution.",
    image: "/images/projects-polished/ground-station-console.png",
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-950">
      <div aria-hidden className="engineering-fixed-backdrop" />
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/hero-lab.png"
          alt="Axion technical work across industries"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-72"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/20" />
        <div aria-hidden className="hero-geometry" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
            <span className="h-px w-10 bg-blue-300" />
            Industries
          </p>
          <h1 className="max-w-5xl text-6xl font-semibold tracking-tight sm:text-7xl">
            Technical support for teams that need momentum.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
            Axion works with businesses, manufacturers, product builders, and
            technical teams that need fast design support, prototyping,
            electrical work, AI systems, and clear execution.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white/90 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              className="scroll-reveal group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              key={industry.title}
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {industry.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {industry.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Not seeing your exact industry? Start with the technical problem.
          </h2>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Axion is built for cross-discipline work. If the job involves AI,
              electronics, manufacturing, robotics, software, documentation, or
              prototyping, we can help scope the first useful step.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              Request a free quote
              <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
