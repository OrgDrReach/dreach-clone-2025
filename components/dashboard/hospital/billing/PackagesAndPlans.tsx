"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export const PackagesAndPlans = () => {
	const packages = [
		{
			name: "Basic Health Checkup",
			price: 999,
			duration: "1 day",
			tests: ["Blood Test", "Urine Test", "Basic Physical"],
			active: true,
		},
		{
			name: "Comprehensive Health Package",
			price: 4999,
			duration: "2 days",
			tests: ["Full Body Checkup", "Cardiac Screening", "Cancer Screening"],
			active: true,
		},
		{
			name: "Executive Health Plan",
			price: 9999,
			duration: "3 days",
			tests: [
				"Advanced Diagnostics",
				"Specialist Consultation",
				"Dietary Plan",
			],
			active: false,
		},
	];

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold">Available Packages</h2>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					Add Package
				</Button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{packages.map((pkg, index) => (
					<Card key={index} className="border-2 border-gray-600">
						<CardHeader>
							<div className="flex justify-between items-start">
								<CardTitle className="text-lg">{pkg.name}</CardTitle>
								<Badge
									variant="outline"
									className={
										pkg.active ?
											"bg-green-100 text-green-800"
										:	"bg-gray-100 text-gray-800"
									}>
									{pkg.active ? "Active" : "Inactive"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<p className="text-2xl font-bold">₹{pkg.price}</p>
									<p className="text-sm text-gray-500">
										Duration: {pkg.duration}
									</p>
								</div>
								<div>
									<p className="font-medium mb-2">Includes:</p>
									<ul className="list-disc list-inside text-sm space-y-1">
										{pkg.tests.map((test, i) => (
											<li key={i}>{test}</li>
										))}
									</ul>
								</div>
								<div className="flex space-x-2">
									<Button className="flex-1 border-2 border-gray-600" variant="outline" >
										Edit
									</Button>
									<Button className="flex-1">
										{pkg.active ? "Deactivate" : "Activate"}
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};
