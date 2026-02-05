import SectionHeader from './SectionHeader';
import { contentCalendar } from '../data/mockData';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ContentGaps = () => {
  const gapDays = contentCalendar.filter((d) => !d.twitter && !d.instagram && !d.blog).length;
  const twitterDays = contentCalendar.filter((d) => d.twitter).length;
  const instagramDays = contentCalendar.filter((d) => d.instagram).length;
  const blogDays = contentCalendar.filter((d) => d.blog).length;

  // Find first day's weekday to align calendar grid
  const firstDate = new Date(contentCalendar[0].date + 'T12:00:00');
  const startDayOfWeek = firstDate.getDay();
  const paddingDays = Array.from({ length: startDayOfWeek }, (_, i) => ({ padding: true, id: `pad-${i}` }));

  const getCellStyle = (day) => {
    if (day.padding) return 'bg-transparent';
    const platforms = [day.twitter, day.instagram, day.blog].filter(Boolean).length;
    if (platforms === 0) return 'bg-red-50 border-red-200 text-red-700';
    if (platforms === 1) return 'bg-amber-50 border-amber-200 text-amber-700';
    if (platforms >= 2) return 'bg-emerald-50 border-emerald-200 text-emerald-700';
    return 'bg-gray-50 border-gray-200';
  };

  const getDots = (day) => {
    if (day.padding) return null;
    return (
      <div className="flex gap-0.5 justify-center mt-1">
        {day.twitter && <span className="w-1.5 h-1.5 rounded-full bg-[#1DA1F2]" title="Twitter" />}
        {day.instagram && <span className="w-1.5 h-1.5 rounded-full bg-[#E1306C]" title="Instagram" />}
        {day.blog && <span className="w-1.5 h-1.5 rounded-full bg-[#032224]" title="Blog" />}
      </div>
    );
  };

  const allDays = [...paddingDays, ...contentCalendar];

  return (
    <section>
      <SectionHeader
        title="Content Gaps Analysis"
        subtitle="30-day posting activity across all platforms"
        id="gaps"
      />

      {/* Gap stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-red-600 font-body">{gapDays}</p>
          <p className="text-xs text-red-400 font-body uppercase tracking-wider">Zero Post Days</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-[#1DA1F2] font-body">{twitterDays}/30</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Twitter Active</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-[#E1306C] font-body">{instagramDays}/30</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Instagram Active</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-hampton-primary font-body">{blogDays}/30</p>
          <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">Blog Posts</p>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-xs font-body text-hampton-text/30 font-medium py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7 gap-1">
          {allDays.map((day, i) => {
            if (day.padding) {
              return <div key={day.id} className="aspect-square" />;
            }
            const dateNum = new Date(day.date + 'T12:00:00').getDate();
            return (
              <div
                key={day.date}
                className={`aspect-square rounded-lg border p-1 flex flex-col items-center justify-center text-xs font-body transition-colors ${getCellStyle(day)}`}
                title={[day.twitter, day.instagram, day.blog].filter(Boolean).join(' | ') || 'No posts'}
              >
                <span className="font-medium">{dateNum}</span>
                {getDots(day)}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-50 text-xs font-body text-hampton-text/40">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-200" /> 2+ platforms
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-50 border border-amber-200" /> 1 platform
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-red-50 border border-red-200" /> No posts
          </span>
          <span className="flex items-center gap-2 ml-auto">
            <span className="w-2 h-2 rounded-full bg-[#1DA1F2]" /> Twitter
            <span className="w-2 h-2 rounded-full bg-[#E1306C]" /> Instagram
            <span className="w-2 h-2 rounded-full bg-[#032224]" /> Blog
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContentGaps;
