import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface SecurityDevice {
	id: string;
	type: "camera" | "sensor" | "alarm" | "access-control";
	location: string;
	status: "active" | "inactive" | "maintenance";
	lastChecked: string;
	batteryLevel?: number;
	coverage: string;
	incidents?: number;
}

export const SecuritySystem: React.FC = () => {
	const devices: SecurityDevice[] = [
		{
			id: "SEC001",
			type: "camera",
			location: "Main Entrance",
			status: "active",
			lastChecked: "2025-04-24",
			batteryLevel: 85,
			coverage: "180°",
			incidents: 0,
		},
		// Add more devices
	];

	const getStatusColor = (status: SecurityDevice["status"]) => {
		const colors = {
			active: "bg-green-100 text-green-800",
			inactive: "bg-red-100 text-red-800",
			maintenance: "bg-yellow-100 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Security System</CardTitle>
					<Button>Add Device</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Device</TableHead>
							<TableHead>Location</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Battery</TableHead>
							<TableHead>Coverage</TableHead>
							<TableHead>Incidents</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{devices.map((device) => (
							<TableRow key={device.id}>
								<TableCell>
									<div className="font-medium capitalize">{device.type}</div>
									<div className="text-sm text-muted-foreground">
										ID: {device.id}
									</div>
								</TableCell>
								<TableCell>{device.location}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(device.status)}>
										{device.status}
									</Badge>
								</TableCell>
								<TableCell>
									{device.batteryLevel ? `${device.batteryLevel}%` : "N/A"}
								</TableCell>
								<TableCell>{device.coverage}</TableCell>
								<TableCell>{device.incidents || 0}</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										View
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};
