"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle } from 'lucide-react';
import { Allergy } from '@/types/health-history';

interface AllergiesLogProps {
  allergies: Allergy[];
}

const AllergiesLog: React.FC<AllergiesLogProps> = ({ allergies }) => {
  const getSeverityColor = (severity: Allergy['severity']) => {
    switch (severity) {
      case 'severe':
        return 'bg-red-100 text-red-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'mild':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          Allergies & Reactions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Allergen</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Reactions</TableHead>
                <TableHead>Diagnosed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allergies.map((allergy) => (
                <TableRow key={allergy.id}>
                  <TableCell className="font-medium">{allergy.allergen}</TableCell>
                  <TableCell>
                    <Badge className={getSeverityColor(allergy.severity)}>
                      {allergy.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {allergy.reactions.map((reaction, index) => (
                        <Badge key={index} variant="outline">
                          {reaction}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{allergy.diagnosedDate.toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AllergiesLog;