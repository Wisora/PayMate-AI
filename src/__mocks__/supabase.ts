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
  return { transactions: [], metrics: null, schedules: [] };
}

export async function applyAiSuggestionAction() {
  return { success: true };
}