import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { LineChart } from "@/components/ui/charts";

const OperationalEfficiency: React.FC = () => {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Operating Room Utilization",
				data: [85, 88, 82, 87, 89, 91],
			},
			{
				label: "Patient Throughput",
				data: [75, 78, 80, 82, 85, 83],
			},
		],
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Operational Efficiency</CardTitle>
			</CardHeader>
			<CardContent>
				<LineChart data={data} height={300} />
			</CardContent>
		</Card>
	);
};

export default OperationalEfficiency;
