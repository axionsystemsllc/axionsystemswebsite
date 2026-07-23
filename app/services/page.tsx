import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | Axion Systems",
  description:
    "Axion Systems services across hardware development, manufacturing design, product development, software, AI, prototyping, and technical documentation.",
};

const serviceSlides = [
  {
    title: "Hardware Development",
    text: "PCB design, electronics integration, bring-up, embedded hardware planning, and design review.",
    href: "/axion-electrical",
    image: "/images/generated/warm-electronics-bench.png",
  },
  {
    title: "Manufacturing & Design",
    text: "Prototype fabrication, fixtures, machining support, short-run planning, and DFM feedback.",
    href: "/axion-manufacturing",
    image: "/images/generated/shop-cnc-router.png",
  },
  {
    title: "Product Development & Prototyping",
    text: "Concept-to-prototype execution across CAD, mechanical design, assemblies, and validation.",
    href: "/axion-manufacturing",
    image: "/images/generated/desktop-3d-printing-prototype.png",
  },
  {
    title: "Software & AI",
    text: "Business AI workflows, embedded AI, technical software, automation, and decision tools.",
    href: "/axion-ai",
    image: "/images/generated/office-ai-workflow.png",
  },
  {
    title: "Technical Documentation",
    text: "Build guides, schematics, handoff packages, test notes, and engineering documentation.",
    href: "/services",
    image: "/images/generated/prototype-documentation-table.png",
  },
];

const divisions = [
  {
    title: "Axion Manufacturing",
    href: "/axion-manufacturing",
    image: "/images/generated/shop-cnc-router.png",
    text: "Rapid prototyping, product development, fixtures, modeling, and manufacturing support.",
  },
  {
    title: "Axion Electrical",
    href: "/axion-electrical",
    image: "/images/generated/warm-electronics-bench.png",
    text: "PCB design, hardware redesign, board bring-up, wiring, integration, and troubleshooting.",
  },
  {
    title: "Axion AI",
    href: "/axion-ai",
    image: "/images/generated/office-ai-workflow.png",
    text: "Business AI, embedded AI, robotics support, workflow automation, and engineering tools.",
  },
];

const process = [
  "Clarify the technical goal and the fastest useful output.",
  "Route the work to the right Axion division or blended team.",
  "Design, review, build, test, and hand off in practical increments.",
];

export default function ServicesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="services-page-hero relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/generated/desktop-3d-printing-prototype.png"
          alt="Desktop 3D printing and prototype assembly workbench"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/20" />
        <div aria-hidden className="hero-geometry" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
              <span className="h-px w-10 bg-yellow-300" />
              Services
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-7xl">
              Engineering support from idea to working system.
            </h1>
          </div>
          <div className="services-hero-panel">
            <p>
              Axion brings hardware, manufacturing, product development,
              software, AI, and documentation together for teams that need
              technical progress without slow handoffs.
            </p>
            <Link href="/contact">Innovate with us</Link>
          </div>
        </div>
      </section>

      <section className="services-page-catalog px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Core capabilities
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Focused services with practical engineering depth.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">
              Each service can stand alone, but the real advantage is how they
              connect: boards that fit enclosures, prototypes that inform
              production, and software that understands the hardware.
            </p>
          </div>
          <ServicesCarousel slides={serviceSlides} />
        </div>
      </section>

      <section className="services-process-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              How work moves
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Small team speed with reviewed technical output.
            </h2>
          </div>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <article className="services-process-card" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {divisions.map((division) => (
            <Link className="services-division-card" href={division.href} key={division.title}>
              <Image
                src={division.image}
                alt={division.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="services-division-shade" />
              <span className="services-division-copy">
                <strong>{division.title}</strong>
                <span>{division.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
