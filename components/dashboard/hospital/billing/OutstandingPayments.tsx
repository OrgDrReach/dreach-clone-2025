"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { IndianRupee } from "lucide-react";

export const OutstandingPayments = () => {
	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card className="border-2 border-gray-600">
					<CardContent className="p-6">
						<div className="flex items-center gap-4">
							<IndianRupee className="h-8 w-8 text-red-500" />
							<div>
								<p className="text-sm text-gray-500">Total Outstanding</p>
								<p className="text-2xl font-bold">₹15,000</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card className="border-2 border-gray-600">
				<CardHeader>
					<CardTitle>Outstanding Payments</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Invoice No</TableHead>
								<TableHead>Patient</TableHead>
								<TableHead>Due Date</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Days Overdue</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{[1, 2, 3].map((i) => (
								<TableRow key={i}>
									<TableCell>INV-00{i}</TableCell>
									<TableCell>Patient {i}</TableCell>
									<TableCell>{new Date().toLocaleDateString()}</TableCell>
									<TableCell>₹{i * 1000}</TableCell>
									<TableCell>
										<Badge
											variant="outline"
											className="bg-red-100 text-red-800">
											{i * 5} days
										</Badge>
									</TableCell>
									<TableCell>
										<Button size="sm">Send Reminder</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};
