import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

interface Department {
  id: string;
  name: EHospitalSpecialization;
  head: string;
  staffCount: number;
  patientCount: number;
  status: "active" | "inactive" | "maintenance";
}

export const DepartmentList: React.FC = () => {
  const departments: Department[] = [
    {
      id: "1",
      name: EHospitalSpecialization.CARDIOLOGY,
      head: "Dr. Sarah Johnson",
      staffCount: 25,
      patientCount: 45,
      status: "active",
    },
    {
      id: "2",
      name: EHospitalSpecialization.NEUROLOGY,
      head: "Dr. Michael Chen",
      staffCount: 20,
      patientCount: 32,
      status: "active",
    }, {
      id: "1",
      name: EHospitalSpecialization.CARDIOLOGY,
      head: "Dr. Sarah Johnson",
      staffCount: 25,
      patientCount: 45,
      status: "active",
    },
    {
      id: "2",
      name: EHospitalSpecialization.NEUROLOGY,
      head: "Dr. Michael Chen",
      staffCount: 20,
      patientCount: 32,
      status: "active",
    }, {
      id: "1",
      name: EHospitalSpecialization.CARDIOLOGY,
      head: "Dr. Sarah Johnson",
      staffCount: 25,
      patientCount: 45,
      status: "active",
    },
    {
      id: "2",
      name: EHospitalSpecialization.NEUROLOGY,
      head: "Dr. Michael Chen",
      staffCount: 20,
      patientCount: 32,
      status: "active",
    }, {
      id: "1",
      name: EHospitalSpecialization.CARDIOLOGY,
      head: "Dr. Sarah Johnson",
      staffCount: 25,
      patientCount: 45,
      status: "active",
    },
    {
      id: "2",
      name: EHospitalSpecialization.NEUROLOGY,
      head: "Dr. Michael Chen",
      staffCount: 20,
      patientCount: 32,
      status: "active",
    },
    // Add more departments as needed
  ];

  const getStatusColor = (status: Department["status"]) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
      maintenance: "bg-yellow-100 text-yellow-800",
    };
    return colors[status];
  };

  return (
    <Card className="h-[421px] overflow-y-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Departments</CardTitle>
            <CardDescription>Manage hospital departments</CardDescription>
          </div>
          <Button>Add Department</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Head</TableHead>
              <TableHead>Staff</TableHead>
              <TableHead>Patients</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((dept) => (
              <TableRow key={dept.id}>
                <TableCell className="font-medium">{dept.name}</TableCell>
                <TableCell>{dept.head}</TableCell>
                <TableCell>{dept.staffCount}</TableCell>
                <TableCell>{dept.patientCount}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(dept.status)}>
                    {dept.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
