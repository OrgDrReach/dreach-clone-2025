import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { BarChart } from "@/components/ui/charts";

const WaitingTimeAnalysis: React.FC = () => {
	const data = {
		labels: ["Emergency", "Outpatient", "Surgery", "Admission", "Discharge"],
		datasets: [
			{
				label: "Average Wait Time (minutes)",
				data: [15, 45, 60, 30, 25],
			},
		],
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Waiting Time Analysis</CardTitle>
			</CardHeader>
			<CardContent>
				<BarChart data={data} height={300} />
			</CardContent>
		</Card>
	);
};

export default WaitingTimeAnalysis;
