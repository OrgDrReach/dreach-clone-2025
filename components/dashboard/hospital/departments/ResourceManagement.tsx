import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EHospitalSpecialization } from "@/types/hospital.d.types";
import { Progress } from "@/components/ui/progress";

interface ResourceStats {
  department: EHospitalSpecialization;
  beds: {
    total: number;
    occupied: number;
    maintenance: number;
  };
  equipment: {
    operational: number;
    total: number;
  };
  utilizationRate: number;
}

export const ResourceManagement: React.FC = () => {
  const resources: ResourceStats[] = [
    {
      department: EHospitalSpecialization.CARDIOLOGY,
      beds: {
        total: 50,
        occupied: 35,
        maintenance: 2,
      },
      equipment: {
        operational: 45,
        total: 50,
      },
      utilizationRate: 85,
    },
    // Add more departments as needed
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-medium text-sm">{resource.department}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bed Occupancy</span>
                  <span>{resource.beds.occupied}/{resource.beds.total}</span>
                </div>
                <Progress 
                  value={(resource.beds.occupied / resource.beds.total) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Equipment Operational</span>
                  <span>{resource.equipment.operational}/{resource.equipment.total}</span>
                </div>
                <Progress 
                  value={(resource.equipment.operational / resource.equipment.total) * 100}
                  className="h-2"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-secondary p-2 rounded-md">
                  <p className="text-xs text-muted-foreground">Available Beds</p>
                  <p className="font-medium">{resource.beds.total - resource.beds.occupied}</p>
                </div>
                <div className="bg-secondary p-2 rounded-md">
                  <p className="text-xs text-muted-foreground">Under Maintenance</p>
                  <p className="font-medium">{resource.beds.maintenance}</p>
                </div>
                <div className="bg-secondary p-2 rounded-md">
                  <p className="text-xs text-muted-foreground">Utilization</p>
                  <p className="font-medium">{resource.utilizationRate}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};