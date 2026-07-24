import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About | Axion Systems",
  description:
    "Learn how Axion Systems helps manufacturers, product companies, and engineering teams turn technical ideas and unresolved problems into practical solutions.",
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

const pillars = [
  {
    title: "Small-Team Responsiveness",
    text: "Customers work directly with the people investigating, designing, and building their solution. That means fewer handoffs, faster communication, and less administrative overhead.",
  },
  {
    title: "Multidisciplinary Execution",
    text: "Modern engineering problems rarely fit into one category. Axion considers how electronics, firmware, AI, mechanical constraints, manufacturing needs, and business goals affect one another.",
  },
  {
    title: "Accessible Innovation",
    text: "We help make useful technologies, including AI, modern embedded systems, automation, and rapid prototyping, more accessible to companies that may not have those resources internally.",
  },
  {
    title: "Hands-On Problem Solving",
    text: "Our goal is not simply to recommend an idea. Where appropriate, we investigate, design, prototype, test, document, and support implementation.",
  },
  {
    title: "Passionate Ownership",
    text: "Every engagement shapes our reputation. We communicate honestly, work to understand the real problem, and produce work we are proud to stand behind.",
  },
];

const beliefs = [
  "Good engineering begins with understanding the actual problem.",
  "The most advanced solution is not always the right solution.",
  "AI should be used where it creates real value, not added for appearances.",
  "Documentation, test results, design decisions, and knowledge transfer are part of the finished solution.",
];

const capabilityBands = [
  "Electrical engineering",
  "Embedded systems",
  "Artificial intelligence",
  "Rapid prototyping",
  "Manufacturing support",
  "Product development",
];

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="about-hero-v2 relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="about-hero-media absolute inset-0 -z-20">
          <Image
            src="/images/generated/desktop-3d-printing-prototype.png"
            alt="Axion prototype development workbench"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/94 via-slate-950/74 to-slate-950/22" />
        <div aria-hidden className="about-hero-grid" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-end gap-12 lg:grid-cols-[0.86fr_1fr]">
          <div className="scroll-reveal">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
              <span className="h-px w-10 bg-yellow-300" />
              About Axion Systems
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Engineering built around real problems.
            </h1>
          </div>
          <div className="about-hero-panel scroll-reveal">
            <p>
              Axion Systems brings engineering, emerging technology, and
              hands-on problem solving together to help companies move valuable
              technical projects forward.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilityBands.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-purpose-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div className="scroll-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Core purpose
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Making practical engineering and emerging technology more
              accessible.
            </h2>
          </div>
          <div className="about-purpose-copy scroll-reveal">
            <p>
              Axion Systems helps manufacturers, product companies, and
              engineering teams turn technical ideas and unresolved problems
              into practical solutions. We bring electrical engineering,
              embedded systems, AI, manufacturing, and rapid prototyping
              together within one responsive multidisciplinary team.
            </p>
            <p>
              Many valuable technical projects stall because internal teams do
              not have enough time, specialized resources, or the right mix of
              disciplines to move them forward. Large firms may bring extensive
              resources, but their cost and processes do not fit every problem.
              Axion was created to help close that gap.
            </p>
          </div>
        </div>
      </section>

      <section className="about-origin-section px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="about-origin-visual scroll-reveal">
            <Image
              src="/images/generated/warm-electronics-bench.png"
              alt="Electronics prototyping bench"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div className="scroll-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Origin
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              A Michigan team built around overlapping technical disciplines.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Axion Systems was founded in Michigan by a multidisciplinary team
              brought together through engineering, product development, and
              hands-on technical work. We repeatedly saw projects stall not
              because the problem was impossible, but because no one had the
              time, resources, or combination of skills needed to move it
              forward.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Each team member brings a different angle: electrical systems,
              embedded hardware and software, manufacturing, mechanical design,
              prototyping, and artificial intelligence. Axion exists to bring
              those capabilities together around the same problem.
            </p>
          </div>
        </div>
      </section>

      <section className="about-pillars-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div className="scroll-reveal">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                The five pillars
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                How Axion creates value without pretending to be a giant firm.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              Axion brings multidisciplinary engineering and emerging
              technology within reach of companies that need practical
              solutions without large-firm cost and bureaucracy.
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => (
              <article
                className="about-pillar-card scroll-reveal"
                key={pillar.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-market-section px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Why Axion
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Between large firms and disconnected specialists.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Large engineering firms offer extensive resources, but their
              cost, processes, and project requirements do not fit every
              company or every problem. Independent specialists can offer deep
              experience in one area, but many modern challenges cross several
              disciplines. Axion occupies the space between them.
            </p>
          </div>
          <div className="about-market-map scroll-reveal">
            <div>
              <span>Local partner</span>
              <p>Direct access and flexible project structure.</p>
            </div>
            <div>
              <span>Multidisciplinary team</span>
              <p>Electrical, embedded, AI, manufacturing, and prototyping.</p>
            </div>
            <div>
              <span>Practical output</span>
              <p>Documented, testable work that supports implementation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-beliefs-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              What we believe
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Useful engineering is honest, maintainable, and grounded.
            </h2>
          </div>
          <div className="about-belief-stack">
            {beliefs.map((belief, index) => (
              <article className="about-belief-card scroll-reveal" key={belief}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{belief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team-section px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.76fr_1fr] lg:items-end">
            <div className="scroll-reveal">
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
              <article className="about-team-card scroll-reveal" key={member.name}>
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

      <section className="about-vision-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="about-vision-card mx-auto max-w-7xl scroll-reveal">
          <p>Long-term vision</p>
          <h2>
            Our vision is to advance industry and positively impact society by
            turning emerging technology and multidisciplinary engineering into
            practical, real-world solutions.
          </h2>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="about-promise mx-auto grid max-w-7xl gap-8 p-8 text-white sm:p-10 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Company promise
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Understand the challenge. Build the right solution. Leave the
              customer stronger.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              A stronger customer has useful documentation, organized design
              files, test information, maintainable solutions, and enough
              knowledge transfer to keep moving without unnecessary dependency.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Have a technical challenge or an idea that needs a path forward?
              Let&apos;s talk about what it would take to move it forward.
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
