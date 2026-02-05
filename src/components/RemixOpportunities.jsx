import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { remixOpportunities, moneyWiseEpisodes } from '../data/mockData';
import { getPotentialColor, getFormatColor } from '../utils/helpers';

const RemixOpportunities = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? remixOpportunities
    : remixOpportunities.filter((opp) => opp.potential === filter);

  const totalUntapped = remixOpportunities.filter((o) => o.status === 'untapped').length;
  const totalPotential = moneyWiseEpisodes.reduce((sum, ep) => sum + ep.remixPotential, 0);
  const totalRemixed = moneyWiseEpisodes.reduce((sum, ep) => sum + ep.remixedCount, 0);

  return (
    <section>
      <SectionHeader
        title="Remix Opportunities"
        subtitle="Untapped content with high distribution potential"
        id="remix"
      />

      {/* Summary bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
          <p className="text-2xl font-bold text-hampton-primary font-body">{totalUntapped}</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Opportunities</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
          <p className="text-2xl font-bold text-hampton-primary font-body">{totalPotential}</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Potential Pieces</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
          <p className="text-2xl font-bold text-hampton-primary font-body">{totalRemixed}</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Currently Remixed</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600 font-body">
            {Math.round(totalPotential / Math.max(totalRemixed, 1))}x
          </p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Multiplier Possible</p>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-6">
        {['all', 'high', 'medium'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-colors ${
              filter === f
                ? 'bg-hampton-primary text-white'
                : 'bg-white text-hampton-text/60 border border-gray-200 hover:border-hampton-secondary'
            }`}
          >
            {f === 'all' ? 'All' : f === 'high' ? 'High Potential' : 'Medium'}
          </button>
        ))}
      </div>

      {/* Opportunity cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((opp) => (
          <div
            key={opp.id}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1">
                <p className="text-xs text-hampton-text/40 font-body mb-1">{opp.source}</p>
                <p className="font-body text-sm font-medium text-hampton-primary leading-snug">
                  {opp.opportunity}
                </p>
              </div>
              <span
                className={`shrink-0 text-xs font-semibold font-body px-2.5 py-1 rounded-full border ${getPotentialColor(opp.potential)}`}
              >
                {opp.potential}
              </span>
            </div>

            <p className="text-sm text-hampton-text/50 font-body italic mb-3">
              &ldquo;{opp.quote}&rdquo;
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-medium font-body px-2.5 py-1 rounded-full ${getFormatColor(opp.format)}`}>
                {opp.format}
              </span>
              <span className="text-xs text-hampton-text/30 font-body">
                {opp.platform}
              </span>
            </div>

            <p className="text-xs text-hampton-text/40 font-body mt-3 leading-relaxed">
              {opp.whyItWorks}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RemixOpportunities;
