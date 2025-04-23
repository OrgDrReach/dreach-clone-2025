import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'available' | 'busy' | 'off-duty' | 'on-leave';
  shift: 'morning' | 'afternoon' | 'night';
  avatar?: string;
  nextAvailable?: string;
}

const StaffAvailability: React.FC = () => {
  const staffMembers: StaffMember[] = [
    {
      id: 'STF001',
      name: 'Dr. Robert Smith',
      role: 'Cardiologist',
      department: 'Cardiology',
      status: 'busy',
      shift: 'morning',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      nextAvailable: '14:30',
    },
    {
      id: 'STF002',
      name: 'Dr. Sarah Johnson',
      role: 'Neurologist',
      department: 'Neurology',
      status: 'available',
      shift: 'morning',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 'STF003',
      name: 'Dr. Michael Chen',
      role: 'Orthopedist',
      department: 'Orthopedics',
      status: 'off-duty',
      shift: 'night',
      nextAvailable: '20:00',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  const getStatusColor = (status: StaffMember['status']) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      busy: 'bg-yellow-100 text-yellow-800',
      'off-duty': 'bg-gray-100 text-gray-800',
      'on-leave': 'bg-red-100 text-red-800',
    };
    return colors[status];
  };

  const getShiftColor = (shift: StaffMember['shift']) => {
    const colors = {
      morning: 'text-yellow-600',
      afternoon: 'text-orange-600',
      night: 'text-blue-600',
    };
    return colors[shift];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Staff Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Avatar>
                <AvatarImage src={staff.avatar} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{staff.name}</p>
                  <Badge className={getStatusColor(staff.status)}>
                    {staff.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{staff.role}</span>
                  <span>•</span>
                  <span>{staff.department}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <Clock className={`h-3 w-3 mr-1 ${getShiftColor(staff.shift)}`} />
                    <span className={getShiftColor(staff.shift)}>{staff.shift} shift</span>
                  </div>
                  {staff.nextAvailable && (
                    <span className="text-gray-400">
                      Next available: {staff.nextAvailable}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StaffAvailability;