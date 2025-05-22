import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 80;
      let current = active;
      for (let item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (scrollY >= el.offsetTop) {
          current = item.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [active]);

  return (
    <nav className="sticky top-4 z-50 flex justify-center pointer-events-none">
      <ul
        className="
          pointer-events-auto 
          flex items-center space-x-4
          bg-white/20 dark:bg-black/60
          backdrop-blur-lg
          px-4 py-2
          rounded-full
          shadow-lg
        "
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={300}
                offset={-70}
                className={`
                  cursor-pointer
                  px-4 py-2
                  text-sm md:text-base font-medium
                  rounded-full
                  transition
                  ${
                    isActive
                      ? "bg-white/70 dark:bg-white/20 text-black dark:text-white"
                      : "text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </ScrollLink>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              p-2 rounded-full
              text-black/70 dark:text-white/70
              hover:bg-black/10 dark:hover:bg-white/10
              transition
            "
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}