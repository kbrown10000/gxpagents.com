'use client';

import Link from 'next/link';
import { domains } from '@/data/domains';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  blue:   { border: 'border-blue-500',   bg: 'bg-blue-50',   text: 'text-blue-600' },
  indigo: { border: 'border-indigo-500', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  violet: { border: 'border-violet-500', bg: 'bg-violet-50', text: 'text-violet-600' },
  amber:  { border: 'border-amber-500',  bg: 'bg-amber-50',  text: 'text-amber-600' },
  rose:   { border: 'border-rose-500',   bg: 'bg-rose-50',   text: 'text-rose-600' },
  teal:   { border: 'border-teal-500',   bg: 'bg-teal-50',   text: 'text-teal-600' },
  red:    { border: 'border-red-500',    bg: 'bg-red-50',    text: 'text-red-600' },
  slate:  { border: 'border-slate-500',  bg: 'bg-slate-100', text: 'text-slate-600' },
};

function getColorClasses(color: string) {
  return colorMap[color] ?? colorMap.blue;
}

export function DomainGrid() {
  return (
    <section id="domains" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              8 Regulated Domains.{' '}
              <span className="gradient-text">One Platform.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Purpose-built AI agents designed for the unique workflows,
              regulations, and challenges of each life sciences domain.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const colors = getColorClasses(domain.color);
            return (
              <ScrollReveal key={domain.slug} delay={index * 0.08}>
                <Link href={`/domains/${domain.slug}`} className="block h-full">
                  <Card
                    className={`h-full border-t-4 ${colors.border} group`}
                    padding="lg"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      {domain.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {domain.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {domain.shifts?.[0] || domain.overview.slice(0, 80)}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      Explore
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
