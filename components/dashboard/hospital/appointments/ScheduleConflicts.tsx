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
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const ScheduleConflicts: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Schedule Conflicts</CardTitle>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Attention Required</AlertTitle>
          <AlertDescription>
            There are 3 scheduling conflicts that need your attention.
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Conflict Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge variant="destructive">Double Booking</Badge>
              </TableCell>
              <TableCell>
                <div className="font-medium">Dr. Smith - Room 101</div>
                <div className="text-sm text-muted-foreground">
                  2 patients scheduled for 10:00 AM
                </div>
              </TableCell>
              <TableCell>April 24, 2024 10:00 AM</TableCell>
              <TableCell>
                <Badge variant="outline">Unresolved</Badge>
              </TableCell>
              <TableCell>
                <Button variant="default" size="sm" className="mr-2">
                  Resolve
                </Button>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};