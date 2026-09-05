/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { auth, db } from "./lib/firebase";
import { useTranslation } from "react-i18next";
import {
  LayoutDashboard,
  CreditCard,
  Calendar,
  Settings as SettingsIcon,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  BarChart,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkout } from "./components/Checkout";
import { RecurringCalendar } from "./components/RecurringCalendar";
import { Settings } from "./components/Settings";
import { AIAssistant } from "./components/AIAssistant";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { useTheme } from "./contexts/ThemeContext";
import "./i18n";

export default function App() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    {
      id: "dashboard",
      label: t("dashboard"),
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "analytics",
      label: t("analytics", { defaultValue: "Analytics" }),
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      id: "payments",
      label: t("payments"),
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "calendar",
      label: t("calendar"),
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      id: "settings",
      label: t("settings"),
      icon: <SettingsIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 flex text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="fixed lg:relative z-40 w-72 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
                  PAYMATE AI
                </h1>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                aria-label={t("close_sidebar", { defaultValue: "Close sidebar" })}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id
                      ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="font-semibold text-sm">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-xl">
                <LogOut className="w-5 h-5" />
                <span className="font-semibold text-sm">{t("logout")}</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                aria-label={t("open_sidebar", { defaultValue: "Open sidebar" })}
              >
                <Menu className="w-5 h-5 dark:text-white" />
              </button>
            )}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <label htmlFor="search-input" className="sr-only">
                {t("search_placeholder", { defaultValue: "Search" })}
              </label>
              <input
                id="search-input"
                type="text"
                placeholder={t("search_placeholder")}
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-64 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Header Button */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 dark:text-slate-400"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            <button 
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label={t("notifications", { defaultValue: "Notifications" })}
            >
              <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {t("user_name")}
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  {t("pro_account")}
                </p>
              </div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                <img
                  src="https://picsum.photos/seed/user/100/100"
                  alt="Avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "dashboard" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        {t("total_balance")}
                      </p>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                        {t("total_balance_value")}
                      </h2>
                      <p className="text-xs text-emerald-600 font-bold mt-2">
                        +12.5% {t("from_last_month")}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        {t("upcoming_payments")}
                      </p>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                        4
                      </h2>
                      <p className="text-xs text-slate-400 font-bold mt-2">
                        {t("next_payment_info")}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        {t("savings_goal")}
                      </p>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                        85%
                      </h2>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
                        <div className="w-[85%] h-full bg-emerald-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                      <h3 className="text-lg font-bold mb-6 dark:text-white">
                        {t("recent_activity")}
                      </h3>
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800 last:border-0"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-slate-400" />
                              </div>
                              <div>
                                <p className="text-sm font-bold dark:text-slate-200">
                                  {t("netflix_sub")}
                                </p>
                                <p className="text-[10px] text-slate-400">
                                  {t("recent_activity_date")}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm font-black text-slate-900 dark:text-white">
                              {t("recent_activity_amount")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-900 dark:bg-black p-6 rounded-2xl shadow-xl text-white overflow-hidden relative">
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-2">
                          {t("ai_insights")}
                        </h3>
                        <p className="text-sm text-slate-400 mb-6">
                          {t("ai_insight_text")}
                        </p>
                        <button className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-400 transition-colors">
                          {t("apply_suggestion")}
                        </button>
                      </div>
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "analytics" && <AnalyticsDashboard />}
              {activeTab === "payments" && <Checkout />}
              {activeTab === "calendar" && <RecurringCalendar />}
              {activeTab === "settings" && <Settings />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* AI Assistant Widget */}
        <AIAssistant />
      </main>
    </div>
  );
}