// scripts/autoReportCron.js
import cron from "node-cron";
import { reviewCompanyHealth } from "./orchestrator.js";

cron.schedule("0 9 * * *", () => {
  const signals = [
    { type: "MetricsUpdate", details: "Daily KPIs collected" },
    { type: "ComplianceCheck", details: "GDPR audit passed" },
    { type: "MonthlyReport", details: "CEO monthly investor packet" },
  ];
  reviewCompanyHealth(signals);
});
