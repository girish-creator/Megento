"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const link = (href: string) =>
    `relative py-1 transition-colors hover:text-ink ${pathname.startsWith(href) ? "text-ink after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-accent" : "text-muted"}`;

  return (
    <header className={`sticky top-0 z-40 border-b bg-bg/85 backdrop-blur transition-colors ${scrolled ? "border-line" : "border-transparent"}`}>
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link href="/" className="font-display text-lg font-semibold">
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={link(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">Book a demo</Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fade-up container-page flex flex-col gap-4 border-t border-line py-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-ink">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">Book a demo</Link>
        </nav>
      )}
    </header>
  );
}
