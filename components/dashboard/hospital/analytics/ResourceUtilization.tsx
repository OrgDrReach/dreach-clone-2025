"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { Progress } from "@/components/ui";

const resources = [
	{ name: "ICU Beds", utilization: 85, total: 50, inUse: 42 },
	{ name: "Operating Rooms", utilization: 70, total: 10, inUse: 7 },
	{ name: "Emergency Beds", utilization: 60, total: 30, inUse: 18 },
	{ name: "Ventilators", utilization: 45, total: 20, inUse: 9 },
	{ name: "Ambulances", utilization: 75, total: 8, inUse: 6 },
];

const ResourceUtilization: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Resource Utilization</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{resources.map((resource) => (
						<div key={resource.name} className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>{resource.name}</span>
								<span className="text-muted-foreground">
									{resource.inUse} / {resource.total}
								</span>
							</div>
							<Progress value={resource.utilization} className="h-2" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ResourceUtilization;
