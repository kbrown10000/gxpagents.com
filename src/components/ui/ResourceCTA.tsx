import Link from 'next/link';
import { Card } from './Card';

interface ResourceCTAProps {
  resourceSlug: string;
  resourceTitle: string;
}

export function ResourceCTA({ resourceSlug, resourceTitle }: ResourceCTAProps) {
  return (
    <Card className="my-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-indigo-700 flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📄</span>
            <span className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
              Free Download
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
            {resourceTitle}
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Get the complete guide with actionable frameworks, templates, and best practices.
          </p>
          <Link
            href={`/resources/${resourceSlug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 transition-all"
          >
            Download the Full Guide
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
}
