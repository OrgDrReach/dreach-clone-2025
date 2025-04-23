import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Report {
  id: string;
  patientName: string;
  date: string;
  type: string;
  status: 'pending' | 'completed';
}

interface ReportsListProps {
  reports: Report[];
}

export const ReportsList: React.FC<ReportsListProps> = ({ reports }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead  className={`text-white`}>Patient Name</TableHead>
          <TableHead  className={`text-white`}>Date</TableHead>
          <TableHead  className={`text-white`}>Type</TableHead>
          <TableHead  className={`text-white`}>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell  className={`text-white`}>{report.patientName}</TableCell>
            <TableCell  className={`text-white`}>{report.date}</TableCell>
            <TableCell  className={`text-white`}>{report.type}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  report.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {report.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};