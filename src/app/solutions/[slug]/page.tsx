import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { getSolution, solutions } from "@/lib/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSolution((await params).slug);
  return { title: s?.name, description: s?.tagline };
}

export default async function SolutionPage({ params }: Props) {
  const s = getSolution((await params).slug);
  if (!s) notFound();

  return (
    <>
      <section className="container-page pt-16">
        <p className="label">{s.pillar}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{s.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{s.tagline}</p>
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
          Demo video placeholder: add a 60 to 90 second walkthrough of the real product here.
        </div>
      </section>

      <CtaBand title={`Discuss ${s.name}`} />
    </>
  );
}
