"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Star, Users, Clock, ThumbsUp } from "lucide-react";

interface PerformanceMetric {
	id: string;
	doctorName: string;
	patientSatisfaction: number;
	consultationEfficiency: number;
	patientRetention: number;
	averageRating: number;
	monthlyStats: {
		month: string;
		patients: number;
		satisfaction: number;
	}[];
}

export const PerformanceMetrics: React.FC = () => {
	// Mock data - Replace with actual API data
	const metrics: PerformanceMetric[] = [
		{
			id: "1",
			doctorName: "Dr. Sarah Johnson",
			patientSatisfaction: 92,
			consultationEfficiency: 88,
			patientRetention: 85,
			averageRating: 4.8,
			monthlyStats: [
				{ month: "Jan", patients: 120, satisfaction: 90 },
				{ month: "Feb", patients: 135, satisfaction: 92 },
				{ month: "Mar", patients: 128, satisfaction: 91 },
				{ month: "Apr", patients: 142, satisfaction: 93 },
			],
		},
		// Add more doctors as needed
	];

	const getMetricColor = (value: number) => {
		if (value >= 90)
			return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
		if (value >= 70)
			return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
		return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
	};

	return (
		<Card className="w-full  mx-auto">
			<CardHeader>
				<CardTitle className="text-lg font-semibold flex items-center gap-2">
					Performance Metrics
				</CardTitle>
			</CardHeader>
			<CardContent className="p-4">
				<ScrollArea className="h-[350px]">
					{metrics.map((metric) => (
						<div key={metric.id} className="mb-6 last:mb-0">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-lg font-semibold">{metric.doctorName}</h3>
								<div className="flex items-center gap-1">
									<Star className="h-4 w-4 text-yellow-500" />
									<span className="text-sm font-semibold">{metric.averageRating}</span>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
								{/* Patient Satisfaction */}
								<div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
									<div className="flex items-center justify-between mb-1">
										<div className="flex items-center gap-1">
											<ThumbsUp className="h-4 w-4 text-blue-500" />
											<span className="text-sm font-medium">Patient Satisfaction</span>
										</div>
										<Badge className={getMetricColor(metric.patientSatisfaction)}>
											{metric.patientSatisfaction}%
										</Badge>
									</div>
									<Progress value={metric.patientSatisfaction} className="h-1" />
								</div>

								{/* Consultation Efficiency */}
								<div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
									<div className="flex items-center justify-between mb-1">
										<div className="flex items-center gap-1">
											<Clock className="h-4 w-4 text-green-500" />
											<span className="text-sm font-medium">Consultation Efficiency</span>
										</div>
										<Badge className={getMetricColor(metric.consultationEfficiency)}>
											{metric.consultationEfficiency}%
										</Badge>
									</div>
									<Progress value={metric.consultationEfficiency} className="h-1" />
								</div>

								{/* Patient Retention */}
								<div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
									<div className="flex items-center justify-between mb-1">
										<div className="flex items-center gap-1">
											<Users className="h-4 w-4 text-purple-500" />
											<span className="text-sm font-medium">Patient Retention</span>
										</div>
										<Badge className={getMetricColor(metric.patientRetention)}>
											{metric.patientRetention}%
										</Badge>
									</div>
									<Progress value={metric.patientRetention} className="h-1" />
								</div>
							</div>

							{/* Chart */}
							<div className="h-[200px] w-full">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart data={metric.monthlyStats}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<Tooltip />
										<Line
											type="monotone"
											dataKey="patients"
											stroke="#8884d8"
											name="Patients"
										/>
										<Line
											type="monotone"
											dataKey="satisfaction"
											stroke="#82ca9d"
											name="Satisfaction"
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
