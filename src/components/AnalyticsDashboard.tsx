import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Activity, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const AnalyticsDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    revenue: 0,
    users: 0,
    growth: 0,
    activeSessions: 0
  });

  useEffect(() => {
    // Phase 1: Fetch from Firestore via backend API
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/analytics/summary');
        const data = await response.json();
        setStats(data);
      } catch (e) {
        // Mock data for demo if API fails
        setStats({
          revenue: 12450,
          users: 1240,
          growth: 12.5,
          activeSessions: 42
        });
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          {t('analytics_overview', { defaultValue: 'Analytics Overview' })}
        </h2>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Activity className="w-4 h-4" />
          {t('live_updates', { defaultValue: 'Live Updates' })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title={t('revenue', { defaultValue: 'Revenue' })} 
          value={`$${stats.revenue.toLocaleString()}`} 
          trend={`+${stats.growth}%`} 
          icon={<TrendingUp className="w-5 h-5 text-emerald-500" />} 
        />
        <StatCard 
          title={t('total_users', { defaultValue: 'Total Users' })} 
          value={stats.users.toLocaleString()} 
          trend="+5.2%" 
          icon={<Users className="w-5 h-5 text-blue-500" />} 
        />
        <StatCard 
          title={t('active_now', { defaultValue: 'Active Now' })} 
          value={stats.activeSessions} 
          trend={t('stable', { defaultValue: 'Stable' })} 
          icon={<Activity className="w-5 h-5 text-amber-500" />} 
        />
        <StatCard 
          title={t('conversion', { defaultValue: 'Conversion' })} 
          value="3.2%" 
          trend="+0.4%" 
          icon={<BarChart className="w-5 h-5 text-indigo-500" />} 
        />
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="h-64 flex items-end gap-2">
          {[40, 70, 45, 90, 65, 80, 95, 60, 75, 50, 85, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              className="flex-1 bg-emerald-500/20 dark:bg-emerald-500/10 border-t-2 border-emerald-500 rounded-t-lg"
            />
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>{t('jan', { defaultValue: 'Jan' })}</span>
          <span>{t('jun', { defaultValue: 'Jun' })}</span>
          <span>{t('dec', { defaultValue: 'Dec' })}</span>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, icon }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
        {icon}
      </div>
      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-full">
        {trend}
      </span>
    </div>
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{value}</h3>
  </div>
);
