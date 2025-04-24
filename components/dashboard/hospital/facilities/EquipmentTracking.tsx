import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Equipment {
	id: string;
	name: string;
	department: string;
	status: "operational" | "maintenance" | "out-of-order";
	lastMaintenance: string;
	nextMaintenance: string;
	utilization: number;
	condition: "good" | "fair" | "poor";
	calibrationDue?: string;
}

export const EquipmentTracking: React.FC = () => {
	const equipment: Equipment[] = [
		{
			id: "EQ001",
			name: "MRI Machine",
			department: "Radiology",
			status: "operational",
			lastMaintenance: "2025-03-15",
			nextMaintenance: "2025-06-15",
			utilization: 75,
			condition: "good",
			calibrationDue: "2025-07-01",
		},
		// Add more equipment
	];

	const getStatusColor = (status: Equipment["status"]) => {
		const colors = {
			operational: "bg-green-100 text-green-800",
			maintenance: "bg-yellow-100 text-yellow-800",
			"out-of-order": "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	const getConditionColor = (condition: Equipment["condition"]) => {
		const colors = {
			good: "text-green-600",
			fair: "text-yellow-600",
			poor: "text-red-600",
		};
		return colors[condition];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Equipment Tracking</CardTitle>
					<Button>Add Equipment</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Equipment</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Maintenance</TableHead>
							<TableHead>Utilization</TableHead>
							<TableHead>Condition</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{equipment.map((item) => (
							<TableRow key={item.id}>
								<TableCell>
									<div className="font-medium">{item.name}</div>
									<div className="text-sm text-muted-foreground">
										ID: {item.id}
									</div>
								</TableCell>
								<TableCell>{item.department}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(item.status)}>
										{item.status}
									</Badge>
								</TableCell>
								<TableCell>
									<div className="text-sm">
										<div>Last: {item.lastMaintenance}</div>
										<div>Next: {item.nextMaintenance}</div>
									</div>
								</TableCell>
								<TableCell>
									<div className="space-y-2">
										<Progress value={item.utilization} className="h-2" />
										<div className="text-sm text-muted-foreground">
											{item.utilization}%
										</div>
									</div>
								</TableCell>
								<TableCell>
									<span className={getConditionColor(item.condition)}>
										{item.condition}
									</span>
								</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										Details
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
