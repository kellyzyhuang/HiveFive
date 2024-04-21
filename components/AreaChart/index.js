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
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AreaChart() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Total Hours Spent',
        data: [2, 3, 5, 2, 1, 4, 5],
        fill: true,
        backgroundColor: 'rgba(255,201,61,0.2)',
        borderColor: 'rgba(255,201,61,1)'
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '20vh', width: '27vw' }}>
      <Line data={data} options={options} />
    </div>
  );
}
