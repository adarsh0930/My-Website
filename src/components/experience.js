import React from "react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16">
      <h2 className="text-5xl font-bold mb-12 items-center justify-center bg-gradient-to-r from-fuchsia-500 via-sky-400 to-pink-500 bg-[length:150%_150%] animate-gradient-x text-transparent bg-clip-text transition-all duration-2000 ease-in-out">Experience</h2>

      <div className="relative">
        <div
          className="
            absolute top-0 bottom-0 w-px bg-gray-700 dark:bg-gray-600
            left-20              /* 25% in from the left edge */
          "
        />

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-1/4 text-right pr-16 pt-6">
                <p className="text-sm font-medium">{exp.date}</p>
              </div>
              <div className="w-3/4 relative">
                <div
                  className="
                    absolute 
                    -left-60            /* pull left half the node's width */
                    top-6                 /* aligns with card padding */
                    h-5 w-5 bg-gray-800 dark:bg-gray-900 border-2 border-gray-700 dark:border-gray-600 rounded-full
                  "
                />

                <div
                  className="p-6 dark:bg-black border border-gray-700 dark:border-gray-600 rounded-lg"
                >
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400 mb-4 font-bold">{exp.company}</p>

                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800 dark:text-white">
                    {exp.details.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#22262d] text-white flex items-center gap-2 rounded-full text-[1rem] font-medium border border-[#303542]"
                      >
                        <img src={`/logos/${tech.toLowerCase()}.svg`} alt={tech + " logo"} className="w-5 h-5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}