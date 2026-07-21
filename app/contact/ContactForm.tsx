"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Manufacturing or prototype quote",
  "PCB, electrical, or hardware design",
  "Business AI solution",
  "Embedded AI or robotics",
  "Modeling, design, or documentation",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");

    const formData = new FormData(form);
    const payload = {
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message"),
      name: formData.get("name"),
      projectType: formData.get("projectType"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (requestError) {
      setStatus("error");
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The message could not be sent.",
      );
    }
  }

  return (
    <form
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
        Company
        <input
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white"
          name="company"
          placeholder="Company or organization"
          type="text"
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
        Project type
        <select
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white"
          name="projectType"
        >
          {projectTypes.map((projectType) => (
            <option key={projectType}>{projectType}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
        Message
        <textarea
          className="min-h-40 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:bg-white"
          name="message"
          placeholder="A short description of the problem, system, timeline, or project goals."
          required
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending..." : "Request free quote"}
        </button>

        {status === "sent" ? (
          <p className="text-sm font-medium text-green-700">
            Message sent. We will get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-red-700">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
