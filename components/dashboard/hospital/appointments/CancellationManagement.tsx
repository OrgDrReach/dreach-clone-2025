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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CancellationManagement: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">
            Cancellation Management
          </CardTitle>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="patient">Patient Request</SelectItem>
                <SelectItem value="doctor">Doctor Unavailable</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Original Schedule</TableHead>
              <TableHead>Cancellation Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Wilson</div>
                <div className="text-sm text-muted-foreground">ID: P1002</div>
              </TableCell>
              <TableCell>
                <div>April 24, 2024</div>
                <div className="text-sm text-muted-foreground">02:30 PM</div>
              </TableCell>
              <TableCell>Patient Request - Personal Emergency</TableCell>
              <TableCell>
                <Badge variant="secondary">Pending Refund</Badge>
              </TableCell>
              <TableCell>
                <Button variant="default" size="sm" className="mr-2">
                  Process Refund
                </Button>
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};