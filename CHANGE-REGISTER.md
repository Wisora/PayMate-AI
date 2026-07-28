# Change Register – PayMate AI

Purpose
Log all systemic changes across technical, governance, compliance, and investor layers.  
Provide transparent evidence for contributors, governance leads, and investors.

Structure

| Change ID | Date | Change Type | Description | Impact | Evidence Source | Linked Audit ID | Linked Security ID | Owner Role | Status |

|-----------|------|-------------|-------------|--------|-----------------|-----------------|--------------------|------------|--------|

| CR-015 | 2026-06-15 | Security | Dependency upgrade (lodash v4.17.21) | High | SECURITY-REGISTER.md → SEC-001 | AUDIT-REGISTER.md → AUD-001 | SEC-001 | DevOps Lead | Completed |
| CR-016 | 2026-06-20 | Compliance | Accessibility audit remediation | Medium | Accessibility.md | AUDIT-REGISTER.md → AUD-002 | – | Compliance Officer | In Progress |
| CR-017 | 2026-06-21 | Governance | Quarterly release sign‑off | High | Release-Checklist.md + Quarterly-Confidence-Summary.md | AUDIT-REGISTER.md → AUD-003 | – | Governance Lead | Completed |

Categories

- **Technical Changes** → Codebase, infrastructure, CI/CD pipeline.
- **Governance Changes** → Board decisions, binder updates, investor disclosures.
- **Compliance Changes** → GDPR, CCPA, POPIA, accessibility fixes.
- **Security Changes** → Vulnerability patches, RBAC updates, token rotation.
- **Investor Changes** → Updates to Investor-Packet.md, confidence summaries.

Workflow

1. Change initiated (technical, governance, compliance, or investor).
2. Logged in CHANGE-REGISTER.md with type, description, and impact.
3. Linked to AUDIT-REGISTER.md and SECURITY-REGISTER.md if applicable.
4. Status updated (Completed, In Progress, Resolved).
5. Reviewed quarterly in Governance Binder and disclosed in Investor-Packet.md.

Evidence Flow

- **SECURITY-REGISTER.md** → Security changes logged here.
- **AUDIT-REGISTER.md** → Audit validations linked here.
- **Governance-Binder.md** → Consolidates unresolved changes.
- **Investor-Packet.md** → Discloses investor‑relevant changes.
- **CHANGELOG.md** → Technical release notes tied to register entries.

Outcome

Provides transparent change evidence, proving PayMate AI adapts systematically across governance, compliance, security, and investor layers.
