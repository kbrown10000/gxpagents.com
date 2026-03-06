'use client';

export function TrustBar() {
  return (
    <section className="py-8 border-y border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted across regulated industries
          </p>
          <div className="flex items-center gap-8 md:gap-10">
            {[
              { label: 'Top 10 Pharma', sub: 'Companies' },
              { label: 'Global Biotech', sub: 'Leaders' },
              { label: 'Medical Device', sub: 'Innovators' },
              { label: 'Diagnostics', sub: 'Companies' },
              { label: 'CRO / CDMO', sub: 'Partners' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center opacity-50 hover:opacity-80 transition-opacity"
              >
                <p className="text-sm font-bold text-slate-600 whitespace-nowrap">
                  {item.label}
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
