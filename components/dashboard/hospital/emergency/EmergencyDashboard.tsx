import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Users, Bed, Ambulance } from "lucide-react";

interface EmergencyStats {
	totalPatients: number;
	criticalCases: number;
	availableBeds: number;
	activeAmbulances: number;
	staffOnDuty: number;
	averageWaitTime: number;
}

export const EmergencyDashboard: React.FC = () => {
	const stats: EmergencyStats = {
		totalPatients: 45,
		criticalCases: 8,
		availableBeds: 12,
		activeAmbulances: 5,
		staffOnDuty: 20,
		averageWaitTime: 15,
	};

	return (
		<div className="grid gap-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">
							Total Patients
						</CardTitle>
						<AlertTriangle className="h-4 w-4 text-yellow-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.totalPatients}</div>
						<div className="text-xs text-muted-foreground">
							{stats.criticalCases} critical cases
						</div>
						<Progress
							value={(stats.criticalCases / stats.totalPatients) * 100}
							className="mt-3"
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">
							Available Beds
						</CardTitle>
						<Bed className="h-4 w-4 text-blue-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.availableBeds}</div>
						<div className="text-xs text-muted-foreground">
							{stats.activeAmbulances} ambulances active
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">Staff On Duty</CardTitle>
						<Users className="h-4 w-4 text-green-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.staffOnDuty}</div>
						<div className="text-xs text-muted-foreground">
							Average wait time: {stats.averageWaitTime} mins
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
