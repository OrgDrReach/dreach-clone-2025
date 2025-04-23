import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

interface SpecialtyService {
  id: string;
  name: string;
  department: EHospitalSpecialization;
  availability: "24/7" | "scheduled" | "on-call";
  specialistCount: number;
  waitingTime: string;
  status: "active" | "limited" | "unavailable";
}

export const SpecialtyServices: React.FC = () => {
  const services: SpecialtyService[] = [
    {
      id: "1",
      name: "Emergency Cardiac Care",
      department: EHospitalSpecialization.CARDIOLOGY,
      availability: "24/7",
      specialistCount: 5,
      waitingTime: "No wait",
      status: "active",
    },
    // Add more services
  ];

  const getStatusColor = (status: SpecialtyService["status"]) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      limited: "bg-yellow-100 text-yellow-800",
      unavailable: "bg-red-100 text-red-800",
    };
    return colors[status];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Specialty Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 bg-secondary rounded-lg space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{service.name}</h4>
                <Badge className={getStatusColor(service.status)}>
                  {service.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Availability</p>
                  <p>{service.availability}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Specialists</p>
                  <p>{service.specialistCount}</p>
                </div>
              </div>
              
              <div className="text-sm">
                <p className="text-muted-foreground">Current Wait Time</p>
                <p>{service.waitingTime}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};