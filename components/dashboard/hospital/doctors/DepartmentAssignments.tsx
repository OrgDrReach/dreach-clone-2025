"use client";

import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

interface DepartmentAssignment {
	doctorId: string;
	doctorName: string;
	department: EHospitalSpecialization;
	role: string;
	schedule: string;
	status: "active" | "on-leave" | "unavailable";
}

export const DepartmentAssignments: React.FC = () => {
	const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

	// Mock data - Replace with actual API call
	const assignments: DepartmentAssignment[] = [
		{
			doctorId: "D1",
			doctorName: "Dr. Sarah Johnson",
			department: EHospitalSpecialization.CARDIOLOGY,
			role: "Head of Department",
			schedule: "Mon-Fri, 9:00-17:00",
			status: "active",
		},
		{
			doctorId: "D2",
			doctorName: "Dr. Michael Chen",
			department: EHospitalSpecialization.NEUROLOGY,
			role: "Senior Specialist",
			schedule: "Tue-Sat, 10:00-18:00",
			status: "active",
		},
		{
			doctorId: "D3",
			doctorName: "Dr. Emily Wilson",
			department: EHospitalSpecialization.PEDIATRICS,
			role: "Specialist",
			schedule: "Mon-Fri, 8:00-16:00",
			status: "on-leave",
		},	{
			doctorId: "D1",
			doctorName: "Dr. Sarah Johnson",
			department: EHospitalSpecialization.CARDIOLOGY,
			role: "Head of Department",
			schedule: "Mon-Fri, 9:00-17:00",
			status: "active",
		},
		{
			doctorId: "D2",
			doctorName: "Dr. Michael Chen",
			department: EHospitalSpecialization.NEUROLOGY,
			role: "Senior Specialist",
			schedule: "Tue-Sat, 10:00-18:00",
			status: "active",
		},
		{
			doctorId: "D3",
			doctorName: "Dr. Emily Wilson",
			department: EHospitalSpecialization.PEDIATRICS,
			role: "Specialist",
			schedule: "Mon-Fri, 8:00-16:00",
			status: "on-leave",
		},	{
			doctorId: "D1",
			doctorName: "Dr. Sarah Johnson",
			department: EHospitalSpecialization.CARDIOLOGY,
			role: "Head of Department",
			schedule: "Mon-Fri, 9:00-17:00",
			status: "active",
		},
		{
			doctorId: "D2",
			doctorName: "Dr. Michael Chen",
			department: EHospitalSpecialization.NEUROLOGY,
			role: "Senior Specialist",
			schedule: "Tue-Sat, 10:00-18:00",
			status: "active",
		},
		{
			doctorId: "D3",
			doctorName: "Dr. Emily Wilson",
			department: EHospitalSpecialization.PEDIATRICS,
			role: "Specialist",
			schedule: "Mon-Fri, 8:00-16:00",
			status: "on-leave",
		},	{
			doctorId: "D1",
			doctorName: "Dr. Sarah Johnson",
			department: EHospitalSpecialization.CARDIOLOGY,
			role: "Head of Department",
			schedule: "Mon-Fri, 9:00-17:00",
			status: "active",
		},
		{
			doctorId: "D2",
			doctorName: "Dr. Michael Chen",
			department: EHospitalSpecialization.NEUROLOGY,
			role: "Senior Specialist",
			schedule: "Tue-Sat, 10:00-18:00",
			status: "active",
		},
		{
			doctorId: "D3",
			doctorName: "Dr. Emily Wilson",
			department: EHospitalSpecialization.PEDIATRICS,
			role: "Specialist",
			schedule: "Mon-Fri, 8:00-16:00",
			status: "on-leave",
		},
	];

	const getStatusColor = (status: DepartmentAssignment["status"]) => {
		const colors = {
			active:
				"bg-green-400 text-green-800 dark:bg-green-900 dark:text-green-300",
			"on-leave":
				"bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			unavailable:
				"bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
		};
		return colors[status];
	};

	const departments = [
		{ value: "all", label: "All Departments" },
		...Object.values(EHospitalSpecialization).map((dept) => ({
			value: dept,
			label: dept.replace(/([A-Z])/g, " $1").trim(),
		})),
	];

	const filteredAssignments = assignments.filter(
		(assignment) =>
			selectedDepartment === "all" ||
			assignment.department === selectedDepartment
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Department Assignments</CardTitle>
				<CardDescription>
					Doctor assignments across hospital departments
				</CardDescription>
				<div className="mt-4">
					<Select
						value={selectedDepartment}
						onValueChange={setSelectedDepartment}>
						<SelectTrigger className="w-[200px]">
							<SelectValue placeholder="Select Department" />
						</SelectTrigger>
						<SelectContent>
							{departments.map((dept) => (
								<SelectItem key={dept.value} value={dept.value}>
									{dept.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[280px] w-full">
					<Table>
						<TableHeader>
							<TableRow className="bg-slate-50 dark:bg-slate-800">
								<TableHead className="font-semibold">Doctor</TableHead>
								<TableHead className="font-semibold">Department</TableHead>
								<TableHead className="font-semibold">Role</TableHead>
								<TableHead className="font-semibold">Schedule</TableHead>
								<TableHead className="font-semibold">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredAssignments.map((assignment) => (
								<TableRow
									key={assignment.doctorId}
									className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
									<TableCell className="font-medium">
										{assignment.doctorName}
									</TableCell>
									<TableCell>{assignment.department}</TableCell>
									<TableCell>{assignment.role}</TableCell>
									<TableCell>{assignment.schedule}</TableCell>
									<TableCell>
										<Badge className={getStatusColor(assignment.status)}>
											{assignment.status}
										</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
