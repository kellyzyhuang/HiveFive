import { Doughnut } from 'react-chartjs-2'; 

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
    ArcElement, Title, Tooltip, Legend
);

export default function DoughnutChart() {
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Total Hours Spent',
        data: [1, 3.5],
        backgroundColor: [
          'rgba(255, 99, 132, 0)',
          "#FFC93D"
        ],
        borderWidth: 1,
        borderRadius: 50
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '25rem', width: '25rem' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
