// scripts/weeklyReport.js
import fs from "fs";
import path from "path";
import cron from "node-cron";

// Evidence and dashboard files to include in the weekly report
const files = [
  "evidence/Board-Register.md",
  "evidence/Crisis-Response.md",
  "evidence/Data-Register.md",
  "evidence/Compliance-Register.md",
  "evidence/Audit-Register.md",
  "evidence/Investor-Packet.md",
  "dashboards/Metrics-Dashboard.md",
  "dashboards/Adoption-Dashboard.md",
  "dashboards/Resilience-Dashboard.md",
];

// Output file
const weeklyReportFile = "reports/Weekly-Report.md";

// Ensure reports directory exists
function ensureReportsDir() {
  const dir = path.dirname(weeklyReportFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📂 Created directory: ${dir}`);
  }
}

// Generate weekly report
function generateWeeklyReport() {
  ensureReportsDir();
  let reportContent = `# Weekly Company Health Report\nGenerated on ${new Date().toLocaleString()}\n\n`;

  files.forEach((file) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf-8");
      reportContent += `## ${path.basename(file)}\n\n${content}\n\n`;
    } else {
      reportContent += `## ${path.basename(file)}\n\n(No entries this week)\n\n`;
    }
  });

  fs.writeFileSync(weeklyReportFile, reportContent);
  console.log(`✅ Weekly report generated: ${weeklyReportFile}`);
}

// Schedule job: runs every Sunday at 6 PM
cron.schedule("0 18 * * SUN", () => {
  console.log("⏰ Generating weekly company health report...");
  generateWeeklyReport();
});
