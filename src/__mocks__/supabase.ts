export const supabase = {
  from: () => ({
    select: () => ({
      order: () => ({ data: [], error: null }),
      single: () => ({ data: null, error: null }),
    }),
    insert: () => ({ error: null }),
  }),
};

export async function getDashboardData() {
  return {
    transactions: [
      {
        id: "1",
        description: "Test Transaction",
        amount: 1500,
        type: "income",
        status: "completed",
        date: "2026-03-01",
      },
    ],
    metrics: {
      totalRevenue: "$45,200",
      activeSubscribers: "320",
      mrr: "$12,400",
      netProfit: "$8,900",
    },
    schedules: [],
  };
}

export async function applyAiSuggestionAction() {
  return { success: true };
}