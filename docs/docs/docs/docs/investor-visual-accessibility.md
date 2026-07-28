# PayMate AI – Investor Visual Accessibility Guide

Purpose
Define accessibility standards for investor visuals.  
Ensures inclusivity, readability, and compliance with accessibility best practices.

Color Contrast

- Follow WCAG AA minimum contrast ratio (4.5:1).
- Use deep blue + emerald green for primary elements.
- Avoid red/green combinations without labels.
- Provide high‑contrast versions of charts for print.

Screen Reader Support

- Add descriptive **alt text** for all visuals.
- Use concise captions for charts and infographics.
- Provide text equivalents for roadmap timelines and compliance graphics.
- Store alt text in `docs/investor-alt-text.md` for consistency.

Multilingual Captions

- Provide captions in English + target investor languages (e.g., Afrikaans, French, Spanish).
- Store translations in `/assets/translations/`.
- Sync captions across deck, handout, one‑pager, summary slide, and dashboard.

Font & Layout

- Minimum font size: 12pt body, 18pt headings.
- Use sans‑serif fonts (Inter / Open Sans) for readability.
- Maintain consistent margins and whitespace for clarity.
- Avoid text embedded in images—use layered text for accessibility.

Accessibility Checklist

1. Verify color contrast meets WCAG AA.
2. Add alt text for every visual.
3. Provide multilingual captions where required.
4. Confirm font sizes meet minimum standards.
5. Test visuals with screen readers.

Storage & Versioning

- Store accessible versions in `/assets/[visual-type]/accessible/`.
- Tag releases with quarter (e.g., `Q2-2026-visual-accessibility`).
- Document accessibility compliance in commit messages.

Next Steps

1. Create `/accessible/` subfolders in each `/assets/` directory.
2. Add alt text + multilingual captions to visuals.
3. Begin quarterly accessibility audits.
4. Document results in repo wiki.
