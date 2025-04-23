import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const OccupancyStatus: React.FC = () => {
  const departments = [
    { name: 'ICU', occupancy: 92, total: 30, available: 2 },
    { name: 'General Ward', occupancy: 75, total: 100, available: 25 },
    { name: 'Emergency', occupancy: 85, total: 20, available: 3 },
    { name: 'Pediatrics', occupancy: 60, total: 40, available: 16 },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Occupancy Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{dept.name}</span>
                <span className="text-gray-600">
                  {dept.available} of {dept.total} available
                </span>
              </div>
              <Progress value={dept.occupancy} className="h-2" />
              <p className="text-sm text-gray-600">{dept.occupancy}% occupied</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OccupancyStatus;