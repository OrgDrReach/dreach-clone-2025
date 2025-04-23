import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Calendar, Copy, RefreshCw } from "lucide-react";

interface TimeSlotManagementProps {
  onAddSlot: () => void;
  onBulkCreate: () => void;
  onRecurringSetup: () => void;
}

const TimeSlotManagement: React.FC<TimeSlotManagementProps> = ({
  onAddSlot,
  onBulkCreate,
  onRecurringSetup
}) => {
  return (
    <Card className="p-4 space-y-4">
      <h3 className="font-semibold text-lg">Slot Management</h3>
      
      <div className="space-y-2">
        <Button 
          onClick={onAddSlot}
          className="w-full justify-start"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Single Slot
        </Button>
        
        <Button 
          onClick={onBulkCreate}
          variant="outline"
          className="w-full justify-start"
        >
          <Copy className="mr-2 h-4 w-4" />
          Bulk Create Slots
        </Button>
        
        <Button
          onClick={onRecurringSetup}
          variant="outline"
          className="w-full justify-start"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Setup Recurring Schedule
        </Button>
      </div>
      
      <div className="pt-4 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Need help managing your schedule?
          <a href="#" className="text-blue-500 hover:underline ml-1">
            View Guide
          </a>
        </p>
      </div>
    </Card>
  );
};

export default TimeSlotManagement;