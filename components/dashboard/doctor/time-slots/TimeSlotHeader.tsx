import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

interface TimeSlotHeaderProps {
  onViewChange: (view: 'daily' | 'weekly' | 'monthly') => void;
  onDateChange: (direction: 'prev' | 'next') => void;
  currentView: 'daily' | 'weekly' | 'monthly';
  currentDate: Date;
}

const TimeSlotHeader: React.FC<TimeSlotHeaderProps> = ({
  onViewChange,
  onDateChange,
  currentView,
  currentDate
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-6 border-b">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Time Slots</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your availability and appointments</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <Toggle 
            pressed={currentView === 'daily'}
            onPressedChange={() => onViewChange('daily')}
            className="data-[state=on]:bg-white dark:data-[state=on]:bg-gray-700"
          >
            Day
          </Toggle>
          <Toggle 
            pressed={currentView === 'weekly'}
            onPressedChange={() => onViewChange('weekly')}
            className="data-[state=on]:bg-white dark:data-[state=on]:bg-gray-700"
          >
            Week
          </Toggle>
          <Toggle 
            pressed={currentView === 'monthly'}
            onPressedChange={() => onViewChange('monthly')}
            className="data-[state=on]:bg-white dark:data-[state=on]:bg-gray-700"
          >
            Month
          </Toggle>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onDateChange('prev')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
            <Calendar className="h-4 w-4" />
            <span>{currentDate.toLocaleDateString()}</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onDateChange('next')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotHeader;