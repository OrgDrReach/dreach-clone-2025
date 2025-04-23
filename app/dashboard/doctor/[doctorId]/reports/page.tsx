import React from 'react';
import { ReportsOverview } from '@/components/dashboard/doctors/reports/ReportsOverview';
import { ReportsList } from '@/components/dashboard/doctors/reports/ReportsList';

const ReportsPage: React.FC = () => {
  // Mock data - replace with actual API calls
  const overviewData = {
    totalReports: 150,
    pendingReports: 45,
    completedReports: 105,
  };

  const reports = [
    {
      id: '1',
      patientName: 'John Doe',
      date: '2025-04-23',
      type: 'Blood Test',
      status: 'completed' as const,
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      date: '2025-04-23',
      type: 'X-Ray',
      status: 'pending' as const,
    },
    // Add more mock data as needed
  ];

  return (
    <main className="p-6 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 dark:from-slate-600 dark:to-slate-900">
      <h1 className="text-2xl font-bold mb-6">Medical Reports</h1>
      <ReportsOverview {...overviewData} />
      <ReportsList reports={reports} />
    </main>
  );
};

export default ReportsPage;