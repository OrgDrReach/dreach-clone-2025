"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const PaymentProcessing = () => {
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Process Payment</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select Invoice" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="inv1">INV-001</SelectItem>
								<SelectItem value="inv2">INV-002</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Payment Method" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="cash">Cash</SelectItem>
								<SelectItem value="card">Card</SelectItem>
								<SelectItem value="upi">UPI</SelectItem>
							</SelectContent>
						</Select>
						<Input type="number" placeholder="Amount" />
						<Input type="text" placeholder="Transaction Reference" />
					</div>
					<div className="mt-4 flex justify-between items-center">
						<div>
							<p className="text-sm text-gray-500">Outstanding Amount</p>
							<p className="text-2xl font-bold">₹1,500</p>
						</div>
						<Button>Process Payment</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Recent Transactions</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="flex justify-between items-center p-4 border rounded-lg">
								<div>
									<p className="font-medium">Payment #{i}</p>
									<p className="text-sm text-gray-500">
										Transaction ID: TXN-00{i}
									</p>
								</div>
								<div className="text-right">
									<p className="font-bold">₹500</p>
									<Badge
										variant="outline"
										className="bg-green-100 text-green-800">
										Successful
									</Badge>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
