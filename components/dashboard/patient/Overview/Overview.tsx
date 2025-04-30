"use client";

import React from "react";
import {
  HealthStatus,
  UpcomingAppointments,
  MedicationList,
  LabResults,
  RecentNotes,
  AlertsNotifications,
  TreatmentPlanProgress,
} from ".";

const Overview: React.FC = () => {
  const appointments = [
    {
      id: "1",
      date: "2023-06-15",
      time: "10:00 AM",
      doctor: "Dr. Smith",
      specialty: "Cardiology",
    },
    {
      id: "2",
      date: "2023-06-20",
      time: "2:30 PM",
      doctor: "Dr. Johnson",
      specialty: "Neurology",
    },
  ];

  const medications = [
    {
      id: "1",
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      nextReminder: "Today, 8:00 PM",
    },
    {
      id: "2",
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Twice daily",
      nextReminder: "Tomorrow, 8:00 AM",
    },
    {
      id: "3",
      name: "Metformin",
      dosage: "500mg",
      frequency: "With meals",
      nextReminder: "Today, 12:00 PM",
    },
  ];

  const labResults = [
    { date: "2023-05-01", bloodPressure: 120, glucoseLevel: 95 },
    { date: "2023-05-15", bloodPressure: 118, glucoseLevel: 92 },
    { date: "2023-06-01", bloodPressure: 122, glucoseLevel: 98 },
    { date: "2023-06-15", bloodPressure: 116, glucoseLevel: 90 },
  ];

  const recentNotes: Array<{
    id: string;
    date: string;
    title: string;
    content: string;
    type: "visit" | "test" | "other";
  }> = [
    {
      id: "1",
      date: "2023-06-10",
      title: "Cardiology Checkup",
      content:
        "Patient shows improvement in cardiovascular health. Recommended to continue current medication.",
      type: "visit",
    },
    {
      id: "2",
      date: "2023-06-05",
      title: "Blood Test Results",
      content:
        "Cholesterol levels are within normal range. Vitamin D levels are low, recommended supplements.",
      type: "test",
    },
    {
      id: "3",
      date: "2023-05-28",
      title: "Physical Therapy Session",
      content:
        "Patient has shown progress in mobility. Suggested to continue exercises at home.",
      type: "visit",
    },
  ];

  const treatmentGoals = [
    { name: "Weight Loss", target: 10, current: 7 },
    { name: "Blood Pressure", target: 120, current: 130 },
    { name: "Exercise (hours/week)", target: 5, current: 3 },
    { name: "Medication Adherence", target: 100, current: 95 },
  ];

  const alerts: Array<{
    id: string;
    type: "medication" | "appointment" | "warning";
    message: string;
    date: string;
  }> = [
    {
      id: "1",
      type: "medication",
      message: "Remember to take your Aspirin at 8:00 PM",
      date: "2023-06-15",
    },
    {
      id: "2",
      type: "appointment",
      message: "Upcoming appointment with Dr. Smith on June 20th at 2:30 PM",
      date: "2023-06-18",
    },
    {
      id: "3",
      type: "warning",
      message:
        "Your blood pressure reading was higher than usual. Please monitor closely.",
      date: "2023-06-14",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <div className="lg:col-span-1">
          <HealthStatus status="good" />
        </div> */}
        <div className="lg:col-span-3">
          <UpcomingAppointments appointments={appointments} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MedicationList medications={medications} />
        <RecentNotes notes={recentNotes} />
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LabResults results={labResults} />
        <TreatmentPlanProgress goals={treatmentGoals} />
      </div> */}
      <div className="grid grid-cols-1 gap-6">
        <AlertsNotifications alerts={alerts} />
      </div>
    </div>
  );
};

export default Overview;
