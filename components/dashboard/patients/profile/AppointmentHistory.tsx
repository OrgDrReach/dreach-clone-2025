"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from 'lucide-react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  department: string;
  status: 'completed' | 'upcoming' | 'cancelled';
}

interface AppointmentHistoryProps {
  appointments: Appointment[];
}

const AppointmentHistory: React.FC<AppointmentHistoryProps> = ({ appointments }) => {
  return (
    <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-amber-600 dark:text-amber-400 flex items-center">
          <Calendar className="mr-2" />
          Appointment History
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{appointment.doctor}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.department}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center justify-end">
                <Calendar className="mr-1 h-4 w-4" /> {appointment.date}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center justify-end">
                <Clock className="mr-1 h-4 w-4" /> {appointment.time}
              </p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                'bg-red-100 text-red-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AppointmentHistory;