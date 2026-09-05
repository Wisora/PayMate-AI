# PayMate AI – Investor Visual Quality Assurance Guide

Purpose
Establish quality standards for investor visuals.  
Ensures clarity, accessibility, and professional polish across deck, handouts, dashboard, and package.

Review Criteria

- **Accuracy** → Data must match `docs/investor-metrics.md` and compliance logs.
- **Consistency** → Colors, fonts, and icons must follow `docs/investor-style-visual.md`.
- **Clarity** → Charts must be legible at print and screen sizes.
- **Alignment** → Visuals must align with repo scaffolds (metrics, dashboard, handout, summary, one‑pager, package).

Accessibility Checks

- **Color Contrast** → Meet WCAG AA standards (minimum 4.5:1 ratio).
- **Alt Text** → Provide descriptive alt text for all visuals.
- **Font Size** → Minimum 12pt for body text, 18pt for headings.
- **Icons** → Use universally recognizable symbols (finance, compliance, accessibility).

Readability Standards

- **Charts** → Limit to 3–5 data series per chart for clarity.
- **Infographics** → Use simple icons + short captions.
- **Timelines** → Show no more than 6 milestones per visual.
- **Quick Facts** → Present numbers in infographic style (large, bold, minimal text).

QA Process

1. **Draft Review** → Contributor checks against style + scaffolds.
2. **Peer Review** → Maintainer validates accuracy + accessibility.
3. **Final Approval** → Founder (Craig) signs off before investor release.
4. **Quarterly Audit** → Verify visuals against updated KPIs + compliance milestones.

Storage & Versioning

- Store QA‑approved visuals in `/assets/[visual-type]/approved/`.
- Tag releases with quarter (e.g., `Q2-2026-visual-QA`).
- Maintain QA notes in commit messages for transparency.

Next Steps

1. Create `/approved/` subfolders in each `/assets/` directory.
2. Add accessibility checklist to contributor workflow.
3. Begin quarterly QA audits alongside visual updates.
4. Document QA results in repo wiki.
