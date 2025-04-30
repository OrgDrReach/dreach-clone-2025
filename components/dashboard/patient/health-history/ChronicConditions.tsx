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
import { HeartPulse } from "lucide-react";
import { ChronicCondition } from "@/types/health-history";

interface ChronicConditionsProps {
  conditions: ChronicCondition[];
}

const ChronicConditions: React.FC<ChronicConditionsProps> = ({
  conditions,
}) => {
  const getStatusColor = (status: ChronicCondition["status"]) => {
    switch (status) {
      case "controlled":
        return "bg-green-400 text-green-800";
      case "improving":
        return "bg-blue-400 text-blue-800";
      case "worsening":
        return "bg-red-400 text-red-800";
      case "uncontrolled":
        return "bg-yellow-400 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-violet-500 to-violet-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <HeartPulse className="w-5 h-5 mr-2" />
          Chronic Conditions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Medications</TableHead>
                <TableHead>Last Assessment</TableHead>
                <TableHead>Next Review</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conditions.map((condition) => (
                <TableRow key={condition.id}>
                  <TableCell className="font-medium">
                    {condition.name}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(condition.status)}>
                      {condition.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {condition.medications.map((medication, index) => (
                        <Badge key={index} variant="outline">
                          {medication}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    {condition.lastAssessment.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {condition.nextReview
                      ? condition.nextReview.toLocaleDateString()
                      : "Not Scheduled"}
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

export default ChronicConditions;
