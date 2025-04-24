import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, FileText } from "lucide-react";

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
			description:
				"Standard operating procedures for managing mass casualty incidents",
		},
		// Add more mock data
	];

	const getPriorityColor = (priority: Protocol["priority"]) => {
		const colors = {
			critical: "bg-red-100 text-red-800",
			high: "bg-orange-100 text-orange-800",
			medium: "bg-yellow-100 text-yellow-800",
			low: "bg-blue-100 text-blue-800",
		};
		return colors[priority];
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Emergency Protocols</CardTitle>
				<Button variant="outline" size="sm">
					Add Protocol
				</Button>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					{protocols.map((protocol) => (
						<Card key={protocol.id} className="p-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<FileText className="h-5 w-5" />
										<div>
											<h3 className="font-medium">{protocol.title}</h3>
											<p className="text-sm text-muted-foreground">
												{protocol.category}
											</p>
										</div>
									</div>
									<Badge className={getPriorityColor(protocol.priority)}>
										{protocol.priority}
									</Badge>
								</div>

								<p className="text-sm">{protocol.description}</p>

								<div className="flex items-center justify-between text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle2 className="h-4 w-4 text-green-500" />
										<span>{protocol.status}</span>
									</div>
									<span className="text-muted-foreground">
										Last updated: {protocol.lastUpdated}
									</span>
								</div>

								<div className="flex justify-end space-x-2">
									<Button variant="outline" size="sm">
										View Details
									</Button>
									<Button variant="outline" size="sm">
										Update
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
