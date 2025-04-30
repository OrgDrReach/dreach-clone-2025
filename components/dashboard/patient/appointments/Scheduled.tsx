import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the appointment type
interface Appointment {
  id: string;
  dateTime: string;
  providerName: string;
  providerSpecialty: string;
  reason: string;
}

const Scheduled: React.FC = () => {
  // Mock data for scheduled appointments (replace with actual data fetching logic)
  const scheduledAppointments: Appointment[] = [
    {
      id: "1",
      dateTime: "2023-04-15 10:00 AM",
      providerName: "Dr. John Doe",
      providerSpecialty: "Cardiology",
      reason: "Follow-up visit",
    },
    {
      id: "2",
      dateTime: "2023-04-18 2:30 PM",
      providerName: "Dr. Jane Smith",
      providerSpecialty: "Dermatology",
      reason: "Test results",
    },
    // Add more appointments as needed
  ];

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-500">
      <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 -mt-6 text-white">
        <CardTitle className="text-2xl font-bold">
          Scheduled Appointments
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-200 dark:bg-gray-700/80">
              <TableHead className="font-bold">Date & Time</TableHead>
              <TableHead className="font-bold">Provider</TableHead>
              <TableHead className="font-bold">Specialty</TableHead>
              <TableHead className="font-bold">Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduledAppointments.map((appointment) => (
              <TableRow
                key={appointment.id}
                className="dark:hover:bg-[#2a2f31c6]  hover:bg-[#d6f4ffc6] transition-colors duration-200"
              >
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell>{appointment.providerName}</TableCell>
                <TableCell>{appointment.providerSpecialty}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Scheduled;
