import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">About</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold">Practical AI for organisations that need results</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Add your background, expertise and mission here. Personal credibility is a major factor for corporate buyers.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
