import { portfolio } from "../data/portfolio";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-tight text-gray-900">
          {portfolio.name}
        </a>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>

          {/* DEBUG MARKER */}
        
          <a href={`mailto:${portfolio.email}`} className="hover:text-gray-900">
            Email
          </a>

          <a
            href="/resume"
            className="rounded-xl px-4 py-2 text-white"
            style={{ background: "rgb(var(--accent))" }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
