"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Tooltip,
} from "recharts";

// Sample data for specialty distribution
const specialtyData = [
	{ name: "Cardiology", value: 12, color: "#FF6B6B" },
	{ name: "Neurology", value: 8, color: "#4ECDC4" },
	{ name: "Pediatrics", value: 10, color: "#45B7D1" },
	{ name: "Orthopedics", value: 6, color: "#96CEB4" },
	{ name: "Dermatology", value: 5, color: "#FFEEAD" },
	{ name: "Psychiatry", value: 4, color: "#D4A5A5" },
	{ name: "Ophthalmology", value: 7, color: "#9B59B6" },
	{ name: "ENT", value: 5, color: "#3498DB" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
				<p className="text-gray-900 dark:text-gray-100 font-medium">
					{payload[0].name}
				</p>
				<p className="text-gray-600 dark:text-gray-400">
					Doctors: {payload[0].value}
				</p>
			</div>
		);
	}
	return null;
};

export const SpecialtyDistribution: React.FC = () => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">
					Specialty Distribution
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[400px] w-full">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={specialtyData}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={120}
								paddingAngle={2}
								dataKey="value"
								label={({
									cx,
									cy,
									midAngle,
									innerRadius,
									outerRadius,
									percent,
								}) => {
									const radius =
										innerRadius + (outerRadius - innerRadius) * 1.4;
									const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
									const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
									return (
										<text
											x={x}
											y={y}
											fill="currentColor"
											textAnchor={x > cx ? "start" : "end"}
											dominantBaseline="central"
											className="text-xs">
											{`${(percent * 100).toFixed(0)}%`}
										</text>
									);
								}}>
								{specialtyData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Pie>
							<Tooltip content={<CustomTooltip />} />
							<Legend
								layout="vertical"
								align="right"
								verticalAlign="middle"
								formatter={(value, entry: any) => (
									<span className="text-sm text-gray-700 dark:text-gray-300">
										{value}
									</span>
								)}
							/>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};
