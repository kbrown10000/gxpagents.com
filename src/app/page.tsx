import { Hero } from '@/components/hero/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { ProblemStatement } from '@/components/home/ProblemStatement';
import { DomainGrid } from '@/components/home/DomainGrid';
import { HowItWorks } from '@/components/home/HowItWorks';
import { MetricsBanner } from '@/components/home/MetricsBanner';
import { Partnership } from '@/components/home/Partnership';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <DomainGrid />
      <HowItWorks />
      <MetricsBanner />
      <Partnership />

      {/* CTA Footer Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how AI agents purpose-built for regulated life sciences
              can accelerate quality, reduce risk, and unlock operational
              efficiency across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl"
              >
                Book a Demo
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
