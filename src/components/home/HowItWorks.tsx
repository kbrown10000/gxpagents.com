'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Assistive AI',
    description:
      'Task automation, classification, alerts, and decision support',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    number: '02',
    title: 'Generative AI',
    description:
      'Drafting narratives, summaries, impact assessments, and content',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
  },
  {
    number: '03',
    title: 'Predictive AI',
    description:
      'Forecasting risk, predicting failures, and enabling proactive decisions',
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-500',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Three Levels of{' '}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI agents operate across a maturity spectrum, meeting your
              organization where you are and growing with your capabilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Animated progression bar (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-1 bg-slate-100 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Animated progression bar (mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-1 bg-slate-100 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 rounded-full origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.2}>
                <div className="flex md:flex-col items-start md:items-center md:text-center gap-6 md:gap-0">
                  {/* Step circle */}
                  <motion.div
                    className={`relative z-10 w-14 h-14 md:w-[120px] md:h-[120px] shrink-0 rounded-full ${step.lightColor} flex items-center justify-center md:mb-6`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.2,
                      ease: 'easeOut',
                    }}
                  >
                    <div
                      className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${step.color} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm md:text-xl">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Step content */}
                  <div>
                    <h3
                      className={`text-xl font-semibold text-slate-900 mb-2`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
