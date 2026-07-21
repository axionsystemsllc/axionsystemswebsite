import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Axion Systems",
  description:
    "Contact Axion Systems for embedded systems, legacy hardware redesign, technical software, and engineering AI tools.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Contact
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Tell us what you are building or modernizing.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Use the form for embedded systems, PCB redesign, bring-up,
              technical software, AI tooling, or documentation work.
            </p>
            <p className="mt-8 text-sm font-medium text-slate-600">
              Direct email:{" "}
              <a className="text-blue-700" href="mailto:chancen@axionsystems.us">
                chancen@axionsystems.us
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
