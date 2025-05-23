import React, { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";

const AnimatedProjects = () => (
  <span className="bg-gradient-to-r from-fuchsia-700 via-sky-500 to-pink-600 bg-[length:200%_200%] animate-gradient-x text-transparent bg-clip-text transition-all duration-2000 ease-in-out">
    Projects
  </span>
);

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gutterRefs = useRef([]);
  const [tiltIdx, setTiltIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      gutterRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.3 &&
            rect.bottom > window.innerHeight * 0.3
          ) {
            setActiveIndex(idx);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center pb-16">
      {/* Heading Section */}
      <h2 className="text-5xl text-gray-800 dark:text-white font-bold mt-20 mb-16 text-center tracking-tight">
        Curated <AnimatedProjects />
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-14 w-full max-w-[1600px] mx-auto">
        {/* LEFT: PROJECT GUTTER */}
        <div className="flex flex-col gap-12 md:gap-24 w-full lg:w-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (gutterRefs.current[idx] = el)}
              className={
                `rounded-3xl shadow-2xl transition-all duration-300
                w-full lg:w-[600px] xl:w-[800px] 2xl:w-[1020px]
                h-[320px] sm:h-[420px] md:h-[480px] lg:h-[570px] xl:h-[600px]
                relative bg-gradient-to-br ${project.gradient}
                p-4 sm:p-8 md:p-12 border border-neutral-700
                flex flex-col justify-between mx-auto`
              }
              style={{ minHeight: 250 }}
              onMouseEnter={() => setTiltIdx(idx)}
              onMouseLeave={() => setTiltIdx(null)}
            >
              <div
                className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-6 font-semibold"
                style={{ color: project.gutterLight }}
              >
                {project.tagline}
              </div>
              <div className="flex-grow flex flex-col justify-end">
                <div
                  className="relative w-full flex items-end overflow-visible"
                  style={{ height: "150px" }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-xl md:rounded-2xl border border-neutral-800 object-cover w-full h-[120px] sm:h-[180px] md:h-[250px] lg:h-[340px] xl:h-[400px] transition-transform duration-400"
                    style={{
                      boxShadow:
                        "0 30px 80px 0 rgba(255,255,255,0.05)," +
                        (project.accentShadow || "0 5px 30px 0 #fff"),
                      transform:
                        tiltIdx === idx
                          ? "perspective(700px) rotateY(13deg) rotateX(3deg) scale(1.025)"
                          : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* RIGHT: DESCRIPTION SECTION */}
        <section className="mt-10 lg:mt-0 sticky lg:top-24 self-start transition-colors duration-500 max-w-full lg:max-w-lg px-0 lg:pl-2 lg:pr-4 flex flex-col justify-start min-h-[210px] md:min-h-[250px] lg:min-h-[500px]">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-5 bg-gradient-to-r ${projects[activeIndex].gradient} bg-[length:200%_200%] animate-gradient-x bg-clip-text transition-all duration-2000 ease-in-out text-transparent`}>
            {projects[activeIndex].name}
          </h2>
          <p className="mb-4 sm:mb-7 text-base sm:text-lg text-gray-800 dark:text-white font-normal leading-snug">
            {projects[activeIndex].description}
          </p>
          <ul className="mb-4 sm:mb-7 space-y-2 sm:space-y-5">
            {projects[activeIndex].points.map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs sm:text-base text-gray-800 dark:text-white"
                style={{ gap: "0.7em" }}
              >
                <span
                  className="mt-1"
                  style={{
                    color: projects[activeIndex].accentColor,
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
            {projects[activeIndex].technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#22262d] text-gray-800 dark:text-white flex items-center gap-2 rounded-full text-xs sm:text-[1rem] font-medium border border-[#303542]"
              >
                <img src={tech.logo} alt={tech.name + " logo"} className="w-4 h-4 sm:w-5 sm:h-5" />
                {tech.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectShowcase;