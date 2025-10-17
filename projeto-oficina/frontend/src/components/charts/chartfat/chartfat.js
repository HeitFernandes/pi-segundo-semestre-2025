import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function Chartfat() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#252525',
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Faturamento Anual - 2025',
        color: '#252525',
        font: {
          size: 15,
        },
      },
      datalabels: {
        display: true,
        color: '#252525',
        font: {
          size: 14,
        },
        anchor: 'end',
        align: 'top',
        formatter: (value) => `R$ ${value}`,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#252525',
          font: {
            size: 11,
          },
          minRotation: 40,
          maxRotarion: 40,
        },
      },
      y: {
        ticks: {
          color: '#252525',
          callback(value) {
            return `R$ ${value}`;
          },
        },
      },
    },
  };

  const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Faturamento Mensal',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        backgroundColor: 'rgba(147, 7, 7, 0.8)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
