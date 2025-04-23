"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Syringe } from 'lucide-react';
import { Vaccination } from '@/types/health-history';

interface VaccinationRecordsProps {
  vaccinations: Vaccination[];
}

const VaccinationRecords: React.FC<VaccinationRecordsProps> = ({ vaccinations }) => {
  return (
    <Card className="overflow-hidden border-gray-500 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Syringe className="w-5 h-5 mr-2" />
          Vaccination Records
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vaccine</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Next Due</TableHead>
                <TableHead>Facility</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vaccinations.map((vaccination) => (
                <TableRow key={vaccination.id}>
                  <TableCell className="font-medium">{vaccination.name}</TableCell>
                  <TableCell>{vaccination.date.toLocaleDateString()}</TableCell>
                  <TableCell>
                    {vaccination.dueDate ? 
                      vaccination.dueDate.toLocaleDateString() : 
                      'Not Required'}
                  </TableCell>
                  <TableCell>{vaccination.facility}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default VaccinationRecords;