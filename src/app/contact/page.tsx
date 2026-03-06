import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - GxP Agents',
  description:
    'Get in touch with the GxP Agents team. Book a demo, ask about our AI solutions for life sciences, or connect with our offices in Santa Barbara and Frankfurt.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Let&apos;s Connect
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to explore how AI agents can transform your life sciences
              operations? Our team is here to help you get started.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes more space */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Card padding="lg" hover={false}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and our team will get back to you
                    within one business day.
                  </p>
                  <ContactForm />
                </Card>
              </ScrollReveal>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Demo Booking CTA */}
              <ScrollReveal delay={0.1}>
                <div className="bg-gradient-to-br from-blue-800 to-indigo-700 rounded-xl p-8 text-white">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Book a Demo</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    See GxP Agents in action. Schedule a personalized demo
                    with our team to explore use cases specific to your domain
                    and challenges.
                  </p>
                  <a
                    href="mailto:info@gxpagents.com?subject=Demo%20Request"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-colors duration-200"
                  >
                    Schedule Demo
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>

              {/* Contact Details */}
              <ScrollReveal delay={0.15}>
                <Card padding="lg" hover={false}>
                  <h3 className="text-lg font-bold text-slate-900 mb-5">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Email
                        </p>
                        <a
                          href="mailto:info@gxpagents.com"
                          className="text-sm text-blue-800 hover:text-blue-900"
                        >
                          info@gxpagents.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Phone
                        </p>
                        <a
                          href="tel:+18055551234"
                          className="text-sm text-blue-800 hover:text-blue-900"
                        >
                          +1 (805) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              {/* Office Locations */}
              <ScrollReveal delay={0.2}>
                <Card padding="lg" hover={false}>
                  <h3 className="text-lg font-bold text-slate-900 mb-5">
                    Office Locations
                  </h3>
                  <div className="space-y-5">
                    {/* Santa Barbara */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Santa Barbara, CA
                        </p>
                        <p className="text-sm text-slate-500">
                          United States Headquarters
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          USDM Life Sciences
                        </p>
                      </div>
                    </div>

                    {/* Frankfurt */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-indigo-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Frankfurt, Germany
                        </p>
                        <p className="text-sm text-slate-500">
                          European Office
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          USDM Life Sciences Europe
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Prefer to explore on your own?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Browse our use case library to discover AI opportunities across all
              8 regulated life sciences domains.
            </p>
            <a
              href="/use-cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white hover:brightness-110 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Explore Use Cases
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
