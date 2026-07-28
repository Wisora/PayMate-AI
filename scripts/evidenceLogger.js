// scripts/evidenceLogger.js
import fs from "fs";
import path from "path";

export function logEvidence(fileName, entry) {
  const filePath = path.join("evidence", fileName);
  const timestamp = new Date().toISOString();
  const logEntry = `\n[${timestamp}] ${entry}\n`;

  fs.appendFileSync(filePath, logEntry);
  console.log(`Logged evidence in ${fileName}: ${entry}`);
}
