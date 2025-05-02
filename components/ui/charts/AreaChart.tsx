"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

interface AreaChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
    }>;
  };
  height?: number;
}

export const AreaChart: React.FC<AreaChartProps> = ({ data, height }) => {
  // Predefined vibrant color palette
  const colorPairs = [
    { bg: "rgba(255, 99, 132, 0.3)", border: "rgba(255, 99, 132, 1)" },
    { bg: "rgba(54, 162, 235, 0.3)", border: "rgba(54, 162, 235, 1)" },
    { bg: "rgba(255, 206, 86, 0.3)", border: "rgba(255, 206, 86, 1)" },
    { bg: "rgba(75, 192, 192, 0.3)", border: "rgba(75, 192, 192, 1)" },
    { bg: "rgba(153, 102, 255, 0.3)", border: "rgba(153, 102, 255, 1)" },
    { bg: "rgba(255, 159, 64, 0.3)", border: "rgba(255, 159, 64, 1)" },
  ];

  // Memoized chart data with colorful styles
  const chartData = useMemo(() => {
    return {
      ...data,
      datasets: data.datasets.map((dataset, i) => ({
        ...dataset,
        fill: true,
        backgroundColor: colorPairs[i % colorPairs.length].bg,
        borderColor: colorPairs[i % colorPairs.length].border,
        pointBackgroundColor: colorPairs[i % colorPairs.length].border,
        tension: 0.4, // smooth curves
      })),
    };
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#666",
        },
        grid: {
          color: "#eee",
        },
      },
      x: {
        ticks: {
          color: "#666",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line options={options} data={chartData} height={height} />;
};
