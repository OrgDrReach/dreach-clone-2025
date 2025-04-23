"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, Key, Smartphone } from "lucide-react";

const SecuritySettings: React.FC = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const [biometricLogin, setBiometricLogin] = useState(false);

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
          <Shield className="mr-2" />
          Security Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <Smartphone className="text-emerald-500" />
            <Label
              htmlFor="two-factor"
              className="text-gray-700 dark:text-gray-300"
            >
              Two-Factor Authentication
            </Label>
          </div>
          <Switch
            id="two-factor"
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />
        </div>
        <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <div className="flex items-center space-x-3">
            <Key className="text-emerald-500" />
            <Label
              htmlFor="biometric"
              className="text-gray-700 dark:text-gray-300"
            >
              Biometric Login
            </Label>
          </div>
          <Switch
            id="biometric"
            checked={biometricLogin}
            onCheckedChange={setBiometricLogin}
          />
        </div>
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
          Change Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
