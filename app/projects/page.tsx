import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectReveal } from "../components/ProjectReveal";
import { ProjectSlideshow } from "../components/ProjectSlideshow";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Projects | Axion Systems",
  description:
    "A portfolio view of Axion Systems project areas across manufacturing, electrical design, embedded AI, robotics, prototyping, and technical documentation.",
};

const projects = [
  {
    title: "Tank Vision 2.2 Product Electronics",
    eyebrow: "Industrial electronics",
    text: "A field-ready electronics and enclosure package for Tank Vision 2.2, designed for a major petroleum company. The effort included internal board design, Ethernet-facing hardware, enclosure integration, connector access, and product-level packaging.",
    hero: "/images/projects-polished/tank-vision-product-spread.png",
    images: [
      "/images/projects-polished/tank-vision-product-spread.png",
      "/images/projects-polished/tank-vision-pcb-lab.png",
      "/images/projects-polished/tank-vision-layout-lab.png",
      "/images/real-projects/tank-vision-green-board.jpg",
    ],
    tags: ["Product electronics", "Industrial hardware", "Enclosure integration"],
  },
  {
    title: "Drone Design and Prototyping",
    eyebrow: "Prototype controls",
    text: "A scratch-built drone prototype created as a controls and integration test bed. The work centered on custom mechanical design, embedded electronics, power distribution, and early flight-control experimentation.",
    hero: "/images/projects-polished/drone-field-wide.png",
    images: [
      "/images/projects-polished/drone-field-close.png",
      "/images/projects-polished/drone-field-wide.png",
      "/images/projects-polished/ground-station-console.png",
      "/images/projects-polished/ground-station-dashboard.png",
    ],
    tags: ["Ground-up prototype", "Control systems", "Mechanical integration"],
  },
  {
    title: "Avionics Flight Computer",
    eyebrow: "Avionics",
    text: "A compact flight computer PCB developed for embedded control, sensor interfaces, power regulation, telemetry support, and recovery-oriented system logic.",
    hero: "/images/real-projects/flight-computer-pcb-polished.png",
    images: [
      "/images/real-projects/flight-computer-pcb-polished.png",
      "/images/real-projects/flight-computer-schematic.jpg",
    ],
    tags: ["Flight computer PCB", "Embedded control", "Sensor interfaces"],
  },
  {
    title: "Engineering Documentation and Schematics",
    eyebrow: "Design handoff",
    text: "Technical artifacts that support design review, debugging, manufacturing handoff, and long-term maintainability.",
    hero: "/images/generated/documentation-review-alt.png",
    images: [
      "/images/generated/documentation-review-alt.png",
      "/images/real-projects/flight-computer-schematic.jpg",
    ],
    tags: ["Schematics", "Design review", "Manufacturing handoff"],
  },
];

export default function ProjectsPage() {
  const featured = projects[0];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-950">
      <SiteHeader />

      <section className="projects-hero relative isolate overflow-hidden px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/images/projects-polished/ground-station-console.png"
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
          <h1 className="max-w-5xl text-6xl font-semibold tracking-tight sm:text-7xl">
            Proof-oriented work across hardware, products, and prototypes.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
            Real project work, technical artifacts, prototypes, and systems
            that move the next engineering decision forward.
          </p>
        </div>
      </section>

      <section className="projects-featured px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="projects-featured-image">
            <Image
              src={featured.hero}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Featured project
            </p>
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              {featured.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {featured.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {featured.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-list px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <ProjectReveal
                className={`project-case-row ${reverse ? "is-reverse" : ""}`}
                direction={reverse ? "right" : "left"}
                key={project.title}
              >
                <div className="project-case-media">
                  <ProjectSlideshow images={project.images} title={project.title} />
                </div>
                <div className="project-case-copy">
                  <p>
                    {String(index + 1).padStart(2, "0")} / {project.eyebrow}
                  </p>
                  <h2>{project.title}</h2>
                  <span>{project.text}</span>
                  <div>
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
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
