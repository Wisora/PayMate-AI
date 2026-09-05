# PayMate AI – Finance Accessibility Guide

Purpose
Define accessibility standards for AI‑driven finance dashboards and workflows.  
Ensures inclusivity, readability, and compliance with accessibility best practices.

Color Contrast

- Follow WCAG AA minimum contrast ratio (4.5:1).
- Use accessible color palettes for charts (blue, green, orange, purple).
- Avoid red/green combinations without labels.
- Provide high‑contrast dashboard themes for low‑vision users.

Screen Reader Support

- Add descriptive **alt text** for all charts, tables, and workflow diagrams.
- Provide text equivalents for cash flow forecasts and compliance trackers.
- Ensure dashboards are navigable via keyboard shortcuts.
- Store alt text in `docs/ai-finance-alt-text.md` for consistency.

Multilingual Captions

- Provide captions in English + target investor/client languages (Afrikaans, French, Spanish).
- Store translations in `/assets/translations/finance/`.
- Sync captions across dashboards, reports, and investor materials.

Font & Layout

- Minimum font size: 12pt body, 18pt headings.
- Use sans‑serif fonts (Inter / Open Sans) for readability.
- Maintain consistent margins and whitespace for clarity.
- Avoid embedding text in images—use layered text for accessibility.

Accessibility Checklist

1. Verify color contrast meets WCAG AA.
2. Add alt text for every chart + workflow diagram.
3. Provide multilingual captions where required.
4. Confirm font sizes meet minimum standards.
5. Test dashboards with screen readers + keyboard navigation.

Storage & Versioning

- Store accessible versions in `/assets/finance-workflows/accessible/`.
- Tag releases with quarter (e.g., `Q2-2026-finance-accessibility`).
- Document accessibility compliance in commit messages.

Next Steps

1. Create `/accessible/` subfolders in finance workflow directories.
2. Add alt text + multilingual captions to dashboards.
3. Begin quarterly accessibility audits.
4. Document results in repo wiki.
