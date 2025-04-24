"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialReports from "./FinancialReports";
import OperationalReports from "./OperationalReports";
import ClinicalReports from "./ClinicalReports";
import QualityReports from "./QualityReports";
import ComplianceReports from "./ComplianceReports";
import CustomReports from "./CustomReports";
import ReportGenerator from "./ReportGenerator";

const ReportManagement: React.FC = () => {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">Hospital Reports</CardTitle>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="financial" className="w-full">
						<TabsList className="grid grid-cols-7 w-full">
							<TabsTrigger value="financial">Financial</TabsTrigger>
							<TabsTrigger value="operational">Operational</TabsTrigger>
							<TabsTrigger value="clinical">Clinical</TabsTrigger>
							<TabsTrigger value="quality">Quality</TabsTrigger>
							<TabsTrigger value="compliance">Compliance</TabsTrigger>
							<TabsTrigger value="custom">Custom</TabsTrigger>
							<TabsTrigger value="generator">Generator</TabsTrigger>
						</TabsList>

						<TabsContent value="financial">
							<FinancialReports />
						</TabsContent>
						<TabsContent value="operational">
							<OperationalReports />
						</TabsContent>
						<TabsContent value="clinical">
							<ClinicalReports />
						</TabsContent>
						<TabsContent value="quality">
							<QualityReports />
						</TabsContent>
						<TabsContent value="compliance">
							<ComplianceReports />
						</TabsContent>
						<TabsContent value="custom">
							<CustomReports />
						</TabsContent>
						<TabsContent value="generator">
							<ReportGenerator />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
};

export default ReportManagement;
