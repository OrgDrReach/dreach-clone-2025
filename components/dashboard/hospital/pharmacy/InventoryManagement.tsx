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
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

interface Medicine {
	id: string;
	name: string;
	genericName: string;
	category: string;
	quantity: number;
	unit: string;
	price: number;
	status: "In Stock" | "Low Stock" | "Out of Stock";
}

export const InventoryManagement: React.FC = () => {
	const medications: Medicine[] = [
		{
			id: "MED001",
			name: "Paracetamol",
			genericName: "Acetaminophen",
			category: "Pain Relief",
			quantity: 500,
			unit: "tablets",
			price: 0.5,
			status: "In Stock",
		},
		// Add more medications
	];

	const getStatusColor = (status: Medicine["status"]) => {
		switch (status) {
			case "In Stock":
				return "bg-green-100 text-green-800";
			case "Low Stock":
				return "bg-yellow-100 text-yellow-800";
			case "Out of Stock":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
				<CardTitle className="text-2xl font-bold">
					Inventory Management
				</CardTitle>
				<Button>
					<Plus className="mr-2 h-4 w-4" /> Add Medicine
				</Button>
			</CardHeader>
			<CardContent>
				<div className="flex justify-between items-center mb-4">
					<div className="relative w-80">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<Input placeholder="Search medications..." className="pl-10" />
					</div>
				</div>
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Generic Name</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Quantity</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{medications.map((med) => (
								<TableRow key={med.id}>
									<TableCell className="font-medium">{med.name}</TableCell>
									<TableCell>{med.genericName}</TableCell>
									<TableCell>{med.category}</TableCell>
									<TableCell>{`${med.quantity} ${med.unit}`}</TableCell>
									<TableCell>${med.price.toFixed(2)}</TableCell>
									<TableCell>
										<Badge className={getStatusColor(med.status)}>
											{med.status}
										</Badge>
									</TableCell>
									<TableCell>
										<Button variant="outline" size="sm">
											Edit
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
