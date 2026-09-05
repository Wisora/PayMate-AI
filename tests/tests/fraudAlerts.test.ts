import { detectFraud } from "@/api/fraudAlerts";

test("flags high-value transactions", () => {
  const txs = [
    { id: "1", amount: 1500, merchant: "Store", date: "2026-04-12" },
  ];
  const flagged = detectFraud(txs);
  expect(flagged.length).toBe(1);
  expect(flagged[0].flagged).toBe(true);
});