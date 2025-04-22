"use client";
import { FC } from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			position: "top" as const,
			labels: {
				color: "#4db7dd", // This will be the default color
			},
		},
	},
	scales: {
		x: {
			grid: {
				color: "#e5e7eb", // light mode grid color
			},
			ticks: {
				color: "#4db7dd", // light mode text color
			},
		},
		y: {
			grid: {
				color: "#e5e7eb", // light mode grid color
			},
			ticks: {
				color: "#4db7dd", // light mode text color
			},
		},
	},
};

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			label: "Patient Visits",
			data: [65, 59, 80, 81, 64, 70],
			borderColor: "rgba(54, 162, 235, 1)",
			backgroundColor: "rgba(54, 162, 235, 0.2)",
			tension: 0.4,
		},
	],
};

const PatientVisitsChart: FC = () => {
	return (
		<div className="bg-white dark:bg-slate-800 p-6 rounded-lg my-5 shadow-md">
			<h2 className=" text-[#125872] dark:text-[#4db7dd] text-2xl mb-5 font-semibold">
				Patient Visits Trend
			</h2>
			<Line options={options} data={data} />
		</div>
	);
};

export default PatientVisitsChart;
