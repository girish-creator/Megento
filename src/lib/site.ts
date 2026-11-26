export const site = {
  // Placeholder: the final company name is still to be confirmed.
  name: "Megento",
  tagline: "Data. Intelligence. Automation. Better decisions.",
  description:
    "AI solutions for research, data conversion and data validation, designed for GDPR and EU AI Act requirements and hosted in the EU.",
  email: "hello@example.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
};

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/trust", label: "Trust & security" },
  { href: "/about", label: "About" },
];
