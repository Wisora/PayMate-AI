# PayMate AI – Governance Dashboard Testing Guide

Purpose
Provide contributors with a step‑by‑step guide for testing the governance dashboard.  
Ensures accessibility, performance, and data accuracy are validated before quarterly release.

Test Categories

1. Accessibility Testing

- Automated: Run axe, Lighthouse, and WAVE scans.
- Manual: Test with NVDA, VoiceOver, and keyboard navigation.
- Checklist: Confirm WCAG 2.1 AA compliance using `/docs/investor-governance-audit-evidence-dashboard-accessibility-checklist.md`.

1. Performance Testing

- Automated: Lighthouse performance audit (target score ≥ 90).
- Manual: Test load times on desktop, tablet, and mobile.
- Checklist: Ensure dashboard loads within 3 seconds on broadband.

1. Data Accuracy Testing

- Automated: Cross‑check KPI values against `/docs/investor-governance-audit-evidence-metrics.md`.
- Manual: Verify sample evidence items against `/evidence/` directory.
- Checklist: Confirm dashboard sync timeliness within 7 days of quarter close.

Testing Workflow

1. **Pre‑Release Audit**
   - Run automated accessibility and performance scans.
   - Validate KPI values against metrics file.

2. **Manual Verification**
   - Test screen reader compatibility.
   - Confirm keyboard navigation and focus indicators.
   - Review evidence snapshots for accuracy.

3. **Sign‑Off**
   - Governance Lead validates KPI accuracy.
   - Compliance Officer signs off accessibility.
   - Investor Relations Lead confirms packet alignment.

Tools & Platforms

- Accessibility: axe, Lighthouse, WAVE, NVDA, VoiceOver.
- Performance: Lighthouse, WebPageTest, Chrome DevTools.
- Data Accuracy: GitHub Actions CI/CD, Power BI/Tableau validation.

Reporting

- Log results in `/docs/investor-governance-audit-evidence-audit-log.md`.
- Summarize findings in quarterly `/docs/investor-governance-audit-evidence-summary.md`.
- Track corrective actions in governance roadmap.

Usage Notes

- Testing required before each quarterly release.
- Issues must be logged and resolved prior to investor packet distribution.
- Continuous improvement aligned with governance maturity model.

Sign‑Off

- Governance Lead: ********\_\_\_\_********
- Compliance Officer: ********\_\_\_\_********
- Investor Relations Lead: ********\_\_\_\_********
- QA/Testing Lead: ********\_\_\_\_********
