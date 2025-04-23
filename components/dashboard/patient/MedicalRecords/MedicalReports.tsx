"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { formatDate } from "@/utils/dateFormatter";
import ReportStatus from "./ReportStatus";

interface MedicalReport {
  id: string;
  name: string;
  date: string;
  summary: string;
  downloadUrl: string;
  status: "Draft" | "Finalized" | "Rejected";
}

interface MedicalReportsProps {
  reports: MedicalReport[];
}

const MedicalReports: React.FC<MedicalReportsProps> = ({ reports }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-indigo-700 flex items-center">
          <FileText className="mr-2 h-6 w-6 text-indigo-500" />
          Medical Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{formatDate(report.date)}</TableCell>
                  <TableCell>
                    <div
                      className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                      title={report.summary}
                    >
                      {report.summary}
                    </div>
                  </TableCell>
                  <TableCell>
                    <ReportStatus status={report.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(report.downloadUrl, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MedicalReports;
