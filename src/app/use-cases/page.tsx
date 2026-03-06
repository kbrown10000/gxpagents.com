import { Metadata } from 'next';
import { UseCaseExplorer } from '@/components/explorer/UseCaseExplorer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Use Case Explorer - GxP Agents',
  description:
    'Explore 40+ AI use cases across 8 regulated life sciences domains. Filter by domain and maturity level to find the right solution for your organization.',
};

export default function UseCasesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              40+ AI Use Cases
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Use Case Explorer
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore AI use cases across 8 regulated life sciences domains.
              Filter by domain and maturity level to find the right solution for
              your organization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Explorer Component */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <UseCaseExplorer />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Don&apos;t see your use case?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team can help identify and prioritize AI opportunities specific
              to your operational challenges and regulatory environment.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Talk to an Expert
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
