// agents/Investor.js
import { logEvidence } from "../scripts/evidenceLogger.js";

export class InvestorAgent {
  constructor() {
    this.role = "Investor-Agent";
    this.responsibilities = [
      "Monitor investor confidence",
      "Publish disclosures",
      "Respond to investor Q&A",
    ];
  }

  async execute(signal) {
    // Handle investor confidence signals
    if (signal.type === "InvestorConfidence") {
      logEvidence(
        "Investor-Packet.md",
        `Investor agent logged confidence update: ${signal.details}`,
      );
    }

    // Handle investor disclosures
    if (signal.type === "InvestorDisclosure") {
      logEvidence(
        "Investor-Packet.md",
        `Investor agent published disclosure: ${signal.details}`,
      );
    }

    // Handle investor questions
    if (signal.type === "InvestorQuestion") {
      logEvidence(
        "Investor-Packet.md",
        `Investor agent responded to question: ${signal.details}`,
      );
    }
  }
}
