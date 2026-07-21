import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

const services = [
  {
    title: "Business AI Solutions",
    href: "/axion-ai",
    image: "/images/ai-workspace.png",
  },
  {
    title: "Embedded AI Systems",
    href: "/axion-ai",
    image: "/images/embedded-systems.png",
  },
  {
    title: "PCB & Hardware Design",
    href: "/axion-electrical",
    image: "/images/pcb-redesign.png",
  },
  {
    title: "Manufacturing Support",
    href: "/axion-manufacturing",
    image: "/images/services/product-integration-service.jpg",
  },
  {
    title: "Rapid Prototyping",
    href: "/axion-manufacturing",
    image: "/images/real-projects/scratch-drone-prototype.jpg",
  },
  {
    title: "Robotics & Automation",
    href: "/axion-ai",
    image: "/images/drone-controls.png",
  },
  {
    title: "Reverse Engineering",
    href: "/services",
    image: "/images/real-projects/flight-computer-schematic.jpg",
  },
  {
    title: "Technical Documentation",
    href: "/services",
    image: "/images/services/documentation-service.jpg",
  },
];

const divisions = [
  {
    eyebrow: "Axion Manufacturing",
    title: "Rapid prototyping and industry solutions with local support.",
    text: "Axion Manufacturing helps customers move from model, drawing, or rough concept to physical prototype with fast iteration, direct updates, and practical design-for-manufacturing input.",
    href: "/axion-manufacturing",
    cta: "Explore Manufacturing",
    image: "/images/services/product-integration-service.jpg",
  },
  {
    eyebrow: "Axion AI",
    title: "Business AI, embedded AI, robotics, and software tools.",
    text: "Axion AI builds applied AI systems for business operations and technical products, including automation, embedded intelligence, robotics support, and engineering software.",
    href: "/axion-ai",
    cta: "Explore Axion AI",
    image: "/images/ai-workspace.png",
  },
  {
    eyebrow: "Axion Electrical",
    title: "PCB design, electronics, hardware integration, and debug.",
    text: "Axion Electrical supports board design, hardware redesign, wiring, bring-up, troubleshooting, and documentation for products that need reliable electrical execution.",
    href: "/axion-electrical",
    cta: "Explore Electrical",
    image: "/images/real-projects/flight-computer-pcb.jpg",
  },
];

const industries = [
  "Manufacturing teams",
  "Local businesses",
  "Startup prototypes",
  "Industrial electronics",
  "Robotics projects",
  "AI-enabled operations",
];

const stats = [
  { value: "3", label: "Specialized Axion divisions" },
  { value: "24-48h", label: "Typical first response window" },
  { value: "AI + human", label: "Accelerated design review model" },
  { value: "Prototype-first", label: "Execution philosophy" },
];

function PrimaryLink({
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
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-realistic-lab.png"
            alt="Axion engineering lab with electronics and prototyping tools"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/76 to-slate-950/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="h-px w-10 bg-blue-300" />
              Local engineering, AI, and prototype execution
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              We turn technical ideas into working systems.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
              Axion Systems designs, automates, fabricates, and prototypes
              across AI, electronics, manufacturing, robotics, software, and
              hardware.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryLink href="/contact" light>
                Request a free quote
              </PrimaryLink>
              <Link
                href="/services"
                className="text-sm font-semibold text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white"
              >
                View capabilities
              </Link>
            </div>
          </div>

          <div className="hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md lg:block">
            <div className="grid gap-3">
              {[
                "Immediate communication",
                "Small specialized team",
                "AI-assisted design",
                "Expert human review",
                "Prototype-first delivery",
              ].map((item, index) => (
                <div
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.065] px-4 py-4 text-sm font-semibold text-slate-200"
                  key={item}
                >
                  <span>{item}</span>
                  <span className="font-mono text-blue-200">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 pb-14 text-white sm:px-6 lg:px-8">
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

      <section className="scroll-reveal bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              How we work
            </p>
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Where AI speed meets engineering judgment.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We use AI to accelerate research, modeling, drafting, analysis,
              and iteration. Then we apply human review, local communication,
              and hands-on technical execution before the work moves forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryLink href="/about">Meet the team</PrimaryLink>
              <TextLink href="/projects">View projects</TextLink>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/real-projects/tank-vision-blue-board.jpg"
              alt="Axion electronics project board"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Our services
              </p>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                We expand your technical capabilities.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <PrimaryLink href="/services">View all services</PrimaryLink>
              <TextLink href="/contact">Ask what fits</TextLink>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
            className={`scroll-reveal px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${
              dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
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
                <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
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
                    Request a quote
                  </Link>
                </div>
              </div>
              <div
                className={`relative min-h-[430px] overflow-hidden rounded-[1.5rem] border shadow-[0_24px_80px_rgba(15,23,42,0.12)] ${
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

      <section className="scroll-reveal bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Markets and applications
              </p>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                Support for the teams building, repairing, automating, and
                scaling technical work.
              </h2>
            </div>
            <TextLink href="/services">Explore capabilities</TextLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                className="group flex min-h-36 items-end rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white"
                key={industry}
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Ready to get started
            </p>
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Tell us what you are building. We will help shape the fastest
              next step.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
            <p className="text-lg leading-8 text-slate-300">
              Bring the concept, board, drawing, workflow, bottleneck, or
              prototype. Axion will route it to the right technical team and
              respond with practical direction.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <PrimaryLink href="/contact" light>
                Request a free quote
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
