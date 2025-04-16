import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AccountSettings,
  NotificationPreferences,
  LanguageSettings,
  TimeZoneSettings,
  SecuritySettings,
  DataSharingPreferences,
  ConsentManagement,
  DeviceSettings,
  HelpAndSupport
} from '@/components/dashboard/patients/Settings';

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full bg-[#125872] text-white grid-cols-3 lg:grid-cols-5 mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="help">Help</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <AccountSettings />
          <LanguageSettings />
          <TimeZoneSettings />
        </TabsContent>
        
        <TabsContent value="notifications">
          <NotificationPreferences />
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4">
          <DataSharingPreferences />
          <ConsentManagement />
          <DeviceSettings />
        </TabsContent>
        
        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>
        
        <TabsContent value="help">
          <HelpAndSupport />
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 text-center">
        <Button variant="destructive" size="lg">Log Out</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
