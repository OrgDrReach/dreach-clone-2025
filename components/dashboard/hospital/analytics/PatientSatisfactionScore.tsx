"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

interface SatisfactionData {
	month: string;
	score: number;
}

const data: SatisfactionData[] = [
	{ month: "Jan", score: 4.2 },
	{ month: "Feb", score: 4.3 },
	{ month: "Mar", score: 4.4 },
	{ month: "Apr", score: 4.3 },
	{ month: "May", score: 4.5 },
	{ month: "Jun", score: 4.6 },
];

const calculateOverallScore = (data: SatisfactionData[]): string => {
	if (!data.length) return "0.0";
	const sum = data.reduce((acc, curr) => acc + curr.score, 0);
	return (sum / data.length).toFixed(1);
};

const PatientSatisfactionScore: React.FC = () => {
	const overallScore = calculateOverallScore(data);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex justify-between items-center">
					<span>Patient Satisfaction</span>
					<span className="text-2xl font-bold text-primary">
						{overallScore}/5.0
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis domain={[0, 5]} />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="score"
								stroke="#8884d8"
								strokeWidth={2}
								dot={{ strokeWidth: 2 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default PatientSatisfactionScore;
