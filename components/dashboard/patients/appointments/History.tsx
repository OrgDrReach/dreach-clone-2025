import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Stethoscope, FileText } from "lucide-react";

// Define the past appointment type
interface PastAppointment {
  id: string;
  dateTime: string;
  providerName: string;
  providerSpecialty: string;
  outcome: string;
}

const History: React.FC = () => {
  // Mock data for past appointments (replace with actual data fetching logic)
  const pastAppointments: PastAppointment[] = [
    {
      id: '1',
      dateTime: '2023-03-10 09:30 AM',
      providerName: 'Dr. Emily Johnson',
      providerSpecialty: 'Internal Medicine',
      outcome: 'Prescribed medication, follow-up in 3 months',
    },
    {
      id: '2',
      dateTime: '2023-02-22 11:00 AM',
      providerName: 'Dr. Michael Brown',
      providerSpecialty: 'Orthopedics',
      outcome: 'Recommended physical therapy, review in 6 weeks',
    },
    // Add more past appointments as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <Calendar className="mr-2" /> Appointment History
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-100">
                <TableHead className="font-bold text-teal-800"><Clock className="inline-block mr-1" /> Date & Time</TableHead>
                <TableHead className="font-bold text-teal-800"><User className="inline-block mr-1" /> Provider</TableHead>
                <TableHead className="font-bold text-teal-800"><Stethoscope className="inline-block mr-1" /> Specialty</TableHead>
                <TableHead className="font-bold text-teal-800"><FileText className="inline-block mr-1" /> Outcome / Next Steps</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastAppointments.map((appointment, index) => (
                <motion.tr
                  key={appointment.id}
                  className="hover:bg-teal-50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TableCell className="font-medium text-teal-700">
                    {appointment.dateTime}
                  </TableCell>
                  <TableCell className="text-teal-600">{appointment.providerName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-cyan-100 text-cyan-800 border-cyan-200">
                      {appointment.providerSpecialty}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-teal-600">{appointment.outcome}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default History;