"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor?: string | string[];
    }>;
  };
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, height }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  // Define an array of colors for variety
  const colors = [
    "#FF6384", // red
    "#36A2EB", // blue
    "#FFCE56", // yellow
    "#4BC0C0", // teal
    "#9966FF", // purple
    "#FF9F40", // orange
    "#00A36C", // green
  ];

  // Apply colors to each dataset (if needed)
  const colorfulData = {
    ...data,
    datasets: data.datasets.map((dataset, idx) => ({
      ...dataset,
      backgroundColor:
        dataset.data.length > 1 ? dataset.data.map((_, i) => colors[i % colors.length]) : colors[idx % colors.length],
    })),
  };

  return <Bar options={options} data={colorfulData} height={height} />;
};
