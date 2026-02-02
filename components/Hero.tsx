"use client";

import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal_temp";
export default function Hero() 
{
  return (
    <section className="relative py-16">
      {/* soft background blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-[-120px] h-[340px] w-[340px] rounded-full blur-3xl"
        style={{ background: "rgba(var(--accent), 0.14)" }}
      />
      <div
        className="pointer-events-none absolute top-24 left-[-140px] h-[300px] w-[300px] rounded-full blur-3xl"
        style={{ background: "rgba(var(--accent-soft), 0.40)" }}
      />

      <Reveal>
        <p className="text-sm text-gray-500">{portfolio.location}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-gray-900">
          {portfolio.name}
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {portfolio.headline}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl px-5 py-2 text-sm text-white"
            style={{ background: "rgb(var(--accent))" }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl border bg-white px-5 py-2 text-sm text-gray-700"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            Contact
          </a>

          <a
            href="/resume"
            className="rounded-2xl border bg-white px-5 py-2 text-sm text-gray-700"
            style={{ borderColor: "rgb(var(--border))" }}
          >
            Resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div
          className="mt-10 rounded-2xl border p-6"
          style={{
            borderColor: "rgb(var(--border))",
            background: "rgb(var(--card))",
          }}
        >
          <p className="text-gray-700">{portfolio.about.intro}</p>
        </div>
      </Reveal>
    </section>
  );
}
