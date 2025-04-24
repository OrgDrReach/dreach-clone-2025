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

export const InsuranceClaims = () => {
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<div className="flex justify-between items-center">
						<CardTitle>Insurance Claims</CardTitle>
						<Button>New Claim</Button>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Claim ID</TableHead>
								<TableHead>Patient</TableHead>
								<TableHead>Insurance Provider</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{[1, 2, 3].map((i) => (
								<TableRow key={i}>
									<TableCell>CLM-00{i}</TableCell>
									<TableCell>Patient {i}</TableCell>
									<TableCell>Insurance Co. {i}</TableCell>
									<TableCell>₹{i * 1000}</TableCell>
									<TableCell>
										<Badge
											variant="outline"
											className={
												i === 1 ?
													"bg-green-100 text-green-800"
												:	"bg-yellow-100 text-yellow-800"
											}>
											{i === 1 ? "Approved" : "Pending"}
										</Badge>
									</TableCell>
									<TableCell>
										<Button variant="outline" size="sm">
											View Details
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
