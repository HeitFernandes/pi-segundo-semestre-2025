import React from 'react';
import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartsJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function ChartFat() {
  const dadosBrutosMeses = [
    { mes: 'Junho', faturamento: 15000 },
    { mes: 'Julho', faturamento: 27000 },
    { mes: 'Agosto', faturamento: 45000 },
    { mes: 'Setembro', faturamento: 28000 },
    { mes: 'Outubro', faturamento: 12000 },
    { mes: 'Novembro', faturamento: 51000 },
    { mes: 'Dezembro', faturamento: 45000 },
  ];

  const labels = dadosBrutosMeses.map((dado) => dado.mes);
  const valor = dadosBrutosMeses.map((dado) => dado.faturamento.toFixed(2));

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fffff0',
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Faturamento Mensal',
        color: '#fffff0',
        font: {
          size: 15,
        },
      },
      datalabels: {
        display: true,
        color: '#fffff0af',
        font: {
          size: 12,
        },
        anchor: 'end',
        align: 'top',
        formatter: (value) => `R$ ${value}`,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fffff0af',
        },
      },
      y: {
        ticks: {
          color: '#fffff0af',
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Faturamento',
        data: valor,
        borderColor: 'rgb(53, 162, 235, 0.5)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
