import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Truck } from "lucide-react";

interface AmbulanceUnit {
	id: string;
	vehicleNumber: string;
	status: "dispatched" | "returning" | "available" | "maintenance";
	location?: string;
	eta?: number;
	crew: string[];
	lastUpdate: string;
	type: "basic" | "advanced" | "critical";
}

export const AmbulanceTracking: React.FC = () => {
	const ambulances: AmbulanceUnit[] = [
		{
			id: "AMB001",
			vehicleNumber: "EM-123",
			status: "dispatched",
			location: "Downtown Area",
			eta: 15,
			crew: ["John Smith", "Mary Johnson"],
			lastUpdate: "5 mins ago",
			type: "advanced",
		},
		// Add more mock data
	];

	const getStatusColor = (status: AmbulanceUnit["status"]) => {
		const colors = {
			dispatched: "bg-blue-100 text-blue-800",
			returning: "bg-yellow-100 text-yellow-800",
			available: "bg-green-100 text-green-800",
			maintenance: "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Ambulance Tracking</CardTitle>
				<Button variant="outline" size="sm">
					Dispatch Unit
				</Button>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2">
					{ambulances.map((unit) => (
						<Card key={unit.id} className="p-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<Truck className="h-5 w-5" />
										<div>
											<h3 className="font-medium">{unit.vehicleNumber}</h3>
											<p className="text-sm text-muted-foreground">
												{unit.type} unit
											</p>
										</div>
									</div>
									<Badge className={getStatusColor(unit.status)}>
										{unit.status}
									</Badge>
								</div>

								<div className="space-y-2">
									{unit.location && (
										<div className="text-sm">
											<span className="font-medium">Location:</span>{" "}
											{unit.location}
										</div>
									)}
									{unit.eta && (
										<div className="text-sm">
											<span className="font-medium">ETA:</span> {unit.eta}{" "}
											minutes
										</div>
									)}
									<div className="text-sm">
										<span className="font-medium">Crew:</span>{" "}
										{unit.crew.join(", ")}
									</div>
									<div className="text-sm text-muted-foreground">
										Last updated: {unit.lastUpdate}
									</div>
								</div>

								<div className="flex justify-end space-x-2">
									<Button variant="outline" size="sm">
										Track
									</Button>
									<Button variant="outline" size="sm">
										Contact
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
