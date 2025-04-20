"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TreatmentGoal {
	name: string;
	target: number;
	current: number;
}

interface TreatmentPlanProgressProps {
	goals: TreatmentGoal[];
}

const TreatmentPlanProgress: React.FC<TreatmentPlanProgressProps> = ({
	goals,
}) => {
	const data = goals.map((goal) => ({
		name: goal.name,
		Progress: (goal.current / goal.target) * 100,
		Target: 100,
		status: getProgressStatus((goal.current / goal.target) * 100),
	}));

	function getProgressStatus(progress: number): string {
		if (progress >= 90) return "Excellent";
		if (progress >= 70) return "Good";
		if (progress >= 50) return "Fair";
		return "Needs Attention";
	}

	function getStatusColor(status: string): string {
		switch (status) {
			case "Excellent":
				return "bg-green-500";
			case "Good":
				return "bg-blue-500";
			case "Fair":
				return "bg-yellow-500";
			default:
				return "bg-red-500";
		}
	}

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
					<p className="font-semibold text-gray-800">{label}</p>
					<p className="text-blue-600">
						Progress: {payload[0].value.toFixed(1)}%
					</p>
					<Badge
						className={`mt-2 ${getStatusColor(
							getProgressStatus(payload[0].value)
						)} text-white`}>
						{getProgressStatus(payload[0].value)}
					</Badge>
				</div>
			);
		}
		return null;
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Card className="shadow-xl border-gray-500">
				<CardHeader className="bg-gradient-to-r from-[#285b6d] to-[#31addb] text-white rounded-t-lg p-4 -mt-6">
					<CardTitle className="text-2xl font-bold flex items-center gap-3">
						<FaTasks className="w-7 h-7" />
						Treatment Plan Progress
					</CardTitle>
				</CardHeader>
				<CardContent className="pt-6 pb-4">
					<ResponsiveContainer width="100%" height={350}>
						<BarChart
							data={data}
							layout="vertical"
							margin={{ top: 20, right: 30, left: 40, bottom: 10 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="#eee" />
							<XAxis
								type="number"
								domain={[0, 100]}
								tickFormatter={(value) => `${value}%`}
							/>
							<YAxis
								dataKey="name"
								type="category"
								tick={{ fill: "#666", fontSize: 12 }}
							/>
							<Tooltip content={<CustomTooltip />} />
							<Legend />
							<Bar
								dataKey="Progress"
								fill="#3b82f6"
								radius={[0, 4, 4, 0]}
								barSize={20}
							/>
							<Bar
								dataKey="Target"
								fill="#93c5fd"
								radius={[0, 4, 4, 0]}
								barSize={20}
							/>
						</BarChart>
					</ResponsiveContainer>
					<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
						{data.map((goal, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 }}
								className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
								<p className="text-sm text-gray-600 dark:text-gray-300">
									{goal.name}
								</p>
								<div className="flex items-center justify-between mt-2">
									<span className="text-lg font-bold text-blue-600 dark:text-blue-400">
										{goal.Progress.toFixed(1)}%
									</span>
									<Badge
										className={`${getStatusColor(goal.status)} text-white`}>
										{goal.status}
									</Badge>
								</div>
							</motion.div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default TreatmentPlanProgress;
