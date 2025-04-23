"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
	data: {
		labels: string[];
		datasets: Array<{
			data: number[];
			backgroundColor?: string[];
			borderColor?: string[];
		}>;
	};
	height?: number;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({
	data,
	height,
}) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
	};

	return <Doughnut options={options} data={data} height={height} />;
};
