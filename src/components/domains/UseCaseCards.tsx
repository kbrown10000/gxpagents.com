'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UseCase } from '@/data/domains';
import { Card } from '../ui/Card';
import { MaturityTabs } from '../maturity/MaturityTabs';
import { ScrollReveal } from '../ui/ScrollReveal';

interface UseCaseCardsProps {
  useCases: UseCase[];
  color?: string;
}

const colorClasses: Record<string, { accent: string; valueBg: string; valueText: string; dot: string }> = {
  blue: { accent: 'text-blue-600', valueBg: 'bg-blue-50', valueText: 'text-blue-700', dot: 'bg-blue-500' },
  indigo: { accent: 'text-indigo-600', valueBg: 'bg-indigo-50', valueText: 'text-indigo-700', dot: 'bg-indigo-500' },
  violet: { accent: 'text-violet-600', valueBg: 'bg-violet-50', valueText: 'text-violet-700', dot: 'bg-violet-500' },
  amber: { accent: 'text-amber-600', valueBg: 'bg-amber-50', valueText: 'text-amber-700', dot: 'bg-amber-500' },
  rose: { accent: 'text-rose-600', valueBg: 'bg-rose-50', valueText: 'text-rose-700', dot: 'bg-rose-500' },
  teal: { accent: 'text-teal-600', valueBg: 'bg-teal-50', valueText: 'text-teal-700', dot: 'bg-teal-500' },
  red: { accent: 'text-red-600', valueBg: 'bg-red-50', valueText: 'text-red-700', dot: 'bg-red-500' },
  slate: { accent: 'text-slate-600', valueBg: 'bg-slate-50', valueText: 'text-slate-700', dot: 'bg-slate-500' },
  emerald: { accent: 'text-emerald-600', valueBg: 'bg-emerald-50', valueText: 'text-emerald-700', dot: 'bg-emerald-500' },
};

export function UseCaseCards({ useCases, color = 'blue' }: UseCaseCardsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const colors = colorClasses[color] || colorClasses.blue;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-slate-600">
              Explore how AI agents transform key processes across maturity levels.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((useCase, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card
                  className="h-full flex flex-col"
                  hover={false}
                  padding="lg"
                >
                  {/* Use case header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 ${colors.dot}`} />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {useCase.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  {/* Value proposition */}
                  <div className={`${colors.valueBg} rounded-lg px-4 py-3 mb-5`}>
                    <div className="flex items-center gap-2">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${colors.accent}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                      <span className={`text-sm font-medium ${colors.valueText}`}>
                        {useCase.value}
                      </span>
                    </div>
                  </div>

                  {/* Maturity toggle button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors mb-2 group"
                    aria-expanded={isExpanded}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                    <span>
                      {isExpanded ? 'Hide' : 'View'} Maturity Levels
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4"
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
                  </button>

                  {/* Expandable maturity tabs */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-100">
                          <MaturityTabs
                            levels={useCase.maturityLevels}
                            color={color}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
