"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InventoryManagement } from "./InventoryManagement";
import { PrescriptionTracking } from "./PrescriptionTracking";
import { StockAlerts } from "./StockAlerts";
import { DrugDatabase } from "./DrugDatabase";
import { SupplierManagement } from "./SupplierManagement";
import { PurchaseOrders } from "./PurchaseOrders";
import { ExpiryTracking } from "./ExpiryTracking";

const PharmacyManagement: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6">
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="inventory" className="w-full">
						<TabsList className="grid grid-cols-4 lg:grid-cols-7 gap-4">
							<TabsTrigger value="inventory">Inventory</TabsTrigger>
							<TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
							<TabsTrigger value="alerts">Stock Alerts</TabsTrigger>
							<TabsTrigger value="drugs">Drug Database</TabsTrigger>
							<TabsTrigger value="suppliers">Suppliers</TabsTrigger>
							<TabsTrigger value="orders">Purchase Orders</TabsTrigger>
							<TabsTrigger value="expiry">Expiry Tracking</TabsTrigger>
						</TabsList>

						<TabsContent value="inventory">
							<InventoryManagement />
						</TabsContent>
						<TabsContent value="prescriptions">
							<PrescriptionTracking />
						</TabsContent>
						<TabsContent value="alerts">
							<StockAlerts />
						</TabsContent>
						<TabsContent value="drugs">
							<DrugDatabase />
						</TabsContent>
						<TabsContent value="suppliers">
							<SupplierManagement />
						</TabsContent>
						<TabsContent value="orders">
							<PurchaseOrders />
						</TabsContent>
						<TabsContent value="expiry">
							<ExpiryTracking />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default PharmacyManagement;
