"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickAlertOverview from "@/components/dashboard/patients/Alert/QuickAlertOverview";
import NewNotifications from "@/components/dashboard/patients/Alert/NewNotifications";
import ScheduledReminders from "@/components/dashboard/patients/Alert/ScheduledReminders";
import PastNotifications from "@/components/dashboard/patients/Alert/PastNotifications";
import Alerts from "@/components/dashboard/patients/Alert/Alerts";
import NotificationPreferences from "@/components/dashboard/patients/Alert/NotificationPreferences";
import NotificationHistory from "@/components/dashboard/patients/Alert/NotificationHistory";
import AlertStatus from "@/components/dashboard/patients/Alert/AlertStatus";
import CustomNotification from "@/components/dashboard/patients/Alert/CustomNotification";
import NotificationArchive from "@/components/dashboard/patients/Alert/NotificationArchive";
import AlertSettings from "@/components/dashboard/patients/Alert/AlertSettings";

const AlertsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("new");

	// Mock data for demonstration
	const mockData = {
		newNotifications: [
			{
				id: "1",
				name: "Appointment Reminder",
				date: "2023-06-15",
				description:
					"You have an appointment with Dr. Smith tomorrow at 10:00 AM.",
			},
			{
				id: "2",
				name: "Lab Results",
				date: "2023-06-14",
				description:
					"Your recent lab results are now available. Please review them in your patient portal.",
			},
		],
		scheduledReminders: [
			{ id: "1", type: "Medication Refill", date: "2023-06-20" },
			{ id: "2", type: "Follow-up Appointment", date: "2023-07-01" },
		],
		pastNotifications: [
			{
				id: "1",
				name: "Bill Payment Confirmation",
				date: "2023-06-01",
				description: "Your payment of $150 has been received. Thank you!",
			},
			{
				id: "2",
				name: "Prescription Refill",
				date: "2023-05-15",
				description:
					"Your prescription for Lisinopril has been refilled and is ready for pickup.",
			},
		],
		alerts: [
			{ id: "1", type: "Low Medication Supply", status: "Active" as const },
			{ id: "2", type: "Missed Appointment", status: "Resolved" as const },
		],
		notificationHistory: [
			{ id: "1", date: "2023-06-01", type: "Appointment Reminder" },
			{ id: "2", date: "2023-05-15", type: "Lab Results" },
		],
		notificationArchive: [
			{ id: "1", date: "2023-04-01", type: "Vaccination Reminder" },
			{ id: "2", date: "2023-03-15", type: "Annual Check-up Reminder" },
		],
	};

	const tabContent = {
		new: <NewNotifications notifications={mockData.newNotifications} />,
		scheduled: <ScheduledReminders reminders={mockData.scheduledReminders} />,
		past: <PastNotifications notifications={mockData.pastNotifications} />,
		alerts: <Alerts alerts={mockData.alerts} />,
		preferences: <NotificationPreferences />,
		history: <NotificationHistory history={mockData.notificationHistory} />,
		status: <AlertStatus status="Active" />,
		custom: <CustomNotification />,
		archive: <NotificationArchive archive={mockData.notificationArchive} />,
		settings: <AlertSettings />,
	};

	return (
		<main className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 min-h-screen">
			<motion.h1
				className="text-4xl font-bold mb-6 text-purple-800"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				Alerts & Notifications
			</motion.h1>

			<QuickAlertOverview
				newAlerts={mockData.newNotifications.length}
				upcomingReminders={mockData.scheduledReminders.length}
				resolvedAlerts={
					mockData.alerts.filter((alert) => alert.status === "Resolved").length
				}
			/>

			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
				<TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2 mb-6">
					<TabsTrigger value="new">New</TabsTrigger>
					<TabsTrigger value="scheduled">Scheduled</TabsTrigger>
					<TabsTrigger value="past">Past</TabsTrigger>
					<TabsTrigger value="alerts">Alerts</TabsTrigger>
					<TabsTrigger value="preferences">Preferences</TabsTrigger>
					<TabsTrigger value="history">History</TabsTrigger>
					<TabsTrigger value="status">Status</TabsTrigger>
					<TabsTrigger value="custom">Custom</TabsTrigger>
					<TabsTrigger value="archive">Archive</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
				</TabsList>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}>
						<TabsContent value={activeTab}>
							{tabContent[activeTab as keyof typeof tabContent]}
						</TabsContent>
					</motion.div>
				</AnimatePresence>
			</Tabs>
		</main>
	);
};

export default AlertsPage;
