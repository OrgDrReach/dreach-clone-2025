import PatientVisitsChart from "@/components/Dashboard/doctors/dashboard/PatientAnalytics";
import PatientStatistics from "@/components/Dashboard/doctors/dashboard/PatientsStatistics";
import UpcomingAppointments from "@/components/Dashboard/doctors/dashboard/Upcoming";
import Updates from "@/components/Dashboard/doctors/dashboard/Updates";
import React from "react";

const Doctors: React.FC = () => {
  return (
    <main className="bg-[#c1efffbe] p-8">
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
