import React from "react";
import PatientStatistics from "./PatientStatistics";
import RevenueAnalytics from "./RevenueAnalytics";
import DepartmentPerformance from "./DepartmentPerformance";
import AdmissionTrends from "./AdmissionTrends";
import TreatmentSuccessRates from "./TreatmentSuccessRates";
import ResourceUtilization from "./ResourceUtilization";
import QualityMetrics from "./QualityMetrics";
import PatientSatisfactionScore from "./PatientSatisfactionScore";

const HospitalAnalytics: React.FC = () => {
	return (
		<div className="grid gap-6">
			{/* Top Level Stats */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<PatientStatistics />
				<RevenueAnalytics />
			</div>

			{/* Department and Admission Analysis */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<DepartmentPerformance />
				<AdmissionTrends />
			</div>

			{/* Treatment and Resource Analysis */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<TreatmentSuccessRates />
				<ResourceUtilization />
			</div>

			{/* Quality and Satisfaction Metrics */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<QualityMetrics />
				<PatientSatisfactionScore />
			</div>
		</div>
	);
};

export default HospitalAnalytics;
