import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, User } from 'lucide-react';

interface Admission {
  id: string;
  patientName: string;
  patientId: string;
  admissionDate: string;
  department: string;
  doctor: string;
  avatar?: string;
}

const RecentAdmissions: React.FC = () => {
  const admissions: Admission[] = [
    {
      id: 'ADM001',
      patientName: 'Emma Wilson',
      patientId: 'P10234',
      admissionDate: '2025-04-23',
      department: 'Cardiology',
      doctor: 'Dr. Robert Smith',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 'ADM002',
      patientName: 'James Brown',
      patientId: 'P10235',
      admissionDate: '2025-04-23',
      department: 'Neurology',
      doctor: 'Dr. Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 'ADM003',
      patientName: 'Linda Davis',
      patientId: 'P10236',
      admissionDate: '2025-04-22',
      department: 'Orthopedics',
      doctor: 'Dr. Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Admissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {admissions.map((admission) => (
            <div
              key={admission.id}
              className="flex items-center space-x-4 p-3 shadow-md hover:shadow-lg bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Avatar>
                <AvatarImage src={admission.avatar} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{admission.patientName}</p>
                  <span className="text-sm text-gray-500">#{admission.patientId}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{admission.department}</span>
                  <span>•</span>
                  <span>{admission.doctor}</span>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <CalendarDays className="h-3 w-3 mr-1" />
                  <span>Admitted on {admission.admissionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAdmissions;