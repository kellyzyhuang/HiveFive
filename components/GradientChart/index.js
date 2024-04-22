import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import styles from "./GradientChart.module.css";

export default function GradientChart() {
  const chartRef = useRef(null);

  useEffect(() => {
      if (chartRef.current) {
          const chart = chartRef.current;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(255,255,140,1)'); 
          gradient.addColorStop(0.5, 'rgba(255,202,75,0.2)'); 
          gradient.addColorStop(1, 'rgba(255,170,29,0.2)'); 

          chart.data.datasets[0].backgroundColor = gradient;
          chart.update();
      }
  }, []);

  const data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
          {
              label: '% of Answers Correct',
              data: [65, 59, 80, 81, 56, 67, 30],
              fill: true,
              borderColor: 'rgba(255,201,61,1)',
              tension: 0.1,
              backgroundColor: 'rgba(255,201,61,0.2)',
          },
      ],
  };

  return (
    <div style={{ height: '25vh', width: '40vw' }}>
      <Line ref={chartRef} data={data} className={styles.chart}/>;
    </div>
  )
};
