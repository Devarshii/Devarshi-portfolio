import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pb-20">
        <Container>
          <Hero />
          <About />
          <Projects />

          <Reveal>
            <section id="contact" className="py-20">
              <div className="mb-7 flex items-end gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  Contact
                </h2>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgb(var(--border))" }}
                />
              </div>

              <div className="card-soft p-6">
                <p className="text-gray-700">
                  Want to collaborate or discuss an opportunity? Reach out via
                  email or LinkedIn.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`mailto:${portfolio.email}`} className="btn-primary">
                    Email Me
                  </a>

                  <a
                    href={portfolio.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>

                  <a
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
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
        </Container>
      </main>
    </>
  );
}
