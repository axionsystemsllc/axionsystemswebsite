import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Locations | Axion Systems",
  description:
    "Find Axion Systems in Warren and Auburn Hills, Michigan. Our Warren location is the primary home for meetings, coordination, and manufacturing-facing work.",
};

const warrenAddress = "21275 Mullin Avenue, Warren, MI 48089";
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  warrenAddress,
)}`;

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="locations-hero relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/real/warren-lobby.png"
            alt="Lobby at Axion Systems' primary Warren location"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/72 to-slate-950/18" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-slate-950 to-transparent" />
        <div aria-hidden className="locations-hero-grid" />

        <div className="mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-300">
              <span className="h-px w-10 bg-yellow-300" />
              Southeast Michigan
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Close to the work. Close to our customers.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Two Michigan locations give Axion a practical base for direct
              collaboration, engineering support, and fast-moving technical
              work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-300"
                href={directionsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Directions to Warren
                <span aria-hidden>↗</span>
              </a>
              <Link
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                href="/contact"
              >
                Plan a meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="locations-intro px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-slate-200 py-9 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Michigan footprint
            </p>
            <p className="mt-3 text-4xl font-semibold tracking-tight">2 locations</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Primary location
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">Warren</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Secondary location
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">Auburn Hills</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              01 / Primary location
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Warren, Michigan
            </h2>
            <address className="mt-6 not-italic text-xl font-semibold leading-8 text-slate-800">
              21275 Mullin Avenue
              <br />
              Warren, MI 48089
            </address>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Our Warren location is Axion&apos;s primary home for customer
              meetings, team coordination, and manufacturing-facing project
              work. It gives customers direct access to the people shaping and
              executing their solution.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-slate-950"
              href={directionsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Maps
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="locations-photo-grid scroll-reveal">
            <div className="locations-photo-main">
              <Image
                src="/images/real/warren-conference.png"
                alt="Conference room at the Axion Systems Warren location"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <span>Customer collaboration</span>
            </div>
            <div className="locations-photo-side">
              <Image
                src="/images/real/warren-office.png"
                alt="Engineering workspace at the Axion Systems Warren location"
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover"
              />
              <span>Project workspace</span>
            </div>
          </div>
        </div>
      </section>

      <section className="locations-secondary px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="scroll-reveal">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              02 / Secondary location
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Auburn Hills, Michigan
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our Auburn Hills location supports additional engineering and
              project activity across the region. Contact the team to coordinate
              the right location for your project or meeting.
            </p>
          </div>
          <div className="locations-secondary-card scroll-reveal">
            <span>Supporting location</span>
            <strong>Auburn Hills</strong>
            <p>Engineering and project support</p>
            <Link href="/contact">
              Contact Axion
              <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="locations-cta mx-auto grid max-w-7xl gap-8 p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Start the conversation
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s choose the best place to move your project forward.
            </h2>
          </div>
          <Link
            className="inline-flex w-fit items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
            href="/contact"
          >
            Innovate with us
            <span aria-hidden>›</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Axion Systems LLC</p>
          <p>Warren and Auburn Hills, Michigan</p>
        </div>
      </footer>
    </main>
  );
}
