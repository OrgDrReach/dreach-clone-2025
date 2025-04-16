"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BillItem {
  description: string;
  charges: number;
  payments: number;
}

interface BillStatementProps {
  items: BillItem[];
}

const BillStatement: React.FC<BillStatementProps> = ({ items }) => {
  const totalCharges = items.reduce((sum, item) => sum + item.charges, 0);
  const totalPayments = items.reduce((sum, item) => sum + item.payments, 0);
  const balanceDue = totalCharges - totalPayments;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bill Statement</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Charges</TableHead>
              <TableHead>Payments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell>${item.charges.toFixed(2)}</TableCell>
                <TableCell>${item.payments.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="font-bold">Total</TableCell>
              <TableCell className="font-bold">${totalCharges.toFixed(2)}</TableCell>
              <TableCell className="font-bold">${totalPayments.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mt-4 text-right">
          <p className="text-lg font-bold">Balance Due: ${balanceDue.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillStatement;