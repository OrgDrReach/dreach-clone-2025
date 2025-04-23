"use client";

import React, { useState } from "react";
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
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Calendar as CalendarIcon, User } from "lucide-react";

interface DoctorSchedule {
	id: string;
	doctorName: string;
	department: string;
	shift: "morning" | "afternoon" | "night";
	startTime: string;
	endTime: string;
	status: "available" | "busy" | "off-duty";
}

export const DoctorSchedules: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

	// Mock data - Replace with actual data fetching
	const schedules: DoctorSchedule[] = [
		{
			id: "1",
			doctorName: "Dr. John Smith",
			department: "Cardiology",
			shift: "morning",
			startTime: "08:00",
			endTime: "14:00",
			status: "available",
		},
		{
			id: "2",
			doctorName: "Dr. Sarah Johnson",
			department: "Neurology",
			shift: "afternoon",
			startTime: "14:00",
			endTime: "20:00",
			status: "busy",
		},
		// Add more mock schedules as needed
	];

	const departments = [
		"all",
		"Cardiology",
		"Neurology",
		"Pediatrics",
		"Orthopedics",
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "available":
				return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
			case "busy":
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
			case "off-duty":
				return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
			default:
				return "";
		}
	};

	const filteredSchedules = schedules.filter(
		(schedule) =>
			selectedDepartment === "all" || schedule.department === selectedDepartment
	);

	return (
		<Card className="shadow-lg">
			<CardHeader className="border-b border-gray-200 dark:border-gray-700">
				<div className="flex items-center justify-between">
					<CardTitle className="text-2xl font-bold">Doctor Schedules</CardTitle>
					<div className="flex items-center gap-4">
						<Select
							value={selectedDepartment}
							onValueChange={setSelectedDepartment}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select Department" />
							</SelectTrigger>
							<SelectContent>
								{departments.map((dept) => (
									<SelectItem key={dept} value={dept}>
										{dept.charAt(0).toUpperCase() + dept.slice(1)}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<Calendar
							mode="single"
							selected={selectedDate}
							onSelect={(date) => date && setSelectedDate(date)}
							className="rounded-md border shadow"
						/>
					</div>
					<div className="md:col-span-2">
						<ScrollArea className="h-[400px]">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Doctor</TableHead>
										<TableHead>Department</TableHead>
										<TableHead>Shift</TableHead>
										<TableHead>Time</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{filteredSchedules.map((schedule) => (
										<TableRow key={schedule.id}>
											<TableCell className="font-medium">
												{schedule.doctorName}
											</TableCell>
											<TableCell>{schedule.department}</TableCell>
											<TableCell className="capitalize">
												{schedule.shift}
											</TableCell>
											<TableCell>
												<div className="flex items-center">
													<Clock className="mr-2 h-4 w-4 text-gray-500" />
													{schedule.startTime} - {schedule.endTime}
												</div>
											</TableCell>
											<TableCell>
												<Badge className={getStatusColor(schedule.status)}>
													{schedule.status}
												</Badge>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</ScrollArea>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
