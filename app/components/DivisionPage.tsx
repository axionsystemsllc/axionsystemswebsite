import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";

type Project = {
  title: string;
  text: string;
  image: string;
};

type DivisionPageProps = {
  accent: string;
  capabilities: string[];
  division: string;
  heroImage: string;
  intro: string;
  overview: string;
  projects: Project[];
  shortName: string;
};

export function DivisionPage({
  accent,
  capabilities,
  division,
  heroImage,
  intro,
  overview,
  projects,
  shortName,
}: DivisionPageProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-950">
      <div aria-hidden className="engineering-fixed-backdrop" />
      <SiteHeader />

      <section className="division-hero-section relative z-10 border-b border-slate-200 bg-white/88 px-5 py-14 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              {division}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              {intro}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {overview}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Innovate with us
            </Link>
          </div>
          <div className="division-hero-image relative min-h-[440px] overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <Image
              src={heroImage}
              alt={`${division} work`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white/86 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              About {shortName}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Built for practical execution and clear handoffs.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                key={capability}
              >
                <p className="font-mono text-sm text-blue-700">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {capability}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`relative z-10 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20 ${accent}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Work shaped around prototypes, systems, and production needs.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">
              These project areas show how {shortName} turns unclear technical
              needs into scoped work, testable outputs, and usable next steps.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055]"
                key={project.title}
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
