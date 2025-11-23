import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartAguardando() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fffff0ad',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Tempo médio de espera por fornecedor',
        color: '#fffff0',
        font: {
          size: 14,
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
          font: {
            size: 11,
          },
        },
      },
      y: {
        ticks: {
          color: '#fffff0',
        },
      },
    },
  };

  const labels = ['Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const data = {
    labels,
    datasets: [
      {
        label: 'StarMotos',
        data: [4, 2, 7, 2],
        backgroundColor: '#930707',
        borderWidth: 2,
        borderColor: '#fffff0',
      },
      {
        label: 'Mercado Livre',
        data: [7, 5, 11, 10],
        backgroundColor: '#c92a2a',
        borderWidth: 2,
        borderColor: '#fffff0',
      },
      {
        label: 'Mexico Motos',
        data: [2, 3, 1, 1],
        backgroundColor: '#4a0404',
        borderWidth: 2,
        borderColor: '#fffff0',
      },
      {
        label: 'Parana Motos',
        data: [1, 2, 8, 2],
        backgroundColor: '#753a3aff',
        borderWidth: 2,
        borderColor: '#fffff0',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
