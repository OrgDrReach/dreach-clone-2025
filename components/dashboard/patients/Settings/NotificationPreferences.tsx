import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NotificationPreferences: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-[#125872] text-primary-foreground">
        <CardTitle className="text-2xl text-white font-bold">
          Notification Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {["Email Notifications", "SMS Notifications"].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-muted rounded-lg"
          >
            <Label htmlFor={`notification-${index}`} className="text-lg">
              {item}
            </Label>
            <Switch id={`notification-${index}`} />
          </div>
        ))}
        <div className="space-y-2">
          <Label htmlFor="frequency" className="text-lg">
            Notification Frequency
          </Label>
          <Select>
            <SelectTrigger id="frequency" className="w-full">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationPreferences;
