import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2 } from "lucide-react";

interface Protocol {
	id: string;
	title: string;
	category: string;
	priority: "critical" | "high" | "medium" | "low";
	lastUpdated: string;
	status: "active" | "under-review" | "archived";
	description: string;
}

export const EmergencyProtocols: React.FC = () => {
	const protocols: Protocol[] = [
		{
			id: "EP001",
			title: "Mass Casualty Incident Response",
			category: "Disaster Management",
			priority: "critical",
			lastUpdated: "2024-04-15",
			status: "active",
			description: "Standard operating procedures for managing mass casualty incidents",
		},
		// Add more protocols as needed
	];

	// Helper function to set priority colors
	const getPriorityStyle = (priority: Protocol["priority"]) => {
		const styles = {
			critical: "border-red-500 bg-red-50 dark:bg-red-800 dark:border-red-500",
			high: "border-orange-500 bg-orange-50 dark:bg-orange-800 dark:border-orange-500",
			medium: "border-yellow-500 bg-yellow-50 dark:bg-yellow-800 dark:border-yellow-500",
			low: "border-blue-500 bg-blue-50 dark:bg-blue-800 dark:border-blue-500",
		};
		return styles[priority];
	};

	// Helper function to set badge colors
	const getPriorityBadge = (priority: Protocol["priority"]) => {
		const badgeColors = {
			critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400",
			high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-400",
			medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400",
			low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400",
		};
		return badgeColors[priority];
	};

	// Helper function to set status colors
	const getStatusColor = (status: Protocol["status"]) => {
		const statusColors = {
			active: "text-green-600 dark:text-green-400",
			"under-review": "text-yellow-600 dark:text-yellow-400",
			archived: "text-gray-500 dark:text-gray-400",
		};
		return statusColors[status];
	};

	return (
		<Card className="border-2 border-gray-600 shadow-lg dark:bg-gray-800 dark:border-gray-700">
			<CardHeader className="flex flex-row items-center justify-between border-b border-gray-300 dark:border-gray-600">
				<CardTitle className="text-lg text-gray-800 dark:text-white">Emergency Protocols</CardTitle>
				<Button variant="outline" size="sm" className="border-2 border-gray-600 dark:border-gray-700">
					Add Protocol
				</Button>
			</CardHeader>

			<CardContent className="grid gap-4 p-4">
				{protocols.map((protocol) => (
					<Card
						key={protocol.id}
						className={`p-4 border-2 shadow-lg ${getPriorityStyle(protocol.priority)} dark:bg-gray-900 dark:text-white`}
					>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<div className="flex items-center gap-2">
									<FileText className="w-5 h-5 text-gray-700 dark:text-white" />
									<div>
										<h3 className="font-semibold text-base">{protocol.title}</h3>
										<p className="text-xs text-muted-foreground">{protocol.category}</p>
									</div>
								</div>
								<Badge className={`${getPriorityBadge(protocol.priority)} capitalize`}>
									{protocol.priority}
								</Badge>
							</div>

							<p className="text-sm text-gray-800 dark:text-gray-100">{protocol.description}</p>

							<div className="flex justify-between items-center text-sm">
								<div className={`flex items-center gap-1 ${getStatusColor(protocol.status)}`}>
									<CheckCircle2 className="w-4 h-4" />
									<span className="capitalize">{protocol.status}</span>
								</div>
								<span className="text-muted-foreground text-xs">
									Last updated: {protocol.lastUpdated}
								</span>
							</div>

							<div className="flex justify-end gap-2 pt-2">
								<Button variant="outline" size="sm" className="border-2 border-gray-600 dark:border-gray-700">
									View
								</Button>
								<Button variant="outline" size="sm" className="border-2 border-gray-600 dark:border-gray-700">
									Update
								</Button>
							</div>
						</div>
					</Card>
				))}
			</CardContent>
		</Card>
	);
};
