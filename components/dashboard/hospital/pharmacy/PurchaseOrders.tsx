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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface PurchaseOrder {
	id: string;
	orderDate: string;
	supplier: string;
	items: {
		name: string;
		quantity: number;
		unitPrice: number;
	}[];
	totalAmount: number;
	status: "Pending" | "Approved" | "Ordered" | "Received" | "Cancelled";
	expectedDelivery?: string;
}

export const PurchaseOrders: React.FC = () => {
	const orders: PurchaseOrder[] = [
		{
			id: "PO001",
			orderDate: "2025-04-24",
			supplier: "MediSupply Co",
			items: [
				{ name: "Amoxicillin 500mg", quantity: 1000, unitPrice: 0.5 },
				{ name: "Paracetamol 500mg", quantity: 2000, unitPrice: 0.25 },
			],
			totalAmount: 1000,
			status: "Pending",
			expectedDelivery: "2025-05-01",
		},
		// Add more orders
	];

	const getStatusColor = (status: PurchaseOrder["status"]) => {
		const colors = {
			Pending: "bg-yellow-100 text-yellow-800",
			Approved: "bg-blue-100 text-blue-800",
			Ordered: "bg-purple-100 text-purple-800",
			Received: "bg-green-100 text-green-800",
			Cancelled: "bg-red-100 text-red-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<span>Purchase Orders</span>
					<div className="flex items-center gap-4">
						<Select defaultValue="all">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Filter by status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Orders</SelectItem>
								<SelectItem value="pending">Pending</SelectItem>
								<SelectItem value="approved">Approved</SelectItem>
								<SelectItem value="ordered">Ordered</SelectItem>
								<SelectItem value="received">Received</SelectItem>
							</SelectContent>
						</Select>
						<Button>Create Order</Button>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Order ID</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Supplier</TableHead>
							<TableHead>Items</TableHead>
							<TableHead>Total Amount</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Expected Delivery</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order) => (
							<TableRow key={order.id}>
								<TableCell className="font-medium">{order.id}</TableCell>
								<TableCell>{order.orderDate}</TableCell>
								<TableCell>{order.supplier}</TableCell>
								<TableCell>
									{order.items.map((item, index) => (
										<div key={index} className="text-sm">
											{item.name} x {item.quantity}
										</div>
									))}
								</TableCell>
								<TableCell>${order.totalAmount.toFixed(2)}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(order.status)}>
										{order.status}
									</Badge>
								</TableCell>
								<TableCell>{order.expectedDelivery || "N/A"}</TableCell>
								<TableCell>
									<div className="flex gap-2">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="outline" size="sm">
											Update
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};
