import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EngagementMetric {
  title: string;
  value: number;
  total: number;
}

const PatientEngagement: React.FC = () => {
  const metrics: EngagementMetric[] = [
    { title: "Appointments Attended", value: 8, total: 10 },
    { title: "Medication Reminders Responded", value: 28, total: 30 },
  ];

  return (
    <Card className="bg-white rounded-lg shadow-md pt-5">
      <CardContent className="flex flex-col gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">{metric.title}</span>
              <span className="text-sm font-semibold text-gray-800">
                {metric.value}/{metric.total}
              </span>
            </div>
            <Progress
              value={(metric.value / metric.total) * 100}
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PatientEngagement;