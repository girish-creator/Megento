// Draft copy: verify every statement against the real product before publishing.
export type Solution = {
  slug: string;
  pillar: string;
  name: string;
  meaning: string;
  tagline: string;
  description: string;
  problem: string;
  how: { title: string; text: string }[];
  outcomes: string[];
  integrations: string[];
};

export const solutions: Solution[] = [
  {
    slug: "onderzoeker",
    pillar: "Research",
    name: "Onderzoeker Powered by AI",
    meaning: "Dutch for \"researcher\"",
    tagline: "An AI researcher that finds, reads and summarises the information you need.",
    description:
      "Onderzoeker is your AI-powered research assistant. It searches your documents, systems and approved sources, reads what it finds and presents clear findings with the sources behind them, so your team spends its time on conclusions instead of searching.",
    problem:
      "Research across documents, systems and sources is slow, manual and inconsistent. Valuable information is hard to find, and it is difficult to show where an answer came from.",
    how: [
      { title: "Ask", text: "Describe the question or topic you want researched." },
      { title: "Collect", text: "The AI searches your approved documents, data and sources." },
      { title: "Summarise", text: "Findings are condensed into clear answers with their sources." },
      { title: "Review", text: "A person checks the results and decides what to use." },
    ],
    outcomes: [
      "Less time spent searching and reading manually",
      "Findings that can be traced back to their sources",
      "More consistent research across the team",
    ],
    integrations: ["Microsoft 365", "Document stores", "REST APIs"],
  },
  {
    slug: "omzetter",
    pillar: "Convert",
    name: "Agentic Omzetter",
    meaning: "Dutch for \"converter\"",
    tagline: "AI agents that convert your data and documents from one format or system to another.",
    description:
      "Agentic Omzetter uses AI agents to plan and carry out conversions: mapping source data to a target structure, transforming it step by step and handing exceptions to a person. It is built for migration and integration projects where manual conversion is slow and error-prone.",
    problem:
      "Moving data between systems or formats is mostly manual work. It is slow, hard to repeat and easy to get wrong, and it often delays migration projects.",
    how: [
      { title: "Map", text: "Define the source data and the target structure." },
      { title: "Plan", text: "AI agents work out the conversion steps for each type of record." },
      { title: "Convert", text: "The agents transform the data and flag anything unclear." },
      { title: "Deliver", text: "Converted data is handed over for validation and loading." },
    ],
    outcomes: [
      "Less manual effort in migration and integration work",
      "Repeatable conversions instead of one-off scripts",
      "Exceptions flagged for human review",
    ],
    integrations: ["SAP", "Databases", "CSV, XML and JSON files", "REST APIs"],
  },
  {
    slug: "kwalificatiestrijder",
    pillar: "Validate",
    name: "Kwalificatiestrijder",
    meaning: "Dutch for \"qualifier warrior\"",
    tagline: "Check and qualify your data before it is used, converted or migrated.",
    description:
      "Kwalificatiestrijder is the guardian of your data quality. It checks data against your rules, finds errors, gaps and duplicates, and reports what needs fixing, so bad data is caught before it reaches a migration, a report or a decision.",
    problem:
      "Poor data quality breaks migrations, reports and decisions. Problems are usually found late, when they are expensive to fix.",
    how: [
      { title: "Define", text: "Set the rules and quality standards your data must meet." },
      { title: "Scan", text: "The data is checked automatically against those rules." },
      { title: "Flag", text: "Errors, gaps and duplicates are listed and prioritised." },
      { title: "Approve", text: "A person reviews the findings and signs off the data." },
    ],
    outcomes: [
      "Data issues found before go-live",
      "A clear quality report for every dataset",
      "Human sign-off on what is accepted",
    ],
    integrations: ["Databases", "CSV, XML and JSON files", "REST APIs"],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
