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

interface Prescription {
	id: string;
	patientName: string;
	doctorName: string;
	medications: {
		name: string;
		dosage: string;
		quantity: number;
	}[];
	status: "Pending" | "Processing" | "Ready" | "Dispensed";
	date: string;
}

export const PrescriptionTracking: React.FC = () => {
	const prescriptions: Prescription[] = [
		{
			id: "PRE001",
			patientName: "John Doe",
			doctorName: "Dr. Smith",
			medications: [
				{ name: "Amoxicillin", dosage: "500mg", quantity: 20 },
				{ name: "Paracetamol", dosage: "500mg", quantity: 15 },
			],
			status: "Pending",
			date: "2025-04-24",
		},
		// Add more prescriptions
	];

	const getStatusColor = (status: Prescription["status"]) => {
		const colors = {
			Pending: "bg-yellow-100 text-yellow-800",
			Processing: "bg-blue-100 text-blue-800",
			Ready: "bg-green-100 text-green-800",
			Dispensed: "bg-gray-100 text-gray-800",
		};
		return colors[status];
	};

	return (
		<Card className= "border-2 border-gray-600">
			<CardHeader>
				<CardTitle>Prescription Tracking</CardTitle>
			</CardHeader>
			<CardContent>
				<Table className = "border-2 border-gray-500">
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Patient</TableHead>
							<TableHead>Doctor</TableHead>
							<TableHead>Medications</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{prescriptions.map((prescription) => (
							<TableRow key={prescription.id}>
								<TableCell>{prescription.id}</TableCell>
								<TableCell>{prescription.patientName}</TableCell>
								<TableCell>{prescription.doctorName}</TableCell>
								<TableCell>
									{prescription.medications.map((med, index) => (
										<div key={index} className="text-sm">
											{med.name} - {med.dosage} (Qty: {med.quantity})
										</div>
									))}
								</TableCell>
								<TableCell>
									<Badge className={getStatusColor(prescription.status)}>
										{prescription.status}
									</Badge>
								</TableCell>
								<TableCell>{prescription.date}</TableCell>
								<TableCell>
									<Button size="sm">Update Status</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};
