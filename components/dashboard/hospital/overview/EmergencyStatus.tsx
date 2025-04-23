import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, AlertCircle, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmergencyCase {
  id: string;
  patientName: string;
  condition: string;
  severity: 'critical' | 'moderate' | 'stable';
  arrivalTime: string;
  status: 'waiting' | 'in-treatment' | 'transferred';
}

const EmergencyStatus: React.FC = () => {
  const emergencyCases: EmergencyCase[] = [
    {
      id: 'EC001',
      patientName: 'John Doe',
      condition: 'Cardiac Emergency',
      severity: 'critical',
      arrivalTime: '10:30 AM',
      status: 'in-treatment',
    },
    {
      id: 'EC002',
      patientName: 'Sarah Smith',
      condition: 'Trauma',
      severity: 'critical',
      arrivalTime: '10:45 AM',
      status: 'waiting',
    },
    {
      id: 'EC003',
      patientName: 'Mike Johnson',
      condition: 'Respiratory Distress',
      severity: 'moderate',
      arrivalTime: '11:00 AM',
      status: 'waiting',
    },
  ];

  const getSeverityColor = (severity: EmergencyCase['severity']) => {
    const colors = {
      critical: 'text-red-500',
      moderate: 'text-orange-500',
      stable: 'text-green-500',
    };
    return colors[severity];
  };

  const getStatusBadgeColor = (status: EmergencyCase['status']) => {
    const colors = {
      waiting: 'bg-yellow-100 text-yellow-800',
      'in-treatment': 'bg-blue-100 text-blue-800',
      transferred: 'bg-green-100 text-green-800',
    };
    return colors[status];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Emergency Status</CardTitle>
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <span className="text-sm font-medium">Active Cases: {emergencyCases.length}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emergencyCases.map((emergency, index) => (
            <motion.div
              key={emergency.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{emergency.patientName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className={`h-4 w-4 ${getSeverityColor(emergency.severity)}`} />
                  <span className="text-sm">{emergency.condition}</span>
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{emergency.arrivalTime}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(emergency.status)}`}>
                  {emergency.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyStatus;