"use client";

import { useState } from "react";
import { RadialGraph } from "./RadialGraph";

type Item = { name: string; text: string };
type RingId = "tools" | "services";

const rings: Record<RingId, { title: string; items: Item[] }> = {
  tools: {
    title: "Tools",
    items: [
      { name: "Research", text: "Finds, reads and summarises the information you need, with the sources behind every answer." },
      { name: "Convert", text: "Turn the chosen use case into a working AI solution fitted to your systems." },
      { name: "Validate", text: "Test on real scenarios and keep people in the loop to review results." },
    ],
  },
  services: {
    title: "Services",
    items: [
      { name: "DevOps", text: "Deploy and operate the solution in your environment with secure, repeatable pipelines." },
      { name: "Support", text: "Get help from people who know the solution, from onboarding to day-to-day questions." },
      { name: "Platform", text: "A shared foundation for integrations, access control and monitoring across solutions." },
    ],
  },
};

type Selection = { ring: RingId; index: number } | "data";

const dataText = "Data is the heart of any migration project, without it the Engine cannot run.";

function Ring({
  id,
  top,
  reverse,
  selected,
  onSelect,
}: {
  id: RingId;
  top: string;
  reverse?: boolean;
  selected: Selection;
  onSelect: (s: Selection) => void;
}) {
  const { items } = rings[id];
  const step = 360 / items.length;

  return (
    <div className={`${reverse ? "orbit-spin-rev" : "orbit-spin"} pointer-events-none absolute inset-0`}>
      {items.map((x, i) => {
        const on = selected !== "data" && selected.ring === id && selected.index === i;
        return (
          <div key={x.name} className="pointer-events-none absolute inset-0" style={{ transform: `rotate(${i * step}deg)` }}>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top }}>
              <span className="block" style={{ transform: `rotate(${-i * step}deg)` }}>
                <span className={`${reverse ? "orbit-counter-rev" : "orbit-counter"} block`}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => onSelect({ ring: id, index: i })}
                    onMouseEnter={() => onSelect({ ring: id, index: i })}
                    className={`pointer-events-auto rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                      on
                        ? "border-accent bg-accent text-on-accent shadow-lg"
                        : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
                    }`}
                  >
                    {x.name}
                  </button>
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HeroOrbit() {
  const [sel, setSel] = useState<Selection>({ ring: "tools", index: 0 });
  const isData = sel === "data";
  const item = isData ? { name: "Data", text: dataText } : rings[sel.ring].items[sel.index];

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="mb-2 text-center font-mono text-xs uppercase tracking-widest text-muted">Services</p>
      <div className="orbit relative mx-auto aspect-square w-full max-w-[26rem]">
        <RadialGraph />
        <div aria-hidden className="absolute inset-[4%] rounded-full border-2 border-dashed" style={{ borderColor: "color-mix(in srgb, var(--accent) 45%, transparent)" }} />
        <div aria-hidden className="absolute inset-[26%] rounded-full border-2 border-dashed" style={{ borderColor: "color-mix(in srgb, var(--accent) 75%, transparent)" }} />
        <div aria-hidden className="absolute inset-[38%] rounded-full bg-accent opacity-20 blur-2xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            aria-pressed={isData}
            onClick={() => setSel("data")}
            onMouseEnter={() => setSel("data")}
            className="rounded-full bg-accent px-5 py-2 font-display text-base font-semibold tracking-widest text-on-accent shadow-[0_0_28px_var(--accent)] transition-transform hover:scale-105"
          >
            DATA
          </button>
        </div>

        <Ring id="services" top="4%" selected={sel} onSelect={setSel} />
        <Ring id="tools" top="26%" reverse selected={sel} onSelect={setSel} />
        <p className="pointer-events-none absolute left-1/2 top-[15%] -translate-x-1/2 -translate-y-1/2 font-mono text-xs uppercase tracking-widest text-accent">
          Tools
        </p>
      </div>


      <div key={isData ? "data" : `${sel.ring}-${sel.index}`} className="fade-up card mt-4 text-center" aria-live="polite">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{isData ? "Core" : rings[sel.ring].title}</p>
        <p className="mt-1 font-semibold">{item.name}</p>
        <p className="mt-1 text-sm text-muted">{item.text}</p>
      </div>
    </div>
  );
}
