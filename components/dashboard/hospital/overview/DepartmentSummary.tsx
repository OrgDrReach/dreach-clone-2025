import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const DepartmentSummary: React.FC = () => {
  const departments = [
    {
      name: 'Cardiology',
      doctors: 12,
      patients: 45,
      appointments: 28,
      status: 'Active',
    },
    {
      name: 'Neurology',
      doctors: 8,
      patients: 32,
      appointments: 15,
      status: 'Active',
    },
    {
      name: 'Pediatrics',
      doctors: 10,
      patients: 38,
      appointments: 22,
      status: 'Active',
    },
    {
      name: 'Orthopedics',
      doctors: 6,
      patients: 25,
      appointments: 18,
      status: 'Active',
    },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Department Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Doctors</TableHead>
              <TableHead>Patients</TableHead>
              <TableHead>Appointments</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((dept, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{dept.name}</TableCell>
                <TableCell>{dept.doctors}</TableCell>
                <TableCell>{dept.patients}</TableCell>
                <TableCell>{dept.appointments}</TableCell>
                <TableCell>
                  <Badge variant="success">{dept.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DepartmentSummary;