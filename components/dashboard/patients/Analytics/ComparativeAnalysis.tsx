import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ComparisonData {
  metric: string;
  patientValue: number;
  averageValue: number;
  unit: string;
}

const ComparativeAnalysis: React.FC = () => {
  const comparisons: ComparisonData[] = [
    {
      metric: "Blood Pressure (Systolic)",
      patientValue: 120,
      averageValue: 125,
      unit: "mmHg",
    },
    {
      metric: "Blood Pressure (Diastolic)",
      patientValue: 80,
      averageValue: 82,
      unit: "mmHg",
    },
    {
      metric: "Glucose Levels",
      patientValue: 95,
      averageValue: 100,
      unit: "mg/dL",
    },
    {
      metric: "Body Mass Index (BMI)",
      patientValue: 22.5,
      averageValue: 24.5,
      unit: "",
    },
  ];

  return (
    <Card className="bg-white rounded-lg shadow-md pt-4">
      <CardContent className="flex flex-col gap-6">
        {comparisons.map((comparison, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {comparison.metric}
              </span>
              <span className="text-sm font-semibold text-gray-800">
                {comparison.patientValue} vs {comparison.averageValue}{" "}
                {comparison.unit}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={
                  (comparison.patientValue / comparison.averageValue) * 100
                }
                className="flex-grow h-2"
              />
              <span className="text-xs font-semibold text-gray-600">
                {(
                  (comparison.patientValue / comparison.averageValue) *
                  100
                ).toFixed(0)}
                %
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {comparison.patientValue < comparison.averageValue
                ? "Lower than average"
                : comparison.patientValue > comparison.averageValue
                  ? "Higher than average"
                  : "Average"}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComparativeAnalysis;
