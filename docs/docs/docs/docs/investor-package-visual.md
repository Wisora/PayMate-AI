# PayMate AI – Investor Package Visual Scaffold

Purpose
Provide a unified framework for assembling all investor visuals into a cohesive package.  
Ensures deck, handouts, dashboard, and quick facts share a consistent look and feel.

Visual Components

- **Deck Slides** → Charts, roadmap timeline, compliance icons, metrics visuals
- **Handouts** → Infographics, summary graphics, one‑pager visuals
- **Dashboard** → KPI charts, fraud detection gauge, compliance pie chart
- **Quick Facts** → Highlight numbers, dates, roadmap milestones in infographic style

Asset Storage

- Directory: `/assets/package-visual/`
- Subfolders:
  - `/deck/` → Slide visuals
  - `/handouts/` → Infographics + summary graphics
  - `/dashboard/` → KPI + compliance charts
  - `/quickfacts/` → Fact sheet visuals

Style Standards

- Colors → From `docs/investor-style-visual.md` (deep blue, emerald green, bright orange, light gray)
- Typography → Deck + dashboard fonts (Inter / Open Sans)
- Iconography → Flat, minimal SVG icons (finance, accessibility, repo, compliance)
- Layout → Consistent margins, spacing, and alignment across all visuals

Integration Points

- Embed visuals into:
  - Investor Deck (`docs/investor-deck-slides.md`)
  - Investor Handout (`docs/investor-handout.md`)
  - Investor Dashboard (`docs/investor-dashboard.md`)
  - Investor Quick Facts (`docs/investor-quickfacts.md`)
  - Investor Package (`docs/investor-package.md`)

Next Steps

1. Generate visuals from metrics + roadmap data.
2. Save in `/assets/package-visual/` with clear naming conventions.
3. Sync visuals across deck, handouts, dashboard, quick facts.
4. Update quarterly with new KPIs, compliance milestones, and roadmap progress.
