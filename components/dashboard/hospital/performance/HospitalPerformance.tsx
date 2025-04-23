import React from "react";
import OperationalEfficiency from "./OperationalEfficiency";
import WaitingTimeAnalysis from "./WaitingTimeAnalysis";
import StaffProductivity from "./StaffProductivity";
import ResourceEfficiency from "./ResourceEfficiency";
import QualityIndicators from "./QualityIndicators";
import ComplianceTracking from "./ComplianceTracking";
import CostManagement from "./CostManagement";

const HospitalPerformance: React.FC = () => {
	return (
		<div className="grid gap-6">
			{/* Operational and Waiting Time */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<OperationalEfficiency />
				<WaitingTimeAnalysis />
			</div>

			{/* Staff and Resource */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<StaffProductivity />
				<ResourceEfficiency />
			</div>

			{/* Quality and Compliance */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<QualityIndicators />
				<ComplianceTracking />
			</div>

			{/* Cost Management */}
			<div className="grid grid-cols-1 gap-6">
				<CostManagement />
			</div>
		</div>
	);
};

export default HospitalPerformance;
