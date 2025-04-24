import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface EmergencyBed {
	id: string;
	type: string;
	total: number;
	occupied: number;
	status: "available" | "occupied" | "maintenance";
	department: string;
}

export const BedAvailability: React.FC = () => {
	const beds: EmergencyBed[] = [
		{
			id: "EB001",
			type: "ICU",
			total: 20,
			occupied: 15,
			status: "available",
			department: "Emergency",
		},
		// Add more mock data
	];

	const getStatusColor = (status: EmergencyBed["status"]) => {
		const colors = {
			available: "bg-green-100 text-green-800",
			occupied: "bg-red-100 text-red-800",
			maintenance: "bg-yellow-100 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Emergency Bed Availability</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					{beds.map((bed) => (
						<div key={bed.id} className="space-y-2">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">{bed.type}</h3>
									<p className="text-sm text-muted-foreground">
										{bed.department}
									</p>
								</div>
								<Badge className={getStatusColor(bed.status)}>
									{bed.total - bed.occupied} Available
								</Badge>
							</div>
							<Progress
								value={(bed.occupied / bed.total) * 100}
								className="h-2"
							/>
							<div className="flex justify-between text-sm text-muted-foreground">
								<span>{bed.occupied} Occupied</span>
								<span>{bed.total} Total</span>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
