"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const InvoiceGeneration = () => {
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Generate New Invoice</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select Patient" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="patient1">John Doe</SelectItem>
								<SelectItem value="patient2">Jane Smith</SelectItem>
							</SelectContent>
						</Select>
						<Input type="date" placeholder="Invoice Date" />
						<Input type="text" placeholder="Invoice Number" />
					</div>
					<div className="mt-4">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Service</TableHead>
									<TableHead>Quantity</TableHead>
									<TableHead>Rate</TableHead>
									<TableHead>Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>Consultation</TableCell>
									<TableCell>1</TableCell>
									<TableCell>₹500</TableCell>
									<TableCell>₹500</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<div className="mt-4 flex justify-end space-x-2">
							<Button variant="outline">Add Item</Button>
							<Button>Generate Invoice</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
