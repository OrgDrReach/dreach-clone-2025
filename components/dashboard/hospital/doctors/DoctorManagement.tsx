"use client";

import React from "react";
import { DoctorsList } from "./DoctorsList";
import { DoctorSchedules } from "./DoctorSchedules";
import { SpecialtyDistribution } from "./SpecialtyDistribution";
import { PerformanceMetrics } from "./PerformanceMetrics";
import { OnCallRotation } from "./OnCallRotation";
import { DepartmentAssignments } from "./DepartmentAssignments";
import { QualificationVerification } from "./QualificationVerification";

export const DoctorManagement: React.FC = () => {
	return (
		<div className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
			{/* Row 1 - Doctors List */}
			<div className="w-full">
				<DoctorsList />
			</div>

			{/* Row 2 - Doctor Schedules */}
			<div className="w-full">
				<DoctorSchedules />
			</div>

			{/* Row 3 - Performance Metrics & Specialty Distribution */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
				<div className="w-full h-full">
					<PerformanceMetrics />
				</div>
				<div className="w-full h-full">
					<SpecialtyDistribution />
				</div>
			</div>

			{/* Row 4 - Department Assignments */}
			<div className="w-full">
				<DepartmentAssignments />
			</div>

			{/* Row 5 - On Call Rotation */}
			<div className="w-full">
				<OnCallRotation />
			</div>

			{/* Row 6 - Qualification Verification */}
			<div className="w-full">
				<QualificationVerification />
			</div>
		</div>
	);
};
