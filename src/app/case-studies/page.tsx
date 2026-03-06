import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Case Studies - GxP Agents | Proven Results in Regulated Industries',
  description:
    'Real results from pharmaceutical, biotech, and medical device companies using AI agents for quality, regulatory, manufacturing, and cybersecurity.',
  keywords: [
    'case studies',
    'pharmaceutical ai',
    'quality automation',
    'regulatory intelligence',
    'deviation management',
    'batch record review',
    'cybersecurity pharma',
  ].join(', '),
};

const iconMap: Record<string, JSX.Element> = {
  'shield-check': (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  rocket: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  ),
  'shield-alert': (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ),
  'file-check': (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
      />
    </svg>
  ),
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Results.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Regulated Industries.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Pharmaceutical, biotech, and medical device companies are already using AI agents to transform
              quality, regulatory, manufacturing, and cybersecurity operations. Here&apos;s what they&apos;ve achieved.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`} className="block group h-full">
                  <article className="h-full rounded-2xl border-2 border-slate-200 bg-white p-8 transition-all hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1">
                    {/* Industry Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                        {iconMap[study.icon] || iconMap['shield-check']}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{study.industry}</p>
                        <p className="text-xs text-slate-500">{study.companySize}</p>
                      </div>
                    </div>

                    {/* Headline Metric */}
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                        {study.headlineMetric}
                      </div>
                      <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                        {study.headlineMetric.includes('%')
                          ? 'Improvement'
                          : study.headlineMetric.includes('month')
                          ? 'Ahead of Schedule'
                          : 'Reduction'}
                      </p>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">{study.briefDescription}</p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Read case study</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">65%</div>
                <div className="text-sm text-slate-300 uppercase tracking-wide">Avg Time Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$2.4M</div>
                <div className="text-sm text-slate-300 uppercase tracking-wide">Avg Annual Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-sm text-slate-300 uppercase tracking-wide">Error Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3 months</div>
                <div className="text-sm text-slate-300 uppercase tracking-wide">Faster to Market</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              These results aren&apos;t theoretical. They&apos;re what happens when AI agents purpose-built for life sciences
              meet real operational workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-lg">
                Book a Demo
              </Button>
              <Button href="/domains" variant="secondary" size="lg">
                Explore Domains
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
