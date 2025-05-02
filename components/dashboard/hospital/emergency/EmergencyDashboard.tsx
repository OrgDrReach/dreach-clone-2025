import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

				{/* Total Patients Card */}
				<Card className="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 shadow-lg rounded-xl transition-transform hover:scale-[1.02]">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-semibold">
							Total Patients
						</CardTitle>
						<AlertTriangle className="h-5 w-5" />
					</CardHeader>
					<CardContent>
						<div className="text-3xl font-bold">{stats.totalPatients}</div>
						<div className="text-xs mt-1">
							{stats.criticalCases} critical cases
						</div>
						<Progress
							value={(stats.criticalCases / stats.totalPatients) * 100}
							className="mt-3 h-2 bg-yellow-200"
						/>
					</CardContent>
				</Card>

				{/* Available Beds Card */}
				<Card className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 shadow-lg rounded-xl transition-transform hover:scale-[1.02]">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-semibold">
							Available Beds
						</CardTitle>
						<Bed className="h-5 w-5" />
					</CardHeader>
					<CardContent>
						<div className="text-3xl font-bold">{stats.availableBeds}</div>
						<div className="text-xs mt-1">
							{stats.activeAmbulances} ambulances active
						</div>
					</CardContent>
				</Card>

				{/* Staff On Duty Card */}
				<Card className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 shadow-lg rounded-xl transition-transform hover:scale-[1.02]">
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-semibold">
							Staff On Duty
						</CardTitle>
						<Users className="h-5 w-5" />
					</CardHeader>
					<CardContent>
						<div className="text-3xl font-bold">{stats.staffOnDuty}</div>
						<div className="text-xs mt-1">
							Average wait time: {stats.averageWaitTime} mins
						</div>
					</CardContent>
				</Card>

			</div>
		</div>
	);
};
