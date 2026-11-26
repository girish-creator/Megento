import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SolutionCard } from "@/components/SolutionCard";
import { SolutionTabs } from "@/components/SolutionTabs";
import { services } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">Services</p>
        <h1 className="mt-3 text-4xl font-semibold">Services that keep your AI running</h1>
        <p className="mt-4 max-w-2xl text-muted">
          DevOps, a shared platform and support: everything around the solutions so they work reliably in your organisation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <SolutionCard s={s} basePath="/services" />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-page mt-20">
        <Reveal>
          <h2 className="mb-6 text-2xl font-semibold">See each service in detail</h2>
          <SolutionTabs items={services} basePath="/services" id="services-page" label="Services" />
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
