import Link from "next/link";
import { portfolio } from "../../data/portfolio";

export default function ResumePage() {
  return (
    <main>
      <div
        className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur"
        style={{ borderColor: "rgb(var(--border))" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold text-gray-900">
            ← Home
          </Link>
          <div className="text-sm text-gray-600">{portfolio.name}</div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Resume
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          View in browser or download as PDF.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="rounded-2xl px-5 py-2 text-sm text-white"
            style={{ background: "rgb(var(--accent))" }}
            download
          >
            Download PDF
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border bg-white px-5 py-2 text-sm text-gray-700"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            Open in new tab
          </a>
        </div>

        <div
          className="mt-6 overflow-hidden rounded-2xl border bg-white"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <iframe
            title="Resume"
            src="/resume.pdf"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </main>
  );
}
