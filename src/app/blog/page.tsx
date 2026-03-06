import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog - GxP Agents | AI Insights for Life Sciences',
  description:
    'Insights, analysis, and practical guidance on AI agents, governance, and automation in regulated life sciences environments.',
};

const categoryColors: Record<string, string> = {
  'AI Governance': 'bg-violet-100 text-violet-700',
  Quality: 'bg-blue-100 text-blue-700',
  Cybersecurity: 'bg-red-100 text-red-700',
  Regulatory: 'bg-indigo-100 text-indigo-700',
  Clinical: 'bg-teal-100 text-teal-700',
  Manufacturing: 'bg-amber-100 text-amber-700',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Insights & Analysis
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Practical perspectives on AI governance, intelligent automation,
              and regulatory strategy for life sciences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="block group"
            >
              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 transition-shadow hover:shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColors[featured.category] || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-sm text-slate-400">{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-400">{featured.date}</span>
                    <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
                {/* Decorative grid */}
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
              </article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          categoryColors[post.category] || 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                        Read →
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-slate-600 mb-8">
              Get the latest insights on AI governance, regulatory strategy, and
              intelligent automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
