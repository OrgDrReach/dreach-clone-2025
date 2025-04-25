"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

export const BillingHistory = () => {
	return (
		<div className="space-y-4">
			<Card className="border-2 border-gray-600">
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>Billing History</CardTitle>
						<div className="flex gap-2">
							<Input type="date" className="w-40 border-2 border-gray-600" />
							<Button variant="outline" className="border-2 border-gray-600">Export</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Invoice No</TableHead>
								<TableHead>Patient</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Status</TableHead>
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
											className={
												i === 1 ?
													"bg-green-100 text-green-800"
												:	"bg-yellow-100 text-yellow-800"
											}>
											{i === 1 ? "Paid" : "Pending"}
										</Badge>
									</TableCell>
									<TableCell>
										<Button variant="outline" size="sm" className="border-2 border-gray-600">
											View
										</Button>
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
