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
			"on-duty": "bg-green-400 text-green-800",
			"off-duty": "bg-red-400 text-red-800",
			break: "bg-yellow-400 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<div className="p-8">
			<Card className="overflow-hidden border-0 shadow-xl rounded-xl bg-white dark:bg-gray-800">
				<CardHeader className="py-4">
					<CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Staff Assignment</CardTitle>
				</CardHeader>
				<CardContent className="px-4 py-6">
					<Table className="w-full table-auto">
						<TableHeader>
							<TableRow className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg">
								<TableHead className="py-2 px-4 text-left">Name</TableHead>
								<TableHead className="py-2 px-4 text-left">Role</TableHead>
								<TableHead className="py-2 px-4 text-left">Status</TableHead>
								<TableHead className="py-2 px-4 text-left">Assigned Area</TableHead>
								<TableHead className="py-2 px-4 text-left">Shift</TableHead>
								<TableHead className="py-2 px-4 text-left">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{staffList.map((staff) => (
								<TableRow
									key={staff.id}
									className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
								>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{staff.name}</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{staff.role}</TableCell>
									<TableCell>
										<Badge className={`${getStatusColor(staff.status)} py-1 px-3 rounded-full`}>
											{staff.status}
										</Badge>
									</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">
										{staff.assignedArea || "Unassigned"}
									</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{staff.shift}</TableCell>
									<TableCell className="py-2 px-4">
										<Button
											variant="outline"
											size="sm"
											className="border-2 border-gray-500 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-lg transition-colors"
										>
											Reassign
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};
