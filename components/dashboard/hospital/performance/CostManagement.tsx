import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { AreaChart } from "@/components/ui/charts";

const CostManagement: React.FC = () => {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Operating Costs",
				data: [150000, 148000, 155000, 145000, 152000, 149000],
			},
			{
				label: "Revenue",
				data: [180000, 185000, 188000, 182000, 190000, 195000],
			},
		],
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Cost Management</CardTitle>
			</CardHeader>
			<CardContent>
				<AreaChart data={data} height={300} />
			</CardContent>
		</Card>
	);
};

export default CostManagement;
