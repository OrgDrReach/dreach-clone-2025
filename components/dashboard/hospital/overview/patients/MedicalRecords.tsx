"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	FileText,
	FilePlus,
	Download,
	Share2,
	Clock,
	User,
} from "lucide-react";

interface MedicalRecord {
	id: string;
	type:
		| "Lab Result"
		| "Prescription"
		| "Diagnosis"
		| "Imaging"
		| "Progress Note";
	date: string;
	title: string;
	doctor: string;
	summary: string;
	attachments?: string[];
}

const MedicalRecords: React.FC = () => {
	// Mock medical records data
	const records: MedicalRecord[] = [
		{
			id: "REC001",
			type: "Lab Result",
			date: "2025-04-20",
			title: "Complete Blood Count",
			doctor: "Dr. Sarah Smith",
			summary: "Normal blood count results",
			attachments: ["cbc_report.pdf"],
		},
		{
			id: "REC002",
			type: "Prescription",
			date: "2025-04-20",
			title: "Medication Prescription",
			doctor: "Dr. Sarah Smith",
			summary: "Prescribed medications for hypertension",
		},
		// Add more mock records as needed
	];

	const getRecordTypeColor = (type: MedicalRecord["type"]) => {
		const colors = {
			"Lab Result": "bg-blue-100 text-blue-800",
			Prescription: "bg-green-100 text-green-800",
			Diagnosis: "bg-purple-100 text-purple-800",
			Imaging: "bg-orange-100 text-orange-800",
			"Progress Note": "bg-yellow-100 text-yellow-800",
		};
		return colors[type] || "bg-gray-100 text-gray-800";
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Medical Records</h2>
				<Button>
					<FilePlus className="w-4 h-4 mr-2" />
					Add New Record
				</Button>
			</div>

			<Tabs defaultValue="all" className="space-y-4">
				<TabsList>
					<TabsTrigger value="all">All Records</TabsTrigger>
					<TabsTrigger value="lab">Lab Results</TabsTrigger>
					<TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
					<TabsTrigger value="imaging">Imaging</TabsTrigger>
					<TabsTrigger value="notes">Progress Notes</TabsTrigger>
				</TabsList>

				<TabsContent value="all">
					<div className="grid gap-4">
						{records.map((record) => (
							<Card key={record.id}>
								<CardContent className="p-6">
									<div className="flex items-start justify-between">
										<div className="space-y-2">
											<Badge className={getRecordTypeColor(record.type)}>
												{record.type}
											</Badge>
											<h3 className="text-lg font-semibold">{record.title}</h3>
											<div className="flex items-center space-x-4 text-sm text-gray-500">
												<div className="flex items-center">
													<Clock className="w-4 h-4 mr-1" />
													{record.date}
												</div>
												<div className="flex items-center">
													<User className="w-4 h-4 mr-1" />
													{record.doctor}
												</div>
											</div>
											<p className="text-gray-600">{record.summary}</p>
										</div>
										<div className="flex space-x-2">
											<Button variant="outline" size="icon">
												<Download className="w-4 h-4" />
											</Button>
											<Button variant="outline" size="icon">
												<Share2 className="w-4 h-4" />
											</Button>
										</div>
									</div>
									{record.attachments && record.attachments.length > 0 && (
										<div className="mt-4 pt-4 border-t">
											<div className="flex items-center space-x-2">
												<FileText className="w-4 h-4 text-gray-500" />
												<span className="text-sm text-gray-500">
													Attachments ({record.attachments.length})
												</span>
											</div>
											<div className="mt-2 flex flex-wrap gap-2">
												{record.attachments.map((attachment) => (
													<Button
														key={attachment}
														variant="outline"
														size="sm"
														className="text-sm">
														{attachment}
													</Button>
												))}
											</div>
										</div>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>

				{/* Add similar content for other tabs */}
			</Tabs>
		</div>
	);
};

export default MedicalRecords;
