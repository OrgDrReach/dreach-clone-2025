"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Phone, User } from "lucide-react";

interface OnCallDoctor {
	id: string;
	name: string;
	department: string;
	shift: "day" | "night";
	startTime: string;
	endTime: string;
	status: "active" | "standby" | "off-duty";
	contactNumber: string;
	avatar?: string;
}

export const OnCallRotation: React.FC = () => {
	// Mock data - Replace with actual API call
	const onCallDoctors: OnCallDoctor[] = [
		{
			id: "1",
			name: "Dr. Sarah Johnson",
			department: "Emergency Medicine",
			shift: "day",
			startTime: "07:00",
			endTime: "19:00",
			status: "active",
			contactNumber: "+1-555-0123",
			avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		},
		{
			id: "2",
			name: "Dr. Michael Chen",
			department: "ICU",
			shift: "night",
			startTime: "19:00",
			endTime: "07:00",
			status: "standby",
			contactNumber: "+1-555-0124",
			avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		},
		{
			id: "3",
			name: "Dr. Emily Wilson",
			department: "Pediatrics",
			shift: "day",
			startTime: "07:00",
			endTime: "19:00",
			status: "off-duty",
			contactNumber: "+1-555-0125",
			avatar: "https://randomuser.me/api/portraits/women/3.jpg",
		},
	];

	const getStatusColor = (status: OnCallDoctor["status"]) => {
		const colors = {
			active:
				"bg-green-400 text-green-800 dark:bg-green-900 dark:text-green-300",
			standby:
				"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			"off-duty":
				"bg-gray-400 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
		};
		return colors[status];
	};

	const getShiftColor = (shift: OnCallDoctor["shift"]) => {
		return shift === "day" ?
				"text-blue-600 dark:text-blue-400"
			:	"text-indigo-600 dark:text-indigo-400";
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl font-bold">On-Call Rotation</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					<Table>
						<TableHeader>
							<TableRow className="bg-slate-100 dark:bg-slate-800">
								<TableHead className="font-semibold">Doctor</TableHead>
								<TableHead className="font-semibold">Department</TableHead>
								<TableHead className="font-semibold">Shift</TableHead>
								<TableHead className="font-semibold">Contact</TableHead>
								<TableHead className="font-semibold">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{onCallDoctors.map((doctor) => (
								<TableRow
									key={doctor.id}
									className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
									<TableCell>
										<div className="flex items-center space-x-3">
											<Avatar>
												<AvatarImage src={doctor.avatar} />
												<AvatarFallback>
													<User className="h-4 w-4" />
												</AvatarFallback>
											</Avatar>
											<span className="font-medium">{doctor.name}</span>
										</div>
									</TableCell>
									<TableCell>{doctor.department}</TableCell>
									<TableCell>
										<div
											className={`flex items-center space-x-2 ${getShiftColor(doctor.shift)}`}>
											<Clock className="h-4 w-4" />
											<span>
												{doctor.startTime} - {doctor.endTime}
											</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center space-x-2">
											<Phone className="h-4 w-4 text-gray-500" />
											<span>{doctor.contactNumber}</span>
										</div>
									</TableCell>
									<TableCell>
										<Badge className={getStatusColor(doctor.status)}>
											{doctor.status}
										</Badge>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					<div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
						<h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
							On-Call Schedule Notes:
						</h3>
						<ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
							<li>• Day shift: 07:00 - 19:00</li>
							<li>• Night shift: 19:00 - 07:00</li>
							<li>• Active: Currently on duty</li>
							<li>• Standby: Available for emergency calls</li>
							<li>• Off-duty: Not available for calls</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
