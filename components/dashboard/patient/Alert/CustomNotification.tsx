"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const CustomNotification: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <PlusCircle className="mr-2" />
          Create Custom Notification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Notification Name" />
        <Textarea placeholder="Notification Description" />
        <Button className="w-full">Create Notification</Button>
      </CardContent>
    </Card>
  );
};

export default CustomNotification;
