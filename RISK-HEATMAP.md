# Risk Heatmap – PayMate AI

Purpose
Provide a visual, color‑coded representation of risks by likelihood and impact.  
Complements RISK-MATRIX.md with an intuitive investor‑friendly overview.

Heatmap Legend

- 🟢 **Low Risk** → Monitor only
- 🟡 **Medium Risk** → Track and review quarterly
- 🔴 **High Risk** → Mitigate immediately / escalate to board

Risk Heatmap Grid

| Impact ↓ / Likelihood → | Low Likelihood | Medium Likelihood | High Likelihood |

|--------------------------|----------------|-------------------|-----------------|

| **Low Impact** | 🟢 | 🟡 | 🟡 |
| **Medium Impact** | 🟡 | 🟡 | 🔴 |
| **High Impact** | 🟡 | 🔴 | 🔴 |

Current Risks (from RISK-REGISTER.md)

| Risk ID | Description | Likelihood | Impact | Heatmap Color | Mitigation |

|---------|----------------------------|------------|--------|---------------|------------|

| R-001 | Accessibility regression | Medium | High | 🔴 Critical | Automated WCAG checks in CI/CD |
| R-002 | Multilingual delays | High | Medium | 🔴 Critical | Localized contributor onboarding |
| R-003 | Investor deck misalignment | Medium | Medium | 🟡 Moderate | Governance cadence enforcement |
| R-004 | Security vulnerability | Low | High | 🟡 Moderate | Weekly dependency scans |

Usage

- **Contributors** → Prioritize fixes based on heatmap color.
- **Governance Leads** → Escalate 🔴 risks to board immediately.
- **Investors** → Review heatmap for confidence in mitigation strategy.

Review Cadence

- **Quarterly** → Heatmap updated alongside RISK-REGISTER.md and RISK-MATRIX.md.
- **Annual** → Consolidated heatmap presented in board deck.

License

© 2026 PayMate AI. All rights reserved.  
Risk heatmap is for governance, contributor, and investor use only.
