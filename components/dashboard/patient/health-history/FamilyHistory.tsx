"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from 'lucide-react';
import { FamilyCondition } from '@/types/health-history';

interface FamilyHistoryProps {
  conditions: FamilyCondition[];
}

const FamilyHistory: React.FC<FamilyHistoryProps> = ({ conditions }) => {
  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Family Medical History
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition</TableHead>
                <TableHead>Relationship</TableHead>
                <TableHead>Age at Diagnosis</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conditions.map((condition) => (
                <TableRow key={condition.id}>
                  <TableCell className="font-medium">{condition.condition}</TableCell>
                  <TableCell>{condition.relationship}</TableCell>
                  <TableCell>{condition.diagnosedAge || 'Unknown'}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {condition.notes || 'No additional notes'}
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

export default FamilyHistory;