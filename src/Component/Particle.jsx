import React from "react";
import Particles from "react-tsparticles";

export default function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500,  // "value_area" ki jagah "area"
            },
          },
          links: {    // "line_linked" ki jagah "links"
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,  // ye bhi thoda update ho sakta hai, dekhna pade
            },
          },
        },
        interactivity: {
          events: {
            onClick: {       // lowercase se camelCase
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,    // "particles_nb" ab "quantity" ho gaya hai
            },
          },
        },
        detectRetina: true,    // camelCase
      }}
    />
  );
}

