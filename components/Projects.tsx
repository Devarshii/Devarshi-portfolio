"use client";

import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionHeading title="Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="card group block p-6 shadow-soft transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight text-gray-900">
                  {p.title}
                </h3>

                <span
                  className="text-sm font-medium opacity-60 transition group-hover:opacity-100"
                  style={{ color: "rgb(var(--accent))" }}
                >
                  ↗
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs text-gray-600"
                    style={{
                      borderColor: "rgb(var(--border))",
                      background: "rgb(var(--card-soft))",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: "rgb(var(--accent))" }}
                >
                  View on GitHub <span className="opacity-60">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
