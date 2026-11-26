import type { Solution } from "./solutions";

// Draft copy: verify every statement against what you actually offer before publishing.
export const services: Solution[] = [
  {
    slug: "devops",
    pillar: "Operate",
    name: "DevOps",
    meaning: "Development and operations",
    tagline: "Build, deploy and run your AI solutions reliably.",
    description:
      "Our DevOps service covers both development and operations: automated build pipelines, deployment into your EU environment, monitoring and regular updates, so your AI solutions keep running securely and keep improving.",
    problem:
      "AI solutions often work as a demo but are hard to deploy, monitor and update in production, which makes them slow to change and risky to run.",
    how: [
      { title: "Plan", text: "Agree the environments, release process and responsibilities." },
      { title: "Build", text: "Set up automated pipelines for building and testing." },
      { title: "Deploy", text: "Release into your environment in a repeatable way." },
      { title: "Operate", text: "Monitor, update and improve the running solution." },
    ],
    outcomes: [
      "Repeatable, documented deployments",
      "Monitoring so problems are noticed early",
      "Faster, safer updates",
    ],
    integrations: ["Git and CI/CD tooling", "Containers", "EU cloud providers"],
  },
  {
    slug: "platform",
    pillar: "Platform",
    name: "Platform",
    meaning: "Platform provider",
    tagline: "One secure, EU-hosted platform that runs your AI solutions.",
    description:
      "The Platform service provides the shared foundation for our solutions: data connections, access control, logging and monitoring in one place, hosted in the EU, so every solution builds on the same secure base.",
    problem:
      "Separate tools mean duplicated integrations and security work, and no single place to see who has access to what.",
    how: [
      { title: "Connect", text: "Link your data sources and systems once." },
      { title: "Configure", text: "Set up users, roles and access rights." },
      { title: "Run", text: "Use the solutions on the shared platform." },
      { title: "Govern", text: "Review activity with logging and monitoring." },
    ],
    outcomes: [
      "One place for solutions and data connections",
      "Central access control and audit logs",
      "Hosting and processing in the EU",
    ],
    integrations: ["Single sign-on providers", "Microsoft 365", "REST APIs"],
  },
  {
    slug: "support",
    pillar: "Support",
    name: "Support",
    meaning: "Support services",
    tagline: "Expert help from onboarding to day-to-day use.",
    description:
      "The Support service gives your team access to people who know the solutions: help getting started, answers to everyday questions and a clear route for resolving issues and requesting improvements.",
    problem:
      "New tools only deliver value when teams know how to use them and can get quick help when something does not work as expected.",
    how: [
      { title: "Onboard", text: "Get your team started with guidance and training." },
      { title: "Assist", text: "Ask questions and get practical help." },
      { title: "Resolve", text: "Report issues and track them to a solution." },
      { title: "Improve", text: "Feed back what you need and see it considered." },
    ],
    outcomes: [
      "A clear contact for questions and issues",
      "Faster resolution of problems",
      "Guidance as your use of the solutions grows",
    ],
    integrations: ["Email and ticketing", "Microsoft Teams"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
