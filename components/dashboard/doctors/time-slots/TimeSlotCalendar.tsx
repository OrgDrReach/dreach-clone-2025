import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

interface TimeSlotCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  availabilityData: {
    date: Date;
    slots: {
      available: number;
      booked: number;
    };
  }[];
}

const TimeSlotCalendar: React.FC<TimeSlotCalendarProps> = ({
  selectedDate,
  onDateSelect,
  availabilityData
}) => {
  const modifiers = {
    available: availabilityData.map(d => d.date),
    booked: availabilityData
      .filter(d => d.slots.booked > 0)
      .map(d => d.date)
  };

  return (
    <Card className="p-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && onDateSelect(date)}
        modifiers={modifiers}
        modifiersStyles={{
          available: {
            backgroundColor: 'rgba(0, 131, 178, 0.1)'
          },
          booked: {
            border: '2px solid #0083b2'
          }
        }}
        className="rounded-md border"
      />
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-[rgba(0,131,178,0.1)] rounded-full" />
          <span>Available Slots</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 border-2 border-[#0083b2] rounded-full" />
          <span>Booked Slots</span>
        </div>
      </div>
    </Card>
  );
};

export default TimeSlotCalendar;