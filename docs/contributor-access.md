# PayMate AI Contributor Access Guide

## Principles

- **Least Privilege**: Contributors are granted only the permissions necessary for their role.
- **Traceability**: All changes are linked to a specific contributor and issue.

## Access Levels

### Tier 1: Core Maintainers

- Full access to the repository.
- Ability to manage secrets and environments.
- Approval authority for all PRs.

### Tier 2: Regular Contributors

- Can create branches and submit PRs.
- Access to sandbox environments and test keys.
- Cannot view production secrets.

### Tier 3: External Auditors

- Read-only access to the repository and audit logs.
- No access to code or secrets.

## Lockdown Procedures

In the event of a security breach:

1. **Rotate Secrets**: All API keys and JWT secrets are immediately invalidated.
2. **Revoke Access**: All non-essential contributor access is suspended.
3. **Audit**: A full review of recent commits and logs is performed.
