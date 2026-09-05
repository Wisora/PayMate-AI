# PayMate AI – Investor Dashboard Visual Scaffold

Purpose
Provide a visual framework for the investor dashboard.  
Ensures KPIs, charts, and compliance data are presented clearly and consistently.

Layout Overview

- Top Bar → Logo, navigation, language toggle
- Main Panels:
  1. User Growth Panel → Line chart of monthly active users + subscriptions added
  2. Revenue Panel → Bar chart of freemium vs paid tiers + B2B integrations
  3. Fraud Detection Panel→ Gauge chart showing detection accuracy %
  4. Compliance Panel→ Pie chart of current vs planned certifications
  5. Roadmap Panel → Timeline graphic of milestones (MVP → Beta → Production → Enterprise)

Data Sources

- Metrics → `docs/investor-metrics.md`
- Visual scaffold → `docs/investor-metrics-visual.md`
- Compliance summary → `docs/investor-compliance-summary.md`
- Roadmap milestones → `docs/roadmap.md`

Visual Standards

- Colors: Consistent with style guide (`docs/style-guide.md`)
- Fonts: Deck typography for investor consistency
- Formats: SVG for scalability, PNG for quick sharing
- Storage: `/assets/dashboard-visuals/`

Integration

- Embed visuals into:
  - Investor Dashboard (`docs/investor-dashboard.md`)
  - Investor Deck (`docs/investor-deck-slides.md`)
  - Investor Package (`docs/investor-package.md`)

Next Steps

- Generate charts from metrics data
- Save visuals in `/assets/dashboard-visuals/`
- Sync visuals with live data sources (DB, monitoring tools)
- Update quarterly with new KPIs + compliance status
