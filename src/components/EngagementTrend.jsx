import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { weeklyEngagement } from '../data/mockData';
import { chartColors } from '../utils/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const EngagementTrend = () => {
  const data = {
    labels: weeklyEngagement.map((w) => w.week),
    datasets: [
      {
        label: 'Twitter/X',
        data: weeklyEngagement.map((w) => w.twitter),
        borderColor: chartColors.twitter,
        backgroundColor: chartColors.twitter + '15',
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Instagram',
        data: weeklyEngagement.map((w) => w.instagram),
        borderColor: chartColors.instagram,
        backgroundColor: chartColors.instagram + '15',
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Moneywise Blog',
        data: weeklyEngagement.map((w) => w.blog),
        borderColor: chartColors.primary,
        backgroundColor: chartColors.primary + '15',
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 6,
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '12-Week Engagement Trend',
        font: { family: "'Playfair Display', serif", size: 16, weight: 'bold' },
        color: chartColors.primary,
        padding: { bottom: 20 },
      },
      legend: {
        position: 'top',
        labels: {
          font: { family: "'Inter', sans-serif", size: 12 },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
        },
      },
      tooltip: {
        backgroundColor: chartColors.primary,
        titleFont: { family: "'Inter', sans-serif" },
        bodyFont: { family: "'Inter', sans-serif" },
        callbacks: {
          label: (ctx) => {
            const val = ctx.parsed.y;
            return `${ctx.dataset.label}: ${val >= 1000 ? (val / 1000).toFixed(1) + 'K' : val} engagements`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: chartColors.gridLine },
        ticks: {
          callback: (val) => (val >= 1000 ? val / 1000 + 'K' : val),
          font: { family: "'Inter', sans-serif", size: 12 },
          color: '#9ca3af',
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { family: "'Inter', sans-serif", size: 11 },
          color: '#9ca3af',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EngagementTrend;
