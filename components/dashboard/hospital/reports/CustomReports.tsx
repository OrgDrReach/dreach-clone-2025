"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Download,
	Edit,
	FileText,
	MoreVertical,
	Plus,
	Trash,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CustomReports: React.FC = () => {
	const reports = [
		{
			title: "Department Performance Analysis",
			created: "2025-03-15",
			lastRun: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Staff Efficiency Metrics",
			created: "2025-03-10",
			lastRun: "2025-03-31",
			status: "Ready",
		},
		{
			title: "Resource Allocation Report",
			created: "2025-03-05",
			lastRun: "2025-03-31",
			status: "Processing",
		},
	];

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Custom Reports</CardTitle>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					New Report
				</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{reports.map((report, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
							<div className="flex items-center gap-3">
								<FileText className="h-5 w-5 text-blue-500" />
								<div>
									<h3 className="font-medium">{report.title}</h3>
									<p className="text-sm text-gray-500">
										Created: {report.created} | Last Run: {report.lastRun}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Button
									variant="outline"
									size="sm"
									disabled={report.status !== "Ready"}>
									<Download className="h-4 w-4 mr-2" />
									Download
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Button variant="ghost" size="sm">
											<MoreVertical className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<Edit className="h-4 w-4 mr-2" />
											Edit
										</DropdownMenuItem>
										<DropdownMenuItem className="text-red-600">
											<Trash className="h-4 w-4 mr-2" />
											Delete
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default CustomReports;
