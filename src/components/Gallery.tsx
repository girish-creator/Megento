"use client";

import { useRef } from "react";

export function Gallery({ slug, name }: { slug: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow = "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg/90 text-ink backdrop-blur hover:border-accent";

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={`${name} sample screens, scrollable`}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {[1, 2, 3, 4].map((n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={n}
            src={`/media/${slug}/${n}`}
            alt={`Sample screen ${n} of ${name}`}
            loading="lazy"
            className="aspect-video w-[85%] shrink-0 snap-center rounded-xl border border-line object-cover"
          />
        ))}
      </div>
      <button type="button" aria-label="Previous image" onClick={() => scroll(-1)} className={`${arrow} left-2`}>
        &larr;
      </button>
      <button type="button" aria-label="Next image" onClick={() => scroll(1)} className={`${arrow} right-2`}>
        &rarr;
      </button>
    </div>
  );
}
