import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SolutionCard } from "@/components/SolutionCard";
import { SolutionTabs } from "@/components/SolutionTabs";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">Solutions</p>
        <h1 className="mt-3 text-4xl font-semibold">Three complementary AI capabilities</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <SolutionCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-page mt-20">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold">See each solution in action</h2>
          <SolutionTabs solutions={solutions} />
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
