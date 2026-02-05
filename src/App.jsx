import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import MetricsCard from './components/MetricsCard';
import PlatformChart from './components/PlatformChart';
import EngagementTrend from './components/EngagementTrend';
import RemixOpportunities from './components/RemixOpportunities';
import ContentGaps from './components/ContentGaps';
import SampleContent from './components/SampleContent';
import Footer from './components/Footer';
import { platformStats } from './data/mockData';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Remix', href: '#remix' },
  { label: 'Gaps', href: '#gaps' },
  { label: 'Samples', href: '#samples' },
];

function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      {/* Section navigation */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 px-4 py-1.5 text-sm font-body font-medium text-hampton-text/50 hover:text-hampton-primary hover:bg-hampton-light rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Platform Overview */}
        <section>
          <SectionHeader
            title="Platform Overview"
            subtitle="Cross-platform content performance at a glance"
            id="overview"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <MetricsCard stats={platformStats.twitter} />
            <MetricsCard stats={platformStats.instagram} />
            <MetricsCard stats={platformStats.blog} />
          </div>
        </section>

        {/* Charts */}
        <section className="mt-12">
          <SectionHeader
            title="Analytics"
            subtitle="Engagement rates and 12-week performance trends"
            id="analytics"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PlatformChart />
            <EngagementTrend />
          </div>
        </section>

        {/* Remix Opportunities */}
        <section className="mt-12">
          <RemixOpportunities />
        </section>

        {/* Content Gaps */}
        <section className="mt-12">
          <ContentGaps />
        </section>

        {/* Sample Content Showcase */}
        <section className="mt-12">
          <SampleContent />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
