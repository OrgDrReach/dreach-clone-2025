"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentScheduler } from "./AppointmentScheduler";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { PastAppointments } from "./PastAppointments";
import { WaitingList } from "./WaitingList";
import { RoomAllocation } from "./RoomAllocation";
import { ScheduleConflicts } from "./ScheduleConflicts";
import { CancellationManagement } from "./CancellationManagement";

const AppointmentManagement: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid grid-cols-4 lg:grid-cols-7 gap-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="scheduler">Scheduler</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="waiting">Waiting List</TabsTrigger>
              <TabsTrigger value="rooms">Room Allocation</TabsTrigger>
              <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
              <TabsTrigger value="cancellations">Cancellations</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <UpcomingAppointments />
            </TabsContent>
            <TabsContent value="scheduler">
              <AppointmentScheduler />
            </TabsContent>
            <TabsContent value="past">
              <PastAppointments />
            </TabsContent>
            <TabsContent value="waiting">
              <WaitingList />
            </TabsContent>
            <TabsContent value="rooms">
              <RoomAllocation />
            </TabsContent>
            <TabsContent value="conflicts">
              <ScheduleConflicts />
            </TabsContent>
            <TabsContent value="cancellations">
              <CancellationManagement />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AppointmentManagement;