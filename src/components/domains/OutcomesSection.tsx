import { Outcome } from '@/data/domains';
import { MetricCounter } from '../ui/MetricCounter';
import { ScrollReveal } from '../ui/ScrollReveal';

interface OutcomesSectionProps {
  outcomes: Outcome[];
  color?: string;
}

const colorToMetric: Record<string, string> = {
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  teal: 'text-teal-400',
  red: 'text-red-400',
  slate: 'text-slate-400',
  emerald: 'text-emerald-400',
};

export function OutcomesSection({ outcomes, color = 'blue' }: OutcomesSectionProps) {
  const metricColor = colorToMetric[color] || colorToMetric.blue;

  // Determine grid columns based on number of outcomes
  const gridCols =
    outcomes.length <= 2
      ? 'md:grid-cols-2'
      : outcomes.length === 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              Measurable Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expected Outcomes
            </h2>
            <p className="text-lg text-slate-400">
              Quantified improvements organizations can expect when deploying
              AI agents in this domain.
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className={`grid gap-8 ${gridCols}`}>
          {outcomes.map((outcome, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center group hover:border-slate-600 transition-colors duration-300">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <MetricCounter
                    metric={outcome.metric}
                    description=""
                    color={metricColor}
                  />
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
