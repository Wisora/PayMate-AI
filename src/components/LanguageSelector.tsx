import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ar', name: 'العربية' },
  { code: 'pt', name: 'Português' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
];

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-500 dark:text-slate-400" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer dark:text-white"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="dark:bg-slate-900">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
