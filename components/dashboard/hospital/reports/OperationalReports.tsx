"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const OperationalReports: React.FC = () => {
	const reports = [
		{
			title: "Resource Utilization",
			type: "Monthly",
			date: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Staff Performance",
			type: "Quarterly",
			date: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Equipment Maintenance",
			type: "Monthly",
			date: "2025-03-31",
			status: "Processing",
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Operational Reports</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<div className="flex items-center gap-3">
								<FileText className="h-5 w-5 text-blue-500" />
								<div>
									<h3 className="font-medium">{report.title}</h3>
									<p className="text-sm text-gray-500">
										{report.type} - {report.date}
									</p>
								</div>
							</div>
							<Button
								variant="outline"
								size="sm"
								disabled={report.status !== "Ready"}>
								<Download className="h-4 w-4 mr-2" />
								Download
							</Button>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default OperationalReports;
