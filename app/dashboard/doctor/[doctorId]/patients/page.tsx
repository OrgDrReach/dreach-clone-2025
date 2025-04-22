import UpcomingAppointments from "@/components/dashboard/doctors/dashboard/Upcoming";
import PatientsList from "@/components/dashboard/doctors/patients/PatientsDetails";
import React from "react";

const Patients: React.FC = () => {
	return (
		<main className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-slate-600 dark:to-slate-900 p-6 rounded-lg">
			<div className="mx-auto p-6">
				<UpcomingAppointments />
			</div>
			<PatientsList />
		</main>
	);
};

export default Patients;
