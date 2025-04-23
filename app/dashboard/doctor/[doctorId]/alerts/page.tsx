import AlertSettings from "@/components/dashboard/doctor/alerts/AlertSetting";
import AlertUpdates from "@/components/dashboard/doctor/alerts/AlertUpdates";
import NotificationPreferences from "@/components/dashboard/doctor/alerts/NotificationCenter";
import RecentActivities from "@/components/dashboard/doctor/alerts/ProfileActivities";
import RecentAlerts from "@/components/dashboard/doctor/alerts/RecentAlerts";
import React from "react";

const AlertsNotifyPage: React.FC = () => {
	return (
		<main className="bg-[#c1efffbe]  bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-slate-600 dark:to-slate-900 p-6 rounded-lg">
			<AlertUpdates />
			<AlertSettings />
			<RecentAlerts />
			<NotificationPreferences />
			<RecentActivities />
		</main>
	);
};

export default AlertsNotifyPage;
