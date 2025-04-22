import PatientVisitsChart from "@/components/dashboard/doctors/dashboard/PatientAnalytics";
import PatientStatistics from "@/components/dashboard/doctors/dashboard/PatientsStatistics";
import UpcomingAppointments from "@/components/dashboard/doctors/dashboard/Upcoming";
import Updates from "@/components/dashboard/doctors/dashboard/Updates";
import React from "react";

const Doctors: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-slate-600 dark:to-slate-900 rounded-lg p-4">
      <div>
        <Updates />
        <PatientStatistics />
        <PatientVisitsChart />
        <UpcomingAppointments />
      </div>
    </main>
  );
};

export default Doctors;
