import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = { title: "Case studies" };

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">Case studies</p>
        <h1 className="mt-3 text-4xl font-semibold">Proof from real pilots</h1>
        <p className="mt-4 max-w-2xl text-muted">
          No case studies are published yet. Add one or two anonymised, verified results here once available. Do not
          show invented metrics or customer logos.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
