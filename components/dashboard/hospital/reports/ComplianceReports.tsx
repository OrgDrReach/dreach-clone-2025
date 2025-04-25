"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield } from "lucide-react";

const ComplianceReports: React.FC = () => {
	const reports = [
		{
			title: "HIPAA Compliance Audit",
			status: "Compliant",
			lastAudit: "2025-03-15",
			nextAudit: "2025-06-15",
		},
		{
			title: "Safety Regulations",
			status: "Pending Review",
			lastAudit: "2025-02-15",
			nextAudit: "2025-05-15",
		},
		{
			title: "Medical Records Compliance",
			status: "Compliant",
			lastAudit: "2025-03-01",
			nextAudit: "2025-06-01",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case "compliant":
				return "bg-green-100 text-green-800";
			case "pending review":
				return "bg-yellow-100 text-yellow-800";
			case "non-compliant":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Compliance Reports</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 border rounded-lg">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Shield className="h-5 w-5 text-blue-500" />
									<h3 className="font-medium">{report.title}</h3>
								</div>
								<div className="space-y-1">
									<p className="text-sm text-gray-500">
										Last Audit: {report.lastAudit}
									</p>
									<p className="text-sm text-gray-500">
										Next Audit: {report.nextAudit}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<Badge className={getStatusColor(report.status)}>
									{report.status}
								</Badge>
								<Button
									variant="outline"
									size="sm"
									disabled={report.status !== "Compliant"}>
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

export default ComplianceReports;
