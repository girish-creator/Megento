"use client";

import { useState } from "react";

export function HowItWorks({ steps }: { steps: { title: string; text: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ol className="flex items-center">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-1 items-center last:flex-none">
            <button
              type="button"
              aria-current={i === active ? "step" : undefined}
              aria-label={`Step ${i + 1}: ${s.title}`}
              onClick={() => setActive(i)}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                i <= active ? "border-accent bg-accent text-on-accent" : "border-line text-muted hover:border-accent"
              }`}
            >
              {i + 1}
            </button>
            {i < steps.length - 1 && (
              <span className="mx-2 h-px flex-1 bg-line">
                <span className={`block h-px bg-accent transition-all duration-500 ${i < active ? "w-full" : "w-0"}`} />
              </span>
            )}
          </li>
        ))}
      </ol>
      <div key={active} className="fade-up mt-4 rounded-xl border border-line bg-bg p-4" aria-live="polite">
        <p className="font-semibold">{steps[active].title}</p>
        <p className="mt-1 text-sm text-muted">{steps[active].text}</p>
      </div>
    </div>
  );
}
