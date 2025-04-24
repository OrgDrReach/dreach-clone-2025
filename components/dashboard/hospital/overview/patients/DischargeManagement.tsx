"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	CheckCircle2,
	Clock,
	FileText,
	AlertTriangle,
	Calendar,
	User,
	ClipboardList,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface DischargeRequest {
	id: string;
	patientId: string;
	patientName: string;
	admissionDate: string;
	plannedDischargeDate: string;
	doctor: string;
	ward: string;
	status: "Pending" | "Approved" | "In Progress" | "Completed";
	progress: number;
	notes: string;
	requirements: Array<{
		task: string;
		status: "Pending" | "Completed";
		assignedTo?: string;
	}>;
}

const DischargeManagement: React.FC = () => {
	const dischargeRequests: DischargeRequest[] = [
		{
			id: "DCH001",
			patientId: "P001",
			patientName: "John Doe",
			admissionDate: "2025-04-15",
			plannedDischargeDate: "2025-04-25",
			doctor: "Dr. Sarah Smith",
			ward: "Cardiology",
			status: "In Progress",
			progress: 75,
			notes: "Patient recovering well, discharge planned as scheduled",
			requirements: [
				{
					task: "Complete Medical Summary",
					status: "Completed",
					assignedTo: "Dr. Sarah Smith",
				},
				{
					task: "Pharmacy Clearance",
					status: "Completed",
					assignedTo: "Pharmacy Dept",
				},
				{
					task: "Financial Clearance",
					status: "Pending",
					assignedTo: "Finance Dept",
				},
				{
					task: "Patient Education",
					status: "Pending",
					assignedTo: "Nurse Johnson",
				},
			],
		},
		// Add more mock data as needed
	];

	const getStatusColor = (status: DischargeRequest["status"]) => {
		const colors = {
			Pending: "bg-yellow-100 text-yellow-800",
			Approved: "bg-blue-100 text-blue-800",
			"In Progress": "bg-purple-100 text-purple-800",
			Completed: "bg-green-100 text-green-800",
		};
		return colors[status] || "bg-gray-100 text-gray-800";
	};

	const getRequirementStatusColor = (status: "Pending" | "Completed") => {
		return status === "Completed" ?
				"bg-green-100 text-green-800"
			:	"bg-yellow-100 text-yellow-800";
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Discharge Management</h2>
				<Button>
					<FileText className="w-4 h-4 mr-2" />
					New Discharge Request
				</Button>
			</div>

			<Tabs defaultValue="active" className="space-y-4">
				<TabsList>
					<TabsTrigger value="active">Active Requests</TabsTrigger>
					<TabsTrigger value="completed">Completed</TabsTrigger>
					<TabsTrigger value="pending">Pending Approval</TabsTrigger>
				</TabsList>

				<TabsContent value="active">
					<div className="grid gap-4">
						{dischargeRequests.map((request) => (
							<Card key={request.id}>
								<CardContent className="p-6">
									<div className="space-y-4">
										<div className="flex items-start justify-between">
											<div>
												<h3 className="text-lg font-semibold">
													{request.patientName}
												</h3>
												<div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
													<div className="flex items-center">
														<User className="w-4 h-4 mr-1" />
														{request.doctor}
													</div>
													<div className="flex items-center">
														<Calendar className="w-4 h-4 mr-1" />
														{request.plannedDischargeDate}
													</div>
												</div>
											</div>
											<Badge className={getStatusColor(request.status)}>
												{request.status}
											</Badge>
										</div>

										<div>
											<div className="flex items-center justify-between mb-2">
												<span className="text-sm font-medium">
													Discharge Progress
												</span>
												<span className="text-sm text-gray-500">
													{request.progress}%
												</span>
											</div>
											<Progress value={request.progress} className="h-2" />
										</div>

										<div>
											<h4 className="font-medium mb-2">Requirements</h4>
											<div className="space-y-2">
												{request.requirements.map((req, index) => (
													<div
														key={index}
														className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
														<div className="flex items-center space-x-3">
															{req.status === "Completed" ?
																<CheckCircle2 className="w-5 h-5 text-green-500" />
															:	<Clock className="w-5 h-5 text-yellow-500" />}
															<div>
																<p className="font-medium">{req.task}</p>
																<p className="text-sm text-gray-500">
																	{req.assignedTo}
																</p>
															</div>
														</div>
														<Badge
															className={getRequirementStatusColor(req.status)}>
															{req.status}
														</Badge>
													</div>
												))}
											</div>
										</div>

										<div className="flex justify-end space-x-2">
											<Button variant="outline">View Details</Button>
											<Button>Update Status</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default DischargeManagement;
