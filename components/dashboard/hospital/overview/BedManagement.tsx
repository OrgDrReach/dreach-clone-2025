import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BedDouble, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface BedType {
  id: string;
  type: string;
  total: number;
  occupied: number;
  available: number;
  department: string;
  status: 'normal' | 'warning' | 'critical';
}

const BedManagement: React.FC = () => {
  const bedTypes: BedType[] = [
    {
      id: 'BED001',
      type: 'ICU',
      total: 50,
      occupied: 45,
      available: 5,
      department: 'Critical Care',
      status: 'critical',
    },
    {
      id: 'BED002',
      type: 'General Ward',
      total: 200,
      occupied: 150,
      available: 50,
      department: 'General Medicine',
      status: 'normal',
    },
    {
      id: 'BED003',
      type: 'Emergency',
      total: 30,
      occupied: 25,
      available: 5,
      department: 'Emergency',
      status: 'warning',
    },
    {
      id: 'BED004',
      type: 'Pediatric',
      total: 40,
      occupied: 20,
      available: 20,
      department: 'Pediatrics',
      status: 'normal',
    },
  ];

  const getStatusColor = (status: BedType['status']) => {
    const colors = {
      normal: 'text-green-600',
      warning: 'text-yellow-600',
      critical: 'text-red-600',
    };
    return colors[status];
  };

  const getProgressColor = (status: BedType['status']) => {
    const colors = {
      normal: 'bg-green-600',
      warning: 'bg-yellow-600',
      critical: 'bg-red-600',
    };
    return colors[status];
  };

  const getBadgeColor = (status: BedType['status']) => {
    const colors = {
      normal: 'bg-green-400 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800',
    };
    return colors[status];
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Bed Management</CardTitle>
        <div className="flex items-center space-x-2">
          <BedDouble className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium">
            Total Beds: {bedTypes.reduce((acc, bed) => acc + bed.total, 0)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {bedTypes.map((bed, index) => (
            <motion.div
              key={bed.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{bed.type}</span>
                    {bed.status === 'critical' && (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{bed.department}</span>
                </div>
                <Badge className={getBadgeColor(bed.status)}>
                  {bed.available} Available
                </Badge>
              </div>

              <div className="relative pt-1">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={getStatusColor(bed.status)}>
                    {Math.round((bed.occupied / bed.total) * 100)}% Occupied
                  </span>
                  <span className="text-gray-500">
                    {bed.occupied}/{bed.total} Beds
                  </span>
                </div>
                <Progress 
                  value={(bed.occupied / bed.total) * 100} 
                  className={`h-2 ${getProgressColor(bed.status)}`}
                />
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <span>{bed.occupied} Occupied</span>
                <span>{bed.available} Available</span>
                <span>{bed.total} Total</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BedManagement;