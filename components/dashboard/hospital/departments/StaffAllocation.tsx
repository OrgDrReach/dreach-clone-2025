import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

interface StaffAllocation {
  department: EHospitalSpecialization;
  totalPositions: number;
  filled: number;
  onDuty: number;
}

export const StaffAllocation: React.FC = () => {
  const allocations: StaffAllocation[] = [
    {
      department: EHospitalSpecialization.CARDIOLOGY,
      totalPositions: 30,
      filled: 25,
      onDuty: 20,
    },
    {
      department: EHospitalSpecialization.NEUROLOGY,
      totalPositions: 25,
      filled: 20,
      onDuty: 15,
    },
    // Add more allocations
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {allocations.map((allocation, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{allocation.department}</span>
                <span className="text-muted-foreground">
                  {allocation.onDuty} / {allocation.filled} / {allocation.totalPositions}
                </span>
              </div>
              <Progress 
                value={(allocation.filled / allocation.totalPositions) * 100} 
                className="h-2" 
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>On duty: {allocation.onDuty}</span>
                <span>Positions filled: {allocation.filled}</span>
                <span>Total: {allocation.totalPositions}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};