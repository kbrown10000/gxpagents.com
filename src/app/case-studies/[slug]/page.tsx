import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  return {
    title: `${study.title} | GxP Agents Case Study`,
    description: study.briefDescription,
    keywords: [study.industry, 'case study', 'pharmaceutical ai', 'gxp automation'].join(', '),
    openGraph: {
      title: study.title,
      description: study.briefDescription,
      type: 'article',
    },
  };
}

const iconMap: Record<string, JSX.Element> = {
  'shield-check': (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  rocket: (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  ),
  'shield-alert': (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ),
  'file-check': (
    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
      />
    </svg>
  ),
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Case Studies
            </Link>

            {/* Industry + Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                {iconMap[study.icon] || iconMap['shield-check']}
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-1">Case Study</p>
                <p className="text-lg font-semibold text-white">{study.industry}</p>
                <p className="text-sm text-slate-400">{study.companySize}</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">{study.title}</h1>

            {/* Brief Description */}
            <p className="text-xl text-slate-300 leading-relaxed">{study.briefDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Headline Metric Bar */}
      <section className="py-8 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-7xl font-bold text-white mb-2">{study.headlineMetric}</div>
            <p className="text-lg text-blue-100 uppercase tracking-wide font-semibold">
              {study.headlineMetric.includes('%')
                ? 'Improvement Achieved'
                : study.headlineMetric.includes('month')
                ? 'Ahead of Schedule'
                : 'Time Reduction'}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Story: Challenge → Solution → Results */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Challenge */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">{study.challenge}</p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Solution</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">{study.solution}</p>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">The Results</h2>
              </div>
              <ul className="space-y-4">
                {study.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed flex-1">{result}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-blue-500">
              <div className="flex gap-3 mb-4">
                <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl text-slate-800 italic leading-relaxed mb-4">{study.quote}</p>
              <p className="text-sm font-semibold text-slate-600">— {study.quoteAuthor}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              See how GxP Agents can transform your {study.industry.toLowerCase()} operations with AI purpose-built
              for regulated industries.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg">
              Book a Demo
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* More Case Studies */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies
              .filter((cs) => cs.slug !== study.slug)
              .slice(0, 3)
              .map((related) => (
                <Link key={related.slug} href={`/case-studies/${related.slug}`} className="block group">
                  <article className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-300">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                      {related.headlineMetric}
                    </div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-3">
                      {related.industry}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{related.briefDescription}</p>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
