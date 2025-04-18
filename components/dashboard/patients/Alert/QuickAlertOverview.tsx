import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CheckCircle } from "lucide-react";

interface QuickAlertOverviewProps {
  newAlerts: number;
  upcomingReminders: number;
  resolvedAlerts: number;
}

const QuickAlertOverview: React.FC<QuickAlertOverviewProps> = ({
  newAlerts,
  upcomingReminders,
  resolvedAlerts,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <OverviewCard
        title="New Alerts"
        icon={<Bell className="w-6 h-6 text-red-500" />}
        value={newAlerts.toString()}
        gradientFrom="from-red-400"
        gradientTo="to-red-600"
      />
      <OverviewCard
        title="Upcoming Reminders"
        icon={<Calendar className="w-6 h-6 text-blue-500" />}
        value={upcomingReminders.toString()}
        gradientFrom="from-blue-400"
        gradientTo="to-blue-600"
      />
      <OverviewCard
        title="Resolved Alerts"
        icon={<CheckCircle className="w-6 h-6 text-green-500" />}
        value={resolvedAlerts.toString()}
        gradientFrom="from-green-400"
        gradientTo="to-green-600"
      />
    </div>
  );
};

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  gradientFrom: string;
  gradientTo: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  icon,
  value,
  gradientFrom,
  gradientTo,
}) => (
  <Card className="overflow-hidden">
    <div
      className={`p-4 text-white bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <CardContent className="pt-4">
      <p className="text-3xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

export default QuickAlertOverview;
