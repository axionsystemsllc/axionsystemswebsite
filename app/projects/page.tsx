import type { Metadata } from "next";
import { ProjectReveal } from "../components/ProjectReveal";
import { ProjectSlideshow } from "../components/ProjectSlideshow";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Projects | Axion Systems",
  description:
    "A portfolio view of Axion Systems engineering projects across embedded systems, PCB design, industrial electronics, prototyping, and technical documentation.",
};

const projects = [
  {
    title: "Avionics Flight Computer",
    eyebrow: "Avionics",
    text: "A compact flight computer PCB developed for embedded control, sensor interfaces, power regulation, telemetry support, and recovery-oriented system logic. The work spans schematic architecture, board layout, embedded hardware planning, and design review artifacts.",
    images: [
      "/images/real-projects/flight-computer-pcb.jpg",
      "/images/real-projects/flight-computer-schematic.jpg",
    ],
    tags: ["Flight computer PCB", "Embedded control", "Sensor interfaces"],
  },
  {
    title: "Tank Vision 2.2 Product Electronics",
    eyebrow: "Industrial electronics",
    text: "A field-ready electronics and enclosure package for Tank Vision 2.2, designed for a major petroleum company. The effort included internal board design, Ethernet-facing hardware, enclosure integration, connector access, and product-level packaging.",
    images: [
      "/images/real-projects/tank-vision-enclosure.jpg",
      "/images/real-projects/tank-vision-blue-board.jpg",
      "/images/real-projects/tank-vision-green-board.jpg",
      "/images/real-projects/tank-vision-pcb-render.jpg",
    ],
    tags: ["Product electronics", "Industrial hardware", "Enclosure integration"],
  },
  {
    title: "Drone Design and Prototyping",
    eyebrow: "Prototype controls",
    text: "A scratch-built drone prototype created as a controls and integration test bed. The work centered on custom mechanical design, embedded electronics, power distribution, and early flight-control experimentation.",
    images: ["/images/real-projects/scratch-drone-prototype.jpg"],
    tags: ["Ground-up prototype", "Control systems", "Mechanical integration"],
  },
  {
    title: "Engineering Documentation and Schematics",
    eyebrow: "Design handoff",
    text: "Technical artifacts that support design review, debugging, manufacturing handoff, and long-term maintainability. The focus is on clear schematic structure, traceable system intent, and practical documentation for engineering teams.",
    images: [
      "/images/real-projects/flight-computer-schematic.jpg",
      "/images/real-projects/flight-computer-pcb.jpg",
    ],
    tags: ["Schematics", "Design review", "Manufacturing handoff"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden text-slate-950">
      <div aria-hidden className="engineering-fixed-backdrop" />
      <SiteHeader />

      <section className="relative z-10 border-b border-slate-200 bg-white/88 px-5 py-16 backdrop-blur-sm sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Portfolio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Engineering work with real hardware behind it.
            </h1>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-lg leading-8 text-slate-600">
              A concise portfolio of embedded systems, PCB design, product
              electronics, prototyping, and technical documentation work.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-slate-700 sm:grid-cols-4">
              {["PCB design", "Bring-up", "Embedded", "Integration"].map(
                (item) => (
                  <span
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-center"
                    key={item}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <ProjectReveal
                className="grid items-center gap-8 rounded-[2rem] border border-slate-200 bg-white/94 p-4 shadow-[0_22px_70px_rgba(15,23,42,0.1)] backdrop-blur-sm sm:p-6 lg:grid-cols-2 lg:p-8"
                direction={reverse ? "right" : "left"}
                key={project.title}
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <ProjectSlideshow
                    images={project.images}
                    title={project.title}
                  />
                </div>
                <div
                  className={`px-2 py-3 sm:px-4 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                    0{index + 1} / {project.eyebrow}
                  </p>
                  <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                    {project.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                        key={tag}
                      >
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

      <section className="relative z-10 px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1fr]">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Less portfolio theater. More engineering proof.
          </h2>
          <p className="text-base leading-8 text-slate-300">
            The page is intentionally fuller now, but still restrained: real
            project images, compact metadata, and alternating motion without
            turning the work into a loud marketing grid.
          </p>
        </div>
      </section>
    </main>
  );
}
