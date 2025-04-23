import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { RadarChart } from "@/components/ui/charts";

const QualityIndicators: React.FC = () => {
	const data = {
		labels: [
			"Patient Safety",
			"Clinical Outcomes",
			"Patient Satisfaction",
			"Care Documentation",
			"Treatment Success",
		],
		datasets: [
			{
				label: "Current Score",
				data: [90, 85, 88, 92, 87],
			},
		],
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Quality Indicators</CardTitle>
			</CardHeader>
			<CardContent>
				<RadarChart data={data} height={300} />
			</CardContent>
		</Card>
	);
};

export default QualityIndicators;
