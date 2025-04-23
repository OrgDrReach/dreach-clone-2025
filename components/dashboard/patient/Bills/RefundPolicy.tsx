"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RefundPolicy: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Refund Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Our refund policy for over-payments or cancellations is as follows:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Refunds are processed within 5-10 business days.</li>
          <li>
            Over-payments are automatically refunded to the original payment
            method.
          </li>
          <li>
            Cancellations must be made at least 24 hours before the scheduled
            appointment.
          </li>
          <li>
            For any questions regarding refunds, please contact our billing
            support team.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default RefundPolicy;
