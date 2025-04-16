"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { FaBell, FaPills, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

interface Alert {
  id: string;
  type: 'medication' | 'appointment' | 'warning';
  message: string;
  date: string;
}

interface AlertsNotificationsProps {
  alerts: Alert[];
}

const AlertsNotifications: React.FC<AlertsNotificationsProps> = ({ alerts }) => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'medication':
        return <FaPills className="w-5 h-5 text-blue-500" />;
      case 'appointment':
        return <FaCalendarAlt className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <FaExclamationTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'medication':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'appointment':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
<CardHeader className="bg-gradient-to-r from-[#387c98] to-[#23aee0] text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaBell className="w-6 h-6 mr-2" />
          Alerts & Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ScrollArea className="h-[300px] pr-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="mb-4 p-3 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className={`${getAlertColor(alert.type)} flex items-center`}>
                  {getAlertIcon(alert.type)}
                  <span className="ml-2 capitalize">{alert.type}</span>
                </Badge>
                <span className="text-sm text-gray-500">{alert.date}</span>
              </div>
              <p className="text-sm text-gray-700">{alert.message}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsNotifications;