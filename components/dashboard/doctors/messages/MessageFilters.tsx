import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface FilterOption {
  value: string;
  label: string;
}

interface MessageFiltersProps {
  showFilters: boolean;
  onFilterChange?: (filterType: string, value: string) => void;
}

const MessageFilters: React.FC<MessageFiltersProps> = ({ showFilters, onFilterChange }) => {
  if (!showFilters) return null;

  const handleFilterChange = (filterType: string) => (value: string) => {
    onFilterChange?.(filterType, value);
  };

  return (
    <Card className="p-4 border-b">
      <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Filter Messages</h4>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="dateRange">Date Range</Label>
          <Select onValueChange={handleFilterChange("dateRange")}>
            <SelectTrigger id="dateRange">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="messageType">Message Type</Label>
          <Select onValueChange={handleFilterChange("messageType")}>
            <SelectTrigger id="messageType">
              <SelectValue placeholder="Select message type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
              <SelectItem value="video">Video</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="condition">Patient Condition</Label>
          <Select onValueChange={handleFilterChange("condition")}>
            <SelectTrigger id="condition">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Conditions</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select onValueChange={handleFilterChange("status")}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
              <SelectItem value="read">Read</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default MessageFilters;