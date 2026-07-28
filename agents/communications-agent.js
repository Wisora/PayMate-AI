// communications-agent.js
// PayMate AI – Communications Agent
// Role: Manage polished disclosures, investor updates, and multilingual messaging.
// Ensures investor materials are consistent, accessible, and aligned with governance evidence.

class CommunicationsAgent {
  constructor(registers, notifier, translator) {
    this.registers = registers; // { communications, accessibility, compliance }
    this.notifier = notifier; // notification service (email, dashboard, etc.)
    this.translator = translator; // i18n service for multilingual support
  }

  // Prepare investor update
  prepareUpdate(data) {
    const update = {
      date: new Date().toISOString(),
      summary: data.summary,
      highlights: data.highlights,
      disclosures: data.disclosures,
    };

    this.logEvidence(update);
    return update;
  }

  // Log communication evidence into COMMUNICATIONS-REGISTER.md
  logEvidence(update) {
    this.registers.communications.push({
      date: update.date,
      event: "Investor Update",
      action: "Logged disclosure",
      details: update,
    });
  }

  // Escalate missing disclosures
  escalate(issue) {
    this.registers.compliance.push({
      date: new Date().toISOString(),
      event: "Disclosure Escalation",
      action: issue,
      escalationPath: "Board Register",
    });
    this.notifier.alertBoard(issue);
  }

  // Generate multilingual message
  generateMessage(content, lang = "en") {
    const translated = this.translator.translate(content, lang);
    return {
      language: lang,
      message: translated,
    };
  }

  // Prepare investor packet section
  preparePacketSection() {
    return {
      section: "Communications & Disclosures",
      evidence: this.registers.communications.slice(-5), // last 5 entries
      multilingualSupport: [
        "en",
        "es",
        "fr",
        "de",
        "zh",
        "ar",
        "pt",
        "ja",
        "ko",
        "hi",
      ],
    };
  }
}

// Example usage
// const agent = new CommunicationsAgent(registers, notifier, translator);
// const update = agent.prepareUpdate({ summary: "Q2 outcomes", highlights: ["Revenue growth"], disclosures: ["Accessibility compliance"] });
// const packet = agent.preparePacketSection();

module.exports = CommunicationsAgent;
