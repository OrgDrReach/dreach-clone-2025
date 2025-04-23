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

const data = [
	{ month: "Jan", revenue: 150000, expenses: 120000 },
	{ month: "Feb", revenue: 170000, expenses: 130000 },
	{ month: "Mar", revenue: 190000, expenses: 140000 },
	{ month: "Apr", revenue: 185000, expenses: 135000 },
	{ month: "May", revenue: 195000, expenses: 145000 },
	{ month: "Jun", revenue: 200000, expenses: 150000 },
];

const RevenueAnalytics: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Revenue Analytics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="revenue"
								stroke="#8884d8"
								name="Revenue"
							/>
							<Line
								type="monotone"
								dataKey="expenses"
								stroke="#82ca9d"
								name="Expenses"
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default RevenueAnalytics;
