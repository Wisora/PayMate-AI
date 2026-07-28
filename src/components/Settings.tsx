import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, Globe, Shield, Volume2, Moon, Sun } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('settings')}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language & Region */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200">{t('language')}</h3>
          </div>
          <LanguageSelector />
          <p className="text-xs text-slate-400">{t('language_desc', { defaultValue: 'Choose your preferred language for the interface and notifications.' })}</p>
        </div>

        {/* Theme Settings */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            {theme === 'light' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-400" />}
            <h3 className="font-bold text-slate-800 dark:text-slate-200">{t('theme')}</h3>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <span className="text-sm text-slate-600 dark:text-slate-400">{theme === 'light' ? t('light_mode') : t('dark_mode')}</span>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                theme === 'dark' ? 'bg-emerald-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-xs text-slate-400">{t('theme_desc')}</p>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200">{t('notifications')}</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-600 dark:text-slate-400">{t('email_alerts')}</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-600 dark:text-slate-400">{t('push_notifications')}</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-600 dark:text-slate-400">{t('whatsapp_reminders')}</span>
              <input type="checkbox" className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
            </label>
          </div>
        </div>

        {/* AI Voice */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Volume2 className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200">{t('voice_selection')}</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-600 dark:text-slate-400">{t('voice_feedback')}</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500" />
            </label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2 text-sm dark:text-white">
              <option>Zephyr (Default)</option>
              <option>Puck</option>
              <option>Kore</option>
            </select>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-800 dark:text-slate-200">{t('security')}</h3>
          </div>
          <button className="w-full py-2 bg-slate-900 dark:bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-emerald-500 transition-colors">
            {t('enable_2fa')}
          </button>
          <button className="w-full py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            {t('change_password')}
          </button>
        </div>
      </div>
    </div>
  );
};
