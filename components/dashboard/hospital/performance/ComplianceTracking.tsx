import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { Badge } from "@/components/ui";

type ComplianceStatus = "Compliant" | "Review Required";

interface ComplianceItem {
	name: string;
	status: ComplianceStatus;
	lastAudit: string;
}

const ComplianceTracking: React.FC = () => {
	const complianceItems: ComplianceItem[] = [
		{ name: "HIPAA Compliance", status: "Compliant", lastAudit: "2025-03-15" },
		{ name: "Medical Records", status: "Compliant", lastAudit: "2025-04-01" },
		{
			name: "Safety Protocols",
			status: "Review Required",
			lastAudit: "2025-02-28",
		},
		{
			name: "Staff Certifications",
			status: "Compliant",
			lastAudit: "2025-03-30",
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Compliance Tracking</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{complianceItems.map((item) => (
						<div
							key={item.name}
							className="flex items-center justify-between p-2 border rounded">
							<div>
								<h4 className="font-medium">{item.name}</h4>
								<p className="text-sm text-muted-foreground">
									Last audit: {item.lastAudit}
								</p>
							</div>
							<Badge
								variant={item.status === "Compliant" ? "success" : "warning"}>
								{item.status}
							</Badge>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ComplianceTracking;
