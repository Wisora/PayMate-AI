// scripts/annualReport.js
import fs from "fs";
import path from "path";
import cron from "node-cron";

// Directory containing quarterly packets
const reportsDir = "reports";
const annualReportFile = "reports/Annual-Report.md";

// Ensure reports directory exists
function ensureReportsDir() {
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
    console.log(`📂 Created directory: ${reportsDir}`);
  }
}

// Collect quarterly packets
function collectQuarterlyPackets() {
  return fs
    .readdirSync(reportsDir)
    .filter(
      (file) =>
        file.startsWith("Quarterly-Board-Packet") && file.endsWith(".md"),
    );
}

// Generate annual report
function generateAnnualReport() {
  ensureReportsDir();
  const quarterlyPackets = collectQuarterlyPackets();

  let reportContent = `# Annual Company Report\nGenerated on ${new Date().toLocaleString()}\n\n`;

  if (quarterlyPackets.length === 0) {
    reportContent += "No quarterly packets found for this year.\n";
  } else {
    quarterlyPackets.forEach((file) => {
      const content = fs.readFileSync(path.join(reportsDir, file), "utf-8");
      reportContent += `## ${file}\n\n${content}\n\n`;
    });
  }

  fs.writeFileSync(annualReportFile, reportContent);
  console.log(`✅ Annual report generated: ${annualReportFile}`);
}

// Schedule job: runs on Jan 1 at 9 AM (start of new year)
cron.schedule("0 9 1 1 *", () => {
  console.log("⏰ Generating annual company report...");
  generateAnnualReport();
});
