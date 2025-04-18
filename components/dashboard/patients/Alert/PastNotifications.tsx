"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { History } from "lucide-react";

interface PastNotification {
  id: string;
  name: string;
  date: string;
  description: string;
}

interface PastNotificationsProps {
  notifications: PastNotification[];
}

const PastNotifications: React.FC<PastNotificationsProps> = ({
  notifications,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <History className="mr-2" />
          Past Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="mb-4 p-3 bg-gray-100 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{notification.name}</h3>
                <Badge variant="secondary">{notification.date}</Badge>
              </div>
              <p className="text-sm text-gray-600">
                {notification.description}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PastNotifications;
