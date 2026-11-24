import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = { title: "Trust & security" };

const topics = [
  { t: "Hosting and data residency", d: "State where data is hosted and processed (EU region or EU provider)." },
  { t: "Model training", d: "State whether customer data is used for model training." },
  { t: "Sub-processors", d: "List all sub-processors, including model providers." },
  { t: "Security practices", d: "Access control, encryption, logging and incident handling, only as actually implemented." },
  { t: "Documents", d: "Downloadable Data Processing Agreement and security overview." },
  { t: "Privacy contact", d: "A named contact for privacy questions." },
];

export default function TrustPage() {
  return (
    <>
      <section className="container-page pt-16">
        <p className="label">Trust &amp; security</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold">Designed for GDPR and EU AI Act requirements, hosted in the EU</h1>
        <p className="mt-4 max-w-2xl text-muted">
          We are the controller for this website and, in most cases, the processor when customers use our tools on their data.
        </p>
      </section>

      <section className="container-page mt-16 grid gap-4 md:grid-cols-3">
        {topics.map((x) => (
          <div key={x.t} className="card">
            <h2 className="font-semibold">{x.t}</h2>
            <p className="mt-2 text-sm text-muted">{x.d}</p>
          </div>
        ))}
      </section>

      <section className="container-page mt-16">
        <h2 className="text-2xl font-semibold">EU AI Act classification</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th className="py-3 pr-4">Solution</th>
                <th className="py-3 pr-4">Annex III</th>
                <th className="py-3 pr-4">Role</th>
                <th className="py-3">Article 50</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map((s) => (
                <tr key={s.slug} className="border-b border-line">
                  <td className="py-3 pr-4">{s.name}</td>
                  <td className="py-3 pr-4 text-muted">To be assessed</td>
                  <td className="py-3 pr-4 text-muted">To be assessed</td>
                  <td className="py-3 text-muted">To be assessed</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          Complete this table after a legal review. Do not publish claims such as &ldquo;fully GDPR compliant&rdquo; or &ldquo;AI Act certified&rdquo;.
        </p>
      </section>

      <CtaBand title="Questions from legal or security?" />
    </>
  );
}
