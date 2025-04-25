"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { InvoiceGeneration } from "./InvoiceGeneration";
import { PaymentProcessing } from "./PaymentProcessing";
import { InsuranceClaims } from "./InsuranceClaims";
import { BillingHistory } from "./BillingHistory";
import { OutstandingPayments } from "./OutstandingPayments";
import { RefundManagement } from "./RefundManagement";
import { PackagesAndPlans } from "./PackagesAndPlans";

const BillingManagement: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="invoices" className="space-y-4">
						<TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4
						text-white bg-sky-400 dark:bg-sky-800">
							<TabsTrigger value="invoices">Invoices</TabsTrigger>
							<TabsTrigger value="payments">Payments</TabsTrigger>
							<TabsTrigger value="insurance">Insurance</TabsTrigger>
							<TabsTrigger value="history">History</TabsTrigger>
							<TabsTrigger value="outstanding">Outstanding</TabsTrigger>
							<TabsTrigger value="refunds">Refunds</TabsTrigger>
							<TabsTrigger value="packages">Packages</TabsTrigger>
						</TabsList>

						<TabsContent value="invoices">
							<InvoiceGeneration />
						</TabsContent>
						<TabsContent value="payments">
							<PaymentProcessing />
						</TabsContent>
						<TabsContent value="insurance">
							<InsuranceClaims />
						</TabsContent>
						<TabsContent value="history">
							<BillingHistory />
						</TabsContent>
						<TabsContent value="outstanding">
							<OutstandingPayments />
						</TabsContent>
						<TabsContent value="refunds">
							<RefundManagement />
						</TabsContent>
						<TabsContent value="packages">
							<PackagesAndPlans />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default BillingManagement;
