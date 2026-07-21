import type { Metadata } from "next";
import Image from "next/image";
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
    initials: "BH",
  },
  {
    name: "Davis Dahmer",
    role: "Director of Axion Electrical",
    image: "/images/team/davis-dahmer.png",
  },
];

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-950">
      <div aria-hidden className="engineering-fixed-backdrop" />
      <SiteHeader />

      <section className="relative z-10 border-b border-slate-200 bg-white/88 px-5 py-16 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              About Axion
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              A small technical team built for fast, reviewed execution.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Axion Systems is the parent company behind Axion Manufacturing,
            Axion Electrical, and Axion AI & Embedded Solutions. The company is
            structured around quick communication, direct design support, and
            prototyping-focused work across physical and intelligent systems.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white/86 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Leadership
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Directors across AI, manufacturing, and electrical systems.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
                key={member.name}
              >
                <div className="mx-auto grid h-36 w-36 place-items-center overflow-hidden rounded-full border border-slate-200 bg-slate-950 text-3xl font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={220}
                      height={220}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    member.initials
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            We stay close to the work so customers can move faster.
          </h2>
          <p className="text-base leading-8 text-slate-300">
            The Axion model is intentionally lean: use AI where it speeds up
            research, drafting, modeling, and exploration; rely on human review
            for judgment; and keep customers in direct contact with the people
            shaping the design.
          </p>
        </div>
      </section>
    </main>
  );
}
