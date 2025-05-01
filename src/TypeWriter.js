import React from "react";
import { Typewriter } from "react-simple-typewriter";

/**
 * Displays an animated typewriter effect cycling through developer-related phrases.
 *
 * Renders a styled text block introducing the user with "I'm" followed by a looping typewriter animation that cycles through predefined phrases.
 *
 * @returns {JSX.Element} The rendered typewriter introduction component.
 */
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