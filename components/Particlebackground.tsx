"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 55, density: { enable: true, area: 900 } },
            color: { value: "#0f766e" }, // teal vibe
            links: {
              enable: true,
              color: "#0f766e",
              distance: 140,
              opacity: 0.18,
              width: 1,
            },
            move: { enable: true, speed: 0.9 },
            opacity: { value: 0.28 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 140, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
