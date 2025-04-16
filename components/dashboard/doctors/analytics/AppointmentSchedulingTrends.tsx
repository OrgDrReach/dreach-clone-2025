"use client";

import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Table, TableHead, TableRow, TableCell } from "@mui/material";
import { Card } from "@/components/ui";

interface Appointment {
  date: string;
  time: string;
  status: string;
  patient_name: string;
}

interface Trends {
  total_appointments: number;
  cancelled_appointments: number;
  no_show_appointments: number;
}

interface Props {
  className?: string;
  appointments: Appointment[];
}

const AppointmentSchedulingTrends: React.FC<Props> = ({
  appointments,
  className,
}) => {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState<Trends>({
    total_appointments: 0,
    cancelled_appointments: 0,
    no_show_appointments: 0,
  });
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    if (appointments.length > 0) {
      const today = new Date();
      const todayAppointments = appointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        return (
          appointmentDate.toLocaleDateString() === today.toLocaleDateString()
        );
      });
      const totalAppointments = todayAppointments.length;
      const cancelledAppointments = todayAppointments.filter(
        (appointment) => appointment.status === "cancelled",
      ).length;
      const noShowAppointments = todayAppointments.filter(
        (appointment) => appointment.status === "no-show",
      ).length;
      setTrends({
        total_appointments: totalAppointments,
        cancelled_appointments: cancelledAppointments,
        no_show_appointments: noShowAppointments,
      });
      setLoading(false);
    }
  }, [appointments]);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const data = [
    {
      name: "Total Appointments",
      value: trends.total_appointments,
    },
    {
      name: "Cancelled Appointments",
      value: trends.cancelled_appointments,
    },
    {
      name: "No-Show Appointments",
      value: trends.no_show_appointments,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <div className="">
          {/* <Card className='w-fit bg-slate-100 flex items-center justify-center'> */}
          <div className="w-fit bg-slate-100 flex items-center justify-center p-4 rounded-lg">
            <BarChart width={500} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          {/* </Card> */}
        </div>
      )}
    </div>
  );
};

const PatientAppointmentHistory: React.FC<Props> = ({
  appointments,
  className,
}) => {
  return (
    <main>
      <div className="mt-2">
        <Card className="p-2 bg-slate-100">
          <Table className="">
            <TableHead className="">
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Patient Name</TableCell>
              </TableRow>
            </TableHead>
            {appointments.map((appointment) => (
              <TableRow key={appointment.date}>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>{appointment.patient_name}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Card>
      </div>
    </main>
  );
};

export { AppointmentSchedulingTrends, PatientAppointmentHistory };
