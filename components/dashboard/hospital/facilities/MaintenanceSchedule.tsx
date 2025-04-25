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

interface MaintenanceTask {
	id: string;
	area: string;
	type: "routine" | "preventive" | "repair";
	priority: "high" | "medium" | "low";
	scheduledDate: string;
	assignedTo: string;
	status: "pending" | "in-progress" | "completed";
	description: string;
}

export const MaintenanceSchedule: React.FC = () => {
	const tasks: MaintenanceTask[] = [
		{
			id: "MT001",
			area: "Emergency Ward",
			type: "routine",
			priority: "high",
			scheduledDate: "2025-04-25",
			assignedTo: "John Smith",
			status: "pending",
			description: "HVAC system maintenance",
		},
		// Add more tasks
	];

	const getPriorityColor = (priority: MaintenanceTask["priority"]) => {
		const colors = {
			high: "bg-red-100 text-red-800",
			medium: "bg-yellow-100 text-yellow-800",
			low: "bg-blue-100 text-blue-800",
		};
		return colors[priority];
	};

	const getStatusColor = (status: MaintenanceTask["status"]) => {
		const colors = {
			pending: "bg-yellow-100 text-yellow-800",
			"in-progress": "bg-blue-100 text-blue-800",
			completed: "bg-green-100 text-green-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Maintenance Schedule</CardTitle>
					<Button>Add Task</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Area</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Priority</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Assigned To</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{tasks.map((task) => (
							<TableRow key={task.id}>
								<TableCell>
									<div className="font-medium">{task.area}</div>
									<div className="text-sm text-muted-foreground">
										{task.description}
									</div>
								</TableCell>
								<TableCell className="capitalize">{task.type}</TableCell>
								<TableCell>
									<Badge className={getPriorityColor(task.priority)}>
										{task.priority}
									</Badge>
								</TableCell>
								<TableCell>{task.scheduledDate}</TableCell>
								<TableCell>{task.assignedTo}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(task.status)}>
										{task.status}
									</Badge>
								</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										Update
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
