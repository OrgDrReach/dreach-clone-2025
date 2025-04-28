import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface RiskFactor {
  condition: string;
  risk: number;
  status: "Low" | "Moderate" | "High";
}

const HealthRiskAssessment: React.FC = () => {
  const riskFactors: RiskFactor[] = [
    { condition: "Heart Disease", risk: 25, status: "Low" },
    { condition: "Diabetes", risk: 40, status: "Moderate" },
    { condition: "Hypertension", risk: 60, status: "High" },
    { condition: "Obesity", risk: 30, status: "Low" },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Low":
        return "bg-green-800 text-white"; // Dark green background with white text
      case "Moderate":
        return "bg-yellow-200 text-yellow-900"; // Light yellow background with dark text
      case "High":
        return "bg-red-600 text-white"; // Red background with white text
      default:
        return "";
    }
  };
  

  return (
    <Card className="bg-white dark:bg-white/5 rounded-lg shadow-md pt-4">
      <CardContent className="flex flex-col gap-6">
        {riskFactors.map((factor, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {factor.condition}
              </span>
              <Badge
                className={`text-xs font-medium ${getStatusColor(factor.status)}`}
              >
                {factor.status} Risk
              </Badge>
            </div>
            <Progress value={factor.risk} className="h-2" />
            <span className="text-xs text-gray-500 dark:text-gray-300">{factor.risk}% Risk</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HealthRiskAssessment;
