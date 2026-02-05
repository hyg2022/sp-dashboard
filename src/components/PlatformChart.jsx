import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { platformStats } from '../data/mockData';
import { chartColors } from '../utils/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlatformChart = () => {
  const data = {
    labels: ['Twitter/X', 'Instagram', 'Moneywise Podcast'],
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: [
          platformStats.twitter.engagementRate,
          platformStats.instagram.engagementRate,
          platformStats.blog.engagementRate,
        ],
        backgroundColor: [
          chartColors.twitter + 'CC',
          chartColors.instagram + 'CC',
          chartColors.primary + 'CC',
        ],
        borderColor: [
          chartColors.twitter,
          chartColors.instagram,
          chartColors.primary,
        ],
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Engagement Rate by Platform',
        font: { family: "'Playfair Display', serif", size: 16, weight: 'bold' },
        color: chartColors.primary,
        padding: { bottom: 20 },
      },
      tooltip: {
        backgroundColor: chartColors.primary,
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        callbacks: {
          label: (ctx) => `${ctx.parsed.y}% engagement rate`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 8,
        grid: { color: chartColors.gridLine },
        ticks: {
          callback: (val) => val + '%',
          font: { family: "'Inter', sans-serif", size: 12 },
          color: '#9ca3af',
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { family: "'Inter', sans-serif", size: 12, weight: '500' },
          color: chartColors.primary,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PlatformChart;
