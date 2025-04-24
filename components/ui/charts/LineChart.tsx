"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

interface LineChartProps {
	chartData: any; // You can replace 'any' with your CustomChartData type
	chartOptions: ChartOptions<"line">;
	chartHeight: number;
}

export const LineChart: React.FC<LineChartProps> = ({
	chartData,
	chartOptions,
	chartHeight,
}) => {
	return <Line data={chartData} options={chartOptions} height={chartHeight} />;
};
