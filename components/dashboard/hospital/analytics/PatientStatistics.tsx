"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ month: "Jan", admitted: 120, discharged: 100 },
	{ month: "Feb", admitted: 150, discharged: 130 },
	{ month: "Mar", admitted: 180, discharged: 160 },
	{ month: "Apr", admitted: 170, discharged: 150 },
	{ month: "May", admitted: 160, discharged: 140 },
	{ month: "Jun", admitted: 190, discharged: 170 },
];

const PatientStatistics: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Patient Statistics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Bar dataKey="admitted" fill="#8884d8" name="Admitted" />
							<Bar dataKey="discharged" fill="#82ca9d" name="Discharged" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default PatientStatistics;
