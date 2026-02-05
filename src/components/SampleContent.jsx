import { useState } from 'react';
import SectionHeader from './SectionHeader';
import TweetMockup from './samples/TweetMockup';
import CarouselMockup from './samples/CarouselMockup';
import QuoteCard from './samples/QuoteCard';
import VideoThumbnail from './samples/VideoThumbnail';
import StandaloneTweet from './samples/StandaloneTweet';
import { sampleContent } from '../data/mockData';

const typeIcons = {
  'twitter-thread': '🧵',
  'instagram-carousel': '📱',
  'quote-cards': '💬',
  'video-concept': '🎬',
  'standalone-tweet': '✍️',
};

const renderMockup = (item) => {
  switch (item.type) {
    case 'twitter-thread':
      return <TweetMockup content={item.content} />;
    case 'instagram-carousel':
      return <CarouselMockup content={item.content} />;
    case 'quote-cards':
      return <QuoteCard content={item.content} />;
    case 'video-concept':
      return <VideoThumbnail content={item.content} />;
    case 'standalone-tweet':
      return <StandaloneTweet content={item.content} />;
    default:
      return null;
  }
};

const SampleContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const item = sampleContent[activeTab];

  return (
    <section>
      <SectionHeader
        title="Ready-to-Post Sample Content"
        subtitle="Demonstrating content creation in Sam's voice across platforms"
        id="samples"
      />

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {sampleContent.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
              activeTab === i
                ? 'bg-hampton-primary text-white shadow-md'
                : 'bg-white text-hampton-text/50 border border-gray-200 hover:border-hampton-secondary hover:text-hampton-text/70'
            }`}
          >
            <span>{typeIcons[s.type]}</span>
            <span className="hidden sm:inline">{s.title.split(':')[0]}</span>
            <span className="sm:hidden">{s.platform}</span>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Mockup (3/5 on desktop) */}
        <div className="lg:col-span-3">
          <div className="mb-3">
            <h3 className="font-headline text-xl font-bold text-hampton-primary">{item.title}</h3>
            <p className="text-xs text-hampton-text/40 font-body">{item.platform}</p>
          </div>
          {renderMockup(item)}
        </div>

        {/* Right: Why It Works (2/5 on desktop) */}
        <div className="lg:col-span-2">
          <div className="bg-hampton-light rounded-xl p-6 sticky top-6">
            <h3 className="font-headline text-xl font-bold text-hampton-primary mb-3">
              Why This Works
            </h3>
            <p className="text-sm text-hampton-text/70 font-body leading-relaxed mb-5">
              {item.whyItWorks}
            </p>

            <div className="border-t border-hampton-secondary/20 pt-4">
              <h4 className="font-body font-semibold text-xs uppercase tracking-wider text-hampton-primary/50 mb-3">
                Estimated Performance
              </h4>
              <div className="space-y-2">
                {Object.entries(item.estimatedEngagement).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-xs text-hampton-text/40 font-body capitalize">{key}</span>
                    <span className="text-sm font-semibold text-hampton-primary font-body">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice analysis */}
            <div className="border-t border-hampton-secondary/20 pt-4 mt-4">
              <h4 className="font-body font-semibold text-xs uppercase tracking-wider text-hampton-primary/50 mb-2">
                Voice Match
              </h4>
              <div className="space-y-1.5">
                {['Number-specific', 'Conversational', 'Curiosity gap', 'Storytelling'].map((trait) => (
                  <div key={trait} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-hampton-text/50 font-body">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleContent;
