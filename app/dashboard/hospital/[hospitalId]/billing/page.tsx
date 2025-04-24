"use client";

import React from "react";
import { BillingManagement } from "@/components/dashboard/hospital/billing";

const BillingPage: React.FC = () => {
	return (
		<main className="p-6">
			<h1 className="text-3xl font-bold mb-6">Billing Management</h1>
			<BillingManagement />
		</main>
	);
};

export default BillingPage;
