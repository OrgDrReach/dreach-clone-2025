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
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div className="lg:col-span-2">
				<DoctorsList />
			</div>
			<div className="space-y-6">
				<DoctorSchedules />
				<SpecialtyDistribution />
			</div>
			<div className="lg:col-span-2">
				<PerformanceMetrics />
			</div>
			<div>
				<OnCallRotation />
			</div>
			<div>
				<DepartmentAssignments />
			</div>
			<div className="lg:col-span-3">
				<QualificationVerification />
			</div>
		</div>
	);
};
