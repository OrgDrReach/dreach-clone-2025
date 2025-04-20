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
import { Eye } from "lucide-react";

interface ImagingStudy {
  id: string;
  studyName: string;
  date: string;
  findings: string;
  imageUrl: string;
}

interface ImagingResultsProps {
  studies: ImagingStudy[];
}

const ImagingResults: React.FC<ImagingResultsProps> = ({ studies }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-teal-700">
          Imaging Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Study Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Findings</TableHead>
                <TableHead className="text-right">View Image</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studies.map((study) => (
                <TableRow key={study.id}>
                  <TableCell className="font-medium">
                    {study.studyName}
                  </TableCell>
                  <TableCell>{study.date}</TableCell>
                  <TableCell>
                    <div
                      className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                      title={study.findings}
                    >
                      {study.findings}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(study.imageUrl, "_blank")}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
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

export default ImagingResults;
