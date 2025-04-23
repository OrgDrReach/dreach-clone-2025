import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

interface Equipment {
  id: string;
  name: string;
  department: EHospitalSpecialization;
  status: "operational" | "maintenance" | "out-of-order";
  lastMaintenance: string;
  nextMaintenance: string;
}

export const EquipmentInventory: React.FC = () => {
  const equipment: Equipment[] = [
    {
      id: "1",
      name: "MRI Machine",
      department: EHospitalSpecialization.CARDIOLOGY,
      status: "operational",
      lastMaintenance: "2025-03-15",
      nextMaintenance: "2025-06-15",
    },
    // Add more equipment
  ];

  const getStatusColor = (status: Equipment["status"]) => {
    const colors = {
      operational: "bg-green-100 text-green-800",
      maintenance: "bg-yellow-100 text-yellow-800",
      "out-of-order": "bg-red-100 text-red-800",
    };
    return colors[status];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-secondary rounded-lg"
            >
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.department}</p>
              </div>
              <div className="text-right">
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  Next maintenance: {item.nextMaintenance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};