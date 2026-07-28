// scripts/testSignals.js
import { reviewCompanyHealth } from "./orchestrator.js";

async function runTest() {
  const sampleSignals = [
    {
      type: "InvestorDisclosure",
      details: "Published Q2 burn rate and runway",
    },
    {
      type: "ScalingEvent",
      details: "Scaled database cluster to handle 10k users",
    },
    { type: "ResilienceCheck", details: "Failover test passed successfully" },
    { type: "KPIUpdate", details: "Monthly revenue increased by 15%" },
    {
      type: "DataIntegrity",
      details: "Checksum verified for financial records",
    },
    {
      type: "ComplianceDisclosure",
      details: "Updated GDPR compliance statement",
    },
    { type: "SecurityEvent", details: "Unauthorized login attempt detected" },
    {
      type: "EvolutionRule",
      details: "Adopt AI-driven contributor onboarding",
    },
    {
      type: "InnovationOutcome",
      details: "AR/VR prototype tested successfully",
    },
    { type: "PerformanceData", details: "API latency reduced to 120ms" },
    {
      type: "RecoveryOutcome",
      details: "System restored after 15 minutes downtime",
    },
    {
      type: "InvestorConfidence",
      details: "Confidence remains strong after Q2 results",
    },
    { type: "AuditTrail", details: "User access logged for Q2 dataset" },
  ];

  console.log("🚀 Running orchestrator test with sample signals...");
  await reviewCompanyHealth(sampleSignals);
  console.log("✅ Test complete. Check evidence files for agent outputs.");
}

runTest();
