import Link from "next/link";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page grid gap-10 py-12 text-sm md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-2 max-w-xs text-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="label">Solutions</p>
          <ul className="mt-3 space-y-2 text-muted">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Company</p>
          <ul className="mt-3 space-y-2 text-muted">
            <li><Link href="/trust" className="hover:text-ink">Trust &amp; security</Link></li>
            <li><Link href="/privacy" className="hover:text-ink">Privacy notice</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="container-page pb-8 text-xs text-muted">
        &copy; {new Date().getFullYear()} {site.name}. Designed for GDPR and EU AI Act requirements, hosted in the EU.
      </p>
    </footer>
  );
}
