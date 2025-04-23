"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Tooltip,
} from "recharts";

const data = [
	{ name: "Successful", value: 85 },
	{ name: "Partial Success", value: 10 },
	{ name: "Unsuccessful", value: 5 },
];

const COLORS = ["#52c41a", "#faad14", "#ff4d4f"];

const TreatmentSuccessRates: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Treatment Success Rates</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								labelLine={false}
								outerRadius={100}
								fill="#8884d8"
								dataKey="value"
								label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default TreatmentSuccessRates;
