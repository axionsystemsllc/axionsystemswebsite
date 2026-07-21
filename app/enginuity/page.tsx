import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Enginuity Workspace | Coming Soon",
  description:
    "Enginuity Workspace is an internal AI-powered engineering education and technical workspace platform in development under Axion Systems.",
};

export default function EnginuityPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-emerald-950">
      <SiteHeader theme="green" />

      <section className="green-particles relative isolate flex min-h-[calc(100vh-73px)] items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.20),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(5,150,105,0.22),transparent_34%),linear-gradient(135deg,#f7fff8,#ffffff_45%,#0f3d2e_140%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-emerald-950/15 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Enginuity Workspace
            </p>
            <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Coming Soon...
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-900/75">
              An internal AI-powered engineering education and technical
              workspace platform currently in development under Axion
              Systems.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(6,78,59,0.24)] transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Ask about Enginuity
            </Link>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-white/70 p-5 shadow-[0_24px_80px_rgba(6,78,59,0.16)] backdrop-blur">
            <div className="rounded-[1.5rem] bg-emerald-950 p-6 text-white">
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  Workspace concept
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="space-y-3">
                {["Lessons", "Lab notes", "Engineering assistant", "Project memory"].map(
                  (item) => (
                    <div
                      className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm font-medium"
                      key={item}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
