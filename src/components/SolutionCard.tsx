"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { Solution } from "@/lib/solutions";

export function SolutionCard({ s, basePath = "/solutions" }: { s: Solution; basePath?: string }) {
  const track = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      href={`${basePath}/${s.slug}`}
      onMouseMove={track}
      className="card spot group flex h-full flex-col transition-transform hover:-translate-y-1 hover:border-accent"
    >
      <span className="label">{s.pillar}</span>
      <h3 className="mt-3 text-xl font-semibold">{s.name}</h3>
      <p className="text-xs text-muted">{s.meaning}</p>
      <p className="mt-2 flex-1 text-sm text-muted">{s.tagline}</p>
      <span className="mt-6 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">Learn more &rarr;</span>
    </Link>
  );
}
