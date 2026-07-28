# PayMate AI – Investor Visual Update Checklist

Purpose
Provide a repeatable process for contributors to update investor visuals quarterly.  
Ensures metrics, compliance, and roadmap visuals remain current and consistent.

Step 1: Gather Data

- Update KPIs in `docs/investor-metrics.md`
- Confirm roadmap milestones in `docs/roadmap.md`
- Review compliance status in `docs/investor-compliance-summary.md`
- Collect latest user + revenue growth numbers

Step 2: Update Visual Scaffolds

- Metrics visuals → `docs/investor-metrics-visual.md`
- Dashboard visuals → `docs/investor-dashboard-visual.md`
- Handout visuals → `docs/investor-handout-visual.md`
- Summary slide visuals → `docs/investor-summary-visual.md`
- One‑pager visuals → `docs/investor-onepager-visual.md`
- Package visuals → `docs/investor-package-visual.md`

Step 3: Generate New Assets

- Create charts (line, bar, pie, gauge) from updated metrics
- Refresh roadmap timeline graphics
- Update compliance pie chart with new certifications
- Save assets in correct `/assets/` subfolders:
  - `/metrics-visual/`
  - `/dashboard-visual/`
  - `/handout-visual/`
  - `/summary-visual/`
  - `/onepager-visual/`
  - `/package-visual/`

Step 4: Sync Across Materials

- Embed updated visuals into:
  - Deck (`docs/investor-deck-slides.md`)
  - Handout (`docs/investor-handout.md`)
  - One‑Pager (`docs/investor-onepager.md`)
  - Summary Slide (`docs/investor-summary-slide.md`)
  - Dashboard (`docs/investor-dashboard.md`)
  - Package (`docs/investor-package.md`)

Step 5: Review Consistency

- Check colors + fonts against `docs/investor-style-visual.md`
- Verify icons are flat, minimal SVG format
- Ensure margins + spacing match layout standards
- Confirm naming conventions in `/assets/` directories

Step 6: Finalize & Commit

- Run repo lint/check for broken links or missing assets
- Commit updated visuals + scaffolds to GitHub
- Tag release with quarter (e.g., `Q2-2026-visual-update`)
- Notify contributors + investors of updated materials
