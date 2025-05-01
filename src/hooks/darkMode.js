import { useState, useEffect } from "react";

/**
 * React hook for managing and persisting a dark or light theme preference.
 *
 * Initializes the theme based on localStorage, system preference, or defaults to "light" in non-browser environments. Synchronizes the theme with the root HTML element's class list and persists changes to localStorage.
 *
 * @returns {[string, function]} An array containing the current theme ("dark" or "light") and a setter function to update the theme.
 */
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