'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DomainIcon } from '../ui/DomainIcon';

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

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Domains', href: '#', hasDropdown: true },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDomainsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDomainsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDomainsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo-mark.png"
            alt="GxP Agents"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="text-xl font-bold text-slate-900">
            GxP <span className="gradient-text">Agents</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                  onClick={() => setDomainsOpen(!domainsOpen)}
                >
                  {link.name}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      domainsOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <AnimatePresence>
                  {domainsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-100 bg-white" />
                      <div className="relative">
                        {domainLinks.map((domain) => (
                          <Link
                            key={domain.slug}
                            href={`/domains/${domain.slug}`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                            onClick={() => setDomainsOpen(false)}
                          >
                            <DomainIcon slug={domain.slug} className="w-5 h-5 text-slate-500" />
                            <span className="font-medium">{domain.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              <Link
                href="/"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Domains Accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  onClick={() => setDomainsOpen(!domainsOpen)}
                >
                  <span>Domains</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      domainsOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {domainsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 space-y-1 border-l-2 border-slate-100 pl-4 py-1">
                        {domainLinks.map((domain) => (
                          <Link
                            key={domain.slug}
                            href={`/domains/${domain.slug}`}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                            onClick={() => {
                              setDomainsOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            <DomainIcon slug={domain.slug} className="w-5 h-5 text-slate-500" />
                            <span>{domain.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/use-cases"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link
                href="/about"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
