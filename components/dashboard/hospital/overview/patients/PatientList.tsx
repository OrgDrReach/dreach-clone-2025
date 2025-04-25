"use client";

import React from "react";
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
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface Patient {
	id: string;
	name: string;
	age: number;
	gender: string;
	admissionDate: string;
	ward: string;
	status: "Admitted" | "Discharged" | "Critical" | "Stable";
}

const PatientList: React.FC = () => {
	const patients: Patient[] = [
		{
			id: "P001",
			name: "John Doe",
			age: 45,
			gender: "Male",
			admissionDate: "2025-04-20",
			ward: "Cardiology",
			status: "Stable",
		},
		// Add more mock data as needed
	];

	const getStatusColor = (status: Patient["status"]) => {
		switch (status) {
			case "Admitted":
				return "bg-blue-100 text-blue-800";
			case "Discharged":
				return "bg-green-100 text-green-800";
			case "Critical":
				return "bg-red-100 text-red-800";
			case "Stable":
				return "bg-yellow-100 text-yellow-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
						<Input
							placeholder="Search patients..."
							className="w-[300px] pl-9"
						/>
					</div>
					<Button variant="outline" size="icon">
						<Filter className="w-4 h-4" />
					</Button>
				</div>
				<Button>Add New Patient</Button>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Patient ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Age</TableHead>
							<TableHead>Gender</TableHead>
							<TableHead>Admission Date</TableHead>
							<TableHead>Ward</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{patients.map((patient) => (
							<TableRow key={patient.id}>
								<TableCell>{patient.id}</TableCell>
								<TableCell>{patient.name}</TableCell>
								<TableCell>{patient.age}</TableCell>
								<TableCell>{patient.gender}</TableCell>
								<TableCell>{patient.admissionDate}</TableCell>
								<TableCell>{patient.ward}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(patient.status)}>
										{patient.status}
									</Badge>
								</TableCell>
								<TableCell className="text-right">
									<Button variant="ghost" size="sm">
										View
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default PatientList;
