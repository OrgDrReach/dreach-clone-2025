"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
	Calendar,
	Clock,
	User,
	AlertCircle,
	CheckCircle2,
	PlusCircle,
} from "lucide-react";

interface TreatmentPlan {
	id: string;
	title: string;
	startDate: string;
	endDate: string;
	doctor: string;
	status: "Active" | "Completed" | "On Hold" | "Cancelled";
	progress: number;
	description: string;
	medications: Array<{
		name: string;
		dosage: string;
		frequency: string;
		duration: string;
	}>;
	procedures: Array<{
		name: string;
		date: string;
		status: "Scheduled" | "Completed" | "Cancelled";
	}>;
}

const TreatmentPlans: React.FC = () => {
	const plans: TreatmentPlan[] = [
		{
			id: "TPL001",
			title: "Hypertension Management Plan",
			startDate: "2025-04-20",
			endDate: "2025-07-20",
			doctor: "Dr. Sarah Smith",
			status: "Active",
			progress: 65,
			description:
				"Comprehensive treatment plan for managing hypertension through medication and lifestyle changes.",
			medications: [
				{
					name: "Lisinopril",
					dosage: "10mg",
					frequency: "Once daily",
					duration: "3 months",
				},
			],
			procedures: [
				{
					name: "Blood Pressure Monitoring",
					date: "2025-05-20",
					status: "Scheduled",
				},
			],
		},
		// Add more mock plans as needed
	];

	const getStatusColor = (status: TreatmentPlan["status"]) => {
		const colors = {
			Active: "bg-green-100 text-green-800",
			Completed: "bg-blue-100 text-blue-800",
			"On Hold": "bg-yellow-100 text-yellow-800",
			Cancelled: "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Treatment Plans</h2>
				<Button>
					<PlusCircle className="w-4 h-4 mr-2" />
					Create New Plan
				</Button>
			</div>

			<div className="grid gap-6">
				{plans.map((plan) => (
					<Card key={plan.id}>
						<CardHeader>
							<div className="flex justify-between items-start">
								<div>
									<CardTitle className="text-xl">{plan.title}</CardTitle>
									<div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
										<div className="flex items-center">
											<Calendar className="w-4 h-4 mr-1" />
											{plan.startDate} - {plan.endDate}
										</div>
										<div className="flex items-center">
											<User className="w-4 h-4 mr-1" />
											{plan.doctor}
										</div>
									</div>
								</div>
								<Badge className={getStatusColor(plan.status)}>
									{plan.status}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<p className="text-sm text-gray-600 mb-2">{plan.description}</p>
								<div className="flex items-center space-x-4">
									<Progress value={plan.progress} className="flex-1" />
									<span className="text-sm font-medium">{plan.progress}%</span>
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Medications</h4>
									<div className="grid gap-2">
										{plan.medications.map((med, index) => (
											<div
												key={index}
												className="p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
												<div className="flex justify-between items-start">
													<div>
														<p className="font-medium">{med.name}</p>
														<p className="text-sm text-gray-500">
															{med.dosage} - {med.frequency}
														</p>
													</div>
													<Badge variant="outline">{med.duration}</Badge>
												</div>
											</div>
										))}
									</div>
								</div>

								<div>
									<h4 className="font-semibold mb-2">Procedures</h4>
									<div className="grid gap-2">
										{plan.procedures.map((proc, index) => (
											<div
												key={index}
												className="p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
												<div className="flex justify-between items-center">
													<div>
														<p className="font-medium">{proc.name}</p>
														<p className="text-sm text-gray-500">{proc.date}</p>
													</div>
													<Badge
														variant="outline"
														className={
															proc.status === "Completed" ?
																"bg-green-100 text-green-800"
															:	"bg-blue-100 text-blue-800"
														}>
														{proc.status}
													</Badge>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end space-x-2">
							<Button variant="outline">Edit Plan</Button>
							<Button>View Details</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default TreatmentPlans;
