import React, { useState } from "react";


const contacts = [
  {
    title: "LinkedIn",
    subtitle: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/adarshsingh0930",
    img: "/linkedin-profile-dark.png",
    icon: (
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-[32px] h-[32px]">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 7h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="7" y="11" width="2" height="6" rx="1" fill="currentColor"/>
            <rect x="11" y="11" width="2" height="6" rx="1" fill="currentColor"/>
            <path d="M14 11a2 2 0 1 1 4 0v6" stroke="currentColor" strokeWidth="2"/>
        </svg>
    ),
    line: "adarshsingh0930",
  },
  {
    title: "Gmail",
    subtitle: "Reach out to me via email",
    url: "mailto:adarshsingh0930@gmail.com",
    img: "/gmail-dark.png",
    icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-[32px] h-[32px]">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    line: "adarshsingh0930@gmail.com",
  },
  {
    title: "Github",
    subtitle: "Connect with me on Github",
    url: "https://github.com/adarsh0930",
    img: "/github-dark.png",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="32"
            height="32"
            fill="currentColor"
            >
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2 
                .37-.5 1.11-1.66 1.11c-1 0-1.82-.68-2.12-1.63c-.21-.54-.72-.63-.72-.63c-.59-.4.05-.39.05-.39c.65.05 
                1 .67 1 .67c.58 1 1.52.72 1.89.55c.06-.42.23-.72.42-.88c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15 
                c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.03 2.2-.82 
                2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.24.21.45.62.45 
                1.25c0 .9-.01 1.63-.01 1.85c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
        </svg>
    ),
    line: "Connect on Github",
  },
];


const AnimatedProjects = () => (
  <span className="bg-gradient-to-r from-fuchsia-300 via-sky-400 to-pink-400 bg-[length:200%_200%] animate-gradient-x text-transparent bg-clip-text transition-all duration-1000 ease-in-out">
    CONTACT
  </span>
);

export default function Contact() {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="contacts" className="min-h-screen text-white dark:text-gray-800 flex flex-col items-center py-10">
      <h2 className="text-5xl mb-2 font-semibold text-gray-900 dark:text-white">
        <AnimatedProjects /> ME
      </h2>
      <p className="text-2xl mb-10 text-gray-700">
        Let's connect and create something amazing together.
      </p>
      <div className="flex flex-col md:flex-row gap-10 relative z-10 pt-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 relative z-10 w-full justify-center items-center">
          {contacts.map((contact, i) => (
            <a
              key={contact.title}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative transition-all duration-300 ease-out cursor-pointer rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm md:w-[350px] lg:w-[360px] p-5 md:p-7 flex flex-col items-start bg-black dark:bg-white mx-auto ${
                hovered === i ? "scale-95 rotate-x-6" : "scale-100"
              }`}
              style={{
                transform:
                  hovered === i
                    ? "translate(0%, 0%) rotateX(40deg) scale(0.8)"
                    : "translate(0%, 0%) rotateX(0deg) scale(1)",
              }}
            >
              {/* Top bar: Title & icon */}
              <div className="flex justify-between items-center w-full">
                <span className="text-[1.45rem] font-bold text-white dark:text-gray-800">
                  {contact.title}
                </span>
                <div className="text-white dark:text-gray-700">{contact.icon}</div>
              </div>

              <span className="mt-2 text-[1.06rem] text-white dark:text-gray-700">
                {contact.subtitle}
              </span>

              {/* Card Image with consistent height */}
              <img
                src={contact.img}
                className="w-full h-48 object-cover my-7 rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm"
                alt={contact.title}
              />

              {/* Hover line & pill (optional if card is now fully clickable) */}
              {hovered === i && (
                <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 flex flex-col items-center z-0">
                  <div className="shadow-lg rounded-xl px-5 py-2 font-medium bg-purple-100 text-purple-800 hover:bg-purple-200 transition pointer-events-none">
                    {contact.line}
                  </div>
                  <div className="w-0.5 h-40 bg-gradient-to-b from-purple-300 to-transparent" />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
