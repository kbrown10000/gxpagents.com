'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

interface RegulatoryContextProps {
  items: string[];
  color?: string;
}

const colorAccents: Record<string, { icon: string; border: string; hover: string }> = {
  blue: { icon: 'text-blue-500', border: 'border-l-blue-500', hover: 'hover:border-blue-200' },
  indigo: { icon: 'text-indigo-500', border: 'border-l-indigo-500', hover: 'hover:border-indigo-200' },
  violet: { icon: 'text-violet-500', border: 'border-l-violet-500', hover: 'hover:border-violet-200' },
  amber: { icon: 'text-amber-500', border: 'border-l-amber-500', hover: 'hover:border-amber-200' },
  rose: { icon: 'text-rose-500', border: 'border-l-rose-500', hover: 'hover:border-rose-200' },
  teal: { icon: 'text-teal-500', border: 'border-l-teal-500', hover: 'hover:border-teal-200' },
  red: { icon: 'text-red-500', border: 'border-l-red-500', hover: 'hover:border-red-200' },
  slate: { icon: 'text-slate-500', border: 'border-l-slate-500', hover: 'hover:border-slate-300' },
  emerald: { icon: 'text-emerald-500', border: 'border-l-emerald-500', hover: 'hover:border-emerald-200' },
};

function parseRegulatoryItem(item: string): { title: string; detail: string } {
  // Try to split on colon or dash to separate title from detail
  const colonIndex = item.indexOf(':');
  const dashIndex = item.indexOf(' - ');

  if (colonIndex > 0 && colonIndex < 60) {
    return {
      title: item.substring(0, colonIndex).trim(),
      detail: item.substring(colonIndex + 1).trim(),
    };
  }
  if (dashIndex > 0 && dashIndex < 60) {
    return {
      title: item.substring(0, dashIndex).trim(),
      detail: item.substring(dashIndex + 3).trim(),
    };
  }
  return { title: item, detail: '' };
}

export function RegulatoryContext({ items, color = 'blue' }: RegulatoryContextProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const accent = colorAccents[color] || colorAccents.blue;

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Regulatory Context
            </h2>
            <p className="text-lg text-slate-600">
              Key regulations, frameworks, and standards that govern this domain.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl space-y-3">
          {items.map((item, index) => {
            const { title, detail } = parseRegulatoryItem(item);
            const isExpanded = expandedIndex === index;
            const hasDetail = detail.length > 0;

            return (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div
                  className={`border border-slate-200 ${accent.hover} border-l-4 ${accent.border} rounded-lg bg-white shadow-sm transition-all duration-200`}
                >
                  <button
                    onClick={() => hasDetail && toggleItem(index)}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-left ${
                      hasDetail ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    aria-expanded={isExpanded}
                    disabled={!hasDetail}
                  >
                    {/* Regulatory icon */}
                    <div className={`flex-shrink-0 ${accent.icon}`}>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>

                    {/* Title */}
                    <span className="flex-1 font-medium text-slate-800">{title}</span>

                    {/* Expand/collapse chevron */}
                    {hasDetail && (
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 text-slate-400"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </button>

                  {/* Expandable detail */}
                  <AnimatePresence initial={false}>
                    {isExpanded && hasDetail && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pl-14">
                          <p className="text-slate-600 leading-relaxed">{detail}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
