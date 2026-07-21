import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

const valueProps = [
  "Local support with fast turnaround and immediate communication.",
  "A small specialized team that moves without heavy bureaucracy.",
  "AI-assisted design work with expert human review before production intent.",
  "A prototyping-first process for turning rough ideas into testable systems.",
];

const divisions = [
  {
    eyebrow: "Axion Manufacturing",
    title: "Rapid prototyping and practical industry solutions.",
    text: "Axion Manufacturing supports prototype builds, modeling, fixtures, short-run planning, and design-for-manufacturing work with local help and direct communication.",
    href: "/axion-manufacturing",
    cta: "View manufacturing",
    image: "/images/services/product-integration-service.jpg",
  },
  {
    eyebrow: "Axion AI",
    title: "Business AI, embedded AI, robotics, and technical software.",
    text: "Axion AI builds practical AI systems for businesses and engineering teams, including workflow automation, embedded intelligence, robotics support, and Enginuity Workspace.",
    href: "/axion-ai",
    cta: "View Axion AI",
    image: "/images/ai-workspace.png",
  },
  {
    eyebrow: "Axion Electrical",
    title: "PCB, hardware, electronics, and electrical system design.",
    text: "Axion Electrical handles board design, hardware redesign, wiring, electronics integration, bring-up, debugging, and electrical documentation for real products.",
    href: "/axion-electrical",
    cta: "View electrical",
    image: "/images/pcb-redesign.png",
  },
];

const services = [
  "Technical documentation",
  "Short-term technical staffing",
  "Reverse engineering",
  "Rapid prototyping",
  "Manufacturing support",
  "Hardware and PCB design",
  "Business AI systems",
  "Embedded AI and robotics",
  "Software tools and dashboards",
  "Modeling and design work",
];

function ArrowLink({
  children,
  href,
  light = false,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <Link
      className={`inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
        light
          ? "bg-white text-slate-950 hover:bg-blue-100"
          : "bg-slate-950 text-white hover:bg-blue-700"
      }`}
      href={href}
    >
      {children}
      <span aria-hidden>›</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate flex min-h-[86vh] overflow-hidden bg-slate-950">
        <Image
          src="/images/hero-realistic-lab.png"
          alt="Engineering lab bench with electronics and prototyping equipment"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/92 via-slate-950/66 to-slate-950/18" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/72 via-transparent to-slate-950/12" />

        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="h-px w-10 bg-blue-300" />
              AI, manufacturing, electrical systems, and prototyping
            </p>
            <h1 className="max-w-6xl text-6xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Technical work that moves from idea to prototype faster.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
              Axion Systems helps businesses, builders, and technical teams
              design, automate, fabricate, debug, and prototype with local
              support and direct communication.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ArrowLink href="/contact" light>
                Request a free quote
              </ArrowLink>
              <Link
                href="/services"
                className="text-sm font-semibold text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 pb-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((value, index) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-sm leading-7 text-slate-200"
              key={value}
            >
              <span className="mb-3 block font-mono text-xs text-blue-300">
                0{index + 1}
              </span>
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              What we do
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Design, build, automate, and prototype across physical and
              intelligent systems.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
            We combine AI-enabled workflows, hands-on electrical design,
            manufacturing support, software, robotics, and documentation to
            help customers get from a technical need to a working next step.
          </p>
        </div>
      </section>

      {divisions.map((division, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            className={`scroll-reveal px-5 py-14 sm:px-6 lg:px-8 lg:py-18 ${
              index === 1 ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"
            }`}
            key={division.eyebrow}
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
              <div className={reverse ? "lg:order-2" : ""}>
                <p
                  className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
                    index === 1 ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  {division.eyebrow}
                </p>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {division.title}
                </h2>
                <p
                  className={`mt-5 max-w-xl text-base leading-8 ${
                    index === 1 ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {division.text}
                </p>
                <div className="mt-7">
                  <ArrowLink href={division.href} light={index === 1}>
                    {division.cta}
                  </ArrowLink>
                </div>
              </div>
              <div
                className={`relative min-h-[360px] overflow-hidden rounded-[1.5rem] border shadow-[0_20px_60px_rgba(15,23,42,0.12)] ${
                  reverse ? "lg:order-1" : ""
                } ${index === 1 ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}
              >
                <Image
                  src={division.image}
                  alt={division.eyebrow}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Services overview
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Support for quick jobs, prototypes, and specialized technical
              needs.
            </h2>
            <div className="mt-7 flex flex-wrap gap-4">
              <ArrowLink href="/services">See all services</ArrowLink>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
              >
                View project examples
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700"
                key={service}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Start practical
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring us the problem, sketch, broken board, process bottleneck,
              or first prototype.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
            <p className="text-base leading-8 text-slate-300">
              Ask for a free quote and we will help identify the fastest path:
              manufacturing support, electrical design, AI tooling, embedded
              intelligence, or a blended prototype plan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ArrowLink href="/contact" light>
                Request a free quote
              </ArrowLink>
              <Link
                href="/about"
                className="text-sm font-semibold text-slate-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>(c) 2026 Axion Systems LLC</p>
          <p>AI, manufacturing, electrical systems, and prototype execution.</p>
        </div>
      </footer>
    </main>
  );
}
