"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const ClinicalReports: React.FC = () => {
	const reports = [
		{
			title: "Patient Outcomes",
			department: "General Medicine",
			period: "Q1 2025",
			status: "Ready",
			priority: "High",
		},
		{
			title: "Treatment Success Rates",
			department: "Oncology",
			period: "Q1 2025",
			status: "Ready",
			priority: "Medium",
		},
		{
			title: "Clinical Procedures Analysis",
			department: "Surgery",
			period: "Q1 2025",
			status: "Processing",
			priority: "High",
		},
	];

	const getPriorityColor = (priority: string) => {
		switch (priority.toLowerCase()) {
			case "high":
				return "bg-red-100 text-red-800";
			case "medium":
				return "bg-yellow-100 text-yellow-800";
			default:
				return "bg-green-100 text-green-800";
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Clinical Reports</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 border rounded-lg">
							<div className="space-y-1">
								<h3 className="font-medium">{report.title}</h3>
								<p className="text-sm text-gray-500">{report.department}</p>
								<p className="text-sm text-gray-500">{report.period}</p>
							</div>
							<div className="flex items-center gap-4">
								<Badge className={getPriorityColor(report.priority)}>
									{report.priority}
								</Badge>
								<Button
									variant="outline"
									size="sm"
									disabled={report.status !== "Ready"}>
									<Download className="h-4 w-4 mr-2" />
									Download
								</Button>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ClinicalReports;
