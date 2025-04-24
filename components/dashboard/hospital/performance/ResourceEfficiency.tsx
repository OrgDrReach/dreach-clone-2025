import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { DoughnutChart } from "@/components/ui/charts";

const ResourceEfficiency: React.FC = () => {
	const data = {
		labels: ["Optimal", "Under-utilized", "Over-utilized"],

		datasets: [
			{
				data: [65, 20, 15],
				backgroundColor: ["#22c55e", "#eab308", "#ef4444"],
			},
		],
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Resource Efficiency</CardTitle>
			</CardHeader>
			<CardContent>
				<DoughnutChart data={data} height={300} />
			</CardContent>
		</Card>
	);
};

export default ResourceEfficiency;
