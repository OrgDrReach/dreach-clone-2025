"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid, 
  Tooltip,
} from "recharts";
import { format } from "date-fns";
import { Card } from "@/components/ui";

interface Patient {
  id: number;
  appointmentHistory: Array<{ date: Date; type: string }>;
  communicationPreferences: { email: boolean; phone: boolean; chat: boolean };
  interactionData: { lastInteraction: Date };
}

interface Props {
  patientData: Array<Patient>;
  dateRange?: { start: Date; end: Date };
}

const PatientEngagementInsights: React.FC<Props> = ({
  patientData,
  dateRange,
}) => {
  const [engagementMetrics, setEngagementMetrics] = useState({
    totalEngagedPatients: 0,
    patientRetentionRate: 0,
    averageAppointmentFrequency: 0,
  });

  const [engagementTrends, setEngagementTrends] = useState<
    { date: string; engagement: number }[]
  >([]);

  useEffect(() => {
    const calculateEngagementMetrics = () => {
      const engagedPatients = patientData.filter(
        (patient) =>
          patient.interactionData.lastInteraction >= (dateRange?.start ?? 0),
      );
      const totalEngagedPatients = engagedPatients.length;
      const patientRetentionRate =
        (engagedPatients.filter(
          (patient) => patient.appointmentHistory.length > 1,
        ).length /
          totalEngagedPatients) *
        100;
      const averageAppointmentFrequency =
        engagedPatients.reduce(
          (acc, patient) => acc + patient.appointmentHistory.length,
          0,
        ) / totalEngagedPatients;

      setEngagementMetrics({
        totalEngagedPatients,
        patientRetentionRate,
        averageAppointmentFrequency,
      });
    };

    const calculateEngagementTrends = () => {
      const engagementTrendsData = patientData.reduce(
        (acc: { date: string; engagement: number }[], patient: Patient) => {
          const appointmentHistory = patient.appointmentHistory.filter(
            (appointment) =>
              appointment.date >= (dateRange?.start ?? 0) &&
              appointment.date <= (dateRange?.end ?? new Date()),
          );
          const engagementData = appointmentHistory.map((appointment) => ({
            date: format(appointment.date, "MMM yyyy"),
            engagement:
              appointment.type === "email"
                ? 1
                : appointment.type === "phone"
                  ? 2
                  : appointment.type === "chat"
                    ? 3
                    : 0,
          }));

          return [...acc, ...engagementData];
        },
        [],
      );

      setEngagementTrends(engagementTrendsData);
    };

    calculateEngagementMetrics();
    calculateEngagementTrends();
  }, [patientData, dateRange]);

  return (
    <main>
      <div>
        <div className="flex gap-2 mt-2 mb-2">
          <Card className="w-fit p-4">
            <div className="flex flex-col mb-8">
              <h2 className="text-2xl font-bold mb-4">Patient Engagement</h2>
              <p>
                Total Engaged Patients:{" "}
                <span className="font-bold">
                  {engagementMetrics.totalEngagedPatients}
                </span>
              </p>
              <p>
                Patient Retention Rate:{" "}
                <span className="font-bold">
                  {engagementMetrics.patientRetentionRate.toFixed(2)}%
                </span>
              </p>
              <p>
                Average Appointment Frequency:{" "}
                <span className="font-bold">
                  {engagementMetrics.averageAppointmentFrequency.toFixed(2)}
                </span>
              </p>
            </div>
          </Card>
          <Card className="w-fit">
            <div className="bg-slate-100 w-fit p-4 rounded-lg">
              <h2 className="text-2xl text-black font-bold mb-4">
                Engagement Trends
              </h2>
              <LineChart width={400} height={200} data={engagementTrends}>
                <Line type="monotone" dataKey="engagement" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
              </LineChart>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default PatientEngagementInsights;
