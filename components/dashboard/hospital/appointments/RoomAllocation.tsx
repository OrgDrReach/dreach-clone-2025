"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Room {
  id: string;
  number: string;
  type: string;
  status: "occupied" | "available" | "cleaning" | "maintenance";
  currentPatient?: string;
  nextAvailable?: string;
}

export const RoomAllocation: React.FC = () => {
  const rooms: Room[] = [
    {
      id: "1",
      number: "101",
      type: "Examination",
      status: "occupied",
      currentPatient: "John Doe",
      nextAvailable: "10:30 AM",
    },
    {
      id: "2",
      number: "102",
      type: "Consultation",
      status: "available",
    },
    // Add more rooms as needed
  ];

  const getStatusBadge = (status: Room["status"]) => {
    const styles = {
      occupied: "bg-red-100 text-red-800",
      available: "bg-green-100 text-green-800",
      cleaning: "bg-yellow-100 text-yellow-800",
      maintenance: "bg-gray-100 text-gray-800",
    };
    return <Badge className={styles[status]}>{status}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Room Allocation</CardTitle>
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="examination">Examination</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">View Schedule</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Card key={room.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">Room {room.number}</h3>
                    <p className="text-sm text-muted-foreground">{room.type}</p>
                  </div>
                  {getStatusBadge(room.status)}
                </div>
                {room.currentPatient && (
                  <div className="mt-2">
                    <p className="text-sm">
                      Current: <span className="font-medium">{room.currentPatient}</span>
                    </p>
                    <p className="text-sm">
                      Next Available: {room.nextAvailable}
                    </p>
                  </div>
                )}
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};