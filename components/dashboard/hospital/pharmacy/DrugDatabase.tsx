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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Filter } from "lucide-react";

interface Drug {
	id: string;
	name: string;
	genericName: string;
	manufacturer: string;
	category: string;
	dosageForm: string;
	strength: string;
	price: number;
	description: string;
}

export const DrugDatabase: React.FC = () => {
	const drugs: Drug[] = [
		{
			id: "DRG001",
			name: "Amoxicillin",
			genericName: "Amoxicillin Trihydrate",
			manufacturer: "PharmaCo Ltd",
			category: "Antibiotics",
			dosageForm: "Capsule",
			strength: "500mg",
			price: 0.5,
			description: "Broad-spectrum antibiotic",
		},
		// Add more drugs
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<span>Drug Database</span>
					<Button className="flex items-center gap-2">
						<Plus className="h-4 w-4" /> Add New Drug
					</Button>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between mb-6">
					<div className="relative w-80">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<Input placeholder="Search drugs..." className="pl-10" />
					</div>
					<Button variant="outline" className="flex items-center gap-2">
						<Filter className="h-4 w-4" /> Filter
					</Button>
				</div>
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Generic Name</TableHead>
								<TableHead>Manufacturer</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Dosage Form</TableHead>
								<TableHead>Strength</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{drugs.map((drug) => (
								<TableRow key={drug.id}>
									<TableCell className="font-medium">{drug.name}</TableCell>
									<TableCell>{drug.genericName}</TableCell>
									<TableCell>{drug.manufacturer}</TableCell>
									<TableCell>{drug.category}</TableCell>
									<TableCell>{drug.dosageForm}</TableCell>
									<TableCell>{drug.strength}</TableCell>
									<TableCell>${drug.price.toFixed(2)}</TableCell>
									<TableCell>
										<Button variant="outline" size="sm">
											View Details
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
