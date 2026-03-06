import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About - GxP Agents',
  description:
    'Learn about GxP Agents, our mission to amplify human expertise in regulated environments, and our strategic partnership with USDM Life Sciences.',
};

const team = [
  { name: 'John Petrakis', role: 'Chief AI Officer' },
  { name: 'David Blewitt', role: 'VP Cloud Compliance' },
  { name: 'Jennell Botero', role: 'Principal Consultant' },
  { name: 'Hovsep Kirikain', role: 'VP Strategy and Operations' },
  { name: 'Mark Ohrvall', role: 'VP Delivery Operations' },
  { name: 'Lisa Om', role: 'VP Marketing & Communications' },
  { name: 'Brian Rankin', role: 'Head of Cybersecurity Services' },
  { name: 'Brittany Walker', role: 'Principal Consultant' },
];

const decisionFramework = [
  {
    strategy: 'Buy',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-700',
    borderColor: 'border-t-blue-500',
    description:
      'When speed, regulatory alignment, and standardization are paramount. Pre-built solutions offer proven compliance frameworks, faster time to value, and reduced implementation risk for standard industry workflows.',
    bestFor: [
      'Standardized regulatory workflows',
      'Rapid deployment requirements',
      'Proven compliance frameworks needed',
      'Lower total cost of ownership',
    ],
  },
  {
    strategy: 'Build',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.112a.5.5 0 01-.186-.434l.012-.048a10 10 0 0117.276 0l.012.048a.5.5 0 01-.186.434l-5.384 3.112a2.25 2.25 0 01-2.166 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.196 21H6.804a2.25 2.25 0 01-2.2-1.77L3.088 10.32l8.912 5.15 8.912-5.15-1.516 8.91a2.25 2.25 0 01-2.2 1.77z" />
      </svg>
    ),
    color: 'bg-violet-50 text-violet-700',
    borderColor: 'border-t-violet-500',
    description:
      'When the process is a source of competitive differentiation. Custom-built solutions allow for proprietary logic, unique data models, and tailored workflows that become strategic assets.',
    bestFor: [
      'Proprietary processes and IP',
      'Unique competitive advantage',
      'Highly specialized data models',
      'Full control over architecture',
    ],
  },
  {
    strategy: 'Augment',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    color: 'bg-emerald-50 text-emerald-700',
    borderColor: 'border-t-emerald-500',
    description:
      'When existing platforms provide foundational AI capabilities that can be extended. Leverage platform investments with targeted enhancements to fill specific gaps and accelerate AI adoption.',
    bestFor: [
      'Existing platform investments',
      'Incremental AI enhancement',
      'Extension of current capabilities',
      'Balanced cost and customization',
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              A USDM Life Sciences Partnership
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About GxP Agents
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming how life sciences organizations leverage AI across
              regulated workflows -- from quality and regulatory to clinical
              development and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-2xl font-medium text-slate-700 leading-relaxed mb-6">
                  We believe AI should amplify human expertise in regulated
                  environments, not replace it.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  GxP Agents brings purpose-built AI to life sciences, designed
                  from the ground up for the unique challenges of regulated
                  industries. Every agent we build operates within a framework of
                  human oversight, regulatory alignment, and operational
                  transparency.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our three-tier maturity model -- assistive, generative, and
                  predictive -- ensures organizations can adopt AI at the pace
                  that suits their readiness, culture, and regulatory
                  requirements.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="space-y-6">
                    {[
                      {
                        label: 'Human-in-the-Loop',
                        text: 'AI augments decisions, humans remain accountable',
                      },
                      {
                        label: 'Regulatory First',
                        text: 'Built within GxP, 21 CFR Part 11, and ICH frameworks',
                      },
                      {
                        label: 'Domain Expertise',
                        text: 'Deep knowledge across all 8 regulated domains',
                      },
                      {
                        label: 'Progressive Maturity',
                        text: 'From assistive automation to predictive intelligence',
                      },
                    ].map((principle) => (
                      <div key={principle.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {principle.label}
                          </h4>
                          <p className="text-sm text-slate-600">{principle.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -z-10 -top-3 -right-3 w-full h-full rounded-2xl bg-blue-100/40" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USDM Partnership Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                USDM Life Sciences Partnership
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                GxP Agents is born from a strategic collaboration with USDM Life
                Sciences, a trusted leader in regulated industry compliance and
                digital transformation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left" delay={0.1}>
              <Card padding="lg" hover={false}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">U</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      USDM Life Sciences
                    </h3>
                    <p className="text-sm text-slate-500">
                      Trusted Compliance Partner
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  USDM Life Sciences brings decades of hands-on experience
                  across GxP compliance, cloud validation, data integrity, and
                  digital transformation in the life sciences industry. Their
                  deep domain expertise ensures every AI agent is grounded in
                  real operational challenges and regulatory requirements.
                </p>
                <div className="space-y-3">
                  {[
                    'GxP Compliance & Validation',
                    'Cloud & Digital Transformation',
                    'Data Integrity & 21 CFR Part 11',
                    'CSV/CSA Advisory Services',
                    'Regulatory Intelligence & Strategy',
                    'AI Governance Frameworks',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <Card padding="lg" hover={false}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Why This Partnership Matters
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Regulatory Credibility',
                      text: 'Solutions designed by practitioners who have navigated FDA, EMA, and global regulatory landscapes firsthand.',
                    },
                    {
                      title: 'Operational Realism',
                      text: 'AI agents built for the workflows and bottlenecks that exist in actual life sciences operations, not theoretical scenarios.',
                    },
                    {
                      title: 'Validation Expertise',
                      text: 'Every solution is designed with validation, qualification, and audit-readiness built in from day one.',
                    },
                    {
                      title: 'Industry Trust',
                      text: 'USDM has served hundreds of life sciences companies, from emerging biotechs to global pharma enterprises.',
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Contributors
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The leadership and domain experts behind the GxP Agents white
                paper and platform vision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.06}>
                <Card className="h-full text-center" padding="lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buy vs Build vs Augment Decision Framework */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Buy vs. Build vs. Augment
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choosing the right AI adoption strategy depends on your
                organization&apos;s unique needs, existing infrastructure, and
                competitive priorities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {decisionFramework.map((item, index) => (
              <ScrollReveal key={item.strategy} delay={index * 0.1}>
                <Card
                  className={`h-full border-t-4 ${item.borderColor}`}
                  padding="lg"
                  hover={false}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.strategy}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Best For
                    </p>
                    <ul className="space-y-2">
                      {item.bestFor.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
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
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you are just starting your AI journey or looking to scale
              intelligent automation across your organization, we are here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Button>
              <Button
                href="/use-cases"
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/10 hover:border-white"
              >
                Explore Use Cases
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
