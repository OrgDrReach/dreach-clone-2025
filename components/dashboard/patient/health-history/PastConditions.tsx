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
import { Activity } from "lucide-react";
import { Condition } from "@/types/health-history";

interface PastConditionsProps {
  conditions: Condition[];
}

const PastConditions: React.FC<PastConditionsProps> = ({ conditions }) => {
  const getStatusColor = (status: Condition["status"]) => {
    switch (status) {
      case "active":
        return "bg-red-400 text-red-800";
      case "resolved":
        return "bg-green-400 text-green-800";
      case "managed":
        return "bg-blue-400 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Past Medical Conditions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition</TableHead>
                <TableHead>Diagnosed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Physician</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conditions.map((condition) => (
                <TableRow key={condition.id}>
                  <TableCell className="font-medium">
                    {condition.name}
                  </TableCell>
                  <TableCell>
                    {condition.diagnosedDate.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(condition.status)}>
                      {condition.status}
                    </Badge>
                  </TableCell>
                  <TableCell>Dr. {condition.treatingPhysician}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PastConditions;
