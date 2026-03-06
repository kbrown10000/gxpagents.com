import { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Resources & Frameworks - GxP Agents',
  description:
    'Download free guides, frameworks, and checklists for AI compliance in regulated life sciences. 21 CFR Part 11, GAMP 5 validation, and cybersecurity resources.',
  keywords: ['21 CFR Part 11', 'GAMP 5', 'AI validation', 'GxP compliance', 'vendor risk assessment', 'life sciences frameworks'],
};

const resources = [
  {
    slug: '21-cfr-part-11-ai-framework',
    title: 'The Complete Guide to 21 CFR Part 11 Compliance for AI Systems',
    description: 'A practical framework for implementing AI tools within FDA-regulated environments. Learn how to validate AI systems, maintain audit trails, and ensure compliance with electronic records requirements.',
    format: 'PDF Guide',
    pages: 14,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    slug: 'gamp-5-ai-validation-guide',
    title: 'GAMP 5 Meets AI: A Practical Validation Approach',
    description: 'Bridge the gap between traditional GAMP 5 validation and modern AI/ML systems. Includes decision trees, risk assessments, and validation templates adapted for intelligent systems.',
    format: 'PDF Guide',
    pages: 18,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    slug: 'vendor-risk-assessment-checklist',
    title: 'GxP-Aware Vendor Cybersecurity Risk Assessment Checklist',
    description: 'A structured 50-point checklist for evaluating vendor cybersecurity posture through a GxP lens. Covers data integrity, access controls, incident response, and supply chain security.',
    format: 'PDF Checklist',
    pages: 6,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Free Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Resources & Frameworks
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Download our expert guides, frameworks, and checklists to accelerate your AI compliance journey in regulated life sciences environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <ScrollReveal key={resource.slug} delay={idx * 100}>
                <Card className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-800 to-indigo-700 flex items-center justify-center text-white mb-4">
                    {resource.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 flex-grow leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-medium">
                      {resource.format}
                    </span>
                    <span>{resource.pages} pages</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
                  >
                    Download Free
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-indigo-700 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Hands-On Implementation Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team can help you implement AI systems that meet FDA and GxP requirements from day one.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-blue-800 font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
