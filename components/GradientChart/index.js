import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styles from "./GradientChart.module.css";

export default function GradientChart() {
  const chartRef = useRef(null);
  const [pointImage, setPointImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/happy_bee.svg';
    img.onload = () => {
      img.width = 15;  
      img.height = 15; 
      setPointImage(img);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current && pointImage) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(255, 230, 226,1)');
      gradient.addColorStop(0.9, 'rgba(255,250,205,0.2)');
      gradient.addColorStop(1, 'rgba(255,250,205,0.2)');

      chart.data.datasets[0].backgroundColor = gradient;
      chart.data.datasets[0].pointStyle = pointImage; 
      chart.data.datasets[0].pointRadius = 15; 
      chart.update();
    }
  }, [pointImage]); 

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: '% of Answers Correct',
        data: [65, 59, 80, 81, 56, 67, 30],
        fill: true,
        borderColor: 'rgba(244, 137, 120,1)',
        tension: 0.1,
        backgroundColor: 'rgba(244, 130, 120,0.2)',
        pointStyle: pointImage, 
        pointRadius: 15
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <Line ref={chartRef} data={data} className={styles.chart} />
    </div>
  );
}
