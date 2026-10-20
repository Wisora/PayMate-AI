import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getDashboardData() {
  const [transactionsRes, metricsRes, schedulesRes] = await Promise.all([
    supabase.from('paymate_transactions').select('*').order('created_at', { ascending: false }),
    supabase.from('paymate_metrics').select('*').single(),
    supabase.from('paymate_schedules').select('*').order('due_date', { ascending: true }),
  ]);

  return {
    transactions: transactionsRes.data || [],
    metrics: metricsRes.data || null,
    schedules: schedulesRes.data || [],
  };
}

export async function applyAiSuggestionAction(
  title: string,
  amount: number,
  dueDate: string
) {
  const { error } = await supabase.from('paymate_schedules').insert([
    {
      title,
      amount,
      due_date: dueDate,
      currency: 'USD',
      frequency: 'monthly',
      status: 'scheduled',
    },
  ]);

  if (error) {
    console.error('Failed to apply AI suggestion:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
