import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Axion Systems",
  description:
    "Meet the Axion Systems leadership team across Axion AI & Embedded Solutions, Axion Manufacturing, and Axion Electrical.",
};

const team = [
  {
    name: "Chancen Dahmer",
    role: "Director of Axion AI & Embedded Solutions",
    image: "/images/team/chancen-dahmer.png",
  },
  {
    name: "Caden Schlenker",
    role: "Director of Axion AI & Embedded Solutions",
    image: "/images/team/caden-schlenker.png",
  },
  {
    name: "Breckin Helfen",
    role: "Director of Axion Manufacturing",
    image: "/images/team/breckin-helfen.jpg",
  },
  {
    name: "Davis Dahmer",
    role: "Director of Axion Electrical",
    image: "/images/team/davis-dahmer.png",
  },
];

const principles = [
  "Direct communication with the people shaping the work.",
  "Prototype-first execution before heavy process.",
  "AI-assisted exploration with expert human review.",
  "Small-team speed across hardware, manufacturing, software, and documentation.",
];

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="about-hero relative isolate overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/generated/hero-drone-facility.png"
          alt="Axion engineering facility and drone prototype"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/92 via-slate-950/68 to-slate-950/18" />
        <div className="mx-auto grid max-w-7xl gap-12 text-white lg:grid-cols-[0.76fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
              <span className="h-px w-10 bg-yellow-300" />
              About Axion
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-7xl">
              Built close to the work.
            </h1>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-slate-200">
            Axion Systems is structured for quick communication, practical
            design support, and prototyping-focused work across physical and
            intelligent systems.
          </p>
        </div>
      </section>

      <section className="about-principles px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Operating model
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Lean enough to move fast. Serious enough to review the work.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article className="about-principle-card" key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team-section px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.76fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Leadership
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Directors across AI, manufacturing, and electrical systems.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">
              The team is organized around hands-on delivery, not layers of
              bureaucracy. Customers get practical direction from the people
              closest to the technical decisions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <article className="about-team-card" key={member.name}>
                <div className="about-team-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-mono text-xs text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="about-cta mx-auto grid max-w-7xl gap-8 p-8 text-white sm:p-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Bring the rough idea, the broken workflow, or the first prototype.
          </h2>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Axion helps shape the next practical step, whether that is a
              board revision, prototype build, AI workflow, product design, or
              documentation package.
            </p>
            <Link
              className="mt-7 inline-flex rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
              href="/contact"
            >
              Innovate with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
