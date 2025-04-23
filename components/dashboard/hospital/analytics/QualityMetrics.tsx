"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
	Tooltip,
	TooltipProps,
} from "recharts";

interface QualityMetric {
	name: string;
	value: number;
	fill: string;
}

const data: QualityMetric[] = [
	{ name: "Patient Safety", value: 90, fill: "#8884d8" },
	{ name: "Clinical Care", value: 85, fill: "#83a6ed" },
	{ name: "Effectiveness", value: 88, fill: "#8dd1e1" },
	{ name: "Timeliness", value: 82, fill: "#82ca9d" },
	{ name: "Efficiency", value: 87, fill: "#a4de6c" },
];

interface CustomTooltipProps extends TooltipProps<number, string> {
	active?: boolean;
	payload?: Array<{
		payload: QualityMetric;
		value: number;
	}>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
	if (!active || !payload?.length) return null;

	return (
		<div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
			<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
				{`${payload[0].payload.name}: ${payload[0].value}%`}
			</p>
		</div>
	);
};

const QualityMetrics: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Quality Metrics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<RadialBarChart
							cx="50%"
							cy="50%"
							innerRadius="20%"
							outerRadius="70%"
							barSize={15}
							data={data}
							startAngle={90}
							endAngle={-270}>
							<RadialBar
								label={{
									position: "insideStart",
									fill: "#fff",
									formatter: (value: number) => `${value}%`,
									fontSize: 12,
									fontWeight: 600,
									className: "dark:text-gray-100",
								}}
								background
								dataKey="value"
								cornerRadius={5}
								isAnimationActive={true}
								animationBegin={0}
								animationDuration={1500}
							/>
							<Tooltip
								content={<CustomTooltip />}
								cursor={false}
								wrapperStyle={{ outline: "none" }}
							/>
							<Legend
								iconSize={10}
								layout="vertical"
								verticalAlign="middle"
								wrapperStyle={{
									paddingLeft: "20px",
									right: 0,
									top: "50%",
									transform: "translate(0, -50%)",
								}}
								formatter={(value) => (
									<span className="text-sm text-gray-700 dark:text-gray-300">
										{value}
									</span>
								)}
							/>
						</RadialBarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default QualityMetrics;
