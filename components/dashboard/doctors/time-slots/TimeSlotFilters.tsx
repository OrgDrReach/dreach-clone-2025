import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { DateRange } from 'react-day-picker';
import { DateRangePicker } from "@/components/ui/date-range-picker";

interface TimeSlotFiltersProps {
  appointmentType: string;
  status: string;
  dateRange: DateRange | undefined;
  onFilterChange: (filter: string, value: any) => void;
}

const TimeSlotFilters: React.FC<TimeSlotFiltersProps> = ({
  appointmentType,
  status,
  dateRange,
  onFilterChange
}) => {
  return (
    <Card className="p-4 space-y-4">
      <h3 className="font-semibold text-lg">Filters</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="appointmentType">Appointment Type</Label>
          <Select
            value={appointmentType}
            onValueChange={(value) => onFilterChange('appointmentType', value)}
          >
            <SelectTrigger id="appointmentType">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="virtual">Virtual</SelectItem>
              <SelectItem value="in-person">In-Person</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            value={status}
            onValueChange={(value) => onFilterChange('status', value)}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="booked">Booked</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Date Range</Label>
          <DateRangePicker
            value={dateRange}
            onChange={(range) => onFilterChange('dateRange', range)}
          />
        </div>
      </div>
    </Card>
  );
};

export default TimeSlotFilters;