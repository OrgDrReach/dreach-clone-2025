import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface UtilityStatus {
	type: string;
	usage: number;
	limit: number;
	status: "normal" | "warning" | "critical";
	lastChecked: string;
	trend: "increasing" | "stable" | "decreasing";
	cost: number;
}

export const UtilityMonitoring: React.FC = () => {
	const utilities: UtilityStatus[] = [
		{
			type: "Electricity",
			usage: 75000,
			limit: 100000,
			status: "normal",
			lastChecked: "2025-04-24 10:00",
			trend: "stable",
			cost: 15000,
		},
		// Add more utilities
	];

	const getStatusColor = (status: UtilityStatus["status"]) => {
		const colors = {
			normal: "bg-green-100 text-green-800",
			warning: "bg-yellow-100 text-yellow-800",
			critical: "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	const getTrendIcon = (trend: UtilityStatus["trend"]) => {
		const icons = {
			increasing: "↑",
			stable: "→",
			decreasing: "↓",
		};
		return icons[trend];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Utility Monitoring</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6">
					{utilities.map((utility, index) => (
						<div key={index} className="space-y-4">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="font-medium">{utility.type}</h3>
									<p className="text-sm text-muted-foreground">
										Last checked: {utility.lastChecked}
									</p>
								</div>
								<Badge className={getStatusColor(utility.status)}>
									{utility.status}
								</Badge>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Usage</span>
									<span>
										{utility.usage}/{utility.limit} kWh
									</span>
								</div>
								<Progress
									value={(utility.usage / utility.limit) * 100}
									className="h-2"
								/>
							</div>

							<div className="grid grid-cols-2 gap-4 text-sm">
								<div className="bg-secondary p-2 rounded-md">
									<p className="text-muted-foreground">Cost</p>
									<p className="font-medium">${utility.cost}</p>
								</div>
								<div className="bg-secondary p-2 rounded-md">
									<p className="text-muted-foreground">Trend</p>
									<p className="font-medium flex items-center gap-2">
										{utility.trend}{" "}
										<span className="text-lg">
											{getTrendIcon(utility.trend)}
										</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
