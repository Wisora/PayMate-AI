export interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  date: string;
  flagged?: boolean;
}

/**
 * Basic fraud detection rules:
 * - Flag transactions over a threshold (e.g., > R1000)
 * - Flag duplicate merchant charges within 24 hours
 * - Flag negative amounts (possible reversal abuse)
 */
export function detectFraud(transactions: Transaction[]): Transaction[] {
  const flagged: Transaction[] = [];
  const THRESHOLD = 1000; // customize per region

  // Track merchant activity
  const merchantActivity: Record<string, string[]> = {};

  for (const tx of transactions) {
    let isFraud = false;

    // Rule 1: High-value transaction
    if (tx.amount > THRESHOLD) {
      isFraud = true;
    }

    // Rule 2: Duplicate merchant charge within 24h
    if (!merchantActivity[tx.merchant]) {
      merchantActivity[tx.merchant] = [];
    }
    const recentDates = merchantActivity[tx.merchant];
    if (recentDates.some((d) => isWithin24Hours(d, tx.date))) {
      isFraud = true;
    }
    merchantActivity[tx.merchant].push(tx.date);

    // Rule 3: Negative amount anomaly
    if (tx.amount < 0) {
      isFraud = true;
    }

    if (isFraud) {
      flagged.push({ ...tx, flagged: true });
    }
  }

  return flagged;
}

/**
 * Helper: check if two dates are within 24 hours
 */
function isWithin24Hours(date1: string, date2: string): boolean {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  const diff = Math.abs(d1 - d2);
  return diff <= 24 * 60 * 60 * 1000;
}
