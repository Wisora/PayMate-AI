import { getFirestore } from 'firebase-admin/firestore';

/**
 * Analytics Service (Phase 1: Firestore Direct)
 */
export const getFinancialSummary = async () => {
  const db = getFirestore();
  const transactionsRef = db.collection('transactions');
  
  // In a real app, we'd use aggregation queries
  const snapshot = await transactionsRef.get();
  let totalRevenue = 0;
  let count = 0;

  snapshot.forEach(doc => {
    totalRevenue += doc.data().amount;
    count++;
  });

  return {
    totalRevenue,
    transactionCount: count,
    averageTicket: totalRevenue / (count || 1)
  };
};

export const getActiveUsersCount = async () => {
  const db = getFirestore();
  const usersRef = db.collection('users');
  const snapshot = await usersRef.where('status', '==', 'active').count().get();
  return snapshot.data().count;
};
