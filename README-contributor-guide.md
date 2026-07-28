# PayMate AI – Contributor Guide

This guide explains how contributors can run the orchestrator, initialize evidence files, and generate reports. It complements `README.md` and `README-contributor.md`.

---

## 🚀 Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

```mermaid
flowchart TD
    subgraph Agents
        CEO[CEO Agent]
        COO[COO Agent]
        CFO[CFO Agent]
        CTO[CTO Agent]
        CISO[CISO Agent]
        Legal[Legal Agent]
        Innovation[Innovation Agent]
        Scaling[Scaling Agent]
        Resilience[Resilience Agent]
        Metrics[Metrics Agent]
        Data[Data Agent]
        Investor[Investor Agent]
        Evolution[Evolution Agent]
    end

    subgraph Evidence
        Board[Board-Register.md]
        Crisis[Crisis-Response.md]
        DataReg[Data-Register.md]
        Compliance[Compliance-Register.md]
        Audit[Audit-Register.md]
        InvestorPacket[Investor-Packet.md]
    end

    subgraph Dashboards
        MetricsDash[Metrics-Dashboard.md]
        AdoptionDash[Adoption-Dashboard.md]
        ResilienceDash[Resilience-Dashboard.md]
    end

    subgraph Reports
        Weekly[Weekly-Report.md]
        Monthly[Monthly-Summary.md]
        Quarterly[Quarterly-Board-Packet.md]
        Annual[Annual-Report.md]
    end

    Agents --> Evidence
    Agents --> Dashboards
    Evidence --> Reports
    Dashboards --> Reports
```
