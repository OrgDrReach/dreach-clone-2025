"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { AlertsManagement } from "./AlertsManagement";
import { SystemNotifications } from "./SystemNotifications";
import { StaffAnnouncements } from "./StaffAnnouncements";
import { EmergencyAlerts } from "./EmergencyAlerts";
import { MaintenanceAlerts } from "./MaintenanceAlerts";
import { CustomNotifications } from "./CustomNotifications";
import { NotificationSettings } from "./NotificationSettings";

export const NotificationCenter: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="alerts" className="w-full">
						<TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
							<TabsTrigger value="alerts">Alerts</TabsTrigger>
							<TabsTrigger value="system">System</TabsTrigger>
							<TabsTrigger value="staff">Staff</TabsTrigger>
							<TabsTrigger value="emergency">Emergency</TabsTrigger>
							<TabsTrigger value="maintenance">Maintenance</TabsTrigger>
							<TabsTrigger value="custom">Custom</TabsTrigger>
							<TabsTrigger value="settings">Settings</TabsTrigger>
						</TabsList>

						<TabsContent value="alerts">
							<AlertsManagement />
						</TabsContent>
						<TabsContent value="system">
							<SystemNotifications />
						</TabsContent>
						<TabsContent value="staff">
							<StaffAnnouncements />
						</TabsContent>
						<TabsContent value="emergency">
							<EmergencyAlerts />
						</TabsContent>
						<TabsContent value="maintenance">
							<MaintenanceAlerts />
						</TabsContent>
						<TabsContent value="custom">
							<CustomNotifications />
						</TabsContent>
						<TabsContent value="settings">
							<NotificationSettings />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};
