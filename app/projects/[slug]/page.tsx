import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { getProjectBySlug, projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project | Axion Systems" };
  }

  return {
    title: `${project.title} | Axion Systems Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/60" />
        <div className="mx-auto max-w-7xl">
          <Link
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            href="/projects"
          >
            <span aria-hidden>‹</span> All projects
          </Link>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            <span className="h-px w-10 bg-yellow-300" />
            {project.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Overview
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              What was built and why it mattered.
            </h2>
            <div className="grid gap-5">
              {project.overview.map((paragraph) => (
                <p className="text-base leading-8 text-slate-600" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {project.images[0] ? (
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:min-h-[400px]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Qualifications demonstrated
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Technical capability, not just a finished part.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto">
              This project exercised the following engineering capabilities
              directly.
            </p>
          </div>
          <div
            className={`grid gap-8 lg:items-stretch ${
              project.images.length > 1 ? "lg:grid-cols-[1fr_0.6fr]" : ""
            }`}
          >
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {project.capabilities.map((capability, index) => (
                <article
                  className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5"
                  key={capability}
                >
                  <p className="font-mono text-sm text-blue-700">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-base font-semibold leading-6 tracking-tight">
                    {capability}
                  </h3>
                </article>
              ))}
            </div>
            {project.images.length > 1 ? (
              <div className="grid auto-rows-fr gap-4">
                {project.images.slice(1).map((image) => (
                  <div
                    className="relative min-h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)]"
                    key={image}
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {project.specs && project.specs.length > 0 ? (
        <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
              Technical specifications
            </p>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-5xl">
              System details.
            </h2>
            <dl className="grid gap-5 sm:grid-cols-2">
              {project.specs.map((spec) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  key={spec.label}
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-slate-200">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="projects-cta mx-auto grid max-w-7xl gap-8 p-8 text-white sm:p-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Have a similar problem to solve?
          </h2>
          <div>
            <p className="text-base leading-8 text-slate-300">
              Bring the prototype, board, drawing, workflow, or technical
              bottleneck. We will help define the next useful step.
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
