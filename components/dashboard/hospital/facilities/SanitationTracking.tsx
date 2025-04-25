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

interface SanitationTask {
	id: string;
	area: string;
	priority: "high" | "medium" | "low";
	frequency: "daily" | "weekly" | "monthly";
	lastCleaned: string;
	nextScheduled: string;
	assignedTo: string;
	status: "pending" | "in-progress" | "completed" | "verified";
	notes?: string;
}

export const SanitationTracking: React.FC = () => {
	const tasks: SanitationTask[] = [
		{
			id: "SAN001",
			area: "Operating Room 1",
			priority: "high",
			frequency: "daily",
			lastCleaned: "2025-04-24",
			nextScheduled: "2025-04-25",
			assignedTo: "Cleaning Team A",
			status: "completed",
			notes: "Deep cleaning required",
		},
		// Add more tasks
	];

	const getStatusColor = (status: SanitationTask["status"]) => {
		const colors = {
			pending: "bg-yellow-100 text-yellow-800",
			"in-progress": "bg-blue-100 text-blue-800",
			completed: "bg-green-100 text-green-800",
			verified: "bg-purple-100 text-purple-800",
		};
		return colors[status];
	};

	const getPriorityColor = (priority: SanitationTask["priority"]) => {
		const colors = {
			high: "bg-red-100 text-red-800",
			medium: "bg-yellow-100 text-yellow-800",
			low: "bg-blue-100 text-blue-800",
		};
		return colors[priority];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Sanitation Tracking</CardTitle>
					<Button>Add Task</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Area</TableHead>
							<TableHead>Priority</TableHead>
							<TableHead>Schedule</TableHead>
							<TableHead>Last Cleaned</TableHead>
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
										{task.notes}
									</div>
								</TableCell>
								<TableCell>
									<Badge className={getPriorityColor(task.priority)}>
										{task.priority}
									</Badge>
								</TableCell>
								<TableCell className="capitalize">{task.frequency}</TableCell>
								<TableCell>{task.lastCleaned}</TableCell>
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
