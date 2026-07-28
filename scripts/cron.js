// scripts/cron.js
import cron from "node-cron";
import { reviewCompanyHealth } from "./orchestrator.js";

// Example signals for daily health check
const dailySignals = [
  { type: "KPIUpdate", details: "Daily revenue snapshot recorded" },
  { type: "PerformanceData", details: "System latency check completed" },
  { type: "ResilienceCheck", details: "Failover test executed" },
  { type: "DataIntegrity", details: "Database integrity verified" },
  { type: "InvestorConfidence", details: "Investor confidence steady" },
  { type: "EvolutionRule", details: "Review long-term roadmap alignment" },
];

// Schedule job: runs every day at 9 AM
cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Running daily company health check...");
  await reviewCompanyHealth(dailySignals);
  console.log("✅ Daily health check complete. Evidence files updated.");
});
