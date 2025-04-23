"use client";

import React from "react";
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
			fill?: boolean;
			backgroundColor?: string;
			borderColor?: string;
		}>;
	};
	height?: number;
}

export const AreaChart: React.FC<AreaChartProps> = ({ data, height }) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	// Add fill property to datasets
	const chartData = {
		...data,
		datasets: data.datasets.map((dataset) => ({
			...dataset,
			fill: true,
		})),
	};

	return <Line options={options} data={chartData} height={height} />;
};
