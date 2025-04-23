"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InsuranceInformationProps {
  insuranceName: string;
  policyNumber: string;
}

const InsuranceInformation: React.FC<InsuranceInformationProps> = ({
  insuranceName,
  policyNumber,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Insurance Provider:</strong> {insuranceName}
        </p>
        <p>
          <strong>Policy Number:</strong> {policyNumber}
        </p>
      </CardContent>
    </Card>
  );
};

export default InsuranceInformation;
