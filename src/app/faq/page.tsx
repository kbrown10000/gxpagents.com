import { Metadata } from 'next';
import { FAQAccordion } from './FAQAccordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - GxP Agents',
  description:
    'Get answers to common questions about GxP Agents - AI governance, regulatory compliance, engagement models, security, pricing, and technical integration for life sciences.',
};

const faqData = [
  {
    category: 'About GxP Agents',
    questions: [
      {
        question: 'What are GxP Agents?',
        answer:
          'GxP Agents are AI-powered autonomous systems designed specifically for regulated life sciences workflows across Quality, Regulatory Affairs, Clinical Development, Manufacturing, Safety, Medical Affairs, Cybersecurity, and Corporate functions. Unlike general-purpose AI tools, GxP Agents are built with compliance, auditability, and validation at their core.',
      },
      {
        question: 'Who is GxP Agents for?',
        answer:
          'GxP Agents is built for pharmaceutical, biotech, medical device, and CRO organizations that need to accelerate their operations while maintaining regulatory compliance. Our primary users include Quality Assurance teams, Regulatory Affairs professionals, Clinical Operations managers, Manufacturing leads, Safety officers, and IT/Cybersecurity teams.',
      },
      {
        question: 'How does GxP Agents work?',
        answer:
          'GxP Agents operates as a multi-agent orchestration platform. Each agent is specialized for a specific GxP domain and trained on regulatory guidelines (FDA, EMA, ICH). Agents can work autonomously or collaborate with human experts, maintaining complete audit trails for every action, decision, and data transformation.',
      },
    ],
  },
  {
    category: 'AI Governance & Compliance',
    questions: [
      {
        question: 'Is GxP Agents compliant with 21 CFR Part 11?',
        answer:
          'Yes. GxP Agents is designed with 21 CFR Part 11 compliance from the ground up, including electronic signatures, audit trails, system validation documentation, access controls, and data integrity safeguards. Every agent action is logged with timestamped, tamper-proof records.',
      },
      {
        question: 'How does GxP Agents address the EU AI Act?',
        answer:
          "GxP Agents is architected to meet the EU AI Act's requirements for high-risk AI systems. This includes human oversight mechanisms, transparency in decision-making, comprehensive risk management protocols, data governance controls, and detailed technical documentation for regulatory review.",
      },
      {
        question: 'What validation documentation do you provide?',
        answer:
          'We provide complete Computer System Validation (CSV) packages including Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) protocols, test scripts, traceability matrices, validation reports, and ongoing change control documentation to support GxP compliance.',
      },
      {
        question: 'How do you ensure AI explainability for regulatory submissions?',
        answer:
          'Every GxP Agent decision includes a detailed reasoning chain that can be exported for regulatory review. For critical operations like safety signal detection or quality deviation analysis, agents provide source citations, confidence scores, and alternative interpretations—enabling human review and regulatory transparency.',
      },
    ],
  },
  {
    category: 'Engagement & Pricing',
    questions: [
      {
        question: 'How do I get started with GxP Agents?',
        answer:
          'Start with a discovery call where we discuss your specific use cases and compliance requirements. We then conduct a pilot deployment (typically 4-8 weeks) in a single domain to demonstrate value. After validation, we scale across additional functions with phased rollouts tailored to your organization.',
      },
      {
        question: 'What is the typical implementation timeline?',
        answer:
          'Pilot deployments take 4-8 weeks from kickoff to production. Full enterprise rollouts across multiple domains typically require 3-6 months, including validation, training, and integration with existing systems (QMS, CTMS, ERP, LIMS, etc.). Timeline varies based on scope and regulatory requirements.',
      },
      {
        question: 'How is GxP Agents priced?',
        answer:
          "Pricing is based on a SaaS subscription model with tiered packages by domain coverage, user count, and transaction volume. We offer flexible pricing for startups, mid-size biotech, and global pharma. Contact us for a custom quote based on your organization's needs.",
      },
    ],
  },
  {
    category: 'Security & Data',
    questions: [
      {
        question: 'Where is my data stored and how is it protected?',
        answer:
          'Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We support both cloud deployment (AWS/Azure in your preferred region) and on-premises installations. All data handling complies with GDPR, HIPAA, and industry best practices. Data residency options available for EU and other jurisdictions.',
      },
      {
        question: 'What audit trails and compliance reporting do you provide?',
        answer:
          'GxP Agents maintains immutable audit logs for every system interaction—user actions, agent decisions, data changes, and system configurations. Logs include WHO (user/agent), WHAT (action), WHEN (timestamp), WHERE (system location), and WHY (business justification). Audit reports can be exported in PDF, CSV, or directly integrated with your QMS.',
      },
      {
        question: 'Are you SOC 2 certified?',
        answer:
          'Yes. GxP Agents has achieved SOC 2 Type II certification and undergoes annual third-party audits. We also maintain ISO 27001 certification and can provide detailed security documentation for vendor assessment processes.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'How does GxP Agents integrate with our existing systems?',
        answer:
          'GxP Agents offers pre-built connectors for major life sciences platforms including Veeva Vault, TrackWise, Medidata, Oracle Argus, SAP, and others. We also provide REST APIs and can build custom integrations for proprietary systems. All integrations maintain audit trails and validation status.',
      },
      {
        question: 'Can we customize agents for our specific SOPs and workflows?',
        answer:
          "Absolutely. GxP Agents can be trained on your company's SOPs, internal policies, and historical decisions. Customization is done through a validated configuration process that maintains system integrity and compliance. All customizations are version-controlled and documented.",
      },
      {
        question: 'What happens if an agent makes an incorrect decision?',
        answer:
          'Agents operate with configurable confidence thresholds. Low-confidence decisions are automatically escalated to human reviewers. All agent recommendations include supporting evidence and can be overridden by authorized users. Overrides are logged and can trigger agent retraining to improve future accuracy.',
      },
    ],
  },
];

// Generate JSON-LD structured data for Google
const generateFAQSchema = () => {
  const allQuestions = faqData.flatMap((category) =>
    category.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };
};

export default function FAQPage() {
  const schema = generateFAQSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-sm font-medium mb-6">
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
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to know
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about GxP Agents, AI governance,
              compliance, security, and implementation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqData.map((category, idx) => (
            <ScrollReveal key={category.category} delay={idx * 0.1}>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  {category.category}
                </h2>
                <FAQAccordion questions={category.questions} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out and we&apos;ll get back to you
              within one business day.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact Us
              <svg
                className="w-5 h-5"
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
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
