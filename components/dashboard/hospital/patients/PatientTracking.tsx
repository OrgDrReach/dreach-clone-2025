"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	MapPin,
	Clock,
	User,
	Activity,
	CalendarClock,
	HeartPulse,
	Thermometer,
} from "lucide-react";

interface VitalSign {
	type: string;
	value: string;
	unit: string;
	time: string;
	status: "Normal" | "Warning" | "Critical";
}

interface PatientLocation {
	id: string;
	patientId: string;
	patientName: string;
	currentLocation: string;
	lastUpdated: string;
	status: "In Room" | "In Treatment" | "In Transit" | "Off Floor";
	assignedNurse: string;
	vitalSigns: VitalSign[];
	nextActivity?: {
		type: string;
		time: string;
		location: string;
	};
}

const PatientTracking: React.FC = () => {
	const patientLocations: PatientLocation[] = [
		{
			id: "TRK001",
			patientId: "P001",
			patientName: "John Doe",
			currentLocation: "Room 304",
			lastUpdated: "2025-04-23 10:30 AM",
			status: "In Room",
			assignedNurse: "Nurse Johnson",
			vitalSigns: [
				{
					type: "Heart Rate",
					value: "72",
					unit: "bpm",
					time: "10:30 AM",
					status: "Normal",
				},
				{
					type: "Blood Pressure",
					value: "120/80",
					unit: "mmHg",
					time: "10:30 AM",
					status: "Normal",
				},
				{
					type: "Temperature",
					value: "37.2",
					unit: "°C",
					time: "10:30 AM",
					status: "Normal",
				},
			],
			nextActivity: {
				type: "Medication",
				time: "11:00 AM",
				location: "Room 304",
			},
		},
		// Add more mock data as needed
	];

	const getStatusColor = (status: PatientLocation["status"]) => {
		const colors = {
			"In Room": "bg-green-100 text-green-800",
			"In Treatment": "bg-blue-100 text-blue-800",
			"In Transit": "bg-yellow-100 text-yellow-800",
			"Off Floor": "bg-gray-100 text-gray-800",
		};
		return colors[status];
	};

	const getVitalStatusColor = (status: VitalSign["status"]) => {
		const colors = {
			Normal: "text-green-600",
			Warning: "text-yellow-600",
			Critical: "text-red-600",
		};
		return colors[status];
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Patient Tracking</h2>
				<div className="flex space-x-2">
					<Button variant="outline">
						<Activity className="w-4 h-4 mr-2" />
						View Activity Log
					</Button>
					<Button>
						<MapPin className="w-4 h-4 mr-2" />
						Floor Map View
					</Button>
				</div>
			</div>

			<div className="grid gap-6">
				{patientLocations.map((location) => (
					<Card key={location.id}>
						<CardContent className="p-6">
							<div className="space-y-4">
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-lg font-semibold">
											{location.patientName}
										</h3>
										<div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
											<div className="flex items-center">
												<MapPin className="w-4 h-4 mr-1" />
												{location.currentLocation}
											</div>
											<div className="flex items-center">
												<User className="w-4 h-4 mr-1" />
												{location.assignedNurse}
											</div>
											<div className="flex items-center">
												<Clock className="w-4 h-4 mr-1" />
												Last updated: {location.lastUpdated}
											</div>
										</div>
									</div>
									<Badge className={getStatusColor(location.status)}>
										{location.status}
									</Badge>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{location.vitalSigns.map((vital, index) => (
										<Card key={index}>
											<CardContent className="p-4">
												<div className="flex items-center justify-between">
													<div className="flex items-center space-x-2">
														{vital.type === "Heart Rate" && (
															<HeartPulse className="w-4 h-4" />
														)}
														{vital.type === "Temperature" && (
															<Thermometer className="w-4 h-4" />
														)}
														<span className="font-medium">{vital.type}</span>
													</div>
													<span
														className={`font-bold ${getVitalStatusColor(
															vital.status
														)}`}>
														{vital.value} {vital.unit}
													</span>
												</div>
											</CardContent>
										</Card>
									))}
								</div>

								{location.nextActivity && (
									<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
										<div className="flex items-center space-x-3">
											<CalendarClock className="w-5 h-5 text-blue-500" />
											<div>
												<p className="font-medium">
													Next: {location.nextActivity.type}
												</p>
												<p className="text-sm text-gray-500">
													{location.nextActivity.time} at{" "}
													{location.nextActivity.location}
												</p>
											</div>
										</div>
										<Button variant="outline" size="sm">
											View Schedule
										</Button>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default PatientTracking;
