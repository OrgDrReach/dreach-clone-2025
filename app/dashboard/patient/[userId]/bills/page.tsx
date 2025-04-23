"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bell } from "lucide-react";
import QuickBillOverview from "@/components/dashboard/patient/Bills/QuickBillOverview";
import BillStatement from "@/components/dashboard/patient/Bills/BillStatement";
import PaymentHistory from "@/components/dashboard/patient/Bills/PaymentHistory";
import PendingBills from "@/components/dashboard/patient/Bills/PendingBills";
import PaymentOptions from "@/components/dashboard/patient/Bills/PaymentOptions";
import BillStatus from "@/components/dashboard/patient/Bills/BillStatus";
import PaymentScheduling from "@/components/dashboard/patient/Bills/PaymentScheduling";
import InsuranceInformation from "@/components/dashboard/patient/Bills/InsuranceInformation";
import RefundPolicy from "@/components/dashboard/patient/Bills/RefundPolicy";
import ContactInformation from "@/components/dashboard/patient/Bills/ContactInformation";
import PaymentNotification from "@/components/dashboard/patient/Bills/PaymentNotification";
import { useParams } from "next/navigation";

const BillsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("statement");
	const { userId } = useParams();

	const mockData = {
		currentBalance: 375,
		dueDate: "2023-07-15",
		lastPayment: { date: "2023-06-01", amount: 100 },
		billItems: [
			{ description: "Office Visit", charges: 150, payments: 0 },
			{ description: "Lab Tests", charges: 200, payments: 50 },
			{ description: "Prescription", charges: 75, payments: 75 },
		],
		paymentHistory: [
			{ date: "2023-06-01", amount: 100 },
			{ date: "2023-05-15", amount: 150 },
		],
		pendingBills: [
			{ serviceName: "MRI Scan", serviceDate: "2023-06-10", amountDue: 500 },
			{
				serviceName: "Follow-up Visit",
				serviceDate: "2023-06-15",
				amountDue: 100,
			},
		],
		insuranceInfo: {
			insuranceName: "HealthGuard Insurance",
			policyNumber: "HG123456789",
		},
		billStatus: "Unpaid" as "Unpaid" | "Paid in full",
	};

	const tabContent = {
		statement: <BillStatement items={mockData.billItems} />,
		history: <PaymentHistory payments={mockData.paymentHistory} />,
		pending: <PendingBills bills={mockData.pendingBills} />,
		payment: <PaymentOptions />,
		status: <BillStatus status={mockData.billStatus} />,
		schedule: <PaymentScheduling />,
		insurance: <InsuranceInformation {...mockData.insuranceInfo} />,
		refund: <RefundPolicy />,
		contact: <ContactInformation />,
		notifications: <PaymentNotification />,
	};

	return (
		<main className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg min-h-screen">
			<motion.div
				className="flex justify-between items-center mb-6"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<h1 className="text-4xl font-bold text-gray-800 dark:text-white">
					Bills & Payments
				</h1>
				<Link href={`/dashboard/patient/${userId}/alerts`}>
					<Button variant="outline" className="flex items-center">
						<Bell className="mr-2 h-4 w-4" />
						View Alerts
					</Button>
				</Link>
			</motion.div>

			<QuickBillOverview
				currentBalance={mockData.currentBalance}
				dueDate={mockData.dueDate}
				lastPayment={mockData.lastPayment}
			/>

			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
				<TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 shadow-sm rounded-lg mb-6  text-white bg-sky-400 dark:bg-sky-800">
					<TabsTrigger value="statement">Statement</TabsTrigger>
					<TabsTrigger value="history">History</TabsTrigger>
					<TabsTrigger value="pending">Pending</TabsTrigger>
					<TabsTrigger value="payment">Pay Now</TabsTrigger>
					<TabsTrigger value="status">Status</TabsTrigger>
					<TabsTrigger value="schedule">Schedule</TabsTrigger>
					<TabsTrigger value="insurance">Insurance</TabsTrigger>
					<TabsTrigger value="refund">Refund</TabsTrigger>
					<TabsTrigger value="contact">Contact</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
				</TabsList>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}>
						<TabsContent
							value={activeTab}
							className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
							{tabContent[activeTab as keyof typeof tabContent]}
						</TabsContent>
					</motion.div>
				</AnimatePresence>
			</Tabs>
		</main>
	);
};

export default BillsPage;
