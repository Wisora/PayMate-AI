// scripts/initEvidence.js
import fs from "fs";
import path from "path";

// List of required evidence and dashboard files
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

// Ensure directories exist
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📂 Created directory: ${dir}`);
  }
}

// Initialize files
files.forEach((file) => {
  ensureDir(file);
  if (!fs.existsSync(file)) {
    fs.writeFileSync(
      file,
      `# ${path.basename(file)}\nInitialized by initEvidence.js\n`,
    );
    console.log(`✅ Created file: ${file}`);
  } else {
    console.log(`ℹ️ File already exists: ${file}`);
  }
});

console.log("🚀 Evidence initialization complete!");
