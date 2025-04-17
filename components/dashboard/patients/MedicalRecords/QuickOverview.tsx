import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Pill, AlertTriangle } from "lucide-react";

interface QuickOverviewProps {
  conditions: { name: string; diagnosisDate: string }[];
  medications: { name: string; dosage: string; frequency: string }[];
  allergies: { name: string; severity: string }[];
}

const QuickOverview: React.FC<QuickOverviewProps> = ({
  conditions,
  medications,
  allergies,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <OverviewCard
        title="Conditions"
        icon={<Activity className="w-6 h-6 text-blue-500" />}
        items={conditions.slice(0, 3).map((condition) => ({
          name: condition.name,
          detail: new Date(condition.diagnosisDate).getFullYear().toString(),
        }))}
        gradientFrom="from-blue-400"
        gradientTo="to-blue-600"
      />

      <OverviewCard
        title="Medications"
        icon={<Pill className="w-6 h-6 text-green-500" />}
        items={medications.slice(0, 3).map((medication) => ({
          name: medication.name,
          detail: `${medication.dosage}, ${medication.frequency}`,
        }))}
        gradientFrom="from-green-400"
        gradientTo="to-green-600"
      />

      <OverviewCard
        title="Allergies"
        icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
        items={allergies.slice(0, 3).map((allergy) => ({
          name: allergy.name,
          detail: allergy.severity,
          severity: allergy.severity,
        }))}
        gradientFrom="from-red-400"
        gradientTo="to-red-600"
      />
    </div>
  );
};

interface OverviewCardProps {
  title: string;
  icon: React.ReactNode;
  items: { name: string; detail: string; severity?: string }[];
  gradientFrom: string;
  gradientTo: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  icon,
  items,
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
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="text-sm font-medium">{item.name}</span>
            <Badge
              variant={item.severity === "Severe" ? "destructive" : "outline"}
              className="text-xs"
            >
              {item.detail}
            </Badge>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default QuickOverview;
