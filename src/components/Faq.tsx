const items = [
  {
    q: "How do we get started?",
    a: "Book a short conversation. We discuss your use case, show the relevant solution and agree whether a pilot makes sense.",
  },
  {
    q: "Where is our data hosted and processed?",
    a: "The Trust & security page lists hosting regions, sub-processors and model providers. A Data Processing Agreement is available on request.",
  },
  {
    q: "Does a person stay in control?",
    a: "Yes. Each solution is designed with human review: people approve exceptions, check evidence and make the final decision.",
  },
  {
    q: "Which of the three solutions should we start with?",
    a: "Start with the problem that costs you most: finding information (Onderzoeker), converting data between systems (Agentic Omzetter) or trusting your data quality (Kwalificatiestrijder). We can help you choose.",
  },
];

export function Faq() {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((i) => (
        <details key={i.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            {i.q}
            <span aria-hidden className="text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-muted">{i.a}</p>
        </details>
      ))}
    </div>
  );
}
