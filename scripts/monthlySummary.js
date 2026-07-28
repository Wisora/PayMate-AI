// scripts/monthlySummary.js
import fs from "fs";
import path from "path";
import cron from "node-cron";

// Directory containing weekly reports
const weeklyReportsDir = "reports";
const monthlySummaryFile = "reports/Monthly-Summary.md";

// Ensure reports directory exists
function ensureReportsDir() {
  if (!fs.existsSync(weeklyReportsDir)) {
    fs.mkdirSync(weeklyReportsDir, { recursive: true });
    console.log(`📂 Created directory: ${weeklyReportsDir}`);
  }
}

// Generate monthly summary
function generateMonthlySummary() {
  ensureReportsDir();
  const reportFiles = fs
    .readdirSync(weeklyReportsDir)
    .filter((file) => file.startsWith("Weekly-Report") && file.endsWith(".md"));

  let summaryContent = `# Monthly Executive Summary\nGenerated on ${new Date().toLocaleString()}\n\n`;

  if (reportFiles.length === 0) {
    summaryContent += "No weekly reports found for this month.\n";
  } else {
    reportFiles.forEach((file) => {
      const content = fs.readFileSync(
        path.join(weeklyReportsDir, file),
        "utf-8",
      );
      summaryContent += `## ${file}\n\n${content}\n\n`;
    });
  }

  fs.writeFileSync(monthlySummaryFile, summaryContent);
  console.log(`✅ Monthly summary generated: ${monthlySummaryFile}`);
}

// Schedule job: runs on the 1st of every month at 8 AM
cron.schedule("0 8 1 * *", () => {
  console.log("⏰ Generating monthly executive summary...");
  generateMonthlySummary();
});
