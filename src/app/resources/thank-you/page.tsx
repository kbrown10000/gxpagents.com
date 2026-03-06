'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Suspense } from 'react';

const resources = {
  '21-cfr-part-11-ai-framework': {
    title: 'The Complete Guide to 21 CFR Part 11 Compliance for AI Systems',
  },
  'gamp-5-ai-validation-guide': {
    title: 'GAMP 5 Meets AI: A Practical Validation Approach',
  },
  'vendor-risk-assessment-checklist': {
    title: 'GxP-Aware Vendor Cybersecurity Risk Assessment Checklist',
  },
};

const allResources = [
  {
    slug: '21-cfr-part-11-ai-framework',
    title: 'The Complete Guide to 21 CFR Part 11 Compliance for AI Systems',
    description: 'Practical framework for implementing AI tools within FDA-regulated environments.',
  },
  {
    slug: 'gamp-5-ai-validation-guide',
    title: 'GAMP 5 Meets AI: A Practical Validation Approach',
    description: 'Bridge the gap between traditional GAMP 5 validation and modern AI/ML systems.',
  },
  {
    slug: 'vendor-risk-assessment-checklist',
    title: 'GxP-Aware Vendor Cybersecurity Risk Assessment Checklist',
    description: 'A structured 50-point checklist for evaluating vendor cybersecurity posture.',
  },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const assetSlug = searchParams.get('asset') || '';
  const requestedResource = resources[assetSlug as keyof typeof resources];

  // Get 2 other resources for cross-sell
  const otherResources = allResources.filter(r => r.slug !== assetSlug).slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              Your download is on its way.
            </p>

            {requestedResource && (
              <p className="text-lg text-slate-500 mb-8">
                We&apos;ve sent <strong className="text-slate-700">{requestedResource.title}</strong> to your email.
              </p>
            )}

            {/* Email Icon with instruction */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-blue-50 text-blue-900 mb-8">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="font-medium">Check your email for the download link</span>
            </div>

            <p className="text-sm text-slate-500">
              Don&apos;t see it? Check your spam folder or contact us at{' '}
              <a href="mailto:support@gxpagents.com" className="text-blue-800 hover:underline">
                support@gxpagents.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* You Might Also Like */}
      {otherResources.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                You Might Also Like
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherResources.map((resource, idx) => (
                <ScrollReveal key={resource.slug} delay={idx * 100}>
                  <Card className="h-full flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4 flex-grow">
                      {resource.description}
                    </p>
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
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
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-indigo-700 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our team about implementing AI agents in your regulated environment.
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

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
