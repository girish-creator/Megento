"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Solution } from "@/lib/solutions";
import { Gallery } from "./Gallery";
import { HowItWorks } from "./HowItWorks";

type Props = { items: Solution[]; basePath: string; id: string; label: string };

export function SolutionTabs({ items, basePath, id, label }: Props) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = items[active];

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={label} onKeyDown={onKey} className="grid gap-2 rounded-2xl border border-line bg-surface p-2 sm:grid-cols-3">
        {items.map((x, i) => (
          <button
            key={x.slug}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`tab-${id}-${x.slug}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-xl px-4 py-3 text-left transition-colors ${
              i === active ? "bg-accent text-on-accent" : "hover:bg-bg"
            }`}
          >
            <span className="block font-mono text-xs uppercase tracking-widest opacity-80">{x.pillar}</span>
            <span className="block font-semibold">{x.name}</span>
          </button>
        ))}
      </div>

      <div
        key={s.slug}
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`tab-${id}-${s.slug}`}
        className="fade-up mt-6 grid gap-8 rounded-2xl border border-line bg-surface p-6 lg:grid-cols-2 lg:p-8"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">{s.tagline}</h3>
            <p className="mt-3 text-sm text-muted">{s.description}</p>
            <p className="mt-3 text-sm text-muted">{s.problem}</p>
          </div>
          <HowItWorks steps={s.how} />
          <ul className="space-y-2 text-sm">
            {s.outcomes.map((o) => (
              <li key={o} className="flex gap-3">
                <span aria-hidden className="text-accent">&#10003;</span>
                <span className="text-muted">{o}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href={`${basePath}/${s.slug}`} className="btn-secondary">Full details</Link>
            <Link href="/contact" className="btn-primary">Book a demo</Link>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <Gallery slug={s.slug} name={s.name} />
          <video
            controls
            preload="none"
            poster={`/media/${s.slug}/1`}
            className="aspect-video w-full rounded-xl border border-line bg-bg"
          >
            <source src={`/videos/${s.slug}.mp4`} type="video/mp4" />
            Your browser does not support video playback.
          </video>
          <p className="text-xs text-muted">Sample content. Add the real walkthrough at public/videos/{s.slug}.mp4.</p>
        </div>
      </div>
    </div>
  );
}
