import { Metadata } from 'next';
import { domains, getDomainBySlug } from '@/data/domains';
import { notFound } from 'next/navigation';
import { DomainHero } from '@/components/domains/DomainHero';
import { RegulatoryContext } from '@/components/domains/RegulatoryContext';
import { UseCaseCards } from '@/components/domains/UseCaseCards';
import { AgentDiagram } from '@/components/diagrams/AgentDiagram';
import { OutcomesSection } from '@/components/domains/OutcomesSection';
import { GovernanceVisual } from '@/components/domains/GovernanceVisual';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function generateStaticParams() {
  return domains.map((domain) => ({
    slug: domain.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const domain = getDomainBySlug(params.slug);
  if (!domain) return {};

  return {
    title: `${domain.title} - AI Agents | GxP Agents`,
    description: domain.overview.slice(0, 160),
  };
}

export default function DomainPage({ params }: { params: { slug: string } }) {
  const domain = getDomainBySlug(params.slug);
  if (!domain) notFound();

  return (
    <>
      <DomainHero domain={domain} />

      {/* Regulatory Context */}
      {domain.regulatoryContext.length > 0 && (
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Regulatory Context
              </h2>
            </ScrollReveal>
            <RegulatoryContext items={domain.regulatoryContext} color={domain.color} />
          </div>
        </section>
      )}

      {/* Use Cases */}
      {domain.useCases.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Use Cases</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                Explore AI-powered use cases transforming {domain.title.toLowerCase()} operations.
              </p>
            </ScrollReveal>
            <UseCaseCards useCases={domain.useCases} color={domain.color} />
          </div>
        </section>
      )}

      {/* Agent Architecture Deep Dive */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Agent Architecture: {domain.deepDive.title}
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-3xl leading-relaxed">
              {domain.deepDive.overview}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <AgentDiagram
              agents={domain.deepDive.agents}
              dataInputs={domain.deepDive.dataInputs}
              governance={domain.deepDive.governance}
              color={domain.color}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Expected Outcomes */}
      {domain.outcomes.length > 0 && (
        <OutcomesSection outcomes={domain.outcomes} color={domain.color} />
      )}

      {/* Human-in-the-Loop Governance */}
      {domain.deepDive.governance.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Human-in-the-Loop Governance
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                Every AI agent operates under strict governance controls with
                human oversight at critical decision points.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <GovernanceVisual governance={domain.deepDive.governance} color={domain.color} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to explore {domain.title}?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              See how AI agents can transform your {domain.title.toLowerCase()} workflows
              with purpose-built automation and intelligent oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
              >
                Book a Consultation
              </Button>
              <Button
                href="/use-cases"
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/10"
              >
                View All Use Cases
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
