import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, ShoppingCart } from "lucide-react";

interface StockAlert {
	id: string;
	medicationName: string;
	currentStock: number;
	minThreshold: number;
	status: "Critical" | "Low" | "Expiring Soon";
	reorderQuantity: number;
}

export const StockAlerts: React.FC = () => {
	const alerts: StockAlert[] = [
		{
			id: "ALT001",
			medicationName: "Amoxicillin 500mg",
			currentStock: 50,
			minThreshold: 100,
			status: "Critical",
			reorderQuantity: 200,
		},
		// Add more alerts
	];

	const getAlertColor = (status: StockAlert["status"]) => {
		const colors = {
			Critical: "bg-red-100 border-red-800 text-red-800",
			Low: "bg-yellow-100 border-yellow-800 text-yellow-800",
			"Expiring Soon": "bg-orange-100 border-orange-800 text-orange-800",
		};
		return colors[status];
	};

	return (
		<Card className = "border-2 border-gray-600">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<AlertCircle className="h-5 w-5" />
					Stock Alerts
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{alerts.map((alert) => (
					<Alert key={alert.id} className={getAlertColor(alert.status)}>
						<AlertTitle className="flex items-center justify-between">
							<span>{alert.medicationName}</span>
							<Badge variant="outline">{alert.status}</Badge>
						</AlertTitle>
						<AlertDescription className="mt-2">
							<div className="flex items-center text-gray-800 justify-between">
								<div>
									<p>Current Stock: {alert.currentStock}</p>
									<p>Minimum Threshold: {alert.minThreshold}</p>
									<p>Recommended Reorder: {alert.reorderQuantity}</p>
								</div>
								<Button className="flex items-center gap-2 border-2 border-gray-400">
									<ShoppingCart className="h-4 w-4" />
									Create Order
								</Button>
							</div>
						</AlertDescription>
					</Alert>
				))}
			</CardContent>
		</Card>
	);
};
