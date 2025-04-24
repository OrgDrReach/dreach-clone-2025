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
import { PhoneCall, Mail, MapPin } from "lucide-react";

interface Supplier {
	id: string;
	name: string;
	contact: {
		phone: string;
		email: string;
	};
	address: string;
	category: string[];
	status: "Active" | "Inactive" | "Under Review";
	rating: number;
	lastOrder: string;
}

export const SupplierManagement: React.FC = () => {
	const suppliers: Supplier[] = [
		{
			id: "SUP001",
			name: "MediSupply Co",
			contact: {
				phone: "+1 234 567 8900",
				email: "contact@medisupply.com",
			},
			address: "123 Pharma Street, Medical District",
			category: ["Antibiotics", "Pain Relief", "General"],
			status: "Active",
			rating: 4.5,
			lastOrder: "2025-04-15",
		},
		// Add more suppliers
	];

	const getStatusColor = (status: Supplier["status"]) => {
		const colors = {
			Active: "bg-green-100 text-green-800",
			Inactive: "bg-red-100 text-red-800",
			"Under Review": "bg-yellow-100 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<span>Supplier Management</span>
					<Button>Add New Supplier</Button>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Contact</TableHead>
								<TableHead>Categories</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Rating</TableHead>
								<TableHead>Last Order</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{suppliers.map((supplier) => (
								<TableRow key={supplier.id}>
									<TableCell className="font-medium">
										<div>{supplier.name}</div>
										<div className="flex items-center text-sm text-gray-500 mt-1">
											<MapPin className="h-4 w-4 mr-1" />
											{supplier.address}
										</div>
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<PhoneCall className="h-4 w-4" />
											{supplier.contact.phone}
										</div>
										<div className="flex items-center gap-2 mt-1">
											<Mail className="h-4 w-4" />
											{supplier.contact.email}
										</div>
									</TableCell>
									<TableCell>
										<div className="flex flex-wrap gap-1">
											{supplier.category.map((cat, index) => (
												<Badge key={index} variant="outline">
													{cat}
												</Badge>
											))}
										</div>
									</TableCell>
									<TableCell>
										<Badge className={getStatusColor(supplier.status)}>
											{supplier.status}
										</Badge>
									</TableCell>
									<TableCell>{supplier.rating}/5</TableCell>
									<TableCell>{supplier.lastOrder}</TableCell>
									<TableCell>
										<div className="flex gap-2">
											<Button variant="outline" size="sm">
												View
											</Button>
											<Button variant="outline" size="sm">
												Order
											</Button>
										</div>
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
