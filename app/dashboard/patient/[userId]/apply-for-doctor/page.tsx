import DoctorApplyForm from "@/components/dashboard/patient/apply-for-doctor/DoctorApplyForm";
import React from "react";

const DoctorsApplication: React.FC = () => {
	return (
		<main>
			<div className="text-white">
				<DoctorApplyForm />
			</div>
		</main>
	);
};

export default DoctorsApplication;
