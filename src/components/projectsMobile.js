import React, { useRef, useEffect, useState } from "react";
import { projects } from "../data/projects";

export default function ProjectsMobile() {
  const [activeIdx, setActiveIdx] = useState(0);
  const gutterRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      let minDiff = Infinity, currIdx = 0;
      gutterRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const diff = Math.abs(rect.top - window.innerHeight * 0.25);
          if (diff < minDiff) {
            minDiff = diff;
            currIdx = idx;
          }
        }
      });
      setActiveIdx(currIdx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto px-2">
      {projects.map((project, idx) => (
        <div key={project.id} ref={el => gutterRefs.current[idx] = el} className="my-8">
          <GutterCard project={project} idx={idx} />
          {/* Only show description for the active gutter */}
          {activeIdx === idx && (
            <DescriptionCard project={project} />
          )}
        </div>
      ))}
    </div>
  );
}

function GutterCard({ project }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden border border-neutral-800 bg-gradient-to-br from-slate-800 via-gray-700 to-[#22262d]">
      <img src={project.image} alt={project.name} className="w-full h-40 sm:h-52 object-cover" />
    </div>
  );
}
function DescriptionCard({ project }) {
  return (
    <div className="bg-white dark:bg-black text-white rounded-2xl shadow-xl p-5 my-3 w-full pointer-events-auto transition-all duration-3000 ease-in-out">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r ${project.gradient} bg-[length:200%_200%] animate-gradient-x bg-clip-text transition-all duration-2000 ease-in-out text-transparent`}>{project.name}</h2>
      <p className="mb-3 text-gray-800 dark:text-white font-normal leading-snug">{project.description}</p>
      <ul className="mb-3 list-disc list-inside text-sm">
        {project.points.map((pt, i) => (
          <li
            key={i}
            className="flex items-start text-xs sm:text-base text-gray-800 dark:text-white"
            style={{ gap: "0.7em" }}
          >
            <span
              className="mt-1"
              style={{
                color: project.accentColor,
                fontSize: "1.2em",
                lineHeight: "1",
              }}
            >
              •
            </span>
            <span>{pt}</span>
          </li>

        ))}
      </ul>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#22262d] text-white flex items-center gap-2 rounded-full text-xs sm:text-[1rem] font-medium border border-[#303542]"
          >
            <img src={tech.logo} alt={tech.name + " logo"} className="w-4 h-4 sm:w-5 sm:h-5" />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}