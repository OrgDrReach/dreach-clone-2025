import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ExpiryItem {
	id: string;
	name: string;
	batchNumber: string;
	manufacturer: string;
	expiryDate: string;
	quantity: number;
	daysUntilExpiry: number;
	location: string;
	status: "Critical" | "Warning" | "Good" | "Expired";
}

export const ExpiryTracking: React.FC = () => {
	const calculateDaysUntilExpiry = (expiryDate: string): number => {
		const today = new Date();
		const expiry = new Date(expiryDate);
		const diffTime = expiry.getTime() - today.getTime();
		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	};

	const expiryItems: ExpiryItem[] = [
		{
			id: "EXP001",
			name: "Amoxicillin 500mg",
			batchNumber: "BAT2025001",
			manufacturer: "PharmaCo Ltd",
			expiryDate: "2025-06-30",
			quantity: 500,
			daysUntilExpiry: calculateDaysUntilExpiry("2025-06-30"),
			location: "Shelf A-123",
			status: "Warning",
		},
		// Add more items
	];

	const getStatusColor = (status: ExpiryItem["status"]) => {
		const colors = {
			Critical: "bg-red-100 text-red-800",
			Warning: "bg-yellow-100 text-yellow-800",
			Good: "bg-green-100 text-green-800",
			Expired: "bg-gray-100 text-gray-800",
		};
		return colors[status];
	};

	const getExpiryStatus = (daysUntilExpiry: number): ExpiryItem["status"] => {
		if (daysUntilExpiry < 0) return "Expired";
		if (daysUntilExpiry <= 30) return "Critical";
		if (daysUntilExpiry <= 90) return "Warning";
		return "Good";
	};

	return (
		<Card className="border-2 border-gray-500">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<AlertCircle className="h-5 w-5 text-yellow-500" />
					<span>Expiry Tracking</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					<div className="grid grid-cols-4 gap-4">
						<Card className="bg-red-50">
							<CardContent className="p-4">
								<div className="text-sm font-medium text-red-800">Expired</div>
								<div className="text-2xl font-bold text-red-900">23</div>
							</CardContent>
						</Card>
						<Card className="bg-yellow-50">
							<CardContent className="p-4">
								<div className="text-sm font-medium text-yellow-800">
									Expiring Soon
								</div>
								<div className="text-2xl font-bold text-yellow-900">45</div>
							</CardContent>
						</Card>
						<Card className="bg-orange-50">
							<CardContent className="p-4">
								<div className="text-sm font-medium text-orange-800">
									Within 90 Days
								</div>
								<div className="text-2xl font-bold text-orange-900">78</div>
							</CardContent>
						</Card>
						<Card className="bg-green-50">
							<CardContent className="p-4">
								<div className="text-sm font-medium text-green-800">
									Good Standing
								</div>
								<div className="text-2xl font-bold text-green-900">342</div>
							</CardContent>
						</Card>
					</div>

					<Table className="border-2 border-gray-500">
						<TableHeader>
							<TableRow>
								<TableHead>Medicine</TableHead>
								<TableHead>Batch Number</TableHead>
								<TableHead>Manufacturer</TableHead>
								<TableHead>Expiry Date</TableHead>
								<TableHead>Days Until Expiry</TableHead>
								<TableHead>Quantity</TableHead>
								<TableHead>Location</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{expiryItems.map((item) => (
								<TableRow key={item.id}>
									<TableCell className="font-medium">{item.name}</TableCell>
									<TableCell>{item.batchNumber}</TableCell>
									<TableCell>{item.manufacturer}</TableCell>
									<TableCell>{item.expiryDate}</TableCell>
									<TableCell>{item.daysUntilExpiry} days</TableCell>
									<TableCell>{item.quantity}</TableCell>
									<TableCell>{item.location}</TableCell>
									<TableCell>
										<Badge className={getStatusColor(item.status)}>
											{item.status}
										</Badge>
									</TableCell>
									<TableCell>
										<Button variant="outline" size="sm" className="border-2 border-gray-500">
											Take Action
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
};
