"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Cog } from "lucide-react";

const AlertSettings: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Cog className="mr-2" />
          Alert Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-alerts">Email Alerts</Label>
          <Switch id="email-alerts" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms-alerts">SMS Alerts</Label>
          <Switch id="sms-alerts" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-alerts">Push Notifications</Label>
          <Switch id="push-alerts" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertSettings;