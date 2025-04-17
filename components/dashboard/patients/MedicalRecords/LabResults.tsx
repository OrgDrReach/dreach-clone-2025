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
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LabResult {
  id: string;
  testName: string;
  date: string;
  result: string;
  unit: string;
  referenceRange: string;
  status: "Normal" | "Abnormal" | "Critical";
}

interface LabResultsProps {
  results: LabResult[];
}

const LabResults: React.FC<LabResultsProps> = ({ results }) => {
  const getStatusColor = (status: LabResult["status"]) => {
    switch (status) {
      case "Normal":
        return "bg-green-500 hover:bg-green-600";
      case "Abnormal":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "Critical":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-purple-700">
          Lab Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Test Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Reference Range</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">
                    {result.testName}
                  </TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{`${result.result} ${result.unit}`}</TableCell>
                  <TableCell>{result.referenceRange}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(result.status)}`}>
                      {result.status}
                    </Badge>
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

export default LabResults;
