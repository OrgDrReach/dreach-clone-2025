"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bell } from "lucide-react";
import QuickBillOverview from "@/components/dashboard/patients/Bills/QuickBillOverview";
import BillStatement from "@/components/dashboard/patients/Bills/BillStatement";
import PaymentHistory from "@/components/dashboard/patients/Bills/PaymentHistory";
import PendingBills from "@/components/dashboard/patients/Bills/PendingBills";
import PaymentOptions from "@/components/dashboard/patients/Bills/PaymentOptions";
import BillStatus from "@/components/dashboard/patients/Bills/BillStatus";
import PaymentScheduling from "@/components/dashboard/patients/Bills/PaymentScheduling";
import InsuranceInformation from "@/components/dashboard/patients/Bills/InsuranceInformation";
import RefundPolicy from "@/components/dashboard/patients/Bills/RefundPolicy";
import ContactInformation from "@/components/dashboard/patients/Bills/ContactInformation";
import PaymentNotification from "@/components/dashboard/patients/Bills/PaymentNotification";

const BillsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("statement");

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
      { serviceName: "Follow-up Visit", serviceDate: "2023-06-15", amountDue: 100 },
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
    <main className="p-6 bg-gray-50 min-h-screen">
      <motion.div 
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Bills & Payments</h1>
        <Link href="/dashboard/patients/alerts">
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
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 bg-sky-200 text-black shadow-sm rounded-lg mb-6">
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
            transition={{ duration: 0.3 }}
          >
            <TabsContent value={activeTab} className="bg-white p-6 rounded-lg shadow-sm">
              {tabContent[activeTab as keyof typeof tabContent]}
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  );
};

export default BillsPage;