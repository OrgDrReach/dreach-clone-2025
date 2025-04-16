import React from 'react';
import { Badge } from "@/components/ui/badge";

type AppointmentStatus = 'Scheduled' | 'Confirmed' | 'Cancelled';

interface StatusProps {
  status: AppointmentStatus;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Confirmed':
        return 'bg-green-500 hover:bg-green-600';
      case 'Cancelled':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Badge className={`${getStatusColor(status)} text-white font-semibold px-3 py-1 rounded-full transition-colors duration-300`}>
      {status}
    </Badge>
  );
};

export default Status;