import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { LineChart } from "@/components/ui/charts";
import { ChartData, ChartOptions } from "chart.js";

interface CustomChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		borderColor: string;
	}[];
}

interface LineChartProps {
	chartData: CustomChartData;
	chartOptions: ChartOptions<"line">;
	chartHeight: number;
}

const OperationalEfficiency: React.FC = () => {
	const data: CustomChartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Operating Room Utilization",
				data: [85, 88, 82, 87, 89, 91],
				borderColor: "#8884d8",
			},
			{
				label: "Patient Throughput",
				data: [75, 78, 80, 82, 85, 83],
				borderColor: "#82ca9d",
			},
		],
	};

	const chartOptions: ChartOptions<"line"> = {
		plugins: {
			legend: {
				labels: {
					font: {
						weight: 500,
					},
				},
			},
		},
		scales: {
			x: {
				ticks: {
					
					font: {
						weight: 500,
					},
				},
				grid: {
					color: "#347", // Dark gray grid lines
					lineWidth: 0.5,
					 // Dotted line
				},
			},
			y: {
				ticks: {
					
					font: {
						weight: 500,
					},
				},
				grid: {
					color: "#347", // Dark gray grid lines
					lineWidth: 0.5,
					 // Dotted line
				},
			},
		},
	};
	
	

	return (
		<Card>
			<CardHeader>
				<CardTitle>Operational Efficiency</CardTitle>
			</CardHeader>
			<CardContent>
				<LineChart
					chartData={data}
					chartOptions={chartOptions}
					chartHeight={300}
				/>
			</CardContent>
		</Card>
	);
};

export default OperationalEfficiency;
