import { formatNumber } from '../utils/helpers';

const MetricsCard = ({ stats }) => {
  const metrics = stats.name === "Moneywise Blog"
    ? [
        { label: "Episodes", value: stats.totalPosts },
        { label: "Avg Views", value: formatNumber(stats.avgViews) },
        { label: "Avg Watch", value: stats.avgTimeOnPage },
      ]
    : [
        { label: "Posts", value: stats.totalPosts },
        { label: "Avg Likes", value: formatNumber(stats.avgLikes) },
        { label: "Followers", value: formatNumber(stats.followersEstimate) },
      ];

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
      style={{ borderLeft: `4px solid ${stats.color}` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-headline text-lg font-bold text-hampton-primary">
            {stats.name}
          </h3>
          {stats.handle && (
            <p className="text-xs text-hampton-text/40 font-body">{stats.handle}</p>
          )}
        </div>
        <span
          className="text-xs font-semibold font-body px-2.5 py-1 rounded-full"
          style={{ backgroundColor: stats.color + '15', color: stats.color }}
        >
          {stats.engagementRate}% eng.
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-xl font-bold text-hampton-primary font-body">{m.value}</p>
            <p className="text-xs text-hampton-text/40 font-body uppercase tracking-wider">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-50">
        <p className="text-xs text-hampton-text/40 font-body">
          Top content: <span className="font-medium text-hampton-text/60">{stats.topContentType}</span>
        </p>
      </div>
    </div>
  );
};

export default MetricsCard;
