// scripts/quarterlyBoardPacket.js
import fs from "fs";
import path from "path";
import cron from "node-cron";

// Evidence and dashboard files to summarize
const files = [
  "evidence/Board-Register.md",
  "evidence/Crisis-Response.md",
  "evidence/Investor-Packet.md",
  "dashboards/Metrics-Dashboard.md",
  "dashboards/Adoption-Dashboard.md",
  "dashboards/Resilience-Dashboard.md",
];

// Output file
const quarterlyPacketFile = "reports/Quarterly-Board-Packet.md";

// Ensure reports directory exists
function ensureReportsDir() {
  const dir = path.dirname(quarterlyPacketFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📂 Created directory: ${dir}`);
  }
}

// Extract only the last 10 lines from each file (critical highlights)
function extractHighlights(filePath) {
  if (!fs.existsSync(filePath)) return "(No entries this quarter)";
  const content = fs.readFileSync(filePath, "utf-8").trim().split("\n");
  const highlights = content.slice(-10).join("\n");
  return highlights || "(No entries this quarter)";
}

// Generate quarterly board packet
function generateQuarterlyPacket() {
  ensureReportsDir();
  let packetContent = `# Quarterly Board Packet\nGenerated on ${new Date().toLocaleString()}\n\n`;

  files.forEach((file) => {
    packetContent += `## ${path.basename(file)}\n\n${extractHighlights(file)}\n\n`;
  });

  fs.writeFileSync(quarterlyPacketFile, packetContent);
  console.log(`✅ Quarterly board packet generated: ${quarterlyPacketFile}`);
}

// Schedule job: runs on the 1st day of each quarter at 10 AM
// Quarters: Jan 1, Apr 1, Jul 1, Oct 1
cron.schedule("0 10 1 1,4,7,10 *", () => {
  console.log("⏰ Generating quarterly board packet...");
  generateQuarterlyPacket();
});
