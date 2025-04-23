import React from 'react';
import { Card } from '@/components/ui/card';

interface ReportsOverviewProps {
  totalReports: number;
  pendingReports: number;
  completedReports: number;
}

export const ReportsOverview: React.FC<ReportsOverviewProps> = ({
  totalReports,
  pendingReports,
  completedReports,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold">Total Reports</h3>
        <p className="text-2xl font-bold">{totalReports}</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-semibold">Pending</h3>
        <p className="text-2xl font-bold text-yellow-500">{pendingReports}</p>
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-semibold">Completed</h3>
        <p className="text-2xl font-bold text-green-500">{completedReports}</p>
      </Card>
    </div>
  );
};