import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
		{
			id: "EB002",
			type: "General Ward",
			total: 30,
			occupied: 30,
			status: "occupied",
			department: "Surgery",
		},
		{
			id: "EB003",
			type: "Pediatric",
			total: 10,
			occupied: 5,
			status: "maintenance",
			department: "Children’s Health",
		},
	];

	const getStatusColor = (status: EmergencyBed["status"]) => {
		const colors = {
			available: "bg-green-400 text-green-800 dark:bg-green-900 dark:text-green-300",
			occupied: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
			maintenance: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
		};
		return colors[status];
	};

	const getProgressGradient = (status: EmergencyBed["status"]) => {
		const gradients = {
			available: "bg-gradient-to-r from-green-400 to-green-600",
			occupied: "bg-gradient-to-r from-red-400 to-red-600",
			maintenance: "bg-gradient-to-r from-yellow-400 to-yellow-600",
		};
		return gradients[status];
	};

	return (
		<Card className="border-none shadow-xl bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl">
			<CardHeader>
				<CardTitle className="text-xl font-bold">🛏️ Emergency Bed Availability</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{beds.map((bed) => {
					const progress = (bed.occupied / bed.total) * 100;
					const available = bed.total - bed.occupied;

					return (
						<div key={bed.id} className="space-y-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-lg font-semibold">{bed.type}</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400">{bed.department}</p>
								</div>
								<Badge className={`${getStatusColor(bed.status)} px-3 py-1 rounded-full text-xs font-semibold`}>
									{available > 0 ? `${available} Available` : "Fully Occupied"}
								</Badge>
							</div>
							<div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
								<div
									className={`${getProgressGradient(bed.status)} h-2 rounded-full transition-all duration-500`}
									style={{ width: `${progress}%` }}
								></div>
							</div>
							<div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
								<span>{bed.occupied} Occupied</span>
								<span>{bed.total} Total</span>
							</div>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};
