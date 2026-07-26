import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Axion AI | Axion Systems",
  description:
    "Business AI solutions, embedded AI systems, robotics, intelligent software, and Enginuity Workspace from Axion AI.",
};

const heroSignals = [
  "Business AI workflow tools",
  "Embedded AI and edge intelligence",
  "Engineering software dashboards",
  "Robotics and automation support",
];

const flowSteps = [
  {
    kicker: "01",
    title: "Map the real workflow",
    text: "We start with the business process, lab workflow, embedded system, or technical bottleneck before choosing the tool.",
  },
  {
    kicker: "02",
    title: "Build useful intelligence",
    text: "AI, automation, dashboards, and embedded software are applied where they save time, improve decisions, or unlock new capability.",
  },
  {
    kicker: "03",
    title: "Keep humans in review",
    text: "Modern tools accelerate research and development, but expert review keeps every output grounded in reliable engineering.",
  },
];

const capabilityCards = [
  {
    title: "Business AI",
    text: "Internal assistants, workflow automation, document support, and data-aware tools for daily operations.",
  },
  {
    title: "Technical Software",
    text: "Dashboards, control interfaces, engineering utilities, and software that connects teams to real system data.",
  },
  {
    title: "Embedded Intelligence",
    text: "AI and decision logic for sensors, robotics, edge devices, and connected technical products.",
  },
  {
    title: "AI Documentation",
    text: "Structured handoffs, test notes, training materials, lab support, and faster technical writing with human review.",
  },
];

const orbitItems = [
  "AI strategy",
  "Automation",
  "Dashboards",
  "Embedded systems",
  "Robotics",
  "Education tools",
];

export default function AxionAIPage() {
  return (
    <main className="axion-ai-page relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      <div aria-hidden className="ai-fixed-backdrop" />
      <SiteHeader />

      <section className="ai-hero relative isolate min-h-screen overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <div className="ai-hero-media absolute inset-0 -z-20">
          <Image
            src="/images/generated/axion-ai-landing-hero.png"
            alt="Applied AI and software engineering workstation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/96 via-slate-950/72 to-slate-950/18" />
        <div aria-hidden className="ai-hero-geometry" />

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center pt-16">
          <div className="max-w-5xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              <span className="h-px w-10 bg-emerald-300" />
              Axion AI
            </p>
            <h1 className="ai-hero-title max-w-6xl text-5xl font-semibold tracking-tight text-white sm:text-8xl lg:text-[8.6rem] lg:leading-[0.88]">
              Practical intelligence for technical work.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl">
              We build AI, software, automation, and embedded intelligence that
              help teams move faster without losing engineering judgment.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link className="ai-primary-link" href="/contact">
                Innovate with us <span aria-hidden>&rsaquo;</span>
              </Link>
              <Link className="ai-text-link" href="/projects">
                Explore AI work
              </Link>
            </div>
          </div>
        </div>

        <div className="ai-hero-signal mx-auto max-w-7xl">
          {heroSignals.map((signal, index) => (
            <span key={signal}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section className="ai-flow-section relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="ai-sticky-copy">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              How we build
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              AI where it creates real leverage.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Axion AI is not built around novelty. We use modern tools where
              they improve research, development, documentation, analysis, or
              delivery, then keep humans close to the technical decisions.
            </p>
          </div>

          <div className="ai-flow-stack">
            {flowSteps.map((step) => (
              <article className="ai-flow-card" key={step.title}>
                <span>{step.kicker}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-capabilities-section relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Capabilities
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Software, AI, and embedded systems in one lane.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              We connect business operations, engineering workflows, and real
              technical systems so the solution fits how the work actually gets
              done.
            </p>
          </div>

          <div className="ai-capability-grid">
            {capabilityCards.map((capability, index) => (
              <article className="ai-capability-card" key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-orbit-section relative z-10 overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="ai-orbit">
            {orbitItems.map((item, index) => (
              <span key={item} style={{ "--orbit-index": index } as CSSProperties}>
                {item}
              </span>
            ))}
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Applied intelligence
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              From internal workflows to intelligent products.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Axion AI supports teams that need software and intelligence tied
              to real operations: embedded devices, lab systems, robotics,
              documentation, dashboards, or daily business workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-coming-section relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="ai-coming-logo">
            <Image
              src="/images/enginuity-workspace-logo.png"
              alt="Enginuity Workspace logo"
              width={240}
              height={240}
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Coming soon
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Enginuity Workspace
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              An educational AI teaching assistant for STEM laboratory classes
              in higher education, built to help students work through
              experiments, technical concepts, documentation, and lab workflows
              with guided support.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "STEM labs",
                "Higher education",
                "AI teaching assistant",
                "Guided technical learning",
              ].map((tag) => (
                <span className="ai-coming-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-cta-section relative z-10 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Ready to build
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Bring the workflow, product, or technical bottleneck.
            </h2>
          </div>
          <div className="ai-cta-panel">
            <p>
              We will help identify where AI, automation, software, or embedded
              intelligence can create practical value, then shape a buildable
              next step.
            </p>
            <Link className="ai-primary-link mt-7" href="/contact">
              Innovate with us <span aria-hidden>&rsaquo;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
