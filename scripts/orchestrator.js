// scripts/orchestrator.js

// Import all agents
import { CEOAgent } from "../agents/CEO.js";
import { COOAgent } from "../agents/COO.js";
import { CFOAgent } from "../agents/CFO.js";
import { CTOAgent } from "../agents/CTO.js";
import { CISOAgent } from "../agents/CISO.js";
import { LegalAgent } from "../agents/Legal.js";
import { InnovationAgent } from "../agents/Innovation.js";
import { ScalingAgent } from "../agents/Scaling.js";
import { ResilienceAgent } from "../agents/Resilience.js";
import { MetricsAgent } from "../agents/Metrics.js";
import { DataAgent } from "../agents/Data.js";
import { InvestorAgent } from "../agents/Investor.js";
import { EvolutionAgent } from "../agents/Evolution.js";

// Instantiate agents
const agents = [
  new CEOAgent(),
  new COOAgent(),
  new CFOAgent(),
  new CTOAgent(),
  new CISOAgent(),
  new LegalAgent(),
  new InnovationAgent(),
  new ScalingAgent(),
  new ResilienceAgent(),
  new MetricsAgent(),
  new DataAgent(),
  new InvestorAgent(),
  new EvolutionAgent(),
];

// Orchestrator function
export async function reviewCompanyHealth(signals) {
  for (const signal of signals) {
    for (const agent of agents) {
      await agent.execute(signal);
    }
  }
}
