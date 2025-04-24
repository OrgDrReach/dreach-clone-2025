import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Infrastructure {
	area: string;
	status: "good" | "needs-attention" | "critical";
	lastInspection: string;
	nextInspection: string;
	capacity: number;
	occupancy: number;
	maintenanceStatus: string;
}

export const InfrastructureStatus: React.FC = () => {
	const infrastructure: Infrastructure[] = [
		{
			area: "Main Building",
			status: "good",
			lastInspection: "2025-03-01",
			nextInspection: "2025-06-01",
			capacity: 1000,
			occupancy: 750,
			maintenanceStatus: "Up to date",
		},
		// Add more areas
	];

	const getStatusColor = (status: Infrastructure["status"]) => {
		const colors = {
			good: "bg-green-100 text-green-800",
			"needs-attention": "bg-yellow-100 text-yellow-800",
			critical: "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Infrastructure Status</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6">
					{infrastructure.map((item, index) => (
						<div key={index} className="space-y-4">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="font-medium">{item.area}</h3>
									<p className="text-sm text-muted-foreground">
										Last inspected: {item.lastInspection}
									</p>
								</div>
								<Badge className={getStatusColor(item.status)}>
									{item.status}
								</Badge>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Occupancy</span>
									<span>
										{item.occupancy}/{item.capacity}
									</span>
								</div>
								<Progress
									value={(item.occupancy / item.capacity) * 100}
									className="h-2"
								/>
							</div>

							<div className="grid grid-cols-2 gap-4 text-sm">
								<div className="bg-secondary p-2 rounded-md">
									<p className="text-muted-foreground">Next Inspection</p>
									<p className="font-medium">{item.nextInspection}</p>
								</div>
								<div className="bg-secondary p-2 rounded-md">
									<p className="text-muted-foreground">Maintenance</p>
									<p className="font-medium">{item.maintenanceStatus}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
