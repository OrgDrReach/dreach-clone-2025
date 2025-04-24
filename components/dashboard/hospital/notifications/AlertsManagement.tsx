import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Clock } from "lucide-react";

interface Alert {
	id: string;
	title: string;
	priority: "high" | "medium" | "low";
	timestamp: string;
	status: "active" | "resolved";
	type: string;
}

export const AlertsManagement: React.FC = () => {
	const alerts: Alert[] = [
		{
			id: "1",
			title: "Critical Equipment Maintenance Required",
			priority: "high",
			timestamp: "2025-04-24T10:00:00",
			status: "active",
			type: "Equipment",
		},
		// Add more mock alerts
	];

	const getPriorityColor = (priority: Alert["priority"]) => {
		const colors = {
			high: "bg-red-100 text-red-800",
			medium: "bg-yellow-100 text-yellow-800",
			low: "bg-green-100 text-green-800",
		};
		return colors[priority];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle className="flex items-center gap-2">
						<Bell className="h-5 w-5" />
						Active Alerts
					</CardTitle>
					<Button variant="outline" size="sm">
						Clear All
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{alerts.map((alert) => (
						<div
							key={alert.id}
							className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
							<div className="space-y-1">
								<h3 className="font-medium">{alert.title}</h3>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									{new Date(alert.timestamp).toLocaleString()}
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Badge className={getPriorityColor(alert.priority)}>
									{alert.priority}
								</Badge>
								<Button variant="outline" size="sm">
									Resolve
								</Button>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
