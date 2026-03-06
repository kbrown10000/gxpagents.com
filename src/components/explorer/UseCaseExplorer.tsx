'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { domains } from '@/data/domains';
import { Card } from '../ui/Card';
import { DomainIcon } from '../ui/DomainIcon';

type MaturityFilter = 'all' | 'assistive' | 'generative' | 'predictive';

const domainColorMap: Record<string, { bg: string; text: string; border: string; solid: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', solid: 'bg-blue-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300', solid: 'bg-indigo-600' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-300', solid: 'bg-violet-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300', solid: 'bg-amber-600' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-300', solid: 'bg-rose-600' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-300', solid: 'bg-teal-600' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300', solid: 'bg-slate-600' },
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', solid: 'bg-emerald-600' },
};

const maturityLabels: Record<string, { label: string; description: string }> = {
  assistive: { label: 'Assistive AI', description: 'Task automation & decision support' },
  generative: { label: 'Generative AI', description: 'Reasoning & content creation' },
  predictive: { label: 'Predictive AI', description: 'Risk foresight & prediction' },
};

// Add 'red' to color map
const _redEntry = { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', solid: 'bg-red-600' };
domainColorMap['red'] = _redEntry;

export function UseCaseExplorer() {
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [maturityFilter, setMaturityFilter] = useState<MaturityFilter>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Flatten all use cases with domain info
  const allUseCases = useMemo(() => {
    return domains.flatMap((domain) =>
      (domain.useCases ?? []).map((uc, idx) => ({
        ...uc,
        id: `${domain.slug}-${idx}`,
        domainSlug: domain.slug,
        domainTitle: domain.title,
        domainSlug: domain.slug,
        domainColor: domain.color,
      }))
    );
  }, []);

  const filteredUseCases = useMemo(() => {
    return allUseCases.filter((uc) => {
      if (domainFilter !== 'all' && uc.domainSlug !== domainFilter) return false;
      return true;
    });
  }, [allUseCases, domainFilter]);

  const handleCardToggle = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Domain Filter Pills */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Filter by Domain
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setDomainFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              domainFilter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            All Domains
          </button>
          {domains.map((domain) => {
            const color = domain.color;
            const colors = domainColorMap[color] || domainColorMap.blue;
            const isActive = domainFilter === domain.slug;

            return (
              <button
                key={domain.slug}
                onClick={() => setDomainFilter(domain.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? `${colors.solid} text-white shadow-md`
                    : `bg-white ${colors.text} border border-slate-200 hover:${colors.bg}`
                }`}
              >
                <DomainIcon slug={domain.slug} className="w-4 h-4 mr-1.5" />
                {domain.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Maturity Filter Pills */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Filter by Maturity Level
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMaturityFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              maturityFilter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            All Levels
          </button>
          {(['assistive', 'generative', 'predictive'] as const).map((level) => {
            const isActive = maturityFilter === level;
            return (
              <button
                key={level}
                onClick={() => setMaturityFilter(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {maturityLabels[level].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result Count */}
      <div className="mb-6">
        <p className="text-sm text-slate-500">
          Showing{' '}
          <span className="font-semibold text-slate-900">{filteredUseCases.length}</span>{' '}
          use case{filteredUseCases.length !== 1 ? 's' : ''}
          {domainFilter !== 'all' && (
            <span>
              {' '}in{' '}
              <span className="font-semibold text-slate-900">
                {domains.find((d) => d.slug === domainFilter)?.title}
              </span>
            </span>
          )}
          {maturityFilter !== 'all' && (
            <span>
              {' '}at{' '}
              <span className="font-semibold text-slate-900">
                {maturityLabels[maturityFilter].label}
              </span>{' '}
              level
            </span>
          )}
        </p>
      </div>

      {/* Use Case Grid */}
      {filteredUseCases.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No use cases found</h3>
          <p className="text-slate-500">
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredUseCases.map((uc) => {
              const colors = domainColorMap[uc.domainColor] || domainColorMap.blue;
              const isExpanded = expandedCard === uc.id;

              return (
                <motion.div
                  key={uc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Card
                    className={`h-full cursor-pointer transition-all duration-200 ${
                      isExpanded ? `ring-2 ${colors.border}` : ''
                    }`}
                    hover
                    padding="md"
                  >
                    <div onClick={() => handleCardToggle(uc.id)}>
                      {/* Domain Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                        >
                          <DomainIcon slug={uc.domainSlug} className="w-4 h-4" />
                          {uc.domainTitle}
                        </span>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
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
                      </div>

                      {/* Use Case Name */}
                      <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                        {uc.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {uc.description}
                      </p>

                      {/* Value */}
                      {uc.value && (
                        <div className="flex items-start gap-2 text-sm">
                          <svg
                            className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                          </svg>
                          <span className="text-slate-700">{uc.value}</span>
                        </div>
                      )}
                    </div>

                    {/* Expanded Maturity Details */}
                    <AnimatePresence>
                      {isExpanded && uc.maturityLevels && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                              Maturity Levels
                            </p>

                            {(['assistive', 'generative', 'predictive'] as const)
                              .filter(
                                (level) =>
                                  maturityFilter === 'all' || maturityFilter === level
                              )
                              .map((level) => (
                                <div
                                  key={level}
                                  className="bg-slate-50 rounded-lg p-3"
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span
                                      className={`w-2 h-2 rounded-full ${
                                        level === 'assistive'
                                          ? 'bg-emerald-500'
                                          : level === 'generative'
                                          ? 'bg-blue-500'
                                          : 'bg-violet-500'
                                      }`}
                                    />
                                    <span className="text-xs font-semibold text-slate-700">
                                      {maturityLabels[level].label}
                                    </span>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed">
                                    {uc.maturityLevels[level]}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
