import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, Lock } from 'lucide-react';

const AccountSettings: React.FC = () => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-primary-foreground p-6">
        <CardTitle className="text-2xl  font-bold flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-white">
            <AvatarImage src="/avatar-placeholder.png" alt="Profile picture" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          Account Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="relative group">
          <Avatar className="h-32 w-32 mx-auto group-hover:opacity-75 transition-opacity">
            <AvatarImage src="/avatar-placeholder.png" alt="Profile picture" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="absolute inset-0 m-auto w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg flex items-center">
            <Mail className="mr-2 h-5 w-5" /> Email Address
          </Label>
          <Input id="email" type="email" placeholder="your.email@example.com" className="max-w-md" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-lg flex items-center">
            <Lock className="mr-2 h-5 w-5" /> New Password
          </Label>
          <Input id="password" type="password" className="max-w-md" />
        </div>
        <div className="flex space-x-4 pt-4">
          <Button variant="default" className="flex-1">Update Email</Button>
          <Button variant="outline" className="flex-1">Reset Password</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;