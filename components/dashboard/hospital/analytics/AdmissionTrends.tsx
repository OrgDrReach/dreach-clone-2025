"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ month: "Jan", emergency: 45, scheduled: 80, walkIn: 30 },
	{ month: "Feb", emergency: 50, scheduled: 85, walkIn: 35 },
	{ month: "Mar", emergency: 55, scheduled: 90, walkIn: 40 },
	{ month: "Apr", emergency: 48, scheduled: 88, walkIn: 38 },
	{ month: "May", emergency: 52, scheduled: 92, walkIn: 42 },
	{ month: "Jun", emergency: 58, scheduled: 95, walkIn: 45 },
];

const AdmissionTrends: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Admission Trends</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="emergency"
								stackId="1"
								stroke="#ff4d4f"
								fill="#ff4d4f"
							/>
							<Area
								type="monotone"
								dataKey="scheduled"
								stackId="1"
								stroke="#1890ff"
								fill="#1890ff"
							/>
							<Area
								type="monotone"
								dataKey="walkIn"
								stackId="1"
								stroke="#52c41a"
								fill="#52c41a"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default AdmissionTrends;
