import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
} from "@/components/ui";
import React from "react";

interface Appointment {
  date: string;
  time: string;
  patientName: string;
  appointmentType: string;
}

interface ScheduledAppointmentsProps {
  appointments: Appointment[];
}

const ScheduledAppointments: React.FC<ScheduledAppointmentsProps> = ({
  appointments,
}) => {
  if (!appointments || appointments.length === 0) {
    return <p>No scheduled appointments.</p>;
  }

  return (
    <main>
      <Card className="w-[450px] h-[250px] bg-[#E2E8F0]">
        <CardHeader>
          <CardTitle>Scheduled Appointments</CardTitle>
          <CardDescription>
            All of your scheduled appointments will display here!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea>
            <ul className="scheduled-appointments">
              {appointments.map((appointment, index) => (
                <li key={index} className="appointment">
                  <div className="appointment-info flex justify-between w-full">
                    <span className="mx-auto">
                      {appointment.date} - {appointment.time}
                    </span>
                    <span className="mx-auto">{appointment.patientName}</span>
                    <span className="mx-auto">
                      {appointment.appointmentType}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  );
};

export default ScheduledAppointments;
