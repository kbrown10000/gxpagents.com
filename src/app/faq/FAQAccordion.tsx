'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQItem[];
}

export function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-slate-200 rounded-lg bg-white overflow-hidden hover:border-blue-300 transition-colors duration-200"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 group"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-blue-800' : ''
                }`}
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
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
