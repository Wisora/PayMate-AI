# PayMate AI – Quarterly Governance Workflow Diagram

Purpose
Visualize the flow of responsibilities across contributors, governance lead, compliance officer, and investor relations during a quarterly cycle.  
Ensures clarity, accountability, and transparency in dashboard operations.

```mermaid
flowchart LR
    subgraph Contributors
        C1[Submit Evidence]
        C2[Update Metrics]
        C3[Run Accessibility Checks]
    end

    subgraph GovernanceLead
        G1[Validate Evidence]
        G2[Confirm KPI Accuracy]
        G3[Approve Release Checklist]
    end

    subgraph ComplianceOfficer
        CO1[Verify Accessibility]
        CO2[Sign Off Compliance]
    end

    subgraph InvestorRelations
        IR1[Align Investor Packet]
        IR2[Capture Feedback]
        IR3[Present Quarterly Summary]
    end

    %% Workflow connections
    C1 --> G1
    C2 --> G2
    C3 --> CO1
    G1 --> CO2
    G2 --> IR1
    CO2 --> IR1
    IR1 --> IR3
    IR2 --> G3
    G3 --> IR3
```
