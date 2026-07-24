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

type PillarIconType =
  | "agility"
  | "execution"
  | "technology"
  | "hands"
  | "ownership";

const pillars: {
  title: string;
  text: string;
  icon: PillarIconType;
}[] = [
  {
    title: "Small-Team Agility",
    text: "Customers work directly with the people investigating, designing, and building their solution. With fewer handoffs, shorter communication paths, and less bureaucracy, we can respond quickly, adapt as requirements evolve, and keep projects moving efficiently.",
    icon: "agility",
  },
  {
    title: "Multidisciplinary Execution",
    text: "Modern engineering problems rarely belong to one discipline. We consider how electrical systems, embedded software, AI, mechanical constraints, manufacturing requirements, and business goals affect one another, bringing the right capabilities together around the complete problem.",
    icon: "execution",
  },
  {
    title: "Purposeful Technology",
    text: "We use modern tools, including artificial intelligence, to accelerate research, development, analysis, documentation, and workflows where they genuinely create value. We also help customers apply AI, automation, and embedded intelligence when those technologies provide a practical advantage.",
    icon: "technology",
  },
  {
    title: "Hands-On Problem Solving",
    text: "Our role does not end with recommending an idea. Where appropriate, we investigate, design, prototype, test, document, and support implementation, focusing on practical, testable results that help customers move from uncertainty to action.",
    icon: "hands",
  },
  {
    title: "Passionate Ownership",
    text: "Every engagement shapes our reputation, so we approach each project with curiosity, urgency, and personal responsibility. We communicate honestly, work to understand the real problem, and produce organized, maintainable work that we are proud to stand behind.",
    icon: "ownership",
  },
];

const beliefs = [
  "Understand the real problem first.",
  "Use the simplest reliable solution that fits.",
  "Apply AI only where it creates value.",
  "Finish with documentation, test results, and knowledge transfer.",
];

const capabilityBands = [
  "Electrical engineering",
  "Embedded systems",
  "Artificial intelligence",
  "Rapid prototyping",
  "Manufacturing support",
  "Product development",
];

function PillarIcon({ type }: { type: PillarIconType }) {
  if (type === "agility") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M8 24h26" />
        <path d="m26 14 10 10-10 10" />
        <path d="M10 13h10" />
        <path d="M10 35h16" />
      </svg>
    );
  }

  if (type === "execution") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="12" cy="14" r="4" />
        <circle cx="36" cy="14" r="4" />
        <circle cx="24" cy="34" r="4" />
        <path d="M16 16.5 21 30" />
        <path d="M32 16.5 27 30" />
        <path d="M16 14h16" />
      </svg>
    );
  }

  if (type === "technology") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <rect x="13" y="13" width="22" height="22" rx="4" />
        <path d="M19 7v6" />
        <path d="M29 7v6" />
        <path d="M19 35v6" />
        <path d="M29 35v6" />
        <path d="M7 19h6" />
        <path d="M7 29h6" />
        <path d="M35 19h6" />
        <path d="M35 29h6" />
        <path d="M20 27h8" />
        <path d="M22 21h4" />
      </svg>
    );
  }

  if (type === "hands") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M16 31 31 16" />
        <path d="m27 12 9 9" />
        <path d="m11 36 8-3 16-16-5-5-16 16-3 8Z" />
        <path d="M10 40h28" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M24 7 37 12v10c0 9-5.5 15-13 19-7.5-4-13-10-13-19V12l13-5Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  );
}

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
              Multidisciplinary engineering and modern technology, delivered
              with the speed, flexibility, and ownership of a small team.
            </p>
            <p className="about-hero-support">
              We help companies move technical projects from problem or idea to
              practical implementation, without large-firm bureaucracy.
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
              Practical engineering within reach.
            </h2>
          </div>
          <div className="about-purpose-copy scroll-reveal">
            <p>
              Axion Systems helps manufacturers, product companies, and
              engineering teams turn technical ideas and unresolved problems
              into practical, working solutions.
            </p>
            <p>
              Our small, multidisciplinary team combines electrical engineering,
              embedded systems, AI, manufacturing, and rapid prototyping, giving
              customers direct access to the people doing the work.
            </p>
            <div className="about-purpose-note">
              We move quickly, communicate directly, and use modern AI tools
              where they genuinely improve research, development,
              documentation, or delivery.
            </div>
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
              Built in Michigan. Built across disciplines.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Axion Systems was founded in Michigan by a multidisciplinary team
              brought together through engineering, product development, and
              hands-on technical work.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              We saw valuable projects stall because teams lacked time,
              resources, or the right blend of skills. Axion exists to bring
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
                How Axion creates value where it matters.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              Axion brings multidisciplinary engineering and emerging technology
              within reach of companies that need practical solutions. Our
              small-team structure allows us to work directly, move efficiently,
              and avoid the administrative layers that slow larger
              organizations.
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => (
              <article
                className="about-pillar-card scroll-reveal"
                key={pillar.title}
              >
                <div className="about-pillar-mark">
                  <PillarIcon type={pillar.icon} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
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
              Built for the work that needs momentum.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Some projects do not fit a large engineering firm. Others cross
              too many disciplines for one specialist. Axion is built for the
              middle: direct access, flexible support, and practical execution
              without the cost, delays, and bureaucracy of a large engineering
              firm.
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
              Grounded principles.
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
                The people closest to the work.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">
              Axion is organized around hands-on delivery, direct technical
              ownership, and short communication paths.
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
            Advance industry by turning emerging technology into practical,
            real-world solutions.
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
              Understand the challenge. Build the right solution.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Leave the customer stronger through documentation, organized
              files, test information, maintainable solutions, and knowledge
              transfer.
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
