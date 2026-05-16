import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 55,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ["#67e8c8", "#8ea6ff", "#f6b561"],
          },
          line_linked: {
            enable: false,
            opacity: 0.02,
          },
          move: {
            direction: "right",
            speed: 0.12,
          },
          size: {
            value: 1.2,
          },
          opacity: {
            value: 0.16,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.06,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
