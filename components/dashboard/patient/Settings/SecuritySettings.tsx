import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, Key, Lock } from "lucide-react";

const SecuritySettings: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-[#125872] text-secondary-foreground p-4 -mt-6">
        <CardTitle className="text-2xl text-white font-bold flex items-center">
          <Shield className="mr-2" /> Security Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <Label htmlFor="two-factor" className="text-lg flex items-center">
            <Key className="mr-2" /> Two-Factor Authentication
          </Label>
          <Switch id="two-factor" />
        </div>
        <div className="p-3 bg-muted rounded-lg">
          <Label className="text-lg flex items-center mb-2">
            <Lock className="mr-2" /> Password Requirements
          </Label>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Contains at least one number</li>
            <li>Contains at least one special character</li>
          </ul>
        </div>
        <Button className="w-full">Update Security Settings</Button>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
