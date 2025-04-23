"use client";

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
import { CalendarIcon, Clock, Hospital } from "lucide-react";

interface AdmissionRecord {
	id: string;
	admissionDate: string;
	dischargeDate: string | null;
	ward: string;
	roomNumber: string;
	admittingDoctor: string;
	diagnosis: string;
	status: "Active" | "Discharged" | "Transferred";
	notes: string;
}

const AdmissionHistory: React.FC = () => {
	// Mock admission history data
	const admissionHistory: AdmissionRecord[] = [
		{
			id: "ADM001",
			admissionDate: "2025-04-20",
			dischargeDate: null,
			ward: "Cardiology",
			roomNumber: "304",
			admittingDoctor: "Dr. Sarah Smith",
			diagnosis: "Acute Myocardial Infarction",
			status: "Active",
			notes: "Patient under observation",
		},
		{
			id: "ADM002",
			admissionDate: "2024-12-15",
			dischargeDate: "2024-12-20",
			ward: "General Medicine",
			roomNumber: "205",
			admittingDoctor: "Dr. John Williams",
			diagnosis: "Pneumonia",
			status: "Discharged",
			notes: "Completed treatment successfully",
		},
	];

	const getStatusColor = (status: AdmissionRecord["status"]) => {
		switch (status) {
			case "Active":
				return "bg-green-100 text-green-800";
			case "Discharged":
				return "bg-blue-100 text-blue-800";
			case "Transferred":
				return "bg-yellow-100 text-yellow-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Admission History
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Admission ID</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Ward</TableHead>
									<TableHead>Doctor</TableHead>
									<TableHead>Diagnosis</TableHead>
									<TableHead>Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{admissionHistory.map((record) => (
									<TableRow key={record.id}>
										<TableCell className="font-medium">{record.id}</TableCell>
										<TableCell>
											<div className="flex flex-col">
												<div className="flex items-center space-x-2">
													<CalendarIcon className="h-4 w-4 text-gray-500" />
													<span>Admitted: {record.admissionDate}</span>
												</div>
												{record.dischargeDate && (
													<div className="flex items-center space-x-2 text-gray-500">
														<Clock className="h-4 w-4" />
														<span>Discharged: {record.dischargeDate}</span>
													</div>
												)}
											</div>
										</TableCell>
										<TableCell>
											<div className="flex items-center space-x-2">
												<Hospital className="h-4 w-4 text-gray-500" />
												<span>{record.ward}</span>
												<span className="text-gray-500">
													({record.roomNumber})
												</span>
											</div>
										</TableCell>
										<TableCell>{record.admittingDoctor}</TableCell>
										<TableCell>{record.diagnosis}</TableCell>
										<TableCell>
											<Badge className={getStatusColor(record.status)}>
												{record.status}
											</Badge>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-xl font-bold">
						Admission Statistics
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 border rounded-lg">
							<h3 className="text-sm font-medium text-gray-500">
								Total Admissions
							</h3>
							<p className="text-2xl font-bold">{admissionHistory.length}</p>
						</div>
						<div className="p-4 border rounded-lg">
							<h3 className="text-sm font-medium text-gray-500">
								Average Stay Duration
							</h3>
							<p className="text-2xl font-bold">5 days</p>
						</div>
						<div className="p-4 border rounded-lg">
							<h3 className="text-sm font-medium text-gray-500">
								Current Status
							</h3>
							<p className="text-2xl font-bold">Active</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default AdmissionHistory;
