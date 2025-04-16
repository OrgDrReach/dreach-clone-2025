"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Mail, MessageSquare } from 'lucide-react';

const ContactPreferences: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [frequency, setFrequency] = useState('weekly');

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 flex items-center">
          <Bell className="mr-2" />
          Contact Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <Checkbox 
            id="email" 
            checked={emailNotifications} 
            onCheckedChange={(checked) => setEmailNotifications(checked as boolean)}
          />
          <Label htmlFor="email" className="flex items-center text-gray-700 dark:text-gray-300">
            <Mail className="mr-2 text-yellow-500" />
            Email Notifications
          </Label>
        </div>
        <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <Checkbox 
            id="sms" 
            checked={smsNotifications} 
            onCheckedChange={(checked) => setSmsNotifications(checked as boolean)}
          />
          <Label htmlFor="sms" className="flex items-center text-gray-700 dark:text-gray-300">
            <MessageSquare className="mr-2 text-yellow-500" />
            SMS Notifications
          </Label>
        </div>
        <Select onValueChange={setFrequency} value={frequency}>
          <SelectTrigger className="w-full bg-white dark:bg-gray-700">
            <SelectValue placeholder="Notification Frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ContactPreferences;