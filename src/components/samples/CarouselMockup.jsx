import { useState } from 'react';

const slideStyles = {
  'bold-title': 'items-center justify-center text-center',
  'contrast': 'items-center justify-center text-center',
  'highlight': 'items-center justify-center text-center',
  'data': 'items-start justify-center pl-10',
  'quote': 'items-center justify-center text-center px-8',
  'list': 'items-start justify-center pl-10',
  'cta': 'items-center justify-center text-center',
};

const CarouselMockup = ({ content }) => {
  const [current, setCurrent] = useState(0);
  const { slides } = content;

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : slides.length - 1));
  const next = () => setCurrent((c) => (c < slides.length - 1 ? c + 1 : 0));

  const slide = slides[current];

  return (
    <div className="relative">
      {/* Instagram-like frame */}
      <div className="aspect-square bg-hampton-primary rounded-2xl relative overflow-hidden flex flex-col">
        {/* Slide content */}
        <div className={`flex-1 flex flex-col px-8 py-10 ${slideStyles[slide.style] || 'items-center justify-center'}`}>
          {slide.style === 'bold-title' && (
            <>
              <p className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight whitespace-pre-line">
                {slide.text}
              </p>
              <p className="mt-4 text-hampton-secondary font-body text-lg">{slide.subtext}</p>
            </>
          )}
          {slide.style === 'contrast' && (
            <>
              <p className="font-body text-xl text-white/60 mb-2">{slide.text}</p>
              <p className="font-headline text-3xl font-bold text-white">{slide.subtext}</p>
            </>
          )}
          {slide.style === 'highlight' && (
            <>
              <p className="font-headline text-3xl font-bold text-white whitespace-pre-line leading-tight">
                {slide.text}
              </p>
              <div className="mt-4 bg-hampton-secondary/20 rounded-lg px-4 py-2">
                <p className="font-body text-hampton-secondary text-sm">{slide.subtext}</p>
              </div>
            </>
          )}
          {slide.style === 'data' && (
            <>
              <p className="font-headline text-2xl font-bold text-white mb-4">{slide.text}</p>
              <div className="space-y-2">
                {slide.subtext.split('\n').map((line, i) => (
                  <p key={i} className="font-body text-white/80 text-base">{line}</p>
                ))}
              </div>
            </>
          )}
          {slide.style === 'quote' && (
            <>
              <span className="text-6xl text-hampton-secondary/40 font-headline leading-none">&ldquo;</span>
              <p className="font-headline text-xl text-white italic leading-relaxed mt-2">{slide.text}</p>
              <p className="font-body text-hampton-secondary/80 text-sm mt-4 whitespace-pre-line">
                {slide.subtext}
              </p>
            </>
          )}
          {slide.style === 'list' && (
            <>
              <p className="font-headline text-2xl font-bold text-white mb-4">{slide.text}</p>
              <div className="space-y-3">
                {slide.subtext.split('\n').map((line, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-hampton-secondary font-bold font-body">{line.split('.')[0]}.</span>
                    <span className="font-body text-white/80">{line.split('.').slice(1).join('.').trim()}</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {slide.style === 'cta' && (
            <>
              <div className="w-16 h-16 rounded-full bg-hampton-secondary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-hampton-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-headline text-2xl font-bold text-white">{slide.text}</p>
              <p className="font-body text-hampton-secondary/80 text-sm mt-2">{slide.subtext}</p>
            </>
          )}
        </div>

        {/* Hampton branding bar */}
        <div className="px-6 py-3 bg-hampton-primary/50 border-t border-white/10 flex items-center justify-between">
          <span className="text-hampton-secondary font-headline text-sm font-bold tracking-wider">HAMPTON</span>
          <span className="text-white/30 font-body text-xs">Moneywise</span>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-hampton-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <p className="text-center text-xs text-hampton-text/30 font-body mt-1">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
};

export default CarouselMockup;
