import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Readable APIs and contracts that survive product growth.",
          "Production debugging with logs, context, and calm incident handling.",
          "Data flows that stay predictable across services and teams.",
          "Systems that trade unnecessary cleverness for operational confidence."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 18,
        delay: 30
      }}
    />
  );
}

export default Type;
