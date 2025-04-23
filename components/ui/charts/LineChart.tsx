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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface LineChartProps {
	data: {
		labels: string[];
		datasets: Array<{
			label: string;
			data: number[];
			borderColor?: string;
			backgroundColor?: string;
		}>;
	};
	height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ data, height }) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
	};

	return <Line options={options} data={data} height={height} />;
};
