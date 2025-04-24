"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FinancialReports: React.FC = () => {
	const reports = [
		{
			title: "Revenue Analysis",
			period: "Q1 2025",
			date: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Expense Report",
			period: "Q1 2025",
			date: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Insurance Claims",
			period: "Q1 2025",
			date: "2025-03-31",
			status: "Processing",
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Financial Reports</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 border rounded-lg">
							<div>
								<h3 className="font-medium">{report.title}</h3>
								<p className="text-sm text-gray-500">
									{report.period} - Generated on {report.date}
								</p>
							</div>
							<div className="flex items-center gap-4">
								<span
									className={`text-sm ${
										report.status === "Ready" ?
											"text-green-600"
										:	"text-yellow-600"
									}`}>
									{report.status}
								</span>
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

export default FinancialReports;
