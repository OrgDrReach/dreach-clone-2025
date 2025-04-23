"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ department: "Cardiology", performance: 90 },
	{ department: "Neurology", performance: 85 },
	{ department: "Pediatrics", performance: 88 },
	{ department: "Orthopedics", performance: 82 },
	{ department: "Oncology", performance: 87 },
	{ department: "Emergency", performance: 89 },
];

const DepartmentPerformance: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Department Performance</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<RadarChart data={data}>
							<PolarGrid />
							<PolarAngleAxis dataKey="department" />
							<Radar
								name="Performance"
								dataKey="performance"
								stroke="#8884d8"
								fill="#8884d8"
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default DepartmentPerformance;
