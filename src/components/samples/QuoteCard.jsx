import { useState } from 'react';

const QuoteCard = ({ content }) => {
  const [active, setActive] = useState(0);
  const { quotes } = content;
  const quote = quotes[active];

  return (
    <div>
      {/* Quote card */}
      <div className="aspect-square bg-hampton-primary rounded-2xl relative overflow-hidden flex flex-col">
        {/* Decorative quote mark */}
        <div className="absolute top-6 left-6 text-hampton-secondary/20 text-[120px] font-headline leading-none select-none">
          &ldquo;
        </div>

        {/* Quote content */}
        <div className="flex-1 flex flex-col items-center justify-center px-10 relative z-10">
          <p className="font-headline text-xl md:text-2xl text-white text-center leading-relaxed italic">
            &ldquo;{quote.text}&rdquo;
          </p>

          <div className="mt-6 text-center">
            <p className="font-body text-hampton-secondary font-semibold text-sm">
              {quote.attribution}
            </p>
            <p className="font-body text-white/40 text-xs mt-0.5">
              {quote.context} &middot; Net Worth: {quote.netWorth}
            </p>
          </div>
        </div>

        {/* Hampton branding bar */}
        <div className="px-6 py-3 bg-hampton-primary/50 border-t border-white/10 flex items-center justify-between">
          <span className="text-hampton-secondary font-headline text-sm font-bold tracking-wider">HAMPTON</span>
          <span className="text-white/30 font-body text-xs">Moneywise</span>
        </div>
      </div>

      {/* Quote selector */}
      <div className="flex justify-center gap-2 mt-4">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-colors ${
              i === active
                ? 'bg-hampton-primary text-white'
                : 'bg-white text-hampton-text/50 border border-gray-200 hover:border-hampton-secondary'
            }`}
          >
            Quote {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuoteCard;
