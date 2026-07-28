# PayMate AI – Investor Presentation Binder Diagram

Purpose
Visualize how the investor presentation master packet connects to supporting governance evidence documents.  
Provides investors and auditors with a clear map of the evidence chain.

---

```mermaid
flowchart TD
    MP[Master Packet] --> DO[Deck Outline]
    MP --> SG[Style Guide]
    MP --> ST[Slide Template]
    MP --> CL[Contributor Checklist]
    MP --> RL[Review Log]
    MP --> AR[Approval Register]

    MP --> MD[Metrics Dashboard]
    MP --> TC[Metrics Trend Chart]
    MP --> RR[Risk Register]
    MP --> CI[Continuous Improvement Log]
    MP --> CR[Certification Register]
    MP --> AE[Audit Evidence Log]

    MP --> WF[Workflow Diagram]
    MP --> RM[Role Matrix]
    MP --> GC[Governance Calendar]
    MP --> CD[Cadence Diagram]

    %% Grouping visuals
    subgraph Presentation Suite
        DO
        SG
        ST
        CL
        RL
        AR
    end

    subgraph Governance Evidence
        MD
        TC
        RR
        CI
        CR
        AE
    end

    subgraph Governance Cycle Visuals
        WF
        RM
        GC
        CD
    end

Usage Notes

Diagram updated quarterly alongside master packet.
Serves as a visual index for investors to trace presentation claims back to evidence.
Stored in /docs/investor-presentations/binder-diagram.md.

Sign‑Off

Governance Lead: ____________________
Compliance Officer: ____________________
Investor Relations Lead: ____________________
Finance Lead: ____________________
```
