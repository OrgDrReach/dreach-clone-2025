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

interface EmergencyStaff {
	id: string;
	name: string;
	role: string;
	status: "on-duty" | "off-duty" | "break";
	department: string;
	assignedArea?: string;
	shift: string;
}

export const StaffAssignment: React.FC = () => {
	const staffList: EmergencyStaff[] = [
		{
			id: "ES001",
			name: "Dr. Sarah Johnson",
			role: "Emergency Physician",
			status: "on-duty",
			department: "Emergency",
			assignedArea: "Trauma Bay 1",
			shift: "Morning",
		},
		// Add more mock data as needed
	];

	const getStatusColor = (status: EmergencyStaff["status"]) => {
		const colors = {
			"on-duty": "bg-green-100 text-green-800",
			"off-duty": "bg-red-100 text-red-800",
			break: "bg-yellow-100 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<Card className="border-2 border-gray-500">
			<CardHeader>
				<CardTitle>Staff Assignment</CardTitle>
			</CardHeader>
			<CardContent>
				<Table className="border-2 border-gray-500">
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Assigned Area</TableHead>
							<TableHead>Shift</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{staffList.map((staff) => (
							<TableRow key={staff.id}>
								<TableCell>{staff.name}</TableCell>
								<TableCell>{staff.role}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(staff.status)}>
										{staff.status}
									</Badge>
								</TableCell>
								<TableCell>{staff.assignedArea || "Unassigned"}</TableCell>
								<TableCell>{staff.shift}</TableCell>
								<TableCell>
									<Button variant="outline" size="sm" className="border-2 border-gray-500">
										Reassign
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
