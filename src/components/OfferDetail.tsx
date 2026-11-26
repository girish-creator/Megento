import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import type { Solution } from "@/lib/solutions";

export function OfferDetail({ s }: { s: Solution }) {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">{s.pillar}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{s.name}</h1>
        <p className="mt-1 text-sm text-muted">{s.meaning}</p>
        <p className="mt-4 max-w-2xl text-lg text-muted">{s.tagline}</p>
        <p className="mt-4 max-w-3xl text-muted">{s.description}</p>
        <Link href="/contact" className="btn-primary mt-8">Request a demo</Link>
      </section>

      <section className="container-page mt-20">
        <h2 className="text-2xl font-semibold">The business challenge</h2>
        <p className="mt-3 max-w-3xl text-muted">{s.problem}</p>
      </section>

      <section className="container-page mt-20">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {s.how.map((step, i) => (
            <li key={step.title} className="card">
              <span className="label">Step {i + 1}</span>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">Intended outcomes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {s.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold">Integrations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {s.integrations.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-20">
        <div className="card text-sm text-muted">
          Demo video placeholder: add a 60 to 90 second walkthrough at public/videos/{s.slug}.mp4.
        </div>
      </section>

      <CtaBand title={`Discuss ${s.name}`} />
    </>
  );
}
