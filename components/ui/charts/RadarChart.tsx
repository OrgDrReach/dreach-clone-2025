"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
    }>;
  };
  height?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, height }) => {
  const colorPairs = [
    { bg: "rgba(255, 99, 132, 0.3)", border: "rgba(255, 99, 132, 1)" },
    { bg: "rgba(54, 162, 235, 0.3)", border: "rgba(54, 162, 235, 1)" },
    { bg: "rgba(255, 206, 86, 0.3)", border: "rgba(255, 206, 86, 1)" },
    { bg: "rgba(75, 192, 192, 0.3)", border: "rgba(75, 192, 192, 1)" },
    { bg: "rgba(153, 102, 255, 0.3)", border: "rgba(153, 102, 255, 1)" },
    { bg: "rgba(255, 159, 64, 0.3)", border: "rgba(255, 159, 64, 1)" },
  ];

  const chartData = useMemo(() => {
    return {
      labels: data.labels,
      datasets: data.datasets.map((dataset, i) => ({
        ...dataset,
        backgroundColor: colorPairs[i % colorPairs.length].bg,
        borderColor: colorPairs[i % colorPairs.length].border,
        pointBackgroundColor: colorPairs[i % colorPairs.length].border,
        pointHoverRadius: 6,
        pointRadius: 4,
        borderWidth: 2,
        fill: true,
      })),
    };
  }, [data]);

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#ccc",
        },
        grid: {
          color: "#eee",
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
        ticks: {
          backdropColor: "transparent",
          color: "#666",
        },
      },
    },
  };

  return <Radar data={chartData} options={options} height={height} />;
};
