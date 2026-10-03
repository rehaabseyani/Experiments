# Wiki Schema

## Domain
Beginner investing fundamentals — the core concepts every new investor needs to understand before picking products or platforms. Covers: compound interest, dollar cost averaging, diversification, asset allocation, risk, and rebalancing. Intentionally product-agnostic; does not cover specific brokers, individual stocks, or tax details.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `dollar-cost-averaging.md`)
- Every wiki page starts with YAML frontmatter (see below)
- Use `[[wikilinks]]` to link between pages (minimum 2 outbound links per page)
- When updating a page, always bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`
- **Provenance markers:** On pages synthesizing 3+ sources, append `^[raw/articles/source-file.md]` at the end of paragraphs whose claims come from a specific source.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
confidence: high | medium | low
contested: true          # optional — set when unresolved contradictions exist
contradictions: [slug]   # optional — pages this one conflicts with
---
```

### raw/ Frontmatter
```yaml
---
source_url: https://example.com/article
ingested: YYYY-MM-DD
sha256: <hex digest of body below the frontmatter>
---
```

## Tag Taxonomy
Core concepts:
- `compound-interest` — time value of money, growth over time
- `asset-allocation` — dividing a portfolio across asset classes
- `diversification` — spreading risk across investments
- `risk` — volatility, risk tolerance, risk-return tradeoff
- `rebalancing` — restoring a portfolio to target allocation
- `dollar-cost-averaging` — periodic fixed-amount investing
- `time-horizon` — investing timeframe and its effect on strategy
- `asset-classes` — stocks, bonds, cash, real estate, etc.
- `saving` — building capital before investing
- `portfolio` — a collection of investments as a whole
- `funds` — mutual funds, ETFs, index funds, target-date funds
- `market-risk` — broad market fluctuation and unpredictability
- `beginner` — pages appropriate for first-time investors
- `definition` — definitional / explainer pages
- `venture-capital` — VC funds, private equity, and alternative investments
- `fees` — investment fees, costs, expenses, and their impact on returns
- `private-funds` — private investment funds (hedge funds, VC, PE)
- `accredited-investor` — eligibility and access requirements for private investments
- `inflation` — inflation, purchasing power, inflation risk, and real returns
- `fraud` — investment fraud, scams, Ponzi schemes, pump-and-dump, affinity fraud
- `investor-protection` — avoiding scams, due diligence, regulatory resources, red flags

Rule: every tag on a page must appear in this taxonomy. Add new tags here before using them.

## Page Thresholds
- **Create a page** when an entity/concept appears in 2+ sources OR is central to one source
- **Add to existing page** when a source mentions something already covered
- **DON'T create a page** for passing mentions or things outside the domain
- **Split a page** when it exceeds ~200 lines
- **Archive a page** when fully superseded — move to `_archive/`, remove from index

## Entity Pages
One page per notable entity. Include overview, key facts, relationships ([[wikilinks]]), sources.

## Concept Pages
One page per concept. Include definition, how it works, why it matters for beginners, related concepts ([[wikilinks]]).

## Comparison Pages
Side-by-side analyses. Table format preferred.

## Update Policy
When new information conflicts with existing content:
1. Check dates — newer sources generally supersede older ones
2. If genuinely contradictory, note both positions with dates and sources
3. Mark `contradictions:` in frontmatter and flag for user review
