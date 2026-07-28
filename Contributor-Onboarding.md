# Contributor Onboarding – PayMate AI

Purpose
Provide clear, step‑by‑step onboarding for contributors.  
Ensure consistency, security, and investor‑ready professionalism across the repo.

Getting Started

1. **Clone the repo** → `git clone [repo URL]`
2. **Install dependencies** → `npm install` or `yarn install`
3. **Set up environment variables** → Copy `.env.example` to `.env` and fill in required values.
4. **Run locally** → `npm run dev` or `yarn dev`
5. **Check CI/CD** → Ensure pipeline passes before pushing changes.

Repo Standards

- **File Structure** → Follow the professional folder layout defined in README.md.
- **Documentation** → Update relevant `.md` files when making changes.
- **Commits** → Use clear, descriptive commit messages.
- **Pull Requests** → Include checklist and link to updated docs.
- **CI/CD** → All PRs must pass linting, tests, and accessibility checks.

Handling API Keys (Critical)

- **Never commit API keys** to GitHub.
- **Use `.env` files locally** → Add keys like `STRIPE_SECRET_KEY` or `PAYPAL_CLIENT_ID`.
- **Production keys** → Store in a secret manager (AWS Secrets Manager, Firebase Config, or Azure Key Vault).
- **Rotation** → Keys must be rotated periodically; log rotation in Security-Register.md.
- **Audit** → Credential handling is logged in Audit-Register.md.

Security Rules

- Sensitive data (API keys, tokens, passwords) must **never appear in code or commits**.
- All contributors must run `npm run lint` and `npm run test` before pushing.
- Security incidents must be logged in Security-Register.md and escalated to Governance-Binder.md.

Contributor Workflow

1. **Fork repo** → Work in your own branch.
2. **Implement changes** → Follow coding standards and repo structure.
3. **Update docs** → Add evidence to registers/dashboards if relevant.
4. **Submit PR** → Include checklist and link to updated documentation.
5. **Review & Merge** → PR reviewed by lead contributor before merge.

Evidence Flow

- **Change-Register.md** → Logs systemic changes.
- **Audit-Register.md** → Logs pipeline and release audits.
- **Security-Register.md** → Logs vulnerabilities and credential handling.
- **Governance-Binder.md** → Consolidates contributor evidence.
- **Quarterly-Confidence-Summary.md** → Publishes contributor impact.

Outcome

Provides a clear onboarding process, ensuring contributors follow secure, professional, and investor‑ready workflows.
