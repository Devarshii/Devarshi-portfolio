"use client";

import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal_temp";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-7 flex items-end gap-4">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Projects
          </h2>
        </Reveal>

        <div
          className="h-px flex-1"
          style={{ background: "rgb(var(--border))" }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight text-gray-900">
                  {p.title}
                </h3>

                <span
                  className="text-sm font-medium opacity-60 transition group-hover:opacity-100"
                  style={{ color: "rgb(var(--accent))" }}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {p.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs text-gray-600"
                    style={{
                      borderColor: "rgb(var(--border))",
                      background: "rgb(var(--card))",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <span
                  className="inline-flex items-center justify-center rounded-full px-3 py-1"
                  style={{
                    background: "rgba(var(--accent), 0.10)",
                    color: "rgb(var(--accent))",
                  }}
                >
                  View on GitHub
                </span>

                <span className="opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
