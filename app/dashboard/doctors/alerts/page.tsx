import AlertSettings from "@/components/dashboard/doctors/alerts/AlertSetting";
import AlertUpdates from "@/components/dashboard/doctors/alerts/AlertUpdates";
import NotificationPreferences from "@/components/dashboard/doctors/alerts/NotificationCenter";
import RecentActivities from "@/components/dashboard/doctors/alerts/ProfileActivities";
import RecentAlerts from "@/components/dashboard/doctors/alerts/RecentAlerts";
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
