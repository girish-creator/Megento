import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Book a demo" };

export default function ContactPage() {
  return (
    <section className="container-page max-w-3xl pt-16">
      <p className="label">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold">Book a demo</h1>
      <p className="mt-4 text-muted">Tell us about your challenge and we will arrange a short conversation.</p>
      {site.bookingUrl && (
        <a href={site.bookingUrl} className="btn-secondary mt-6" rel="noopener noreferrer">
          Pick a time directly
        </a>
      )}
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
