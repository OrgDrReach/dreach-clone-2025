import AlertSettings from "@/components/dashboard/doctor/alerts/AlertSetting";
import AlertUpdates from "@/components/dashboard/doctor/alerts/AlertUpdates";
import NotificationPreferences from "@/components/dashboard/doctor/alerts/NotificationCenter";
import RecentActivities from "@/components/dashboard/doctor/alerts/ProfileActivities";
import RecentAlerts from "@/components/dashboard/doctor/alerts/RecentAlerts";
import React from "react";

const AlertsNotifyPage: React.FC = () => {
	return (
		<main className="bg-[#c1efffbe]  p-8">
			<AlertUpdates />
			<AlertSettings />
			<RecentAlerts />
			<NotificationPreferences />
			<RecentActivities />
		</main>
	);
};

export default AlertsNotifyPage;
