import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';

type ResourceData = {
  slug: string;
  title: string;
  description: string;
  pages: number;
  format: string;
  pardotUrl: string;
  tableOfContents: string[];
  whatYouWillLearn: string[];
};

const resources: Record<string, ResourceData> = {
  '21-cfr-part-11-ai-framework': {
    slug: '21-cfr-part-11-ai-framework',
    title: 'The Complete Guide to 21 CFR Part 11 Compliance for AI Systems',
    description: 'A practical framework for implementing AI tools within FDA-regulated environments. Covers electronic records, electronic signatures, audit trails, and validation strategies specific to AI/ML systems.',
    pages: 14,
    format: 'PDF Guide',
    pardotUrl: 'https://gxp-experts.usdm.com/l/262752/2026-03-06/7sgvfv',
    tableOfContents: [
      'Introduction to 21 CFR Part 11 for AI Systems',
      'Electronic Records in AI-Generated Decision Making',
      'Electronic Signatures for AI-Assisted Workflows',
      'Audit Trail Requirements for Machine Learning Models',
      'System Validation Strategies for AI/ML',
      'Risk-Based Approach to AI System Classification',
      'Implementation Roadmap & Phase Gates',
    ],
    whatYouWillLearn: [
      'How 21 CFR Part 11 applies to AI-generated records and decisions',
      'Validation strategies for machine learning models in GxP environments',
      'Audit trail requirements for AI-assisted workflows',
      'Risk-based approach to AI system classification',
      'Implementation roadmap with phase gates and acceptance criteria',
    ],
  },
  'gamp-5-ai-validation-guide': {
    slug: 'gamp-5-ai-validation-guide',
    title: 'GAMP 5 Meets AI: A Practical Validation Approach for Intelligent Systems',
    description: 'Bridge the gap between traditional GAMP 5 validation categories and modern AI/ML systems. Includes decision trees, risk assessments, and validation templates adapted for AI.',
    pages: 18,
    format: 'PDF Guide',
    pardotUrl: 'https://gxp-experts.usdm.com/l/262752/2026-03-06/7sgvfy',
    tableOfContents: [
      'GAMP 5 Categories and AI System Types',
      'Risk-Based Validation Framework for AI',
      'Software Category Mapping for ML Models',
      'Testing Strategies for Non-Deterministic Outputs',
      'Change Control for Continuously Learning Systems',
      'Validation Plan Template for AI Systems',
      'Risk Assessment & Test Protocol Examples',
    ],
    whatYouWillLearn: [
      'How GAMP 5 categories map to AI system types',
      'Risk-based validation for machine learning models',
      'Testing strategies for non-deterministic AI outputs',
      'Change control for continuously learning systems',
      'Templates: validation plan, risk assessment, test protocol',
    ],
  },
  'vendor-risk-assessment-checklist': {
    slug: 'vendor-risk-assessment-checklist',
    title: 'GxP-Aware Vendor Cybersecurity Risk Assessment Checklist',
    description: 'A structured 50-point checklist for evaluating vendor cybersecurity posture through a GxP lens. Covers data integrity, access controls, incident response, and supply chain security.',
    pages: 6,
    format: 'PDF Checklist',
    pardotUrl: 'https://gxp-experts.usdm.com/l/262752/2026-03-06/7sgvg2',
    tableOfContents: [
      'Data Integrity Controls (ALCOA+ Principles)',
      'Access Controls & Identity Management',
      'Incident Response & Business Continuity',
      'Supply Chain Security & Third-Party Risk',
      'Compliance & Regulatory Alignment',
      'Annual Reassessment Workflow',
    ],
    whatYouWillLearn: [
      '50 critical security controls mapped to GxP requirements',
      'Red/Yellow/Green scoring framework for vendor risk',
      'Data integrity assessment specific to regulated systems',
      'Incident response evaluation criteria',
      'Annual reassessment workflow',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = resources[params.slug];
  
  if (!resource) {
    return {
      title: 'Resource Not Found - GxP Agents',
    };
  }

  return {
    title: `${resource.title} - GxP Agents`,
    description: resource.description,
  };
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = resources[params.slug];

  if (!resource) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Free {resource.format}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {resource.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              {resource.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Resource Preview */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Card>
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-medium text-sm">
                      {resource.format}
                    </span>
                    <span className="text-slate-600 text-sm">{resource.pages} pages</span>
                  </div>

                  {/* What You'll Learn */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-3">
                      {resource.whatYouWillLearn.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Table of Contents Preview */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      Table of Contents
                    </h2>
                    <ul className="space-y-2">
                      {resource.tableOfContents.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <span className="text-blue-800 font-semibold">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column - Lead Capture Form */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={100}>
                <div className="lg:sticky lg:top-24">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Download Now
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Enter your details to get instant access to this resource.
                    </p>

                    <form method="post" action={resource.pardotUrl} className="space-y-4">
                      {/* First Name */}
                      <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-1">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition-all"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-1">
                          Last Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition-all"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                          Company <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition-all"
                        />
                      </div>

                      {/* Job Title */}
                      <div>
                        <label htmlFor="job_title" className="block text-sm font-medium text-slate-700 mb-1">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="job_title"
                          name="job_title"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 outline-none transition-all"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
                      >
                        Download Now
                      </button>
                    </form>

                    <p className="text-xs text-slate-500 mt-4 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Implement These Frameworks?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team can help you apply these best practices to your AI implementation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
            >
              Book a Demo
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
