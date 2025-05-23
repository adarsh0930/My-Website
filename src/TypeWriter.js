import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <div className="text-4xl font-bold h-20 flex items-center">
      I&apos;m{" "}
      <span className="text-purple-400 ml-2">
        <Typewriter
          words={["a full-stack developer", "a Problem Solver", "a JavaScript Expert"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={90}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}