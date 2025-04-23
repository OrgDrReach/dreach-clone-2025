import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EHospitalSpecialization } from "@/types/hospital.d.types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface MetricData {
  department: EHospitalSpecialization;
  metrics: {
    patientSatisfaction: number;
    averageWaitTime: number;
    bedTurnoverRate: number;
    staffEfficiency: number;
  };
  trend: Array<{
    month: string;
    patients: number;
    satisfaction: number;
  }>;
}

export const PerformanceMetrics: React.FC = () => {
  const metrics: MetricData[] = [
    {
      department: EHospitalSpecialization.CARDIOLOGY,
      metrics: {
        patientSatisfaction: 92,
        averageWaitTime: 15,
        bedTurnoverRate: 85,
        staffEfficiency: 90,
      },
      trend: [
        { month: "Jan", patients: 150, satisfaction: 88 },
        { month: "Feb", patients: 180, satisfaction: 90 },
        { month: "Mar", patients: 200, satisfaction: 92 },
        // Add more months
      ],
    },
    // Add more departments
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium">{metric.department}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Patient Satisfaction</p>
                  <p className="text-lg font-medium">{metric.metrics.patientSatisfaction}%</p>
                </div>
                <div className="bg-secondary p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Avg. Wait Time</p>
                  <p className="text-lg font-medium">{metric.metrics.averageWaitTime} min</p>
                </div>
              </div>

              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metric.trend}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="patients" stroke="#0ea5e9" />
                    <Line type="monotone" dataKey="satisfaction" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};