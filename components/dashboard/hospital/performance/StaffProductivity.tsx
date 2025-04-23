import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { Progress } from "@/components/ui";

const StaffProductivity: React.FC = () => {
	const departments = [
		{ name: "Emergency", productivity: 92, target: 90 },
		{ name: "Surgery", productivity: 88, target: 85 },
		{ name: "Nursing", productivity: 85, target: 80 },
		{ name: "Outpatient", productivity: 87, target: 85 },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Staff Productivity</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{departments.map((dept) => (
						<div key={dept.name} className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>{dept.name}</span>
								<span className="text-muted-foreground">
									{dept.productivity}% / {dept.target}%
								</span>
							</div>
							<Progress value={dept.productivity} className="h-2" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default StaffProductivity;
