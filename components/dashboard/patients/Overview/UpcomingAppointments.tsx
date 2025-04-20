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
import { Badge } from "@/components/ui/badge";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

interface Appointment {
  id: string;
  date: string;
  time: string;
  doctor: string;
  specialty: string;
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
}

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
  appointments,
}) => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-all duration-300 h-full">
      <CardHeader className="bg-gradient-to-r  from-[#285b6d] to-[#31addb] text-white rounded-t-lg p-4 -mt-6">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaCalendarAlt className="w-6 h-6 mr-2" />
          Upcoming Appointments
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-md text-indigo-800">
                Date
              </TableHead>
              <TableHead className="font-semibold text-md text-indigo-800">
                Time
              </TableHead>
              <TableHead className="font-semibold text-md text-indigo-800">
                Doctor
              </TableHead>
              <TableHead className="font-semibold text-md text-indigo-800">
                Specialty
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment.id}
                className="hover:bg-primary-200 transition-colors duration-200"
              >
                <TableCell className="font-medium text-blue-700">
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-2 text-indigo-500" />
                    {appointment.date}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FaClock className="w-4 h-4 mr-2 text-indigo-500" />
                    {appointment.time}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FaUser className="w-4 h-4 mr-2 text-indigo-500" />
                    {appointment.doctor}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-primary-100 text-primary-800 border-primary-200"
                  >
                    {appointment.specialty}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
