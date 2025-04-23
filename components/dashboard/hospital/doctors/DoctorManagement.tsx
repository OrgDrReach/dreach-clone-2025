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
		<div className="space-y-6">
			{/* Top row - Quick overview */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">
					<DoctorsList />
				</div>
				<div>
					<SpecialtyDistribution />
				</div>
			</div>

			{/* Second row - Schedules and Assignments */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<DoctorSchedules />
				<DepartmentAssignments />
			</div>

			{/* Third row - Performance and On-Call */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">
					<PerformanceMetrics />
				</div>
				<OnCallRotation />
			</div>

			{/* Bottom row - Verification */}
			<div className="grid grid-cols-1 gap-6">
				<QualificationVerification />
			</div>
		</div>
	);
};
