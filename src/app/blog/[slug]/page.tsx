import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getBlogBySlug } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | GxP Agents Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

const categoryColors: Record<string, string> = {
  'AI Governance': 'bg-violet-100 text-violet-700',
  Quality: 'bg-blue-100 text-blue-700',
  Cybersecurity: 'bg-red-100 text-red-700',
  Regulatory: 'bg-indigo-100 text-indigo-700',
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  // Simple content renderer - splits on ## headings and ### subheadings
  const sections = post.content
    .trim()
    .split(/\n(?=##\s)/)
    .filter(Boolean);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <article className="pt-32 pb-24">
        <header className="px-6 pb-12">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
              >
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Blog
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[post.category] || 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-sm text-slate-400">{post.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 pb-8 border-b border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Gx</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {post.author}
                  </p>
                  <p className="text-xs text-slate-500">
                    {post.authorRole} · {post.date}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </header>

        {/* Article Body */}
        <div className="px-6">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, index) => {
              const lines = section.trim().split('\n');
              const elements: JSX.Element[] = [];

              let currentParagraph: string[] = [];

              const flushParagraph = () => {
                if (currentParagraph.length > 0) {
                  const text = currentParagraph.join(' ');
                  elements.push(
                    <p
                      key={`p-${index}-${elements.length}`}
                      className="text-lg text-slate-700 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{
                        __html: text
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                      }}
                    />
                  );
                  currentParagraph = [];
                }
              };

              lines.forEach((line, lineIndex) => {
                const trimmed = line.trim();

                if (trimmed.startsWith('## ')) {
                  flushParagraph();
                  elements.push(
                    <h2
                      key={`h2-${index}-${lineIndex}`}
                      className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6"
                    >
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                } else if (trimmed.startsWith('### ')) {
                  flushParagraph();
                  elements.push(
                    <h3
                      key={`h3-${index}-${lineIndex}`}
                      className="text-xl font-bold text-slate-900 mt-8 mb-4"
                    >
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                } else if (trimmed.startsWith('- ')) {
                  flushParagraph();
                  elements.push(
                    <li
                      key={`li-${index}-${lineIndex}`}
                      className="flex items-start gap-3 text-lg text-slate-700 mb-3 ml-4"
                      dangerouslySetInnerHTML={{
                        __html:
                          '<span class="text-blue-500 mt-2 block w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span><span>' +
                          trimmed
                            .replace('- ', '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>') +
                          '</span>',
                      }}
                    />
                  );
                } else if (trimmed === '') {
                  flushParagraph();
                } else {
                  currentParagraph.push(trimmed);
                }
              });

              flushParagraph();

              return (
                <ScrollReveal key={index} delay={0}>
                  <div>{elements}</div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="px-6 mt-12">
          <div className="max-w-3xl mx-auto pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block group"
                >
                  <article className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                        categoryColors[related.category] || 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {related.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              See GxP Agents in Action
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how AI agents purpose-built for life sciences can
              transform your {post.category.toLowerCase()} workflows.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
            >
              Book a Demo
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
