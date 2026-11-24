// Draft copy: verify every statement against the real product before publishing.
export type Solution = {
  slug: string;
  pillar: string;
  name: string;
  tagline: string;
  problem: string;
  how: { title: string; text: string }[];
  outcomes: string[];
  integrations: string[];
};

export const solutions: Solution[] = [
  {
    slug: "automation",
    pillar: "Automate",
    name: "AI Business Automation",
    tagline: "Reduce repetitive work and improve operational efficiency.",
    problem:
      "Teams lose time on manual, repetitive processes such as document handling, data entry and routing requests between systems.",
    how: [
      { title: "Connect", text: "Link the systems and documents your process already uses." },
      { title: "Automate", text: "AI handles routine steps and prepares the rest." },
      { title: "Review", text: "People approve exceptions and keep control." },
      { title: "Improve", text: "Track results and refine the workflow." },
    ],
    outcomes: [
      "Less manual effort on repetitive tasks",
      "Faster, more consistent process handling",
      "Human review for exceptions",
    ],
    integrations: ["Microsoft 365", "SAP", "REST APIs"],
  },
  {
    slug: "data-intelligence",
    pillar: "Understand",
    name: "AI Data Intelligence",
    tagline: "Turn business data into useful insights.",
    problem:
      "Valuable information is scattered across systems and reports, which makes it slow to analyse and hard to act on.",
    how: [
      { title: "Ingest", text: "Bring data in from approved sources with clear permissions." },
      { title: "Analyse", text: "AI finds patterns, trends and anomalies." },
      { title: "Explain", text: "Insights are presented in plain business language." },
      { title: "Share", text: "Deliver reports and dashboards to the right people." },
    ],
    outcomes: [
      "One clearer view across data sources",
      "Faster answers to business questions",
      "Insights that non-specialists can use",
    ],
    integrations: ["Databases and data warehouses", "Microsoft 365", "REST APIs"],
  },
  {
    slug: "decision-support",
    pillar: "Decide",
    name: "AI Decision Support",
    tagline: "Help people make better-informed decisions.",
    problem:
      "Important decisions rely on incomplete information, and the reasoning behind them is hard to document and review.",
    how: [
      { title: "Frame", text: "Define the decision, options and criteria." },
      { title: "Evidence", text: "Gather the relevant data and assumptions." },
      { title: "Compare", text: "Review scenarios, risks and recommendations." },
      { title: "Decide", text: "A person decides and the rationale is recorded." },
    ],
    outcomes: [
      "Transparent evidence and assumptions",
      "Side-by-side scenario comparison",
      "Clear human accountability",
    ],
    integrations: ["Microsoft 365", "Internal data sources", "REST APIs"],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
