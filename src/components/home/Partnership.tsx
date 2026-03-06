'use client';

import { ScrollReveal } from '../ui/ScrollReveal';
import { Card } from '../ui/Card';

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84 50.717 50.717 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Domain Expertise',
    description: 'Deep knowledge across all 8 regulated domains',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Regulatory Alignment',
    description: 'Built within GxP, 21 CFR Part 11, and ICH frameworks',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Proven Methodology',
    description: 'Architecture-led, platform-first approach',
  },
];

export function Partnership() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                Strategic Partnership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Powered by{' '}
                <span className="gradient-text">
                  USDM Life Sciences
                </span>{' '}
                Expertise
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                USDM Life Sciences brings decades of regulated industry
                expertise. Together with GxP Agents, we deliver AI solutions
                purpose-built for life sciences — grounded in real operational
                challenges and regulatory requirements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      USDM Life Sciences
                    </h3>
                    <p className="text-sm text-slate-500">
                      Trusted Compliance Partner
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'GxP Compliance & Validation',
                    'Cloud & Digital Transformation',
                    'Data Integrity & 21 CFR Part 11',
                    'CSV/CSA Advisory Services',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500 shrink-0"
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
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-blue-100/50" />
            </div>
          </ScrollReveal>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <Card className="h-full text-center" padding="lg">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
