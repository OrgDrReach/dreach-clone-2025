"use client";

import React from "react";
import { Overview } from "@/components/dashboard/patient/Overview";

const PatientDashboard: React.FC = () => {
	return (
		<main className="-mx-12">
			<Overview />
		</main>
	);
};

export default PatientDashboard;
