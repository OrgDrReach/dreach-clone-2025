import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Heart } from 'lucide-react';

const ConsentManagement: React.FC = () => {
  const consentItems = [
    { label: 'Medication Reminders', icon: Bell },
    { label: 'Appointment Notifications', icon: Calendar },
    { label: 'Health Tips and Recommendations', icon: Heart },
  ];

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-secondary-foreground p-6">
        <CardTitle className="text-2xl text-white font-bold">Consent Management</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {consentItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted-hover transition-colors">
            <Label htmlFor={`consent-${index}`} className="text-lg flex items-center cursor-pointer">
              <item.icon className="mr-3 h-6 w-6" />
              {item.label}
            </Label>
            <Switch id={`consent-${index}`} />
          </div>
        ))}
        <Button className="w-full mt-6">Update Consent Preferences</Button>
      </CardContent>
    </Card>
  );
};

export default ConsentManagement;