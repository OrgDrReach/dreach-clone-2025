"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PaymentNotification: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="email-notifications" />
          <Label htmlFor="email-notifications">Email Notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="sms-notifications" />
          <Label htmlFor="sms-notifications">SMS Notifications</Label>
        </div>
        <p className="text-sm text-gray-500">
          Receive notifications when payments are received or due.
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentNotification;
