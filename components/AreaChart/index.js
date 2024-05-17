import { useEffect, useState } from 'react';
import styles from "./AreaChart.module.css";
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
  const [pointImage, setPointImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/happy_bee.svg';
    image.onload = () => {
      setPointImage(image);
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = '/images/happy_bee.svg';
    image.onload = () => {
      image.width = 15; 
      image.height = 15; 
      setPointImage(image);
    };
  }, []);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Total Hours Spent',
        data: [2, 3, 5, 2, 1, 4, 5],
        fill: true,
        backgroundColor: 'rgba(135, 175, 27,0.2)',
        borderColor: 'rgba(135, 175, 27,1)',
        pointStyle: pointImage, 
        pointRadius: 10
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      }
    }
  };

  return (
    <div className={styles.chartContainer}>
      {pointImage && <Line data={data} options={options} />}
    </div>
  );
}

