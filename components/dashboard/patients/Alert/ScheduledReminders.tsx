"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Clock, Plus } from "lucide-react";

interface Reminder {
  id: string;
  type: string;
  date: string;
}

interface ScheduledRemindersProps {
  reminders: Reminder[];
}

const ScheduledReminders: React.FC<ScheduledRemindersProps> = ({ reminders }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Clock className="mr-2" />
            Scheduled Reminders
          </span>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Reminder
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reminders.map((reminder) => (
              <TableRow key={reminder.id}>
                <TableCell>{reminder.type}</TableCell>
                <TableCell>{reminder.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ScheduledReminders;