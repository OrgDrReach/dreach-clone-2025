"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star } from "lucide-react";

const QualityReports: React.FC = () => {
	const reports = [
		{
			title: "Patient Satisfaction Survey",
			score: 4.5,
			period: "Q1 2025",
			status: "Ready",
		},
		{
			title: "Service Quality Metrics",
			score: 4.2,
			period: "Q1 2025",
			status: "Ready",
		},
		{
			title: "Quality Improvement Initiatives",
			score: 4.0,
			period: "Q1 2025",
			status: "Processing",
		},
	];

	const getScoreColor = (score: number) => {
		if (score >= 4.5) return "text-green-600";
		if (score >= 4.0) return "text-blue-600";
		return "text-yellow-600";
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Quality Reports</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<div className="space-y-2">
								<h3 className="font-medium">{report.title}</h3>
								<div className="flex items-center gap-2">
									<Star
										className={`h-5 w-5 ${getScoreColor(report.score)}`}
										fill="currentColor"
									/>
									<span
										className={`font-medium ${getScoreColor(report.score)}`}>
										{report.score}
									</span>
								</div>
								<p className="text-sm text-gray-500">{report.period}</p>
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

export default QualityReports;
