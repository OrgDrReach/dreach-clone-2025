import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Siren } from "lucide-react";

interface EmergencyAlert {
	id: string;
	type: "code-red" | "code-blue" | "evacuation" | "other";
	location: string;
	message: string;
	timestamp: string;
	status: "active" | "resolved";
}

export const EmergencyAlerts: React.FC = () => {
	const alerts: EmergencyAlert[] = [
		{
			id: "1",
			type: "code-blue",
			location: "ICU Wing B",
			message: "Medical emergency response team required",
			timestamp: "2025-04-24T10:30:00",
			status: "active",
		},
		// Add more mock alerts
	];

	return (
		<Card className="border-red-200">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2 text-red-600">
						<Siren className="h-5 w-5" />
						Emergency Alerts
					</CardTitle>
					<Button variant="destructive" className="flex items-center gap-2">
						<AlertTriangle className="h-4 w-4" />
						Trigger Emergency Alert
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{alerts.map((alert) => (
						<div
							key={alert.id}
							className={`p-4 rounded-lg ${
								alert.status === "active" ?
									"bg-red-50 dark:bg-red-900/20"
								:	"bg-gray-50 dark:bg-gray-800"
							}`}>
							<div className="flex items-center justify-between mb-2">
								<Badge
									variant="destructive"
									className="uppercase font-semibold">
									{alert.type.replace("-", " ")}
								</Badge>
								<span className="text-sm text-gray-500">
									{new Date(alert.timestamp).toLocaleString()}
								</span>
							</div>
							<p className="font-medium mb-2">{alert.message}</p>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600 dark:text-gray-300">
									Location: {alert.location}
								</span>
								<Button
									variant={
										alert.status === "active" ? "destructive" : "secondary"
									}
									size="sm">
									{alert.status === "active" ? "Resolve Alert" : "Resolved"}
								</Button>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
