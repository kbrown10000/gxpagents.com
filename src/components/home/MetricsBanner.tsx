'use client';

import { MetricCounter } from '../ui/MetricCounter';
import { ScrollReveal } from '../ui/ScrollReveal';

const metrics = [
  {
    metric: '50-80%',
    description: 'reduction in batch record review effort',
  },
  {
    metric: '40-60%',
    description: 'faster inspection response times',
  },
  {
    metric: '30-50%',
    description: 'reduction in deviation triage cycle time',
  },
  {
    metric: '25-35%',
    description: 'reduction in MLR review cycle time',
  },
];

export function MetricsBanner() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real-world outcomes from AI agent deployment across regulated life
              sciences environments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, index) => (
            <ScrollReveal key={item.metric} delay={index * 0.1}>
              <MetricCounter
                metric={item.metric}
                description={item.description}
                color="text-emerald-500"
                className="[&_p]:text-slate-300"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
