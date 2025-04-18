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
import { AlertTriangle } from "lucide-react";

interface Allergy {
  id: string;
  name: string;
  type: "Food" | "Medication" | "Environmental" | "Other";
  severity: "Mild" | "Moderate" | "Severe";
  reaction?: string;
}

interface AllergyListProps {
  allergies: Allergy[];
}

const AllergyList: React.FC<AllergyListProps> = ({ allergies }) => {
  const getSeverityColor = (severity: Allergy["severity"]) => {
    switch (severity) {
      case "Mild":
        return "bg-yellow-100 text-yellow-800";
      case "Moderate":
        return "bg-orange-100 text-orange-800";
      case "Severe":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: Allergy["type"]) => {
    switch (type) {
      case "Food":
        return "bg-green-100 text-green-800";
      case "Medication":
        return "bg-blue-100 text-blue-800";
      case "Environmental":
        return "bg-purple-100 text-purple-800";
      case "Other":
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-red-50 to-orange-50 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-red-700 flex items-center">
          <AlertTriangle className="mr-2 h-6 w-6 text-red-500" />
          Allergy List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Allergen</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Reaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allergies.map((allergy) => (
                <TableRow key={allergy.id}>
                  <TableCell className="font-medium">{allergy.name}</TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(allergy.type)}>
                      {allergy.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getSeverityColor(allergy.severity)}>
                      {allergy.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{allergy.reaction || "Not specified"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AllergyList;
