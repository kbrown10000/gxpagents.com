'use client';

import { Domain } from '@/data/domains';
import { ScrollReveal } from '../ui/ScrollReveal';
import { DomainIcon } from '../ui/DomainIcon';
import { useEffect, useRef, useState } from 'react';

const colorClasses: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  blue: {
    bg: 'from-blue-50 via-blue-50/50 to-white',
    text: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700 border-blue-200',
    border: 'border-blue-200',
  },
  indigo: {
    bg: 'from-indigo-50 via-indigo-50/50 to-white',
    text: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    border: 'border-indigo-200',
  },
  violet: {
    bg: 'from-violet-50 via-violet-50/50 to-white',
    text: 'text-violet-600',
    badge: 'bg-violet-100 text-violet-700 border-violet-200',
    border: 'border-violet-200',
  },
  amber: {
    bg: 'from-amber-50 via-amber-50/50 to-white',
    text: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700 border-amber-200',
    border: 'border-amber-200',
  },
  rose: {
    bg: 'from-rose-50 via-rose-50/50 to-white',
    text: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700 border-rose-200',
    border: 'border-rose-200',
  },
  teal: {
    bg: 'from-teal-50 via-teal-50/50 to-white',
    text: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700 border-teal-200',
    border: 'border-teal-200',
  },
  red: {
    bg: 'from-red-50 via-red-50/50 to-white',
    text: 'text-red-600',
    badge: 'bg-red-100 text-red-700 border-red-200',
    border: 'border-red-200',
  },
  slate: {
    bg: 'from-slate-50 via-slate-50/50 to-white',
    text: 'text-slate-600',
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    border: 'border-slate-200',
  },
  emerald: {
    bg: 'from-emerald-50 via-emerald-50/50 to-white',
    text: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    border: 'border-emerald-200',
  },
};

const domainImages: Record<string, string> = {
  quality: '/images/domains/quality.jpg',
  regulatory: '/images/domains/regulatory.jpg',
  clinical: '/images/domains/clinical.jpg',
  manufacturing: '/images/domains/manufacturing.jpg',
  safety: '/images/domains/safety.jpg',
  'medical-affairs': '/images/domains/medical-affairs.jpg',
  cybersecurity: '/images/domains/cybersecurity.jpg',
  corporate: '/images/domains/corporate.jpg',
};

const domainVideos: Record<string, string> = {
  quality: '/videos/domains/quality.mp4',
  regulatory: '/videos/domains/regulatory.mp4',
  clinical: '/videos/domains/clinical.mp4',
  manufacturing: '/videos/domains/manufacturing.mp4',
  safety: '/videos/domains/safety.mp4',
  'medical-affairs': '/videos/domains/medical-affairs.mp4',
  cybersecurity: '/videos/domains/cybersecurity.mp4',
  corporate: '/videos/domains/corporate.mp4',
};

interface DomainHeroProps {
  domain: Domain;
}

export function DomainHero({ domain }: DomainHeroProps) {
  const colors = colorClasses[domain.color] || colorClasses.blue;
  const heroImage = domainImages[domain.slug];
  const heroVideo = domainVideos[domain.slug];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('canplaythrough', () => setVideoLoaded(true));
    video.play().catch(() => {});
  }, []);

  return (
    <section className={`relative bg-gradient-to-b ${colors.bg} pt-32 pb-20 overflow-hidden`}>
      {/* Veo 3 abstract video background */}
      {heroVideo && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" />
        </div>
      )}
      {/* Fallback static image for no-JS / before video loads */}
      {heroImage && !videoLoaded && (
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
      )}
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Icon */}
          <ScrollReveal delay={0}>
            <div
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white border ${colors.border} shadow-sm mb-8 ${colors.text}`}
            >
              <DomainIcon slug={domain.slug} className="w-7 h-7" />
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              {domain.title}
            </h1>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
              {domain.overview}
            </p>
          </ScrollReveal>

          {/* Key Shifts */}
          {domain.shifts && domain.shifts.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Key Shifts
                </h3>
                <div className="flex flex-wrap gap-3">
                  {domain.shifts.map((shift, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${colors.badge} transition-shadow hover:shadow-md`}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0 opacity-60"
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
                      {shift}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
