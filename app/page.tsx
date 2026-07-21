import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

const capabilities = [
  "Legacy PCB redesign",
  "Embedded systems",
  "Technical software",
  "AI engineering tools",
];

const previewCards = [
  {
    title: "Hardware modernization",
    text: "Redesign paths for aging electronics and practical board-level updates.",
    image: "/images/pcb-redesign.png",
  },
  {
    title: "Embedded execution",
    text: "Firmware, bring-up, interfaces, sensors, and system validation.",
    image: "/images/embedded-systems.png",
  },
  {
    title: "Engineering software",
    text: "Focused tools that connect documentation, workflows, and hardware data.",
    image: "/images/ai-workspace.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate flex min-h-[calc(100vh-73px)] overflow-hidden bg-slate-950">
        <Image
          src="/images/hero-realistic-lab.png"
          alt="Engineer testing electronics at a realistic embedded systems lab bench"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/88 via-slate-950/58 to-slate-950/12" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/72 via-transparent to-slate-950/16" />
        <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_20%_45%,rgba(37,99,235,0.28),transparent_42%)]" />

        <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="h-px w-9 bg-blue-300" />
              Engineering services and technology
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Embedded systems, intelligent software, and legacy hardware
              redesign.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Practical engineering support for electronics modernization,
              embedded development, and hardware-aware software tools.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_18px_42px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Discuss a project
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white/16"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950 px-5 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 text-sm font-medium text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div className="flex items-center gap-3" key={capability}>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                What we build
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Engineering work with clean handoffs and real technical depth.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              Axion Systems sits between hardware, firmware, software, and
              documentation, with a bias toward practical execution.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {previewCards.map((card) => (
              <article
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                key={card.title}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Focused and realistic
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Modern engineering without the generic tech-company noise.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
            <p className="text-base leading-8 text-slate-300">
              Serious technical capability, modern design sensibility, and
              honest positioning for long-term engineering work.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
            >
              See services
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>(c) 2026 Axion Systems LLC</p>
          <p>Embedded systems, intelligent software, and hardware redesign.</p>
        </div>
      </footer>
    </main>
  );
}
