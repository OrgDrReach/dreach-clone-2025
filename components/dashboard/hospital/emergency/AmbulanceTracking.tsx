import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

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
			id: "AMB002",
			vehicleNumber: "EM-456",
			status: "returning",
			location: "City Hospital",
			eta: 8,
			crew: ["Emily Clark", "Robert Brown"],
			lastUpdate: "2 mins ago",
			type: "basic",
		},
		{
			id: "AMB003",
			vehicleNumber: "EM-789",
			status: "maintenance",
			location: "Garage Station",
			crew: ["Sophia Lee", "Michael Scott"],
			lastUpdate: "10 mins ago",
			type: "critical",
		},
	];

	const getStatusColor = (status: AmbulanceUnit["status"]) => {
		const colors = {
			dispatched: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
			returning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			available: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
			maintenance: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
		};
		return colors[status];
	};

	return (
		<Card className="border-none shadow-lg bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-xl font-bold">🚑 Ambulance Tracking</CardTitle>
				<Button variant="outline" size="sm" className="border-gray-600">
					Dispatch Unit
				</Button>
			</CardHeader>
			<CardContent>
				<div className="grid gap-6 md:grid-cols-2">
					{ambulances.map((unit) => (
						<Card key={unit.id} className="p-4 bg-gray-50 dark:bg-gray-800 shadow-sm rounded-xl">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<Truck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
										<div>
											<h3 className="font-semibold text-lg">{unit.vehicleNumber}</h3>
											<p className="text-sm text-muted-foreground capitalize">{unit.type} unit</p>
										</div>
									</div>
									<Badge className={`${getStatusColor(unit.status)} px-3 py-1 text-xs font-semibold capitalize`}>
										{unit.status}
									</Badge>
								</div>

								<div className="space-y-1 text-sm">
									{unit.location && (
										<p>
											<span className="font-medium">Location:</span> {unit.location}
										</p>
									)}
									{unit.eta !== undefined && (
										<p>
											<span className="font-medium">ETA:</span> {unit.eta} min
										</p>
									)}
									<p>
										<span className="font-medium">Crew:</span> {unit.crew.join(", ")}
									</p>
									<p className="text-muted-foreground">Last updated: {unit.lastUpdate}</p>
								</div>

								<div className="flex justify-end space-x-2 pt-2">
									<Button variant="outline" size="sm" className="border-gray-500">
										Track
									</Button>
									<Button variant="outline" size="sm" className="border-gray-500">
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
