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

interface PendingBill {
  serviceName: string;
  serviceDate: string;
  amountDue: number;
}

interface PendingBillsProps {
  bills: PendingBill[];
}

const PendingBills: React.FC<PendingBillsProps> = ({ bills }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill, index) => (
              <TableRow key={index}>
                <TableCell>{bill.serviceName}</TableCell>
                <TableCell>{bill.serviceDate}</TableCell>
                <TableCell>${bill.amountDue.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PendingBills;
