import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectReveal } from "../components/ProjectReveal";
import { ProjectSlideshow } from "../components/ProjectSlideshow";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects | Axion Systems",
  description:
    "A portfolio view of Axion Systems project areas across manufacturing, electrical design, embedded AI, robotics, prototyping, and technical documentation.",
};

export default function ProjectsPage() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="projects-hero relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/real-projects/groundstation_frontend.jpg"
          alt="Axion rugged ground station project"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/74 to-slate-950/24" />
        <div aria-hidden className="hero-geometry" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
            <span className="h-px w-10 bg-yellow-300" />
            Projects
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-7xl">
            Proof-oriented work across hardware, products, and prototypes.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
            Real project work, technical artifacts, prototypes, and systems
            that move the next engineering decision forward. Open a project
            for the full technical breakdown.
          </p>
        </div>
      </section>

      <section className="projects-featured px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <Link
            className="projects-featured-image group relative block"
            href={`/projects/${featured.slug}`}
          >
            <Image
              src={featured.hero}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </Link>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Featured project
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              <Link className="transition hover:text-blue-700" href={`/projects/${featured.slug}`}>
                {featured.title}
              </Link>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {featured.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {featured.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Link
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              href={`/projects/${featured.slug}`}
            >
              View full case study
              <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-list px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12">
          {rest.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <ProjectReveal
                className={`project-case-row ${reverse ? "is-reverse" : ""}`}
                direction={reverse ? "right" : "left"}
                key={project.slug}
              >
                <div className="project-case-media">
                  <ProjectSlideshow images={project.images} title={project.title} />
                </div>
                <div className="project-case-copy">
                  <p>
                    {String(index + 2).padStart(2, "0")} / {project.eyebrow}
                  </p>
                  <h2>
                    <Link className="transition hover:text-blue-400" href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <span>{project.summary}</span>
                  <div>
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    className="project-detail-link"
                    href={`/projects/${project.slug}`}
                  >
                    View full case study
                    <span aria-hidden>›</span>
                  </Link>
                </div>
              </ProjectReveal>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="projects-cta mx-auto grid max-w-7xl gap-8 p-8 text-white sm:p-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Have a project that needs traction?
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
