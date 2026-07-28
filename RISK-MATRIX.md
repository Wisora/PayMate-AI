# Risk Matrix – PayMate AI

Purpose
Visualize risks by likelihood and impact to prioritize mitigation.  
Complements RISK-REGISTER.md with a clear, investor‑friendly view.

Risk Matrix Grid

| Impact ↓ / Likelihood → | Low Likelihood | Medium Likelihood | High Likelihood |

|--------------------------|----------------|-------------------|-----------------|

| **Low Impact** | Monitor only | Track in register | Track + review |
| **Medium Impact** | Track in register | Track + quarterly review | Mitigate immediately |
| **High Impact** | Track + quarterly review | Mitigate immediately | Critical → escalate to board |

Current Risks (from RISK-REGISTER.md)

| Risk ID | Description | Likelihood | Impact | Matrix Position | Mitigation |

|---------|-------------|------------|--------|----------------|------------|

| R-001 | Accessibility regression | Medium | High | Critical | Automated WCAG checks in CI/CD |
| R-002 | Multilingual delays | High | Medium | Mitigate immediately | Localized contributor onboarding |
| R-003 | Investor deck misalignment | Medium | Medium | Track + quarterly review | Governance cadence enforcement |
| R-004 | Security vulnerability | Low | High | Track + quarterly review | Weekly dependency scans |

Usage

- **Contributors** → Use matrix to prioritize fixes.
- **Governance Leads** → Escalate critical risks to board.
- **Investors** → Review matrix for confidence in mitigation strategy.

Review Cadence

- **Quarterly** → Risk matrix updated alongside RISK-REGISTER.md.
- **Annual** → Consolidated risk matrix presented in board deck.

License

© 2026 PayMate AI. All rights reserved.  
Risk matrix is for governance, contributor, and investor use only.
