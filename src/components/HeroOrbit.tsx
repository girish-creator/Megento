"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Solution } from "@/lib/solutions";

// Three nodes on a ring at -90, 30 and 150 degrees.
const positions = ["left-1/2 top-[2%]", "left-[93%] top-[75%]", "left-[7%] top-[75%]"];

export function HeroOrbit({ solutions }: { solutions: Solution[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % solutions.length), 4000);
    return () => clearInterval(id);
  }, [paused, solutions.length]);

  const pick = (i: number) => {
    setPaused(true);
    setActive(i);
  };
  const s = solutions[active];

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative mx-auto aspect-square w-full max-w-[22rem]">
        <div aria-hidden className="orbit-ring absolute inset-[8%] rounded-full border border-dashed border-line" />
        <div aria-hidden className="absolute inset-[22%] rounded-full border border-line" />
        <div aria-hidden className="absolute inset-[34%] rounded-full bg-accent opacity-25 blur-2xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-sm tracking-widest text-muted">AI</span>
        </div>
        {solutions.map((x, i) => (
          <button
            key={x.slug}
            type="button"
            aria-pressed={i === active}
            onClick={() => pick(i)}
            onMouseEnter={() => pick(i)}
            className={`absolute ${positions[i]} -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
              i === active
                ? "scale-110 border-accent bg-accent text-on-accent shadow-lg"
                : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {x.pillar}
          </button>
        ))}
      </div>

      <div key={active} className="fade-up card mt-4 text-center" aria-live="polite">
        <p className="font-semibold">{s.name}</p>
        <p className="mt-1 text-sm text-muted">{s.tagline}</p>
        <Link href={`/solutions/${s.slug}`} className="mt-3 inline-block text-sm font-medium text-accent">
          Explore &rarr;
        </Link>
      </div>
    </div>
  );
}
