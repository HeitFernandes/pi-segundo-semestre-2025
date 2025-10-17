import React from 'react';

import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chartjs.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function ChartOS() {
  const options = {
    reponsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fffff0',
          font: {
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'OS FINALIZADAS x OS CANCELADAS - SEMESTRAL',
        color: '#fffff0',
        font: {
          weight: 'bold',
          size: 15,
        },
      },
      datalabels: {
        display: true,
        color: '#fffff0',
        font: {
          size: 12,
        },
        anchor: 'end',
        align: 'top',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fffff0',
        },
      },
      y: {
        ticks: {
          color: '#fffff0',
        },
      },
    },
  };

  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

  const data = {
    labels,
    datasets: [
      {
        label: 'OS FINALIZADAS',
        data: [25, 40, 49, 21, 59, 37],
        backgroundColor: '#930707',
        borderColor: '#930707',
      },
      {
        label: 'OS CANCELADAS',
        data: [7, 15, 2, 12, 1, 4],
        backgroundColor: '#fffff0',
        borderColor: '#fffff0',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
