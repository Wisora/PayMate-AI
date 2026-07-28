// agents/CFO.js
import { logEvidence } from "../scripts/evidenceLogger.js";

export class CFOAgent {
  constructor() {
    this.role = "CFO-Agent";
    this.responsibilities = [
      "Track KPIs and adoption metrics",
      "Maintain metrics dashboard",
      "Publish quarterly confidence summaries",
      "Support investor packet disclosures",
    ];
  }

  async execute(signal) {
    // Handle KPI updates
    if (signal.type === "KPIUpdate") {
      logEvidence(
        "Metrics-Dashboard.md",
        `CFO logged KPI update: ${signal.details}`,
      );
    }

    // Handle adoption metrics
    if (signal.type === "AdoptionUpdate") {
      logEvidence(
        "Adoption-Dashboard.md",
        `CFO updated adoption metrics: ${signal.details}`,
      );
    }

    // Handle quarterly confidence summaries
    if (signal.type === "QuarterlySummary") {
      logEvidence(
        "Quarterly-Confidence-Summary.md",
        `CFO published quarterly confidence summary: ${signal.details}`,
      );
    }

    // Handle investor disclosures
    if (signal.type === "InvestorDisclosure") {
      logEvidence(
        "Investor-Packet.md",
        `CFO added financial disclosure: ${signal.details}`,
      );
    }
  }
}
