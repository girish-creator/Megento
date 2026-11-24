import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy notice" };

export default function PrivacyPage() {
  return (
    <section className="container-page max-w-3xl pt-16">
      <h1 className="text-4xl font-semibold">Privacy notice</h1>
      <p className="mt-4 text-muted">
        Placeholder. Have a privacy lawyer draft this notice: controller identity, purposes and lawful basis for contact
        and demo requests, retention, recipients (CRM, email), international transfers, visitor rights and the privacy
        contact.
      </p>
    </section>
  );
}
