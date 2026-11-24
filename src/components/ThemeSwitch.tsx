"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("theme", t);
    } catch {}
  };

  const btn = (t: Theme, label: string) => (
    <button
      type="button"
      aria-pressed={theme === t}
      onClick={() => choose(t)}
      className={`rounded-md px-3 py-1 text-xs font-medium ${
        theme === t ? "bg-accent text-on-accent" : "text-muted hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div role="group" aria-label="Colour theme" className="flex gap-1 rounded-lg border border-line p-1">
      {btn("dark", "Dark")}
      {btn("light", "Light")}
    </div>
  );
}
