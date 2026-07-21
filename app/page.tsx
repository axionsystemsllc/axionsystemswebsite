import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

const valueProps = [
  {
    title: "Local design aid with fast turnaround",
    text: "Direct communication, practical iteration, and nearby support when a design, prototype, or production issue needs momentum.",
  },
  {
    title: "Small specialized teams",
    text: "Focused engineers and operators who can make decisions quickly without the drag of heavy bureaucracy.",
  },
  {
    title: "AI-accelerated, human-reviewed work",
    text: "We use AI inside the design process to move faster, then apply expert review before anything becomes production intent.",
  },
  {
    title: "Built around prototyping",
    text: "From concept models to PCB revisions, robotic systems, and short-run fabrication, Axion is designed for early-stage execution.",
  },
];

const divisions = [
  {
    title: "Axion Manufacturing",
    href: "/axion-manufacturing",
    text: "Prototype fabrication, design-for-manufacturing support, short-run builds, modeling, fixtures, and practical production planning.",
    image: "/images/services/product-integration-service.jpg",
  },
  {
    title: "Axion Electrical",
    href: "/axion-electrical",
    text: "PCB and hardware design, electronics integration, electrical systems, power planning, wiring, bring-up, and troubleshooting.",
    image: "/images/pcb-redesign.png",
  },
  {
    title: "Axion AI",
    href: "/axion-ai",
    text: "Business AI solutions, embedded AI, robotics, intelligent tools, automation, and engineering software under human technical review.",
    image: "/images/ai-workspace.png",
  },
];

const capabilities = [
  "Business AI solutions",
  "Embedded AI systems",
  "PCB and hardware design",
  "Robotics and automation",
  "Manufacturing support",
  "Modeling and prototyping",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate flex min-h-[calc(100vh-73px)] overflow-hidden bg-slate-950">
        <Image
          src="/images/hero-realistic-lab.png"
          alt="Engineering lab bench with electronics and prototyping equipment"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/62 to-slate-950/16" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/76 via-transparent to-slate-950/16" />

        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="h-px w-9 bg-blue-300" />
              Parent company for specialized technical divisions
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fast, local prototyping across AI, electronics, and manufacturing.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Axion Systems brings together manufacturing, electrical design,
              and AI-driven engineering to help teams move from idea to working
              prototype with speed, clarity, and expert review.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_18px_42px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Request a free quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white/16"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950 px-5 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 text-sm font-medium text-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div className="flex items-center gap-3" key={capability}>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                What Axion does
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                A technical parent company for the messy middle between concept
                and production.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              We support business AI adoption, embedded AI systems, PCB and
              hardware design, robotics, modeling, manufacturing preparation,
              and prototype execution. The work is broad, but the operating
              model is simple: move fast, communicate directly, and keep expert
              humans in the loop.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {divisions.map((division) => (
              <Link
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                href={division.href}
                key={division.title}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {division.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {division.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <article
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              key={item.title}
            >
              <p className="font-mono text-sm text-blue-700">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Start practical
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring us the problem, the sketch, the broken board, or the first
              prototype.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
            <p className="text-base leading-8 text-slate-300">
              Ask for a free quote and we will help identify the fastest path:
              manufacturing support, electrical design, AI tooling, embedded
              intelligence, or a blended prototype plan.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              Contact us
            </Link>
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
