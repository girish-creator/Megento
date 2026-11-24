export const site = {
  // Placeholder: the final company name is still to be confirmed.
  name: "Megento",
  tagline: "Intelligence. Automation. Better decisions.",
  description:
    "AI solutions for automation, data intelligence and decision support, designed for GDPR and EU AI Act requirements and hosted in the EU.",
  email: "hello@example.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
};

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/trust", label: "Trust & security" },
  { href: "/about", label: "About" },
];
