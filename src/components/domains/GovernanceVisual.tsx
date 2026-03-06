'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

interface GovernanceVisualProps {
  governance: string[];
  color?: string;
}

const colorAccents: Record<string, { bg: string; text: string; ring: string; line: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200', line: 'bg-blue-300' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200', line: 'bg-indigo-300' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-600', ring: 'ring-violet-200', line: 'bg-violet-300' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600', ring: 'ring-amber-200', line: 'bg-amber-300' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600', ring: 'ring-rose-200', line: 'bg-rose-300' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', ring: 'ring-teal-200', line: 'bg-teal-300' },
  red: { bg: 'bg-red-100', text: 'text-red-600', ring: 'ring-red-200', line: 'bg-red-300' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-600', ring: 'ring-slate-200', line: 'bg-slate-300' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', ring: 'ring-emerald-200', line: 'bg-emerald-300' },
};

const gateIcons = [
  // Shield / protection
  <svg key="shield" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Eye / review
  <svg key="eye" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Clipboard / audit
  <svg key="clipboard" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>,
  // Lock / authorization
  <svg key="lock" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  // Scale / compliance
  <svg key="scale" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,
  // User group / committee
  <svg key="users" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
];

export function GovernanceVisual({ governance, color = 'blue' }: GovernanceVisualProps) {
  const accent = colorAccents[color] || colorAccents.blue;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-medium mb-6">
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              Human-in-the-Loop
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Governance Gates
            </h2>
            <p className="text-lg text-slate-600">
              Every AI action passes through defined governance checkpoints.
              Humans remain the ultimate decision-makers at every critical juncture.
            </p>
          </div>
        </ScrollReveal>

        {/* Flow visual: AI proposes -> Human decides */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
            {/* AI Proposes */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-100 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">AI Agent</div>
                <div className="text-sm font-medium text-slate-700">Analyzes &amp; Proposes</div>
              </div>
            </div>

            {/* Arrow */}
            <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

            {/* Governance Gate */}
            <div className={`flex items-center gap-3 px-5 py-3 rounded-xl ${accent.bg} border border-slate-200 ring-2 ${accent.ring}`}>
              <div className={`w-8 h-8 rounded-lg ${accent.bg} flex items-center justify-center ${accent.text}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${accent.text} opacity-70`}>Governance</div>
                <div className={`text-sm font-medium ${accent.text}`}>Review Gate</div>
              </div>
            </div>

            {/* Arrow */}
            <svg className="w-8 h-8 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

            {/* Human Decides */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-500">Human Expert</div>
                <div className="text-sm font-medium text-emerald-700">Reviews &amp; Decides</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Governance gates grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {governance.map((gate, index) => {
            const icon = gateIcons[index % gateIcons.length];

            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="relative bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
                >
                  {/* Gate number badge */}
                  <div className="absolute top-4 right-4 text-xs font-mono text-slate-300 font-medium">
                    G{String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${accent.bg} ${accent.text} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                    {icon}
                  </div>

                  {/* Gate description */}
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {gate}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${accent.line} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
