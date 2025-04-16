import UpcomingAppointments from "@/components/dashboard/doctors/dashboard/Upcoming";
import PatientsList from "@/components/dashboard/doctors/patients/PatientsDetails";
import React from "react";

const Patients: React.FC = () => {
  return (
    <main className="bg-[#c5efff]">
      <div className=" mx-auto p-6">
        <UpcomingAppointments />
      </div>
      <PatientsList />
    </main>
  );
};

export default Patients;
