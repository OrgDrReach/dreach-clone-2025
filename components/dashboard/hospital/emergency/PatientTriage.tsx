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
			Critical: "bg-red-500 text-white",
			Serious: "bg-yellow-500 text-white",
			Stable: "bg-green-500 text-white",
		};
		return colors[severity];
	};

	return (
		<div className="p-8">
			<Card className="overflow-hidden border-0 shadow-xl rounded-xl bg-white dark:bg-gray-800">
				<CardHeader className="py-4">
					<CardTitle className="text-xl font-semibold">Patient Triage</CardTitle>
				</CardHeader>
				<CardContent className="px-4 py-6">
					<Table className="w-full table-auto border-collapse">
						<TableHeader>
							<TableRow className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg">
								<TableHead className="py-2 px-4 text-left">Patient</TableHead>
								<TableHead className="py-2 px-4 text-left">Condition</TableHead>
								<TableHead className="py-2 px-4 text-left">Severity</TableHead>
								<TableHead className="py-2 px-4 text-left">Wait Time</TableHead>
								<TableHead className="py-2 px-4 text-left">Assigned To</TableHead>
								<TableHead className="py-2 px-4 text-left">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{patients.map((patient) => (
								<TableRow
									key={patient.id}
									className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
								>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{patient.name}</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{patient.condition}</TableCell>
									<TableCell>
										<Badge className={`${getSeverityColor(patient.severity)} py-1 px-3 rounded-full`}>
											{patient.severity}
										</Badge>
									</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">{patient.waitTime} mins</TableCell>
									<TableCell className="py-2 px-4 text-gray-700 dark:text-white">
										{patient.assignedTo || "Unassigned"}
									</TableCell>
									<TableCell className="py-2 px-4">
										<Button
											variant="outline"
											size="sm"
											className="border-2 border-gray-500 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-lg transition-colors"
										>
											Update
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
