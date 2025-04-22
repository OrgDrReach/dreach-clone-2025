"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Scissors } from 'lucide-react';
import { Surgery } from '@/types/health-history';

interface PreviousSurgeriesProps {
  surgeries: Surgery[];
}

const PreviousSurgeries: React.FC<PreviousSurgeriesProps> = ({ surgeries }) => {
  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Scissors className="w-5 h-5 mr-2" />
          Previous Surgeries
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedure</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Surgeon</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {surgeries.map((surgery) => (
                <TableRow key={surgery.id}>
                  <TableCell className="font-medium">{surgery.procedure}</TableCell>
                  <TableCell>{surgery.date.toLocaleDateString()}</TableCell>
                  <TableCell>Dr. {surgery.surgeon}</TableCell>
                  <TableCell>{surgery.facility}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{surgery.outcome}</Badge>
                    {surgery.complications && surgery.complications.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {surgery.complications.map((complication, index) => (
                          <Badge key={index} variant="destructive" className="text-xs">
                            {complication}
                          </Badge>
                        ))}
                      </div>
                    )}
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

export default PreviousSurgeries;
