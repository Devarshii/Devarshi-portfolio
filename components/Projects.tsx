import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-6 flex items-end gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <div
          className="h-px flex-1"
          style={{ background: "rgb(var(--border))" }}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-gray-900">
                {p.title}
              </h3>
              <span
                className="text-sm opacity-60 group-hover:opacity-100"
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
                    background: "rgb(var(--card))",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
