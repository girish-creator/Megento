# Website Plan for Selling AI Solutions to Corporate Buyers (EU)

Nov 24, 2026 · @Girish

## Summary

Build a B2B lead-generation site, not a web shop: corporate buyers want to understand each solution, trust you, and book a conversation. Use Next.js with Tailwind CSS, host it in the EU, give each of your three solutions its own page, and add a strong trust page covering GDPR and the EU AI Act.

## Recommended technology

Use Next.js (React + TypeScript) with Tailwind CSS, deployed on an EU-hosted platform, with a headless CMS such as Sanity or Payload.

- Fast and SEO-friendly, which matters for corporate discovery.
- Looks polished and professional with shadcn/ui components.
- The CMS lets you update case studies and copy without touching code.
- Can grow into a client portal or live demos on the same codebase.

Simpler alternatives: Framer or Webflow get a polished site live in days but are less flexible. Astro suits a mostly static marketing site.

## Site structure

Six page types cover the corporate buyer journey, with one dedicated page for each of your three solutions.

| Page | Purpose | Key content |
| --- | --- | --- |
| Home | State what you do and for whom | One-sentence value proposition, overview of the three solutions, proof points, "Book a demo" button |
| Solution pages (3) | Make each solution concrete | Business problem, how it works (simple workflow diagram), measurable outcomes, integrations (for example SAP, Microsoft 365, APIs), demo video, call to action |
| Case studies or pilots | Provide proof | Even one or two anonymised results are persuasive |
| Trust and security | Remove legal and security objections | GDPR, EU AI Act position, data residency, security practices, data handling |
| About and team | Build personal trust | Your background and expertise |
| Contact and demo booking | Convert interest into meetings | Embedded booking tool, leads sent to a CRM |

## What works for corporate audiences

Lead with business outcomes and proof, not with the technology.

- **Outcomes, not models:** say "reduces invoice processing time by 70%", not "powered by LLMs".
- **Short demo videos:** 60 to 90 seconds per solution usually beat any amount of text.
- **Gated one-pagers or whitepapers:** one per solution, behind an email form, to capture leads.
- **Restrained design:** a clean layout, a consistent palette and real screenshots. Avoid generic neural-network imagery.
- **Speed and mobile:** aim for Lighthouse scores above 90, since executives often read on phones.
- **Analytics:** a privacy-friendly tool, plus the LinkedIn Insight Tag if you plan LinkedIn outreach.

## Design direction: futuristic and elegant

Aim for "quiet futurism": a restrained, premium layout with a few precise futuristic touches, so the site feels advanced without looking like a gaming or sci-fi page.

| Element | Direction |
| --- | --- |
| Colour | Near-black navy or graphite base with off-white text and one accent (electric cyan or violet) used sparingly for calls to action and highlights. Offer a light mode |
| Typography | A geometric sans for headings (for example Sora, Space Grotesk or Inter Tight), a clean sans for body text, and a monospace for small technical labels. Generous sizes and line spacing |
| Layout | Strict grid, wide margins, plenty of empty space, large headlines, one idea per screen section |
| Depth and effects | Subtle gradients, a soft glow behind key elements, thin 1px borders, and frosted-glass cards used sparingly |
| Motion | Slow, purposeful animation: fade and slide on scroll, animated workflow diagrams. No autoplay sound, and respect the "reduce motion" setting |
| Imagery | Real product screenshots, abstract generative visuals, and clean line diagrams of how each solution works. Avoid stock robots and glowing brains |
| Key interactions | An animated hero showing one solution at work, hover states on solution cards, and a short demo video per solution |

Elegance comes from restraint, so set these guardrails:

- Use at most two typefaces and one accent colour.
- Keep text contrast at WCAG AA or better and make the site fully keyboard-navigable.
- Keep animations light (CSS or Framer Motion) so Lighthouse scores stay above 90.
- Limit heavy 3D (Three.js or Spline) to one hero element, if used at all.
- Define colours, spacing and fonts as Tailwind design tokens so all pages stay consistent, and mock up key pages in Figma before building.

### Light and dark themes: Midnight and Porcelain

The site offers two themes with a visible switch, and the default is dark. Both are mocked up in the [design canvas](https://claude.ai/artifact/6vMXRGVHR9r3Mr8mS14aYJ), where the homepage has a Dark | Light switch in the header.

| Theme | Look | Palette and type |
| --- | --- | --- |
| Dark (default): Midnight | Orbit graphic in the hero, three solution cards, thin borders, dark surfaces | Graphite background, off-white text, one cyan accent, Space Grotesk headings |
| Light: Porcelain | Centred hero, product preview card, numbered solution rows, dark closing call to action | Cool white background, ink text, one blue accent, Sora light-weight headings |

- **Switch:** a two-option control (Dark | Light) in the header, built from real buttons with a pressed state so it works with a keyboard and screen readers.
- **Default:** every first visit opens in dark. Remember the visitor's choice in the browser afterwards.
- **Implementation:** define colours, spacing and fonts as Tailwind design tokens (CSS variables) and switch them with a `data-theme` attribute, so both themes share one codebase.
- **Quality bar:** both themes must meet WCAG AA contrast and keep the same layout rules and performance budget.

## EU AI Act: what applies and when

The Article 50 transparency rules have applied since 2 August 2026, while the high-risk obligations are postponed to December 2027 and August 2028 ([Morgan Lewis](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2026/08/eu-ai-acts-transparency-rules-what-went-into-effect-on-2-august), [Pinsent Masons](https://www.pinsentmasons.com/out-law/news/rules-high-risk-ai-delayed-under-eu-omnibus-deal)).

- **Article 50 scope:** it covers any AI system used in certain situations, including AI interacting directly with people and AI-generated content, not only "high-risk" systems. Fines can reach €15 million or 3% of worldwide annual turnover.
- **Chatbots and demos:** anything on your site must tell users they are interacting with AI.
- **Marking generated content:** generative systems already on the market before 2 August 2026 have until 2 December 2026 to meet the machine-readable marking requirement.
- **High-risk systems:** stand-alone (Annex III) systems from 2 December 2027, and systems embedded in regulated products (Annex I) from 2 August 2028. This is a deferral, not a relaxation.
- **Already in force:** the prohibited-practices rules and the AI literacy obligation have applied since February 2025.

**Key step:** classify each of your three solutions. For each, decide whether it falls under Annex III (for example recruitment, credit scoring, education), whether you are the provider or only the deployer, and whether it triggers Article 50. This decides what you must build in and what you can claim on the website.

## GDPR for the website and the tools

On the website you are the controller, and when corporates use your tools on their data you are usually the processor.

- **Controller vs processor:** keep a standard Data Processing Agreement (Art. 28) ready for customers.
- **Cookies and tracking:** use a consent banner and load nothing non-essential before consent. Cookieless analytics reduce the problem.
- **Lead forms:** collect only what you need, state the purpose and lawful basis, and link a clear privacy notice. Use double opt-in for newsletters and whitepaper downloads.
- **Records:** keep a record of processing activities, run a DPIA for any tool that processes personal data at scale, and check whether you need a DPO.
- **Data transfers:** prefer EU hosting. For any US vendor, confirm Data Privacy Framework certification or Standard Contractual Clauses.

## EU-compliant stack adjustments

Keep Next.js, but choose EU-hosted or EU-region services for everything that touches visitor or customer data.

| Area | EU-friendly choice |
| --- | --- |
| Hosting | EU regions, or EU providers such as Hetzner, Scaleway or OVH for a strong data-sovereignty message |
| Analytics | Plausible (EU-hosted), or self-hosted Matomo or PostHog, instead of Google Analytics |
| Consent | A consent management tool (Cookiebot, Usercentrics, or an open-source option) |
| Fonts and assets | Self-host fonts and scripts so visitors' IP addresses are not sent to third parties |
| CRM and booking | HubSpot with EU data centre, or self-hosted Cal.com |
| Model providers | EU data regions (Azure EU, Mistral, or self-hosted models). Never call model APIs from the browser |
| Forms | Keep submissions in an EU-hosted database or CRM |

## Trust and compliance page

A dedicated trust page can set you apart from competitors, because European corporate buyers often decide on it.

- Where data is hosted and processed
- Whether customer data is used for model training (ideally: no)
- Your list of sub-processors
- Your AI Act classification for each product, and the human oversight you provide
- A downloadable DPA, a security overview, and a contact for privacy questions

Avoid claiming "fully GDPR compliant" or "AI Act certified". No such certification exists in that form, and overclaiming can itself create liability. Use accurate wording such as "designed for GDPR and EU AI Act requirements, hosted in the EU."

## Next steps

Start with one strong landing page per solution and iterate, rather than building everything up front.

- [ ] Classify each of the three solutions under the AI Act (Annex III, provider or deployer, Article 50)
- [ ] Buy a proper domain and business email
- [ ] Choose EU hosting and a cookieless or consent-based analytics setup
- [ ] Write the value proposition and outcomes for each solution
- [ ] Record a 60 to 90 second demo video per solution
- [ ] Draft the trust page, privacy notice and DPA
- [ ] Build the first landing page and demo booking flow
- [ ] If a live demo is added, keep model API keys on the server and rate-limit it

## Sources

This is general guidance based on the sources below, not legal advice. Have a privacy and AI lawyer review your final position.

- [Morgan Lewis: Article 50 took effect 2 August](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2026/08/eu-ai-acts-transparency-rules-what-went-into-effect-on-2-august)
- [CMS: Article 50 real-world examples](https://cms.law/en/aut/legal-updates/eu-ai-act-transparency-real-world-examples)
- [AI Act guide to Article 50](https://artificialintelligenceact.eu/?p=6131%2F)
- [Pinsent Masons: high-risk delay](https://www.pinsentmasons.com/out-law/news/rules-high-risk-ai-delayed-under-eu-omnibus-deal)
- [Chambers: latest compliance checkpoint](https://chambers.com/articles/eu-ai-act-the-latest-compliance-checkpoint)
- [Gibson Dunn: Omnibus agreement](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
