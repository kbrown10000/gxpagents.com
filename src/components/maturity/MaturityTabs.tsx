'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MaturityLevel {
  assistive: string;
  generative: string;
  predictive: string;
}

interface MaturityTabsProps {
  levels: MaturityLevel;
  color?: string;
}

const tabs = [
  { key: 'assistive' as const, label: 'Assistive AI', description: 'Task automation & decision support' },
  { key: 'generative' as const, label: 'Generative AI', description: 'Reasoning & content creation' },
  { key: 'predictive' as const, label: 'Predictive AI', description: 'Risk foresight & prediction' },
];

export function MaturityTabs({ levels, color = 'blue' }: MaturityTabsProps) {
  const [activeTab, setActiveTab] = useState<'assistive' | 'generative' | 'predictive'>('assistive');

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600',
    indigo: 'bg-indigo-600',
    violet: 'bg-violet-600',
    amber: 'bg-amber-600',
    rose: 'bg-rose-600',
    teal: 'bg-teal-600',
    red: 'bg-red-600',
    slate: 'bg-slate-600',
  };

  const bgColor = colorClasses[color] || colorClasses.blue;

  return (
    <div>
      <div role="tablist" className="flex rounded-lg bg-slate-100 p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`relative flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeTab === tab.key ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 rounded-md ${bgColor}`}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          role="tabpanel"
          id={`panel-${activeTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 rounded-lg p-6"
        >
          <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${bgColor}`} />
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">
                {tabs.find(t => t.key === activeTab)?.label}
              </h4>
              <p className="text-sm text-slate-500 mb-3">
                {tabs.find(t => t.key === activeTab)?.description}
              </p>
              <p className="text-slate-700">{levels[activeTab]}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
