import AppointmentManagement from "./AppointmentManagement";
import { AppointmentScheduler } from "./AppointmentScheduler";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { PastAppointments } from "./PastAppointments";
import { WaitingList } from "./WaitingList";
import { RoomAllocation } from "./RoomAllocation";
import { ScheduleConflicts } from "./ScheduleConflicts";
import { CancellationManagement } from "./CancellationManagement";

export {
	AppointmentManagement,
	AppointmentScheduler,
	UpcomingAppointments,
	PastAppointments,
	WaitingList,
	RoomAllocation,
	ScheduleConflicts,
	CancellationManagement,
};

// Also export types if needed
export type { Appointment } from "@/types/appointment.d.types";
