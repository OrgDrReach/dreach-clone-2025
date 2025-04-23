import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EHospitalSpecialization } from "@/types/hospital.d.types";
import { Badge } from "@/components/ui/badge";

interface Schedule {
  id: string;
  department: EHospitalSpecialization;
  shift: "morning" | "afternoon" | "night";
  startTime: string;
  endTime: string;
  staffCount: number;
  status: "active" | "upcoming" | "completed";
  onCallDoctor: string;
}

export const DepartmentSchedules: React.FC = () => {
  const schedules: Schedule[] = [
    {
      id: "1",
      department: EHospitalSpecialization.EMERGENCY,
      shift: "morning",
      startTime: "06:00",
      endTime: "14:00",
      staffCount: 12,
      status: "active",
      onCallDoctor: "Dr. Smith",
    },
    // Add more schedules
  ];

  const getShiftColor = (shift: Schedule["shift"]) => {
    const colors = {
      morning: "bg-blue-100 text-blue-800",
      afternoon: "bg-yellow-100 text-yellow-800",
      night: "bg-purple-100 text-purple-800",
    };
    return colors[shift];
  };

  const getStatusColor = (status: Schedule["status"]) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      upcoming: "bg-blue-100 text-blue-800",
      completed: "bg-gray-100 text-gray-800",
    };
    return colors[status];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Schedules</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="p-4 bg-secondary rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">{schedule.department}</h4>
                  <Badge className={getShiftColor(schedule.shift)}>
                    {schedule.shift} shift
                  </Badge>
                </div>
                <Badge className={getStatusColor(schedule.status)}>
                  {schedule.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Time</p>
                  <p>{schedule.startTime} - {schedule.endTime}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Staff on Duty</p>
                  <p>{schedule.staffCount}</p>
                </div>
              </div>

              <div className="text-sm">
                <p className="text-muted-foreground">On-Call Doctor</p>
                <p>{schedule.onCallDoctor}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};