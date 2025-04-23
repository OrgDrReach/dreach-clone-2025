import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'booked' | 'blocked';
  patientName?: string;
  appointmentType?: 'virtual' | 'in-person';
}

interface TimeSlotGridProps {
  slots: TimeSlot[];
  onEditSlot: (slot: TimeSlot) => void;
  onDeleteSlot: (slotId: string) => void;
}

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
  slots,
  onEditSlot,
  onDeleteSlot
}) => {
  return (
    <div className="grid gap-4">
      {slots.map((slot) => (
        <Card key={slot.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-lg font-medium">
                {slot.startTime} - {slot.endTime}
              </div>
              <Badge
                variant={
                  slot.status === 'available' 
                    ? 'success' 
                    : slot.status === 'booked' 
                    ? 'secondary' 
                    : 'destructive'
                }
              >
                {slot.status}
              </Badge>
              {slot.appointmentType && (
                <Badge variant="outline">
                  {slot.appointmentType}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEditSlot(slot)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDeleteSlot(slot.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {slot.patientName && (
            <div className="mt-2 text-sm text-gray-500">
              Patient: {slot.patientName}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default TimeSlotGrid;