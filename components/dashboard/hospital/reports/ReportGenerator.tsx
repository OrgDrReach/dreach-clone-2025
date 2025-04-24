"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DateRangePicker } from "@/components/ui/date-range-picker";

const ReportGenerator: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Report Generator</CardTitle>
			</CardHeader>
			<CardContent>
				<form className="space-y-6">
					<div className="grid grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label>Report Type</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select report type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="financial">Financial Report</SelectItem>
									<SelectItem value="operational">
										Operational Report
									</SelectItem>
									<SelectItem value="clinical">Clinical Report</SelectItem>
									<SelectItem value="quality">Quality Report</SelectItem>
									<SelectItem value="compliance">Compliance Report</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label>Department</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select department" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="all">All Departments</SelectItem>
									<SelectItem value="cardiology">Cardiology</SelectItem>
									<SelectItem value="neurology">Neurology</SelectItem>
									<SelectItem value="pediatrics">Pediatrics</SelectItem>
									<SelectItem value="oncology">Oncology</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label>Start Date</Label>
							<DateRangePicker />
						</div>

						<div className="space-y-2">
							<Label>End Date</Label>
							<DateRangePicker />
						</div>
					</div>

					<div className="flex justify-end space-x-4">
						<Button variant="outline">Reset</Button>
						<Button>Generate Report</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default ReportGenerator;
