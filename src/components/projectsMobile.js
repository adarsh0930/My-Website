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
    <div className="bg-black bg-opacity-90 text-white rounded-2xl shadow-xl p-5 my-3 w-full pointer-events-auto">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r ${project.gradient} bg-[length:200%_200%] animate-gradient-x bg-clip-text transition-all duration-2000 ease-in-out text-transparent`}>{project.name}</h2>
      <p className="mb-3">{project.description}</p>
      <ul className="mb-3 list-disc list-inside text-sm">
        {project.points.map((pt, i) => (<li key={i}>{pt}</li>))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-0.5 bg-gray-700 rounded text-xs">{tech.name}</span>
        ))}
      </div>
    </div>
  );
}