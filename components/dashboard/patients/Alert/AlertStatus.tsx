"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertOctagon } from "lucide-react";

interface AlertStatusProps {
  status: "Active" | "Resolved";
}

const AlertStatus: React.FC<AlertStatusProps> = ({ status }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertOctagon className="mr-2" />
          Alert Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant={status === "Active" ? "destructive" : "secondary"} className="text-lg">
          {status}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default AlertStatus;