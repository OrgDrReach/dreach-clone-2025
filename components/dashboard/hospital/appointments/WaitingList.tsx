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

export const WaitingList: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Waiting List</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">Current Wait: 25 mins</Badge>
            <Button variant="outline">Refresh</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Wait Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge variant="outline">A001</Badge>
              </TableCell>
              <TableCell>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Priority: High</div>
              </TableCell>
              <TableCell>Cardiology</TableCell>
              <TableCell>15 mins</TableCell>
              <TableCell>
                <Badge className="bg-yellow-100 text-yellow-800">Waiting</Badge>
              </TableCell>
              <TableCell>
                <Button variant="default" size="sm" className="mr-2">
                  Call
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