import Link from "next/link";

export function CtaBand({ title = "See it on your own use case" }: { title?: string }) {
  return (
    <section className="container-page mt-24">
      <div className="card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-muted">Book a short conversation and we will walk you through a demo.</p>
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          Book a demo
        </Link>
      </div>
    </section>
  );
}
