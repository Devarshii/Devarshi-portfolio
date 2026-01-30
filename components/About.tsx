import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mb-6 flex items-end gap-4">
        <h2 className="text-xl font-semibold text-gray-900">About</h2>
        <div
          className="h-px flex-1"
          style={{ background: "rgb(var(--border))" }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div
          className="rounded-2xl border p-6"
          style={{
            borderColor: "rgb(var(--border))",
            background: "rgb(var(--card))",
          }}
        >
          <p className="text-[15px] leading-6 text-gray-700">
            {portfolio.about.intro}
          </p>

          <p className="mt-3 text-[15px] leading-6 text-gray-700">
            {portfolio.about.details}
          </p>
        </div>

        <div
          className="rounded-2xl border bg-white p-6"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="text-sm font-medium text-gray-900">Highlights</p>

          <ul className="mt-3 space-y-2 text-[15px] text-gray-600">
            {portfolio.about.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full"
                  style={{ background: "rgb(var(--accent))" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
