import { useState, useEffect } from "react";

export default function useDarkMode() {
  
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}