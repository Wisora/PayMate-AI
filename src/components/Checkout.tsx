import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, ShieldCheck, Lock, Smartphone, Globe, Bell, User } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('stripe');

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 99.00, currency: 'USD', provider: method })
      });
      const data = await response.json();
      if (data.success) {
        alert(`Payment successful! ID: ${data.transactionId}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            {t('payment_method')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { id: 'stripe', name: 'Stripe', icon: <CreditCard className="w-4 h-4" /> },
              { id: 'paypal', name: 'PayPal', icon: <Globe className="w-4 h-4" /> },
              { id: 'alipay', name: 'Alipay', icon: <Smartphone className="w-4 h-4" /> },
              { id: 'upi', name: 'UPI', icon: <Smartphone className="w-4 h-4" /> },
              { id: 'pix', name: 'Pix', icon: <Smartphone className="w-4 h-4" /> },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  method === m.id 
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' 
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400'
                }`}
              >
                {m.icon}
                <span className="text-xs font-bold uppercase tracking-wider">{m.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            {t('security')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <Lock className="w-4 h-4 text-slate-400" />
              <p className="text-sm text-slate-600 dark:text-slate-400">{t('security_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 dark:bg-black text-white p-6 rounded-2xl shadow-xl">
          <h3 className="text-lg font-bold mb-4">{t('checkout')}</h3>
          <div className="space-y-3 border-b border-white/10 pb-4 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t('premium_plan')}</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{t('tax')}</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-xl mb-6">
            <span>{t('total')}</span>
            <span>$99.00</span>
          </div>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors disabled:opacity-50"
          >
            {loading ? t('processing') : t('pay_now')}
          </button>
        </div>
      </div>
    </div>
  );
};
