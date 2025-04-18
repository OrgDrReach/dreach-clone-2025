"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BillStatusProps {
  status: "Unpaid" | "Paid in full";
}

const BillStatus: React.FC<BillStatusProps> = ({ status }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bill Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge
          variant={status === "Paid in full" ? "secondary" : "destructive"}
        >
          {status}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default BillStatus;
