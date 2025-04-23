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

	return <Bar options={options} data={data} height={height} />;
};
