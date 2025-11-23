import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartCanceladas() {
  const data = {
    labels: ['Demora do atendimento', 'Peças indisponíveis', 'Preço alto'],
    datasets: [
      {
        label: 'Cancelamentos',
        data: [40, 20, 25],
        backgroundColor: ['#930707', '#c92a2a', '#4a0404'],
        borderColor: ['#fffff0', '#fffff0', '#fffff0'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#fffff0',
          font: {
            family: "'Poppins', sans-serif",
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Motivos de Cancelamento',
        color: '#fffff0',
        font: {
          weight: 'bold',
          size: 14,
        },
      },
      tooltip: {
        bodyColor: '#252525',
        backgroundColor: '#fffff0',
        titleColor: '#930707',
        bodyFont: {
          size: 14,
        },
      },
      datalabels: {
        display: true,
        color: '#fffff0',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value) => `${value}%`,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
