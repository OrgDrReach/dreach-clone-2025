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

interface TriagePatient {
	id: string;
	name: string;
	condition: string;
	severity: "Critical" | "Serious" | "Stable";
	waitTime: number;
	assignedTo?: string;
}

export const PatientTriage: React.FC = () => {
	const patients: TriagePatient[] = [
		{
			id: "TP001",
			name: "John Doe",
			condition: "Chest Pain",
			severity: "Critical",
			waitTime: 0,
			assignedTo: "Dr. Smith",
		},
		// Add more mock data
	];

	const getSeverityColor = (severity: TriagePatient["severity"]) => {
		const colors = {
			Critical: "bg-red-100 text-red-800",
			Serious: "bg-yellow-100 text-yellow-800",
			Stable: "bg-green-100 text-green-800",
		};
		return colors[severity];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Patient Triage</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Patient</TableHead>
							<TableHead>Condition</TableHead>
							<TableHead>Severity</TableHead>
							<TableHead>Wait Time</TableHead>
							<TableHead>Assigned To</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{patients.map((patient) => (
							<TableRow key={patient.id}>
								<TableCell>{patient.name}</TableCell>
								<TableCell>{patient.condition}</TableCell>
								<TableCell>
									<Badge className={getSeverityColor(patient.severity)}>
										{patient.severity}
									</Badge>
								</TableCell>
								<TableCell>{patient.waitTime} mins</TableCell>
								<TableCell>{patient.assignedTo || "Unassigned"}</TableCell>
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
