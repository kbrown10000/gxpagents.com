import { HeroCanvas } from './HeroCanvas';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <HeroCanvas />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          A USDM Life Sciences Partnership
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          AI Agents for{' '}
          <span className="gradient-text">Life Sciences</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Purpose-built intelligent automation across 8 regulated domains. From
          assistive AI to predictive intelligence — transforming Quality,
          Regulatory, Clinical, and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#domains" size="lg">
            Explore Domains
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
