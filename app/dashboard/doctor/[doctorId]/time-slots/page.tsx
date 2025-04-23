import React from 'react';
import TimeSlotHeader from '@/components/dashboard/doctors/time-slots/TimeSlotHeader';
import TimeSlotCalendar from '@/components/dashboard/doctors/time-slots/TimeSlotCalendar';
import TimeSlotGrid from '@/components/dashboard/doctors/time-slots/TimeSlotGrid';
import TimeSlotManagement from '@/components/dashboard/doctors/time-slots/TimeSlotManagement';
import TimeSlotFilters from '@/components/dashboard/doctors/time-slots/TimeSlotFilters';

const TimeSlotPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <TimeSlotHeader
        onViewChange={() => {}}
        onDateChange={() => {}}
        currentView="daily"
        currentDate={new Date()}
      />
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3 space-y-6">
            <TimeSlotCalendar
              selectedDate={new Date()}
              onDateSelect={() => {}}
              availabilityData={[]}
            />
            <TimeSlotManagement
              onAddSlot={() => {}}
              onBulkCreate={() => {}}
              onRecurringSetup={() => {}}
            />
          </div>
          
          <div className="md:col-span-7">
            <TimeSlotGrid
              slots={[]}
              onEditSlot={() => {}}
              onDeleteSlot={() => {}}
            />
          </div>
          
          <div className="md:col-span-2">
            <TimeSlotFilters
              appointmentType="all"
              status="all"
              dateRange={undefined}
              onFilterChange={() => {}}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TimeSlotPage;