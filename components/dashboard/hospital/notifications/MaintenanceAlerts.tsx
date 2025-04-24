import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Wrench, Clock } from "lucide-react";

interface MaintenanceAlert {
	id: string;
	title: string;
	type: "scheduled" | "emergency" | "ongoing" | "completed";
	facility: string;
	startTime: string;
	endTime: string;
	impact: "high" | "medium" | "low";
	description: string;
}

export const MaintenanceAlerts: React.FC = () => {
	const alerts: MaintenanceAlert[] = [
		{
			id: "1",
			title: "HVAC System Maintenance",
			type: "scheduled",
			facility: "Main Building",
			startTime: "2025-04-25T09:00:00",
			endTime: "2025-04-25T17:00:00",
			impact: "medium",
			description: "Regular maintenance of air conditioning systems",
		},
		// Add more mock maintenance alerts
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2">
						<Wrench className="h-5 w-5" />
						Maintenance Alerts
					</CardTitle>
					<Button variant="outline" className="flex items-center gap-2">
						Schedule Maintenance
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[400px]">
					<div className="space-y-4">
						{alerts.map((alert) => (
							<div
								key={alert.id}
								className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3">
								<div className="flex items-center justify-between">
									<h3 className="font-medium">{alert.title}</h3>
									<Badge
										variant={
											alert.type === "emergency" ? "destructive"
											: alert.type === "ongoing" ?
												"warning"
											:	"secondary"
										}>
										{alert.type}
									</Badge>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									{alert.description}
								</p>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									<span>
										{new Date(alert.startTime).toLocaleString()} -{" "}
										{new Date(alert.endTime).toLocaleString()}
									</span>
								</div>
								<div className="flex items-center justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-300">
										Facility: {alert.facility}
									</span>
									<Badge
										variant={
											alert.impact === "high" ? "destructive"
											: alert.impact === "medium" ?
												"warning"
											:	"secondary"
										}>
										Impact: {alert.impact}
									</Badge>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
