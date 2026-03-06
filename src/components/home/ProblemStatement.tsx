'use client';

import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
      </svg>
    ),
    title: 'Rising Costs',
    description:
      'Rising cost per transaction as volumes increase without automation',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Longer Cycles',
    description:
      'Longer cycle times for deviations, CAPAs, batch release, submissions, and case processing',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Compliance Risk',
    description:
      'Higher compliance risk driven by inconsistent execution, manual errors, and fragmented oversight',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Workforce Drain',
    description:
      'Reduced workforce effectiveness, with skilled employees spending disproportionate time on low-value tasks',
  },
];

export function ProblemStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Cost of Doing Nothing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Without intelligent automation, life sciences organizations face
              compounding operational challenges that erode efficiency,
              compliance, and competitiveness.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 0.1}>
              <Card className="h-full text-center" padding="lg">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
