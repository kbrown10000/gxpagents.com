import Link from 'next/link';

const domainLinks = [
  { name: 'Quality', slug: 'quality' },
  { name: 'Regulatory Affairs', slug: 'regulatory' },
  { name: 'Clinical Development', slug: 'clinical' },
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Safety & Pharmacovigilance', slug: 'safety' },
  { name: 'Medical Affairs', slug: 'medical-affairs' },
  { name: 'Cybersecurity & TPRM', slug: 'cybersecurity' },
  { name: 'Corporate Functions', slug: 'corporate' },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Use Cases', href: '/use-cases' },
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo-mark.png"
                alt="GxP Agents"
                className="h-9 w-9 rounded-lg object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-white">
                GxP Agents
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              AI-powered agents transforming life sciences workflows across
              Quality, Regulatory, Clinical, Manufacturing, and more.
            </p>
            <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Partnership
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                A USDM Life Sciences Partnership
              </p>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {domainLinks.map((domain) => (
                <li key={domain.slug}>
                  <Link
                    href={`/domains/${domain.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {domain.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Office Locations */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Offices
              </h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-slate-300">Santa Barbara, CA</p>
                  <p className="text-xs text-slate-500">United States</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Frankfurt, Germany</p>
                  <p className="text-xs text-slate-500">Europe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} GxP Agents. All rights reserved. A USDM Life Sciences Partnership.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
