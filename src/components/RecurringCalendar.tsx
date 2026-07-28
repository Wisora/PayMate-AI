import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval 
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, RefreshCw, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface Payment {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  status: 'pending' | 'paused' | 'completed';
  frequency: 'daily' | 'weekly' | 'monthly' | 'custom';
}

export const RecurringCalendar: React.FC = () => {
  const { t } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [payments, setPayments] = useState<Payment[]>([
    { id: '1', date: new Date(), amount: 29.99, currency: 'USD', status: 'pending', frequency: 'monthly' },
    { id: '2', date: addDays(new Date(), 5), amount: 15.00, currency: 'EUR', status: 'paused', frequency: 'weekly' },
  ]);

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 dark:text-white" />
          </button>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 dark:text-white" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')];
    return (
      <div className="grid grid-cols-7 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const cloneDay = day;
        const dayPayments = payments.filter(p => isSameDay(p.date, cloneDay));

        days.push(
          <div
            key={day.toString()}
            className={`relative h-24 border border-slate-100 dark:border-slate-800 p-2 transition-all ${
              !isSameMonth(day, monthStart) ? 'bg-slate-50 dark:bg-slate-950 text-slate-300 dark:text-slate-700' : 'text-slate-700 dark:text-slate-200'
            } ${isSameDay(day, selectedDate) ? 'ring-2 ring-emerald-500 ring-inset' : ''}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="text-sm font-medium">{formattedDate}</span>
            <div className="mt-1 space-y-1">
              {dayPayments.map(p => (
                <div 
                  key={p.id} 
                  className={`text-[10px] p-1 rounded truncate flex items-center gap-1 ${
                    p.status === 'paused' ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400' : 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                  }`}
                >
                  <Clock className="w-2 h-2" />
                  {p.amount} {p.currency}
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">{rows}</div>;
  };

  const handleAction = (id: string, action: 'pause' | 'resume' | 'reschedule') => {
    setPayments(prev => prev.map(p => {
      if (p.id === id) {
        if (action === 'pause') return { ...p, status: 'paused' };
        if (action === 'resume') return { ...p, status: 'pending' };
      }
      return p;
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      <div className="mt-8 space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t('recurring')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {payments.map(p => (
            <div key={p.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  p.status === 'paused' ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400' : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                }`}>
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{p.amount} {p.currency}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t(p.frequency)} • {format(p.date, 'MMM d, yyyy')}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAction(p.id, p.status === 'paused' ? 'resume' : 'pause')}
                  className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-all"
                >
                  {p.status === 'paused' ? <Play className="w-4 h-4 dark:text-slate-400" /> : <Pause className="w-4 h-4 dark:text-slate-400" />}
                </button>
                <button className="px-3 py-1 text-xs font-medium bg-slate-900 dark:bg-emerald-600 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors">
                  {t('reschedule')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
