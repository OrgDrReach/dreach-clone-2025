import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, User } from 'lucide-react';

interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  appointmentTime: string;
  department: string;
  doctor: string;
  type: 'check-up' | 'follow-up' | 'consultation' | 'emergency';
  status: 'scheduled' | 'confirmed' | 'in-progress';
  avatar?: string;
}

const UpcomingAppointments: React.FC = () => {
  const appointments: Appointment[] = [
    {
      id: 'APT001',
      patientName: 'David Chen',
      patientId: 'P10240',
      appointmentTime: '2025-04-23T14:30',
      department: 'Cardiology',
      doctor: 'Dr. Robert Smith',
      type: 'follow-up',
      status: 'confirmed',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 'APT002',
      patientName: 'Maria Garcia',
      patientId: 'P10241',
      appointmentTime: '2025-04-23T15:00',
      department: 'Neurology',
      doctor: 'Dr. Sarah Johnson',
      type: 'consultation',
      status: 'scheduled',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 'APT003',
      patientName: 'Alex Thompson',
      patientId: 'P10242',
      appointmentTime: '2025-04-23T15:30',
      department: 'Orthopedics',
      doctor: 'Dr. Michael Chen',
      type: 'check-up',
      status: 'confirmed',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  const getStatusColor = (status: Appointment['status']) => {
    const colors = {
      scheduled: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
    };
    return colors[status];
  };

  const getTypeColor = (type: Appointment['type']) => {
    const colors = {
      'check-up': 'bg-purple-100 text-purple-800',
      'follow-up': 'bg-blue-100 text-blue-800',
      consultation: 'bg-green-100 text-green-800',
      emergency: 'bg-red-100 text-red-800',
    };
    return colors[type];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Avatar>
                <AvatarImage src={appointment.avatar} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{appointment.patientName}</p>
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{appointment.department}</span>
                  <span>•</span>
                  <span>{appointment.doctor}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <Clock className="h-3 w-3 mx-1" />
                    <span>
                      {new Date(appointment.appointmentTime).toLocaleString('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </span>
                  </div>
                  <Badge className={getTypeColor(appointment.type)}>{appointment.type}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;