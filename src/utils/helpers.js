export const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

export const calcEngagement = (post) => {
  const { likes = 0, retweets = 0, replies = 0, comments = 0, saves = 0 } = post;
  return likes + retweets + replies + comments + saves;
};

export const getPotentialColor = (level) => {
  const colors = {
    high: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    medium: 'bg-amber-100 text-amber-800 border-amber-200',
    low: 'bg-gray-100 text-gray-600 border-gray-200',
  };
  return colors[level] || colors.low;
};

export const getFormatColor = (format) => {
  const colors = {
    Thread: 'bg-blue-100 text-blue-700',
    Carousel: 'bg-purple-100 text-purple-700',
    'Quote Graphic': 'bg-pink-100 text-pink-700',
    Poll: 'bg-orange-100 text-orange-700',
    Reel: 'bg-red-100 text-red-700',
    Short: 'bg-red-100 text-red-700',
    'Short Video': 'bg-red-100 text-red-700',
    Stories: 'bg-indigo-100 text-indigo-700',
    Article: 'bg-teal-100 text-teal-700',
    'Tweet Series': 'bg-sky-100 text-sky-700',
  };
  return colors[format] || 'bg-gray-100 text-gray-700';
};

export const chartColors = {
  primary: '#032224',
  secondary: '#d1bfae',
  accent: '#0a4a4e',
  twitter: '#1DA1F2',
  instagram: '#E1306C',
  blog: '#032224',
  light: '#f5f0eb',
  gridLine: 'rgba(3, 34, 36, 0.08)',
};
