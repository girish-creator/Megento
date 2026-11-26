import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Reveal } from "@/components/Reveal";
import { SolutionTabs } from "@/components/SolutionTabs";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { solutions } from "@/lib/solutions";

export default function Home() {
  return (
    <>
      <section className="container-page relative grid gap-12 overflow-hidden pb-8 pt-16 md:pt-24 lg:grid-cols-2 lg:items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent opacity-15 blur-3xl"
        />
        <div className="fade-up relative">
          <p className="label">AI for the enterprise</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">{site.tagline}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Three AI solutions that research information, convert data between systems and validate data quality,
            hosted in the EU and built for GDPR and EU AI Act requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Book a demo</Link>
            <a href="#solutions" className="btn-secondary">Explore solutions</a>
          </div>
        </div>
        <div className="relative">
          <HeroOrbit />
        </div>
      </section>

      <section id="solutions" className="container-page mt-24 scroll-mt-24">
        <Reveal>
          <p className="label">Solutions</p>
          <h2 className="mt-3 text-3xl font-semibold">Research. Convert. Validate.</h2>
          <p className="mt-3 max-w-2xl text-muted">Pick a solution to see how it works, sample screens and a walkthrough video.</p>
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <SolutionTabs items={solutions} basePath="/solutions" id="solutions" label="Solutions" />
        </Reveal>
      </section>

      <section id="services" className="container-page mt-24 scroll-mt-24">
        <Reveal>
          <p className="label">Services</p>
          <h2 className="mt-3 text-3xl font-semibold">DevOps. Platform. Support.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            The services around the solutions that keep them running reliably in your organisation.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-8">
          <SolutionTabs items={services} basePath="/services" id="services" label="Services" />
        </Reveal>
      </section>

      <section className="container-page mt-24 grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="label">Trust</p>
          <h2 className="mt-3 text-3xl font-semibold">Built for European buyers</h2>
          <p className="mt-4 text-muted">
            Data residency, processor roles, sub-processors and AI Act classification are documented openly, so legal
            and security teams can evaluate us quickly.
          </p>
          <Link href="/trust" className="mt-6 inline-block text-sm font-medium text-accent">
            Read our trust approach &rarr;
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <ul className="card space-y-3 text-sm">
            {["EU hosting and processing", "Transparent data handling and sub-processors", "Human oversight by design", "Data Processing Agreement on request"].map(
              (t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="text-accent">&#10003;</span>
                  {t}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      <section className="container-page mt-24 max-w-3xl">
        <Reveal>
          <p className="label">FAQ</p>
          <h2 className="mb-6 mt-3 text-3xl font-semibold">Common questions</h2>
          <Faq />
        </Reveal>
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
