import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Reveal from "../components/Reveal_temp";
import ParticleBackground from "../components/Particlebackground";
import { portfolio } from "../data/portfolio";

export default function Home() {
  return (
    <>
      {/* ✅ Particle background (reference-style “alive” feel) */}
      <ParticleBackground />

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pb-20">
        <Hero />
        <About />
        <Projects />

        <Reveal>
          <section id="contact" className="py-16">
            <div className="mb-6 flex items-end gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <div
                className="h-px flex-1"
                style={{ background: "rgb(var(--border))" }}
              />
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "rgb(var(--border))",
                background: "rgb(var(--card))",
              }}
            >
              <p className="text-gray-700">
                Want to collaborate or discuss an opportunity? Reach out via
                email or LinkedIn.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="rounded-2xl px-5 py-2 text-sm text-white"
                  style={{ background: "rgb(var(--accent))" }}
                >
                  Email Me
                </a>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border bg-white px-5 py-2 text-sm text-gray-700"
                  style={{ borderColor: "rgb(var(--border))" }}
                >
                  GitHub
                </a>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border bg-white px-5 py-2 text-sm text-gray-700"
                  style={{ borderColor: "rgb(var(--border))" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <footer
          className="border-t py-10"
          style={{ borderColor: "rgb(var(--border))" }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {portfolio.name}
          </p>
        </footer>
      </main>
    </>
  );
}
