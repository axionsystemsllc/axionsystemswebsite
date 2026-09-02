import Image from "next/image";
import Link from "next/link";
import { IndustryCarousel } from "./components/IndustryCarousel";
import { ServicesCarousel } from "./components/ServicesCarousel";
import { SiteHeader } from "./components/SiteHeader";

const services = [
  {
    title: "Hardware Development",
    text: "Embedded electronics, PCB design, board bring-up, integration, and hardware redesign.",
    href: "/axion-electrical",
    image: "/images/real/electronics-debug-bench.png",
  },
  {
    title: "Manufacturing & Design",
    text: "Precision manufacturing support, process-minded design, fixtures, and local iteration.",
    href: "/axion-manufacturing",
    image: "/images/real/cnc-acrylic-closeup.png",
  },
  {
    title: "Product Development & Prototyping",
    text: "Mechanical concepts, proof-of-concept builds, CAD-to-part workflows, and prototype validation.",
    href: "/axion-manufacturing",
    image: "/images/real/printer-purple-prototype.png",
  },
  {
    title: "Software & AI",
    text: "Business AI tools, embedded AI, technical software, automation, and decision-support workflows.",
    href: "/axion-ai",
    image: "/images/generated/software-ai-workbench.png",
  },
  {
    title: "Technical Documentation",
    text: "Build guides, engineering drawings, handoff packages, test notes, and short-term technical support.",
    href: "/services",
    image: "/images/generated/technical-documentation-drawings.png",
  },
];

const divisions = [
  {
    eyebrow: "Axion Manufacturing",
    title: "Rapid prototyping and industry solutions with local support.",
    text: "Axion Manufacturing helps customers move from model, drawing, or rough concept to physical prototype with fast iteration, direct updates, and practical design-for-manufacturing input from the people doing the work.",
    href: "/axion-manufacturing",
    cta: "Explore Manufacturing",
    image: "/images/real/cam-toolpath.png",
  },
  {
    eyebrow: "Axion AI",
    title: "Business AI, embedded AI, robotics, and software tools.",
    text: "Axion AI builds applied AI systems for business operations and technical products, using modern tools where they genuinely improve automation, embedded intelligence, robotics support, and engineering software.",
    href: "/axion-ai",
    cta: "Explore Axion AI",
    image: "/images/generated/office-ai-workflow.png",
  },
  {
    eyebrow: "Axion Electrical",
    title: "PCB design, electronics, hardware integration, and debug.",
    text: "Axion Electrical supports board design, hardware redesign, wiring, bring-up, troubleshooting, and documentation for products that need reliable electrical execution.",
    href: "/axion-electrical",
    cta: "Explore Electrical",
    image: "/images/generated/hardware-development-macro.png",
  },
];

const industries = [
  {
    title: "Aerospace & Defense",
    text: "Embedded systems, testing, simulation support, technical documentation, and prototype hardware.",
    image: "/images/real/aerospace-drone-enhanced.png",
  },
  {
    title: "Automotive & Mobility",
    text: "Manufacturing support, electronics, automation, CAD iteration, and rapid prototype validation.",
    image: "/images/real/mobility-platform-render.png",
  },
  {
    title: "Industrial Manufacturing",
    text: "Fixtures, CNC routing, process support, contracting help, and practical production troubleshooting.",
    image: "/images/generated/shop-cnc-router.png",
  },
  {
    title: "Product Prototyping",
    text: "PCB, enclosure, mechanical, and software prototypes built for testing, debugging, and handoff.",
    image: "/images/real/tank-vision-exploded.png",
  },
  {
    title: "Power & Energy",
    text: "Monitoring hardware, software support, electronics integration, and field-ready documentation.",
    image: "/images/generated/energy-industrial-systems.png",
  },
  {
    title: "Robotics & Automation",
    text: "Controls, embedded logic, software support, test rigs, automation tooling, and debug workflows.",
    image: "/images/generated/robotics-cell-alt.png",
  },
];

const stats = [
  { value: "3", label: "Specialized Axion divisions" },
  { value: "Direct", label: "Access to the people doing the work" },
  { value: "AI + human", label: "Modern tools with engineering review" },
  { value: "Prototype-first", label: "Execution philosophy" },
];

function PrimaryLink({
  children,
  href,
  light = false,
  accent = false,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
  accent?: boolean;
}) {
  return (
    <Link
      className={`inline-flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
        accent
          ? "bg-yellow-400 text-slate-950 hover:bg-yellow-300"
          : light
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

function TextLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex items-center text-sm font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="hero-motion absolute inset-0 -z-20">
          <Image
            src="/images/generated/hero-drone-facility.png"
            alt="Axion drone prototype flying near a local engineering facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-95"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/88 via-slate-950/54 to-slate-950/4" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        <div aria-hidden className="hero-geometry" />

        <div className="mx-auto flex min-h-[94vh] max-w-7xl items-center px-5 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
              <span className="h-px w-10 bg-yellow-300" />
              Axion Systems
            </p>
            <h1 className="max-w-6xl text-5xl font-semibold tracking-tight text-white sm:text-8xl lg:text-[8.8rem] lg:leading-[0.88]">
              Where ideas become innovation.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
              Small-team speed, direct communication, and AI-assisted
              engineering review to design, build, and scale technology
              solutions that move your business forward.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryLink href="/contact" accent>
                Innovate with us
              </PrimaryLink>
              <Link
                href="/services"
                className="text-sm font-semibold text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                View capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-slice-dark bg-slate-950 px-5 pb-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              className="border-t border-white/10 pt-5"
              key={stat.label}
            >
              <p className="text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-reveal what-we-do-section px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Axion Systems
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Small-team speed. Purposeful AI. Practical engineering output.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We pair modern AI-assisted workflows with hands-on engineering
              review across hardware, manufacturing, software, and
              documentation. Fewer layers and direct access to the technical
              team mean faster movement from idea to prototype without losing
              judgment.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Design", "Prototype", "Scale"].map((item, index) => (
                <div className="what-we-do-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="process-crop-frame">
            <Image
              src="/images/generated/laser-cutting-metal.png"
              alt="Precision manufacturing machinery cutting metal"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="scroll-reveal services-showcase px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Our services
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Engineering services built around speed, clarity, and execution.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <PrimaryLink href="/services" accent>
                View all services
              </PrimaryLink>
              <Link
                className="inline-flex items-center text-sm font-semibold text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                href="/contact"
              >
                Ask what fits
              </Link>
            </div>
          </div>

          <ServicesCarousel slides={services} />
          <div className="hidden">
            {services.map((service) => (
              <Link
                className="group overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.13)]"
                href={service.href}
                key={service.title}
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition group-hover:bg-blue-700"
                  >
                    ›
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {divisions.map((division, index) => {
        const dark = index === 1;
        const reverse = index % 2 === 1;

        return (
          <section
            className={`scroll-reveal branch-section ${
              index === divisions.length - 1 ? "is-final-branch" : ""
            } px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${
              dark ? "is-dark bg-slate-950 text-white" : "bg-white text-slate-950"
            }`}
            key={division.eyebrow}
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
              <div className={reverse ? "lg:order-2" : ""}>
                <p
                  className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
                    dark ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  {division.eyebrow}
                </p>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                  {division.title}
                </h2>
                <p
                  className={`mt-6 max-w-2xl text-lg leading-8 ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {division.text}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <PrimaryLink href={division.href} light={dark}>
                    {division.cta}
                  </PrimaryLink>
                  <Link
                    href="/contact"
                    className={`text-sm font-semibold underline underline-offset-4 transition ${
                      dark
                        ? "text-slate-400 decoration-white/20 hover:text-white"
                        : "text-slate-500 decoration-slate-300 hover:text-slate-950"
                    }`}
                  >
                    Innovate with us
                  </Link>
                </div>
              </div>
              <div
                className={`branch-image-frame relative min-h-[430px] overflow-hidden border shadow-[0_24px_80px_rgba(15,23,42,0.12)] ${
                  reverse ? "lg:order-1" : ""
                } ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-100"}`}
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

      <section className="scroll-reveal home-industries-section bg-slate-100 px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Our industries
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                We support your market with practical engineering expertise.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <PrimaryLink href="/industries" accent>
                View industries
              </PrimaryLink>
              <TextLink href="/projects">Explore projects</TextLink>
            </div>
          </div>
          <IndustryCarousel slides={industries} />
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Ready to build
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Tell us what you are building. We will help shape the fastest
              next step.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <p className="text-lg leading-8 text-slate-300">
              Bring the concept, board, drawing, workflow, bottleneck, or
              prototype. Axion will route it to the right technical team and
              respond with practical direction, without large-firm layers
              slowing the conversation down.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <PrimaryLink href="/contact" light>
                Innovate with us
              </PrimaryLink>
              <Link
                href="/about"
                className="text-sm font-semibold text-slate-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                Meet Axion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>(c) 2026 Axion Systems LLC</p>
          <p>AI, manufacturing, electrical systems, and prototype execution.</p>
        </div>
      </footer>
    </main>
  );
}
